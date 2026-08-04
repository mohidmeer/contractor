import Anthropic from "@anthropic-ai/sdk";
import {
  recordTokenUsage,
  resolveAnthropicApiKey,
} from "@/lib/apiKeys";

export type AnthropicClientBundle = {
  client: Anthropic;
  apiKeyId: string;
};

export async function getAnthropicClient(): Promise<AnthropicClientBundle> {
  const key = await resolveAnthropicApiKey();
  return {
    client: new Anthropic({ apiKey: key.apiKey }),
    apiKeyId: key.id,
  };
}

export async function recordAnthropicMessageUsage(
  apiKeyId: string,
  usage?: { input_tokens?: number; output_tokens?: number } | null
): Promise<void> {
  if (!usage) return;
  await recordTokenUsage(
    apiKeyId,
    usage.input_tokens ?? 0,
    usage.output_tokens ?? 0
  );
}

/** @deprecated Use getAnthropicClient(); kept for any straggling imports */
export async function getAnthropicApiKey(): Promise<string> {
  const key = await resolveAnthropicApiKey();
  return key.apiKey;
}

export { Anthropic };
