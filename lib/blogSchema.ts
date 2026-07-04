// lib/blogSchema.ts
import { z } from "zod";

export const BlogBlockSchema = z.object({
  heading: z.string(),
  paragraph: z.string().nullable().optional(),
  listItems: z.array(z.string()).nullable().optional(),
  table: z.array(z.array(z.string())).nullable().optional(),
  quote: z.string().nullable().optional(),
});

export const BlogContentSchema = z.object({
  title: z.string().min(1),
  read_time: z.string().min(1),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  // Stored as a media path (e.g. media/costal/file.png), not a full URL
  image: z.string().min(1),
  content: z.array(BlogBlockSchema).min(1),
});

export type BlogContentType = z.infer<typeof BlogContentSchema>;
