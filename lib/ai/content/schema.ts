import { z } from "zod";

/** Structured output from the Site Content chat agent. */

export const BulkWriteEntitySchema = z.enum([
  "blogs",
  "services",
  "projects",
  "estimates",
]);

export const SiteContentAgentOutputSchema = z.object({
  intent: z
    .enum(["clarify", "apply", "bulk_write"])
    .describe(
      "clarify = ask follow-up; apply = update allowlisted site content; bulk_write = create draft blogs/services/projects/estimates"
    ),
  reply: z
    .string()
    .describe(
      "Markdown message for the admin (headings, lists, bold). Questions when clarifying; short confirmation when applying or bulk writing."
    ),
  patch: z
    .record(z.string(), z.unknown())
    .nullable()
    .describe(
      "Sparse Site Content patch with ONLY allowlisted marketing/SEO fields. null unless intent is apply."
    ),
  bulkWrite: z
    .object({
      entityType: BulkWriteEntitySchema,
      prompts: z
        .array(z.string())
        .min(1)
        .max(20)
        .describe("One concrete generation brief per draft to create"),
    })
    .nullable()
    .describe(
      "Bulk draft creation payload. null unless intent is bulk_write."
    ),
});

export type SiteContentAgentOutput = z.infer<
  typeof SiteContentAgentOutputSchema
>;

export type SiteContentChatMessage = {
  role: "user" | "assistant";
  content: string;
};
