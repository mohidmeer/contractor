import { z } from "zod";
import { PublishStatusSchema } from "@/lib/publishStatus";
import { toMediaPath } from "@/lib/media";

const CalloutSchema = z.object({
  text: z.string().min(1),
  tone: z.enum(["tip", "note", "warning"]),
});

const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const ImageFigureSchema = z.object({
  image: z.string().min(1),
  caption: z.string().nullable(),
});

const MediaSplitSchema = z.object({
  image: z.string().min(1),
  side: z.enum(["left", "right"]),
  heading: z.string().default(""),
  paragraph: z.string().nullable().default(null),
  listItems: z.array(z.string()).nullable().default(null),
  table: z.array(z.array(z.string())).nullable().default(null),
  quote: z.string().nullable().default(null),
  cta: CtaSchema.nullable().default(null),
});

export const BlogBlockSchema = z.object({
  heading: z.string(),
  paragraph: z.string().nullable(),
  listItems: z.array(z.string()).nullable(),
  table: z.array(z.array(z.string())).nullable(),
  quote: z.string().nullable(),
  callout: CalloutSchema.nullable().optional().default(null),
  cta: CtaSchema.nullable().optional().default(null),
  imageFigure: ImageFigureSchema.nullable().optional().default(null),
  mediaSplit: MediaSplitSchema.nullable().optional().default(null),
});

export const BlogContentSchema = z.object({
  title: z.string().min(1),
  read_time: z.string().min(1),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  /** Media path only; left blank for the user to upload */
  image: z.string(),
  content: z.array(BlogBlockSchema).min(1),
  status: PublishStatusSchema.default("PUBLISHED"),
});

export type BlogBlock = z.infer<typeof BlogBlockSchema>;
export type BlogContentType = z.infer<typeof BlogContentSchema>;

export const emptyBlogBlock = (): BlogBlock => ({
  heading: "",
  paragraph: "",
  listItems: null,
  table: null,
  quote: null,
  callout: null,
  cta: null,
  imageFigure: null,
  mediaSplit: null,
});

export const emptyBlog = (): BlogContentType => ({
  title: "",
  read_time: "5 min",
  seo: {
    title: "",
    description: "",
  },
  image: "",
  content: [emptyBlogBlock()],
  status: "PUBLISHED",
});

/** Normalize media paths on image blocks before persist */
export function normalizeBlogContentBlocks(blocks: BlogBlock[]): BlogBlock[] {
  return blocks.map((block) => ({
    ...block,
    imageFigure: block.imageFigure
      ? {
          ...block.imageFigure,
          image: toMediaPath(block.imageFigure.image),
          caption: block.imageFigure.caption?.trim() || null,
        }
      : null,
    mediaSplit: block.mediaSplit
      ? {
          ...block.mediaSplit,
          image: toMediaPath(block.mediaSplit.image),
          heading: block.mediaSplit.heading ?? "",
          paragraph: block.mediaSplit.paragraph ?? null,
          listItems: block.mediaSplit.listItems ?? null,
          table: block.mediaSplit.table ?? null,
          quote: block.mediaSplit.quote ?? null,
          cta: block.mediaSplit.cta ?? null,
        }
      : null,
  }));
}
