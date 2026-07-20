import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { getAnthropicClient } from "@/lib/ai/clients";
import { siteName } from "@/data";

export const BlogAiSchema = z.object({
  title: z.string().describe("Blog post title"),
  read_time: z.string().describe('Estimated read time, e.g. "5 min" or "8 minutes"'),
  seo: z.object({
    title: z.string().describe("SEO title for meta tags"),
    description: z.string().describe("SEO meta description, 1-2 sentences"),
    keywords: z.array(z.string()).describe("5-10 relevant SEO keywords"),
  }),
  content: z
    .array(
      z.object({
        heading: z.string().describe("Section heading"),
        paragraph: z
          .string()
          .nullable()
          .describe("Section body paragraph, or null if not needed"),
        listItems: z
          .array(z.string())
          .nullable()
          .describe("Bullet list items, or null if not needed"),
        table: z
          .array(z.array(z.string()))
          .nullable()
          .describe("Optional table rows (first row can be headers), or null"),
        quote: z
          .string()
          .nullable()
          .describe("Optional pull quote, or null if not needed"),
      })
    )
    .describe("4-7 well-structured article sections"),
});

export type BlogAiResult = z.infer<typeof BlogAiSchema>;

export type BlogAiContext = {
  id?: string | number | null;
  existing?: Record<string, unknown> | null;
};

function buildBlogUserMessage(prompt: string, context?: BlogAiContext) {
  const hasExisting =
    context?.existing &&
    typeof context.existing === "object" &&
    Object.keys(context.existing).length > 0;

  if (hasExisting) {
    const idLine =
      context?.id != null && String(context.id).trim() !== ""
        ? `Record id: ${context.id}\n`
        : "";
    return `You write blog content for "${siteName}", a professional contractor business.

You are UPDATING an existing blog post. Use the current data below as the source of truth.
Apply the user's instructions to revise, improve, or expand that content.
Preserve facts and structure that still fit unless the user asks to change them.
Do not invent image URLs or image fields.
Return a complete updated blog object matching the schema.
Use null for unused listItems, table, or quote fields — do not invent filler lists/tables/quotes.

${idLine}Current blog data (JSON):
${JSON.stringify(context!.existing, null, 2)}

Update instructions:
${prompt.trim()}`;
  }

  return `You write blog content for "${siteName}", a professional contractor business.

Generate a complete, helpful blog post from this brief.
Tone: clear, trustworthy, and practical for local homeowners and commercial clients.
Do not invent image URLs or image fields.
Use null for unused listItems, table, or quote fields — only include them when they add real value.
Aim for 4-7 sections with useful headings and solid paragraphs.

Brief:
${prompt.trim()}`;
}

export async function generateBlogWithAi(
  prompt: string,
  context?: BlogAiContext
): Promise<BlogAiResult> {
  const client = await getAnthropicClient();

  const message = await client.messages.parse({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [
      {
        role: "user",
        content: buildBlogUserMessage(prompt, context),
      },
    ],
    output_config: {
      format: zodOutputFormat(BlogAiSchema),
    },
  });

  if (!message.parsed_output) {
    throw new Error(
      `AI did not return structured blog data (stop_reason: ${message.stop_reason})`
    );
  }

  return message.parsed_output;
}
