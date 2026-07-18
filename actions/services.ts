import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";
import { toMediaUrl } from "@/lib/media";
import type { Service } from "@prisma/client";

export type ServiceView = {
  id: number;
  slug: string;
  label: string;
  title: string;
  description: string;
  content: string;
  image: string | null;
  imageUrl: string;
  typeOfSolutions: { headings: string; types: string[] };
  benefitsOFChoosing: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  images: string[];
  imageUrls: string[];
  sortOrder: number;
};

function mapService(row: Service): ServiceView {
  const images = Array.isArray(row.images) ? (row.images as string[]) : [];
  const image = row.image ?? null;

  return {
    id: row.id,
    slug: row.slug,
    label: row.label,
    title: row.title,
    description: row.description,
    content: row.content,
    image,
    imageUrl: image ? toMediaUrl(image) : "",
    typeOfSolutions: row.typeOfSolutions as ServiceView["typeOfSolutions"],
    benefitsOFChoosing:
      row.benefitsOFChoosing as ServiceView["benefitsOFChoosing"],
    faqs: row.faqs as ServiceView["faqs"],
    images,
    imageUrls: images.map((img) => toMediaUrl(img)),
    sortOrder: row.sortOrder,
  };
}

export async function getServices(): Promise<ServiceView[]> {
  return unstable_cache(
    async () => {
      const rows = await prisma.service.findMany({
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
      });
      return rows.map(mapService);
    },
    ["services-list"],
    { tags: ["services"] }
  )();
}

export async function getServiceBySlug(
  slug: string
): Promise<ServiceView | null> {
  return unstable_cache(
    async () => {
      const row = await prisma.service.findUnique({ where: { slug } });
      return row ? mapService(row) : null;
    },
    [`service-${slug}`],
    { tags: ["services"] }
  )();
}

export async function getServiceSlugs(): Promise<string[]> {
  const services = await getServices();
  return services.map((s) => s.slug);
}
