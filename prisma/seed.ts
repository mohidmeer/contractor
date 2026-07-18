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

async function seedBrand(brand: string, mod: Record<string, unknown>) {
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
      projectsImageGallery.map((img) => resolveImagePathForSeed(img, brand))
    );
    galleryPaths = uploaded.filter((p): p is string => Boolean(p));
  }

  if (servicesData) {
    let sortOrder = 0;
    for (const [slug, service] of Object.entries(servicesData)) {
      const image = await resolveImagePathForSeed(service.image, brand);
      const gallery = await Promise.all(
        (service.images ?? []).map((img) => resolveImagePathForSeed(img, brand))
      );

      await prisma.service.upsert({
        where: { slug },
        create: {
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

  if (!mod.servicesData && !mod.projectsData) {
    throw new Error(
      `[seed] No servicesData/projectsData found in data/${brand}`
    );
  }

  await seedBrand(brand, mod);
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
