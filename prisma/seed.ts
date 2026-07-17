import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { PrismaClient } from "@prisma/client";
import { resolveImagePathForSeed } from "../lib/uploadLocalMedia";

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

type StaticService = {
  label: string;
  title: string;
  description: string;
  content: string;
  image: string;
  typeOfSolutions: { headings: string; types: string[] };
  benefitsOFChoosing: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  images?: string[];
};

type StaticProject = {
  label: string;
  title: string;
  description: string;
  content: string;
  image: string;
  location: string;
  duration: string;
  materials: string[];
};

async function seedBrand(site: string, mod: Record<string, unknown>) {
  const servicesData = mod.servicesData as
    | Record<string, StaticService>
    | undefined;
  const projectsData = mod.projectsData as
    | Record<string, StaticProject>
    | undefined;
  const projectsImageGallery = (mod.projectsImageGallery as string[]) ?? [];

  let galleryPaths: string[] = [];
  if (projectsImageGallery.length) {
    const uploaded = await Promise.all(
      projectsImageGallery.map((img) => resolveImagePathForSeed(img, site))
    );
    galleryPaths = uploaded.filter((p): p is string => Boolean(p));
  }

  if (servicesData) {
    let sortOrder = 0;
    for (const [slug, service] of Object.entries(servicesData)) {
      const image = await resolveImagePathForSeed(service.image, site);
      const gallery = await Promise.all(
        (service.images ?? []).map((img) => resolveImagePathForSeed(img, site))
      );

      await prisma.service.upsert({
        where: { site_slug: { site, slug } },
        create: {
          site,
          slug,
          label: service.label,
          title: service.title,
          description: service.description,
          content: service.content,
          image,
          typeOfSolutions: service.typeOfSolutions,
          benefitsOFChoosing: service.benefitsOFChoosing,
          faqs: service.faqs,
          images: gallery.filter((p): p is string => Boolean(p)),
          sortOrder: sortOrder++,
        },
        update: {
          label: service.label,
          title: service.title,
          description: service.description,
          content: service.content,
          image,
          typeOfSolutions: service.typeOfSolutions,
          benefitsOFChoosing: service.benefitsOFChoosing,
          faqs: service.faqs,
          images: gallery.filter((p): p is string => Boolean(p)),
          sortOrder: sortOrder - 1,
        },
      });

      console.log(`[seed] Service upserted: ${site}/${slug}`);
    }
  }

  if (projectsData) {
    let sortOrder = 0;
    for (const [slug, project] of Object.entries(projectsData)) {
      const image = await resolveImagePathForSeed(project.image, site);

      await prisma.project.upsert({
        where: { site_slug: { site, slug } },
        create: {
          site,
          slug,
          label: project.label,
          title: project.title,
          description: project.description,
          content: project.content,
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
          content: project.content,
          image,
          location: project.location,
          duration: project.duration,
          materials: project.materials,
          images: galleryPaths,
          sortOrder: sortOrder - 1,
        },
      });

      console.log(`[seed] Project upserted: ${site}/${slug}`);
    }
  }
}

async function main() {
  loadEnvFile();

  const dataDir = path.join(process.cwd(), "data");
  const brands = fs
    .readdirSync(dataDir)
    .filter((name) => {
      const full = path.join(dataDir, name);
      return (
        fs.statSync(full).isDirectory() &&
        fs.existsSync(path.join(full, "index.ts"))
      );
    });

  console.log(`[seed] Found ${brands.length} brand folders`);

  for (const brand of brands) {
    const modulePath = pathToFileURL(path.join(dataDir, brand, "index.ts")).href;
    const mod = (await import(modulePath)) as Record<string, unknown>;

    if (!mod.servicesData && !mod.projectsData) {
      console.log(`[seed] Skipping ${brand} (no services/projects data)`);
      continue;
    }

    console.log(`[seed] Seeding brand: ${brand}`);
    await seedBrand(brand, mod);
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
