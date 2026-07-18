import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { getAnthropicClient } from "@/lib/ai/clients";
import { siteName } from "@/data";

const EstimateAiSchema = z.object({
  clientName: z.string().describe("Client full name"),
  clientEmail: z
    .string()
    .describe("Client email if known, otherwise empty string"),
  clientPhone: z
    .string()
    .describe("Client phone if known, otherwise empty string"),
  title: z.string().describe("Estimate title, e.g. Kitchen remodel estimate"),
  description: z
    .string()
    .describe("Short project summary for the estimate"),
  notes: z
    .string()
    .describe("Optional internal or client-facing notes, or empty string"),
  status: z
    .enum(["DRAFT", "SENT", "VIEWED", "ACCEPTED", "DECLINED"])
    .describe("Usually DRAFT for new estimates"),
  items: z
    .array(
      z.object({
        name: z.string().describe("Line item name"),
        description: z
          .string()
          .describe("Optional line item details, or empty string"),
        quantity: z.number().int().describe("Quantity, at least 1"),
        unitPrice: z.number().describe("Unit price in USD dollars"),
        sortOrder: z.number().int().describe("0-based display order"),
      })
    )
    .describe("3-10 realistic line items with fair local contractor pricing"),
});

export type EstimateAiResult = z.infer<typeof EstimateAiSchema>;

export type EstimateAiContext = {
  id?: string | number | null;
  existing?: Record<string, unknown> | null;
};

function buildEstimateUserMessage(prompt: string, context?: EstimateAiContext) {
  const hasExisting =
    context?.existing &&
    typeof context.existing === "object" &&
    Object.keys(context.existing).length > 0;

  if (hasExisting) {
    const idLine =
      context?.id != null && String(context.id).trim() !== ""
        ? `Record id: ${context.id}\n`
        : "";
    return `You create professional contractor estimates for "${siteName}".

You are UPDATING an existing estimate. Use the current data below as the source of truth.
Apply the user's instructions to revise line items, pricing, client details, or copy.
Preserve accurate existing details unless the user asks to change them.
Do not invent image URLs or YouTube links.
Use clear line items with realistic Florida contractor pricing in USD.
Return a complete updated estimate object.

${idLine}Current estimate data (JSON):
${JSON.stringify(context!.existing, null, 2)}

Update instructions:
${prompt.trim()}`;
  }

  return `You create professional contractor estimates for "${siteName}".

Generate a complete estimate from this brief. Do not invent image URLs or YouTube links.
Use clear line items with realistic Florida contractor pricing in USD.
Default status to DRAFT unless the brief says otherwise.
If client contact details are missing, use empty strings.

Brief:
${prompt.trim()}`;
}

export async function generateEstimateWithAi(
  prompt: string,
  context?: EstimateAiContext
): Promise<EstimateAiResult> {
  const client = await getAnthropicClient();

  const message = await client.messages.parse({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: buildEstimateUserMessage(prompt, context),
      },
    ],
    output_config: {
      format: zodOutputFormat(EstimateAiSchema),
    },
  });

  if (!message.parsed_output) {
    throw new Error(
      `AI did not return structured estimate data (stop_reason: ${message.stop_reason})`
    );
  }

  return message.parsed_output;
}
