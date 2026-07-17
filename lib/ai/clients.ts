import Anthropic from "@anthropic-ai/sdk";
import prisma from "@/lib/prisma";

const SETTING_ID = 1;

export async function getAnthropicApiKey(): Promise<string> {
  const setting = await prisma.setting.findUnique({
    where: { id: SETTING_ID },
  });

  const apiKey = setting?.anthropicKey?.trim();
  if (!apiKey) {
    throw new Error(
      "Anthropic API key is not configured. Add it in Admin → Settings."
    );
  }

  return apiKey;
}

export async function getAnthropicClient(): Promise<Anthropic> {
  const apiKey = await getAnthropicApiKey();
  return new Anthropic({ apiKey });
}

export { Anthropic };
