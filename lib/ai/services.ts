import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { getAnthropicClient } from "@/lib/ai/clients";
import { siteName } from "@/data";

const ServiceAiSchema = z.object({
  slug: z
    .string()
    .describe("URL-friendly slug using lowercase kebab-case, e.g. concrete-driveways"),
  label: z.string().describe("Short nav label"),
  title: z.string().describe("Full service page title"),
  description: z.string().describe("1-2 sentence short description for cards and SEO"),
  content: z
    .string()
    .describe("Longer page body content, 2-4 short paragraphs separated by newlines"),
  typeOfSolutions: z.object({
    headings: z.string().describe("Section heading for the solutions list"),
    types: z.array(z.string()).describe("4-8 concrete solution names"),
  }),
  benefitsOFChoosing: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .describe("3-5 benefits of choosing this service"),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .describe("3-5 frequently asked questions"),
  sortOrder: z.number().int().describe("Display order, default 0"),
});

export type ServiceAiResult = z.infer<typeof ServiceAiSchema>;

export async function generateServiceWithAi(
  prompt: string
): Promise<ServiceAiResult> {
  const client = await getAnthropicClient();

  const message = await client.messages.parse({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You write website content for "${siteName}", a professional contractor business.

Generate complete service page copy from this brief. Do not invent image URLs.
Use a clear, trustworthy tone suited for local homeowners and commercial clients.
Slug must be lowercase kebab-case.

Brief:
${prompt.trim()}`,
      },
    ],
    output_config: {
      format: zodOutputFormat(ServiceAiSchema),
    },
  });

  if (!message.parsed_output) {
    throw new Error(
      `AI did not return structured service data (stop_reason: ${message.stop_reason})`
    );
  }

  return message.parsed_output;
}
