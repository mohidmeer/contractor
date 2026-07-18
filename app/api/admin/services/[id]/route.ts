import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  ServiceBodySchema,
  normalizeServiceBody,
  type ServiceBody,
} from "@/lib/serviceSchema";
import { asParagraphs } from "@/lib/paragraphs";
import { revalidateServicesCache } from "@/lib/revalidateCatalog";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  const service = await prisma.service.findUnique({
    where: { id: Number(id) },
  });

  if (!service) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(service);
}

export async function PATCH(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  try {
    const existing = await prisma.service.findUnique({
      where: { id: Number(id) },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    const json = await req.json();
    const parsed = ServiceBodySchema.partial().parse(json);

    const merged: ServiceBody = {
      slug: parsed.slug ?? existing.slug,
      label: parsed.label ?? existing.label,
      title: parsed.title ?? existing.title,
      description: parsed.description ?? existing.description,
      content: parsed.content ?? asParagraphs(existing.content),
      image: parsed.image !== undefined ? parsed.image : existing.image,
      typeOfSolutions:
        parsed.typeOfSolutions ??
        (existing.typeOfSolutions as ServiceBody["typeOfSolutions"]),
      benefitsOFChoosing:
        parsed.benefitsOFChoosing ??
        (existing.benefitsOFChoosing as ServiceBody["benefitsOFChoosing"]),
      faqs: parsed.faqs ?? (existing.faqs as ServiceBody["faqs"]),
      images: parsed.images ?? (existing.images as ServiceBody["images"]),
      sortOrder: parsed.sortOrder ?? existing.sortOrder,
      categoryId:
        parsed.categoryId !== undefined
          ? parsed.categoryId
          : existing.categoryId,
    };

    const data = normalizeServiceBody(merged);

    const updated = await prisma.service.update({
      where: { id: Number(id) },
      data: {
        slug: data.slug,
        label: data.label,
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image,
        typeOfSolutions: data.typeOfSolutions,
        benefitsOFChoosing: data.benefitsOFChoosing,
        faqs: data.faqs,
        images: data.images,
        sortOrder: data.sortOrder,
        categoryId: data.categoryId,
      },
    });

    revalidateServicesCache();

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
    const existing = await prisma.service.findUnique({
      where: { id: Number(id) },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    await prisma.service.delete({ where: { id: Number(id) } });
    revalidateServicesCache();
    return NextResponse.json({ message: "deleted" });
  } catch {
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 });
  }
}
