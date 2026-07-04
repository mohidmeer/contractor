import { z } from "zod";
import { isValidYouTubeUrl } from "@/lib/youtube";

export const EstimateStatusSchema = z.enum([
  "DRAFT",
  "SENT",
  "VIEWED",
  "ACCEPTED",
  "DECLINED",
]);

export const EstimateItemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  description: z.string().optional().nullable(),
  quantity: z.coerce.number().int().min(1, "Quantity must be at least 1"),
  unitPrice: z.coerce.number().min(0, "Unit price must be 0 or greater"),
  sortOrder: z.coerce.number().int().default(0),
});

export const EstimateBodySchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  clientEmail: z
    .string()
    .email("Invalid email")
    .optional()
    .nullable()
    .or(z.literal("")),
  clientPhone: z.string().optional().nullable().or(z.literal("")),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().nullable().or(z.literal("")),
  notes: z.string().optional().nullable().or(z.literal("")),
  youtubeUrl: z
    .string()
    .optional()
    .nullable()
    .or(z.literal(""))
    .refine((value) => isValidYouTubeUrl(value), {
      message: "Enter a valid YouTube video link",
    }),
  status: EstimateStatusSchema.default("DRAFT"),
  items: z.array(EstimateItemSchema).min(1, "At least one line item is required"),
});

export type EstimateBody = z.infer<typeof EstimateBodySchema>;
export type EstimateItemInput = z.infer<typeof EstimateItemSchema>;
export type EstimateStatus = z.infer<typeof EstimateStatusSchema>;

export function normalizeEstimateBody(data: EstimateBody) {
  return {
    clientName: data.clientName.trim(),
    clientEmail: data.clientEmail?.trim() || null,
    clientPhone: data.clientPhone?.trim() || null,
    title: data.title.trim(),
    description: data.description?.trim() || null,
    notes: data.notes?.trim() || null,
    youtubeUrl: data.youtubeUrl?.trim() || null,
    status: data.status,
    items: data.items.map((item, index) => ({
      name: item.name.trim(),
      description: item.description?.trim() || null,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      sortOrder: item.sortOrder ?? index,
    })),
  };
}
