import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { getAnthropicClient } from "@/lib/ai/clients";
import { siteName } from "@/data";

const ProjectAiSchema = z.object({
  slug: z
    .string()
    .describe("URL-friendly slug using lowercase kebab-case, e.g. orlando-kitchen-remodel"),
  label: z.string().describe("Short nav / card label"),
  title: z.string().describe("Full project page title"),
  description: z.string().describe("1-2 sentence short description for cards and SEO"),
  content: z
    .string()
    .describe("Longer project story, 2-4 short paragraphs separated by newlines"),
  location: z.string().describe("City or area, e.g. Orlando, FL"),
  duration: z.string().describe("Project timeline, e.g. 6 weeks"),
  materials: z
    .array(z.string())
    .describe("4-8 materials or finishes used on the project"),
  sortOrder: z.number().int().describe("Display order, default 0"),
});

export type ProjectAiResult = z.infer<typeof ProjectAiSchema>;

export async function generateProjectWithAi(
  prompt: string
): Promise<ProjectAiResult> {
  const client = await getAnthropicClient();

  const message = await client.messages.parse({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You write website content for "${siteName}", a professional contractor business.

Generate complete project showcase copy from this brief. Do not invent image URLs.
Use a clear, trustworthy tone that highlights craftsmanship and results.
Slug must be lowercase kebab-case.

Brief:
${prompt.trim()}`,
      },
    ],
    output_config: {
      format: zodOutputFormat(ProjectAiSchema),
    },
  });

  if (!message.parsed_output) {
    throw new Error(
      `AI did not return structured project data (stop_reason: ${message.stop_reason})`
    );
  }

  return message.parsed_output;
}
