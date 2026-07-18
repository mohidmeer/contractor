import { z } from "zod";

export const CategoryBodySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional().nullable(),
  sortOrder: z.number().int().default(0),
});

export type CategoryBody = z.infer<typeof CategoryBodySchema>;

export function normalizeCategoryBody(body: CategoryBody) {
  return {
    slug: body.slug.trim(),
    name: body.name.trim(),
    description: body.description?.trim() || null,
    sortOrder: body.sortOrder ?? 0,
  };
}
