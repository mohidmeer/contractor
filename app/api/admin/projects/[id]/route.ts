import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getSite } from "@/lib/site";
import {
  ProjectBodySchema,
  normalizeProjectBody,
  type ProjectBody,
} from "@/lib/projectSchema";
import { revalidateProjectsCache } from "@/lib/revalidateCatalog";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;
  const site = getSite();

  const project = await prisma.project.findFirst({
    where: { id: Number(id), site },
  });

  if (!project) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(project);
}

export async function PATCH(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;
  const site = getSite();

  try {
    const existing = await prisma.project.findFirst({
      where: { id: Number(id), site },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    const json = await req.json();
    const parsed = ProjectBodySchema.partial().parse(json);

    const merged: ProjectBody = {
      slug: parsed.slug ?? existing.slug,
      label: parsed.label ?? existing.label,
      title: parsed.title ?? existing.title,
      description: parsed.description ?? existing.description,
      content: parsed.content ?? existing.content,
      image: parsed.image !== undefined ? parsed.image : existing.image,
      location:
        parsed.location !== undefined ? parsed.location : existing.location,
      duration:
        parsed.duration !== undefined ? parsed.duration : existing.duration,
      materials:
        parsed.materials ?? (existing.materials as ProjectBody["materials"]),
      images: parsed.images ?? (existing.images as ProjectBody["images"]),
      sortOrder: parsed.sortOrder ?? existing.sortOrder,
    };

    const data = normalizeProjectBody(merged);

    const updated = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        slug: data.slug,
        label: data.label,
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image,
        location: data.location,
        duration: data.duration,
        materials: data.materials,
        images: data.images,
        sortOrder: data.sortOrder,
      },
    });

    revalidateProjectsCache(site);

    return NextResponse.json({ message: "updated", id: updated.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;
  const site = getSite();

  try {
    const existing = await prisma.project.findFirst({
      where: { id: Number(id), site },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    await prisma.project.delete({ where: { id: Number(id) } });
    revalidateProjectsCache(site);
    return NextResponse.json({ message: "deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
