import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { PrismaClient } from "@prisma/client";
import { resolveImagePathForSeed } from "../lib/uploadLocalMedia";
import { asParagraphs } from "../lib/paragraphs";
import { siteContentFromStaticModule } from "../lib/siteContent/fromStatic";
import { migrateSiteContentImages } from "../lib/siteContent/migrateImages";
import { SITE_CONTENT_ID } from "../lib/siteContent/schema";

const prisma = new PrismaClient();

/** Prisma treats `notIn: []` as "delete nothing", so an empty brand list must delete all. */
async function deleteSlugsNotIn(
  model: "service" | "project" | "category",
  slugs: string[]
) {
  if (slugs.length === 0) {
    return prisma[model].deleteMany();
  }
  return prisma[model].deleteMany({
    where: { slug: { notIn: slugs } },
  });
}

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

async function seedBrand(mod: Record<string, unknown>, brand: string) {
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
      projectsImageGallery.map((img) => resolveImagePathForSeed(img))
    );
    galleryPaths = uploaded.filter((p): p is string => Boolean(p));
  }

  if (servicesData) {
    const keepSlugs = Object.keys(servicesData);
    const removedServices = await deleteSlugsNotIn("service", keepSlugs);
    if (removedServices.count) {
      console.log(
        `[seed] Removed ${removedServices.count} services not in data/${brand}`
      );
    }

    let sortOrder = 0;
    for (const [slug, service] of Object.entries(servicesData)) {
      const image = service.image
        ? await resolveImagePathForSeed(service.image)
        : null;
      const gallery = await Promise.all(
        (service.images ?? []).map((img) => resolveImagePathForSeed(img))
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

  if (categoriesData) {
    const removedCategories = await deleteSlugsNotIn(
      "category",
      categoriesData.map((cat) => cat.slug)
    );
    if (removedCategories.count) {
      console.log(
        `[seed] Removed ${removedCategories.count} categories not in data/${brand}`
      );
    }
  }

  if (projectsData) {
    const keepProjectSlugs = Object.keys(projectsData);
    const removedProjects = await deleteSlugsNotIn("project", keepProjectSlugs);
    if (removedProjects.count) {
      console.log(
        `[seed] Removed ${removedProjects.count} projects not in data/${brand}`
      );
    }

    let sortOrder = 0;
    for (const [slug, project] of Object.entries(projectsData)) {
      const image = await resolveImagePathForSeed(project.image);

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

  // One site document for this brand, including hero2.slides. A failure here
  // stops the seed instead of leaving the previous brand's content in place.
  const built = siteContentFromStaticModule(mod);
  const withUploads = await migrateSiteContentImages(built);
  await prisma.siteContent.upsert({
    where: { id: SITE_CONTENT_ID },
    create: { id: SITE_CONTENT_ID, data: withUploads },
    update: { data: withUploads },
  });
  console.log(
    `[seed] SiteContent upserted (${withUploads.hero2.slides.length} hero slides)`
  );
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

  console.log(
    `[seed] Seeding only data/${brand}. Other data folders are not loaded.`
  );

  const modulePath = pathToFileURL(indexPath).href;
  const mod = (await import(modulePath)) as Record<string, unknown>;

  if (!mod.servicesData && !mod.projectsData && !mod.categoriesData) {
    // Still allow site-content-only brands if they export identity fields
    if (!mod.siteName && !mod.landingPage) {
      throw new Error(
        `[seed] No servicesData/projectsData/categoriesData/site content found in data/${brand}`
      );
    }
  }

  await seedBrand(mod, brand);

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
