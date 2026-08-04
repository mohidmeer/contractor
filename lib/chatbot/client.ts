import Anthropic from "@anthropic-ai/sdk";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatCompletionResult = {
  reply: string;
  inputTokens: number;
  outputTokens: number;
};

const ANTHROPIC_MODEL = "claude-haiku-4-5-20251001";

export async function completeChat(params: {
  apiKey: string;
  systemPrompt: string;
  messages: ChatMessage[];
}): Promise<ChatCompletionResult> {
  const { apiKey, systemPrompt, messages } = params;
  const client = new Anthropic({ apiKey });
  const message = await client.messages.create({
    model: ANTHROPIC_MODEL,
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const textParts = message.content
    .filter((part): part is Anthropic.TextBlock => part.type === "text")
    .map((part) => part.text);
  const reply = textParts.join("\n").trim();
  if (!reply) throw new Error("Anthropic returned an empty reply");

  return {
    reply,
    inputTokens: message.usage.input_tokens ?? 0,
    outputTokens: message.usage.output_tokens ?? 0,
  };
}
