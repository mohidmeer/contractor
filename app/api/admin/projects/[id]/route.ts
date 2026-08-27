import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  ProjectBodySchema,
  normalizeProjectBody,
  type ProjectBody,
} from "@/lib/projectSchema";
import { asParagraphs } from "@/lib/paragraphs";
import { revalidateProjectsCache } from "@/lib/revalidateCatalog";
import { collectUploadPaths, deleteOrphanedUploadFiles } from "@/lib/uploadCleanup";
import { generateUniqueSlug, slugify } from "@/lib/slug";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: { id: Number(id) },
  });

  if (!project) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(project);
}

export async function PATCH(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  try {
    const existing = await prisma.project.findUnique({
      where: { id: Number(id) },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    const json = await req.json();
    const parsed = ProjectBodySchema.partial().parse(json);

    const merged: ProjectBody = {
      slug: parsed.slug ?? existing.slug,
      label: parsed.label ?? existing.label,
      title: parsed.title ?? existing.title,
      description: parsed.description ?? existing.description,
      seo: parsed.seo ?? {
        title: existing.seo_title,
        description: existing.seo_description,
      },
      content: parsed.content ?? asParagraphs(existing.content),
      image: parsed.image !== undefined ? parsed.image : existing.image,
      location:
        parsed.location !== undefined ? parsed.location : existing.location,
      duration:
        parsed.duration !== undefined ? parsed.duration : existing.duration,
      materials:
        parsed.materials ?? (existing.materials as ProjectBody["materials"]),
      images: parsed.images ?? (existing.images as ProjectBody["images"]),
      sortOrder: parsed.sortOrder ?? existing.sortOrder,
      status: parsed.status ?? existing.status,
    };

    const data = normalizeProjectBody(merged);
    const uniqueSlug = await generateUniqueSlug(
      "project",
      slugify(data.slug) || slugify(data.title),
      Number(id)
    );

    const updated = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        slug: uniqueSlug,
        label: data.label,
        title: data.title,
        description: data.description,
        seo_title: data.seo_title,
        seo_description: data.seo_description,
        content: data.content,
        image: data.image,
        location: data.location,
        duration: data.duration,
        materials: data.materials,
        images: data.images,
        sortOrder: data.sortOrder,
        status: data.status,
      },
    });

    revalidateProjectsCache();

    return NextResponse.json({ message: "updated", id: updated.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  try {
    const existing = await prisma.project.findUnique({
      where: { id: Number(id) },
      select: { image: true, images: true },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    const uploadPaths = collectUploadPaths(existing.image, existing.images);
    await prisma.project.delete({ where: { id: Number(id) } });
    await deleteOrphanedUploadFiles(uploadPaths);
    revalidateProjectsCache();
    return NextResponse.json({ message: "deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
