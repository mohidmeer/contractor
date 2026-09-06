import { z } from "zod";

/** Structured output from the Site Content chat agent. */
export const SiteContentAgentOutputSchema = z.object({
  intent: z
    .enum(["clarify", "apply"])
    .describe(
      "clarify = ask follow-up questions; apply = ready to update allowlisted site content fields"
    ),
  reply: z
    .string()
    .describe(
      "Message shown to the admin. Questions when clarifying; short confirmation when applying."
    ),
  patch: z
    .record(z.string(), z.unknown())
    .nullable()
    .describe(
      "Sparse Site Content patch with ONLY allowlisted marketing/SEO fields. null when intent is clarify."
    ),
});

export type SiteContentAgentOutput = z.infer<
  typeof SiteContentAgentOutputSchema
>;

export type SiteContentChatMessage = {
  role: "user" | "assistant";
  content: string;
};
