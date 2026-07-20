import { z } from "zod";

export const BlogBlockSchema = z.object({
  heading: z.string(),
  paragraph: z.string().nullable(),
  listItems: z.array(z.string()).nullable(),
  table: z.array(z.array(z.string())).nullable(),
  quote: z.string().nullable(),
});

export const BlogContentSchema = z.object({
  title: z.string().min(1),
  read_time: z.string().min(1),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    keywords: z.array(z.string()).default([]),
  }),
  /** Media path only; left blank for the user to upload */
  image: z.string(),
  content: z.array(BlogBlockSchema).min(1),
});

export type BlogBlock = z.infer<typeof BlogBlockSchema>;
export type BlogContentType = z.infer<typeof BlogContentSchema>;

export const emptyBlogBlock = (): BlogBlock => ({
  heading: "",
  paragraph: "",
  listItems: null,
  table: null,
  quote: null,
});

export const emptyBlog = (): BlogContentType => ({
  title: "",
  read_time: "5 min",
  seo: {
    title: "",
    description: "",
    keywords: [],
  },
  image: "",
  content: [emptyBlogBlock()],
});
