import prisma from "@/lib/prisma";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}

export async function generateUniqueSlug(
  model: "blog" | "service" | "project",
  baseSlug: string,
  excludeId?: number
): Promise<string> {
  let slug = baseSlug || "item";
  let counter = 1;

  while (true) {
    let existing: { id: number } | null = null;
    if (model === "blog") {
      existing = await prisma.blog.findUnique({
        where: { slug },
        select: { id: true },
      });
    } else if (model === "service") {
      existing = await prisma.service.findUnique({
        where: { slug },
        select: { id: true },
      });
    } else {
      existing = await prisma.project.findUnique({
        where: { slug },
        select: { id: true },
      });
    }

    if (!existing || (excludeId !== undefined && existing.id === excludeId)) {
      return slug;
    }
    slug = `${baseSlug}-${counter++}`;
  }
}
