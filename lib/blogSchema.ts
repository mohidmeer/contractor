// lib/blogSchema.ts
import { z } from "zod";

export const BlogBlockSchema = z.object({
  heading: z.string(),
  body: z.string().nullable().optional(),
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
  image: z.string().url().or(z.string().startsWith("/")),
  content: z.array(BlogBlockSchema).min(1),
});

export type BlogContentType = z.infer<typeof BlogContentSchema>;
