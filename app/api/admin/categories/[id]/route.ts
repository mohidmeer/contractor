import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  CategoryBodySchema,
  normalizeCategoryBody,
  type CategoryBody,
} from "@/lib/categorySchema";
import { revalidateCategoriesCache } from "@/lib/revalidateCatalog";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;
  const category = await prisma.category.findUnique({
    where: { id: Number(id) },
  });

  if (!category) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(category);
}

export async function PATCH(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  try {
    const existing = await prisma.category.findUnique({
      where: { id: Number(id) },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    const json = await req.json();
    const parsed = CategoryBodySchema.partial().parse(json);

    const merged: CategoryBody = {
      slug: parsed.slug ?? existing.slug,
      name: parsed.name ?? existing.name,
      description:
        parsed.description !== undefined
          ? parsed.description
          : existing.description,
      sortOrder: parsed.sortOrder ?? existing.sortOrder,
    };

    const data = normalizeCategoryBody(merged);
    const updated = await prisma.category.update({
      where: { id: Number(id) },
      data,
    });

    revalidateCategoriesCache();
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
    const existing = await prisma.category.findUnique({
      where: { id: Number(id) },
    });
    if (!existing) return new NextResponse("Not Found", { status: 404 });

    // FK onDelete: SetNull clears categoryId on related services
    await prisma.category.delete({ where: { id: Number(id) } });
    revalidateCategoriesCache();
    return NextResponse.json({ message: "deleted" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
