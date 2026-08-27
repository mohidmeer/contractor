import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  ProjectBodySchema,
  normalizeProjectBody,
} from "@/lib/projectSchema";
import { revalidateProjectsCache } from "@/lib/revalidateCatalog";
import { generateUniqueSlug, slugify } from "@/lib/slug";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const take = Number(searchParams.get("take") ?? 50);
  const skip = Number(searchParams.get("skip") ?? 0);
  const q = searchParams.get("q") ?? "";

  const where = q
    ? {
        OR: [
          { title: { contains: q } },
          { label: { contains: q } },
          { slug: { contains: q } },
          { description: { contains: q } },
        ],
      }
    : {};

  const [items, total] = await Promise.all([
    prisma.project.findMany({
      where,
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      take,
      skip,
      select: {
        id: true,
        slug: true,
        label: true,
        title: true,
        description: true,
        image: true,
        sortOrder: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.project.count({ where }),
  ]);

  return NextResponse.json({ items, total, take, skip });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const parsed = ProjectBodySchema.parse(json);
    const data = normalizeProjectBody(parsed);
    const uniqueSlug = await generateUniqueSlug(
      "project",
      slugify(data.slug) || slugify(data.title)
    );

    const created = await prisma.project.create({
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

    if (data.status === "PUBLISHED") {
      revalidateProjectsCache();
    }

    return NextResponse.json({ message: "created", id: created.id }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
