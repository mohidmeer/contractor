import { z } from "zod";

export const FormRequestTypeSchema = z.enum([
  "FREE_CONSULTATION",
  "REQUEST_QUOTE",
]);

export const FormRequestStatusSchema = z.enum(["NEW", "CONTACTED", "CLOSED"]);

const phonePattern = /^[0-9+\-\s()]{7,}$/;

export const CreateFormRequestSchema = z.object({
  type: FormRequestTypeSchema,
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phonePattern, "Enter a valid phone number"),
  address: z.string().optional().nullable().or(z.literal("")),
  message: z.string().optional().nullable().or(z.literal("")),
  site: z.string().min(1, "Site is required"),
});

export const UpdateFormRequestStatusSchema = z.object({
  status: FormRequestStatusSchema,
});

export type FormRequestType = z.infer<typeof FormRequestTypeSchema>;
export type FormRequestStatus = z.infer<typeof FormRequestStatusSchema>;
export type CreateFormRequestBody = z.infer<typeof CreateFormRequestSchema>;

export function normalizeFormRequestBody(data: CreateFormRequestBody) {
  return {
    type: data.type,
    name: data.name.trim(),
    phone: data.phone.trim(),
    address: data.address?.trim() || null,
    message: data.message?.trim() || null,
    site: data.site.trim(),
  };
}

export function serializeFormRequest<
  T extends {
    id: string;
    type: FormRequestType;
    name: string;
    phone: string;
    address: string | null;
    message: string | null;
    site: string;
    status: FormRequestStatus;
    createdAt: Date;
    updatedAt: Date;
  },
>(request: T) {
  return {
    id: request.id,
    type: request.type,
    name: request.name,
    phone: request.phone,
    address: request.address,
    message: request.message,
    site: request.site,
    status: request.status,
    createdAt: request.createdAt.toISOString(),
    updatedAt: request.updatedAt.toISOString(),
  };
}

export const FORM_REQUEST_TYPE_LABELS: Record<FormRequestType, string> = {
  FREE_CONSULTATION: "Free Consultation",
  REQUEST_QUOTE: "Request a Quote",
};

export const FORM_REQUEST_STATUS_LABELS: Record<FormRequestStatus, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  CLOSED: "Closed",
};
