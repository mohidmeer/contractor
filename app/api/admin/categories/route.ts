import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  CategoryBodySchema,
  normalizeCategoryBody,
} from "@/lib/categorySchema";
import { revalidateCategoriesCache } from "@/lib/revalidateCatalog";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const take = Number(searchParams.get("take") ?? 100);
  const skip = Number(searchParams.get("skip") ?? 0);
  const q = searchParams.get("q") ?? "";

  const where = q
    ? {
        OR: [
          { name: { contains: q } },
          { slug: { contains: q } },
          { description: { contains: q } },
        ],
      }
    : {};

  const [items, total] = await Promise.all([
    prisma.category.findMany({
      where,
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      take,
      skip,
      include: {
        _count: { select: { services: true } },
      },
    }),
    prisma.category.count({ where }),
  ]);

  return NextResponse.json({ items, total, take, skip });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const parsed = CategoryBodySchema.parse(json);
    const data = normalizeCategoryBody(parsed);

    const created = await prisma.category.create({ data });
    revalidateCategoriesCache();

    return NextResponse.json({ message: "created", id: created.id }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
