import { z } from "zod";
import { toMediaPath } from "@/lib/media";

export const ProjectBodySchema = z.object({
  slug: z.string().min(1),
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
  image: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  duration: z.string().optional().nullable(),
  materials: z.array(z.string()).default([]),
  images: z.array(z.string()).default([]),
  sortOrder: z.number().int().default(0),
});

export type ProjectBody = z.infer<typeof ProjectBodySchema>;

export function normalizeProjectBody(body: ProjectBody) {
  return {
    ...body,
    image: body.image ? toMediaPath(body.image) : null,
    images: body.images.map((img) => toMediaPath(img)).filter(Boolean),
    location: body.location || null,
    duration: body.duration || null,
  };
}
