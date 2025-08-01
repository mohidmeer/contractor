import { isAuthorized } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";

const BlogContentSchema = z.object({
  title: z.string(),
  read_time: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  image: z.string(),
  content: z.array(
    z.object({
      heading: z.string(),
      body: z.string().nullable(),
      listItems: z.array(z.string()).nullable(),
      table: z.array(z.array(z.string())).nullable(),
      quote: z.string().nullable(),
    })
  ),
});

type BlogContentType = z.infer<typeof BlogContentSchema>;

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

async function generateUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (await prisma.blog.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
}

export async function POST(req: NextRequest) {

   if (!isAuthorized(req)) {
          return new NextResponse("Unauthorized", {
              status: 401,
          });
      }
  try {
    const body = await req.json();
    const parsed = body; 


    const baseSlug = slugify(parsed.title);
    const uniqueSlug = await generateUniqueSlug(baseSlug);


    await prisma.blog.create({
      data: {
        title: parsed.title,
        read_time:parsed.read_time,
        description: parsed.seo.description,
        seo_title: parsed.seo.title,
        seo_description: parsed.seo.description,
        slug: uniqueSlug,
        image: parsed.image,
        content: parsed.content,
      }
    });
    return NextResponse.json({ message: 'created'}, { status: 201 });
  

  } catch (error: unknown) {
  
    console.log(error)
    return NextResponse.json({  error }, { status: 400 });
  
  }
}