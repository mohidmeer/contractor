import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { BlogContentSchema } from "@/lib/blogSchema";



type Props = {
  params:  Promise<{id:string}>;
};



export async function GET(
  req: NextRequest,
  { params }: Props
) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await params

const blog = await prisma.blog.findUnique({
    where: { id: Number(id) },
    select: {
      title: true,
      slug: true,
      read_time: true,
      image: true,
      description: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!blog) {
    return new NextResponse("Not Found", { status: 404 });
  }
  return NextResponse.json(blog);
}

export async function PATCH(
  req: NextRequest,
  { params }: Props
) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const { id } = await params
  try {
    const json = await req.json();
    // Allow partial updates
    const parsed = BlogContentSchema.partial().parse(json);

    const updated = await prisma.blog.update({
      where: { id: Number(id)},
      data: {
        ...(parsed.title && { title: parsed.title }),
        ...(parsed.read_time && { read_time: parsed.read_time }),
        ...(parsed.seo?.description && { description: parsed.seo.description }),
        ...(parsed.seo?.title && { seo_title: parsed.seo.title }),
        ...(parsed.seo?.description && { seo_description: parsed.seo.description }),
        ...(parsed.image && { image: parsed.image }),
        ...(parsed.content && { content: parsed.content }),
      },
    });

    return NextResponse.json({ message: "updated", id: updated.id });
  } catch (error:any) {
    return NextResponse.json(
      { error: error?.message ?? "Invalid payload" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Props
) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const { id } = await params

  try {
    await prisma.blog.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: "deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}