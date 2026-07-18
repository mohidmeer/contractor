import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { PrismaClient } from "@prisma/client";
import { resolveImagePathForSeed } from "../lib/uploadLocalMedia";
import { asParagraphs } from "../lib/paragraphs";

const prisma = new PrismaClient();

function loadEnvFile() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

type StaticCategory = {
  slug: string;
  name: string;
  description?: string | null;
  sortOrder?: number;
};

type StaticService = {
  label: string;
  title: string;
  description: string;
  content: string | string[];
  image?: string;
  categorySlug?: string;
  typeOfSolutions: { headings: string; types: string[] };
  benefitsOFChoosing: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  images?: string[];
};

type StaticProject = {
  label: string;
  title: string;
  description: string;
  content: string | string[];
  image: string;
  location: string;
  duration: string;
  materials: string[];
};

async function seedBrand(brand: string, mod: Record<string, unknown>) {
  const categoriesData = mod.categoriesData as StaticCategory[] | undefined;
  const servicesData = mod.servicesData as
    | Record<string, StaticService>
    | undefined;
  const projectsData = mod.projectsData as
    | Record<string, StaticProject>
    | undefined;
  const projectsImageGallery = (mod.projectsImageGallery as string[]) ?? [];

  const categoryIdBySlug = new Map<string, number>();

  if (categoriesData?.length) {
    let sortOrder = 0;
    for (const cat of categoriesData) {
      const row = await prisma.category.upsert({
        where: { slug: cat.slug },
        create: {
          slug: cat.slug,
          name: cat.name,
          description: cat.description ?? null,
          sortOrder: cat.sortOrder ?? sortOrder,
        },
        update: {
          name: cat.name,
          description: cat.description ?? null,
          sortOrder: cat.sortOrder ?? sortOrder,
        },
      });
      categoryIdBySlug.set(cat.slug, row.id);
      sortOrder++;
      console.log(`[seed] Category upserted: ${cat.slug}`);
    }
  }

  let galleryPaths: string[] = [];
  if (projectsImageGallery.length) {
    const uploaded = await Promise.all(
      projectsImageGallery.map((img) => resolveImagePathForSeed(img, brand))
    );
    galleryPaths = uploaded.filter((p): p is string => Boolean(p));
  }

  if (servicesData) {
    const keepSlugs = Object.keys(servicesData);
    await prisma.service.deleteMany({
      where: { slug: { notIn: keepSlugs } },
    });

    let sortOrder = 0;
    for (const [slug, service] of Object.entries(servicesData)) {
      const image = service.image
        ? await resolveImagePathForSeed(service.image, brand)
        : null;
      const gallery = await Promise.all(
        (service.images ?? []).map((img) => resolveImagePathForSeed(img, brand))
      );

      const categoryId = service.categorySlug
        ? (categoryIdBySlug.get(service.categorySlug) ?? null)
        : null;

      await prisma.service.upsert({
        where: { slug },
        create: {
          slug,
          label: service.label,
          title: service.title,
          description: service.description,
          content: asParagraphs(service.content),
          image,
          typeOfSolutions: service.typeOfSolutions,
          benefitsOFChoosing: service.benefitsOFChoosing,
          faqs: service.faqs,
          images: gallery.filter((p): p is string => Boolean(p)),
          sortOrder: sortOrder++,
          categoryId,
        },
        update: {
          label: service.label,
          title: service.title,
          description: service.description,
          content: asParagraphs(service.content),
          image,
          typeOfSolutions: service.typeOfSolutions,
          benefitsOFChoosing: service.benefitsOFChoosing,
          faqs: service.faqs,
          images: gallery.filter((p): p is string => Boolean(p)),
          sortOrder: sortOrder - 1,
          categoryId,
        },
      });

      console.log(`[seed] Service upserted: ${slug}`);
    }
  }

  if (projectsData) {
    let sortOrder = 0;
    for (const [slug, project] of Object.entries(projectsData)) {
      const image = await resolveImagePathForSeed(project.image, brand);

      await prisma.project.upsert({
        where: { slug },
        create: {
          slug,
          label: project.label,
          title: project.title,
          description: project.description,
          content: asParagraphs(project.content),
          image,
          location: project.location,
          duration: project.duration,
          materials: project.materials,
          images: galleryPaths,
          sortOrder: sortOrder++,
        },
        update: {
          label: project.label,
          title: project.title,
          description: project.description,
          content: asParagraphs(project.content),
          image,
          location: project.location,
          duration: project.duration,
          materials: project.materials,
          images: galleryPaths,
          sortOrder: sortOrder - 1,
        },
      });

      console.log(`[seed] Project upserted: ${slug}`);
    }
  }
}

async function main() {
  loadEnvFile();

  const brand = process.env.DATA?.trim();
  if (!brand) {
    throw new Error(
      "[seed] DATA env variable is required (e.g. DATA=costal). Seed only runs for that brand."
    );
  }

  const brandDir = path.join(process.cwd(), "data", brand);
  const indexPath = path.join(brandDir, "index.ts");

  if (!fs.existsSync(indexPath)) {
    throw new Error(
      `[seed] Brand folder not found for DATA="${brand}" (expected ${indexPath})`
    );
  }

  console.log(`[seed] Seeding brand from DATA=${brand}`);

  const modulePath = pathToFileURL(indexPath).href;
  const mod = (await import(modulePath)) as Record<string, unknown>;

  if (!mod.servicesData && !mod.projectsData && !mod.categoriesData) {
    throw new Error(
      `[seed] No servicesData/projectsData/categoriesData found in data/${brand}`
    );
  }

  await seedBrand(brand, mod);

  // Bust Next.js data cache so nav / listings pick up seeded rows
  try {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
      "http://localhost:3000";
    const user = process.env.BASIC_AUTH_USER;
    const pass = process.env.BASIC_AUTH_PASS;
    if (user && pass) {
      const res = await fetch(`${base}/api/admin/revalidate`, {
        method: "POST",
        headers: {
          Authorization:
            "Basic " + Buffer.from(`${user}:${pass}`).toString("base64"),
        },
      });
      if (res.ok) {
        console.log("[seed] Cache revalidated");
      } else {
        console.warn(
          `[seed] Cache revalidate returned ${res.status} — restart next dev if nav looks stale`
        );
      }
    }
  } catch {
    console.warn(
      "[seed] Could not reach revalidate endpoint — restart next dev if nav looks stale"
    );
  }

  console.log("[seed] Done.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
