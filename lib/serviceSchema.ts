import { z } from "zod";
import { toMediaPath } from "@/lib/media";
import { PublishStatusSchema } from "@/lib/publishStatus";

const benefitSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const typeOfSolutionsSchema = z.object({
  headings: z.string().min(1),
  types: z.array(z.string().min(1)).default([]),
});

export const ServiceBodySchema = z.object({
  slug: z.string().min(1),
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  seo: z
    .object({
      title: z.string().optional().default(""),
      description: z.string().optional().default(""),
    })
    .optional()
    .default({ title: "", description: "" }),
  content: z.array(z.string().min(1)).min(1),
  image: z.string().optional().nullable(),
  typeOfSolutions: typeOfSolutionsSchema,
  benefitsOFChoosing: z.array(benefitSchema).default([]),
  faqs: z.array(faqSchema).default([]),
  images: z.array(z.string()).default([]),
  sortOrder: z.number().int().default(0),
  categoryId: z.number().int().nullable().optional(),
  status: PublishStatusSchema.default("PUBLISHED"),
});

export type ServiceBody = z.infer<typeof ServiceBodySchema>;

export function normalizeServiceBody(body: ServiceBody) {
  const seoTitle = body.seo?.title?.trim() || body.title.trim();
  const seoDescription = body.seo?.description?.trim() || body.description.trim();

  return {
    slug: body.slug,
    label: body.label,
    title: body.title,
    description: body.description,
    seo_title: seoTitle,
    seo_description: seoDescription,
    content: body.content.map((p) => p.trim()).filter(Boolean),
    image: body.image ? toMediaPath(body.image) : null,
    images: body.images.map((img) => toMediaPath(img)).filter(Boolean),
    typeOfSolutions: body.typeOfSolutions,
    benefitsOFChoosing: body.benefitsOFChoosing,
    faqs: body.faqs,
    sortOrder: body.sortOrder,
    categoryId: body.categoryId ?? null,
    status: body.status,
  };
}
