import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { BlogContentSchema } from "@/lib/blogSchema";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const take = Number(searchParams.get("take") ?? 20);
  const skip = Number(searchParams.get("skip") ?? 0);
  const q = searchParams.get("q") ?? "";

  const where = q
  ? {
      OR: [
        { title:          { contains: q } },
        { seo_title:      { contains: q } },
        { seo_description:{ contains: q } },
        { slug:           { contains: q } },
      ],
    }
  : {};

  const [items, total] = await Promise.all([
    prisma.blog.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take,
      skip,
      select: {
        id: true,
        title: true,
        slug: true,
        description:true,
        read_time: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.blog.count({ where }),
  ]);

  return NextResponse.json({ items, total, take, skip });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const parsed = BlogContentSchema.parse(json);

    const baseSlug = slugify(parsed.title);
    const uniqueSlug = await generateUniqueSlug(baseSlug);

    await prisma.blog.create({
      data: {
        title: parsed.title,
        read_time: parsed.read_time,
        description: parsed.seo.description,
        seo_title: parsed.seo.title,
        seo_description: parsed.seo.description,
        slug: uniqueSlug,
        image: parsed.image,
        content: parsed.content,
      },
    });

    return NextResponse.json({ message: "created", slug: uniqueSlug }, { status: 201 });
  } catch (error:any) {
    console.error(error);
    return NextResponse.json({ error: error?.message ?? "Invalid payload" }, { status: 400 });
  }
}

function slugify(text: string) {
  return text.toLowerCase().trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}

async function generateUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 1;
  while (await prisma.blog.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter++}`;
  }
  return slug;
}