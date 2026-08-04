import type { ApiKey } from "@prisma/client";
import prisma from "@/lib/prisma";

export const SETTING_ID = 1;

export type ResolvedApiKey = Pick<
  ApiKey,
  | "id"
  | "label"
  | "provider"
  | "apiKey"
  | "inputTokensUsed"
  | "outputTokensUsed"
  | "inputPricePerMillion"
  | "outputPricePerMillion"
  | "isDefault"
>;

export function maskApiKey(apiKey: string): string {
  const trimmed = apiKey.trim();
  if (trimmed.length <= 8) return "••••••••";
  return `${trimmed.slice(0, 4)}…${trimmed.slice(-4)}`;
}

export function estimateKeyCost(
  inputTokens: number,
  outputTokens: number,
  inputPricePerMillion: number,
  outputPricePerMillion: number
): number {
  return (
    (inputTokens / 1_000_000) * inputPricePerMillion +
    (outputTokens / 1_000_000) * outputPricePerMillion
  );
}

async function getSetting() {
  return prisma.setting.findUnique({ where: { id: SETTING_ID } });
}

/** Resolve the Anthropic API key used by chatbot and admin AI. */
export async function resolveAnthropicApiKey(): Promise<ResolvedApiKey> {
  const setting = await getSetting();
  if (setting?.activeApiKeyId) {
    const active = await prisma.apiKey.findUnique({
      where: { id: setting.activeApiKeyId },
    });
    if (active) return active;
  }

  const defaultKey = await prisma.apiKey.findFirst({
    where: { isDefault: true },
    orderBy: { createdAt: "desc" },
  });
  if (defaultKey) return defaultKey;

  const newest = await prisma.apiKey.findFirst({
    orderBy: { createdAt: "desc" },
  });
  if (!newest) {
    throw new Error(
      "Anthropic API key is not configured. Add a key in Admin → Settings → API Keys."
    );
  }
  return newest;
}

export async function resolveChatbotApiKey(): Promise<ResolvedApiKey> {
  return resolveAnthropicApiKey();
}

export async function recordTokenUsage(
  apiKeyId: string,
  inputTokens: number,
  outputTokens: number
): Promise<void> {
  const inTok = Math.max(0, Math.floor(inputTokens || 0));
  const outTok = Math.max(0, Math.floor(outputTokens || 0));
  if (inTok === 0 && outTok === 0) return;

  await prisma.apiKey.update({
    where: { id: apiKeyId },
    data: {
      inputTokensUsed: { increment: inTok },
      outputTokensUsed: { increment: outTok },
    },
  });
}

export async function ensureSettingRow() {
  await prisma.setting.upsert({
    where: { id: SETTING_ID },
    create: { id: SETTING_ID },
    update: {},
  });
}

export async function setActiveApiKeyId(apiKeyId: string | null) {
  await ensureSettingRow();
  await prisma.setting.update({
    where: { id: SETTING_ID },
    data: { activeApiKeyId: apiKeyId },
  });
}

export async function setDefaultApiKey(apiKeyId: string) {
  await prisma.$transaction([
    prisma.apiKey.updateMany({
      where: { isDefault: true },
      data: { isDefault: false },
    }),
    prisma.apiKey.update({
      where: { id: apiKeyId },
      data: { isDefault: true },
    }),
  ]);
}
