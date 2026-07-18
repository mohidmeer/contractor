import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";
import { toMediaUrl } from "@/lib/media";
import { asParagraphs } from "@/lib/paragraphs";
import type { Project } from "@prisma/client";

export type ProjectView = {
  id: number;
  slug: string;
  label: string;
  title: string;
  description: string;
  content: string[];
  image: string | null;
  imageUrl: string;
  location: string | null;
  duration: string | null;
  materials: string[];
  images: string[];
  imageUrls: string[];
  sortOrder: number;
};

function mapProject(row: Project): ProjectView {
  const images = Array.isArray(row.images) ? (row.images as string[]) : [];
  const materials = Array.isArray(row.materials)
    ? (row.materials as string[])
    : [];
  const image = row.image ?? null;

  return {
    id: row.id,
    slug: row.slug,
    label: row.label,
    title: row.title,
    description: row.description,
    content: asParagraphs(row.content),
    image,
    imageUrl: image ? toMediaUrl(image) : "",
    location: row.location ?? null,
    duration: row.duration ?? null,
    materials,
    images,
    imageUrls: images.map((img) => toMediaUrl(img)),
    sortOrder: row.sortOrder,
  };
}

export async function getProjects(): Promise<ProjectView[]> {
  return unstable_cache(
    async () => {
      const rows = await prisma.project.findMany({
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
      });
      return rows.map(mapProject);
    },
    ["projects-list-v2"],
    { tags: ["projects"] }
  )();
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectView | null> {
  return unstable_cache(
    async () => {
      const row = await prisma.project.findUnique({ where: { slug } });
      return row ? mapProject(row) : null;
    },
    [`project-v2-${slug}`],
    { tags: ["projects"] }
  )();
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}
