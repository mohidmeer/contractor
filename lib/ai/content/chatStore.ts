import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import type { SiteContent } from "@/lib/siteContent/schema";
import type { SiteContentChatMessage } from "./schema";
import { normalizeChatHistory } from "./agent";

export const SITE_CONTENT_AI_CHAT_ID = 1;
const MAX_STORED_MESSAGES = 40;

export type SiteContentAiChatLastApply = {
  merged: SiteContent;
  sections: string[];
};

export type SiteContentAiChatState = {
  messages: SiteContentChatMessage[];
  pending: boolean;
  lastApply: SiteContentAiChatLastApply | null;
};

function parseMessages(raw: unknown): SiteContentChatMessage[] {
  return normalizeChatHistory(raw).slice(-MAX_STORED_MESSAGES);
}

function parseLastApply(raw: unknown): SiteContentAiChatLastApply | null {
  if (!raw || typeof raw !== "object") return null;
  const rec = raw as { merged?: unknown; sections?: unknown };
  if (!rec.merged || typeof rec.merged !== "object") return null;
  return {
    merged: rec.merged as SiteContent,
    sections: Array.isArray(rec.sections)
      ? rec.sections.filter((s): s is string => typeof s === "string")
      : [],
  };
}

export async function ensureSiteContentAiChat() {
  return prisma.siteContentAiChat.upsert({
    where: { id: SITE_CONTENT_AI_CHAT_ID },
    create: {
      id: SITE_CONTENT_AI_CHAT_ID,
      messages: [],
      pending: false,
    },
    update: {},
  });
}

export async function getSiteContentAiChatState(): Promise<SiteContentAiChatState> {
  const row = await ensureSiteContentAiChat();
  return {
    messages: parseMessages(row.messages),
    pending: row.pending,
    lastApply: parseLastApply(row.lastApply),
  };
}

export async function appendUserMessageAndStartJob(options: {
  message: string;
  content: SiteContent;
}): Promise<SiteContentAiChatState> {
  const row = await ensureSiteContentAiChat();
  if (row.pending) {
    throw new Error("AI is already answering. Please wait for it to finish.");
  }

  const messages = [
    ...parseMessages(row.messages),
    { role: "user" as const, content: options.message },
  ].slice(-MAX_STORED_MESSAGES);

  await prisma.siteContentAiChat.update({
    where: { id: SITE_CONTENT_AI_CHAT_ID },
    data: {
      messages,
      pending: true,
      draftContent: options.content as unknown as Prisma.InputJsonValue,
      lastApply: Prisma.JsonNull,
    },
  });

  return {
    messages,
    pending: true,
    lastApply: null,
  };
}

export async function completeAiJob(options: {
  assistantMessage: string;
  lastApply?: SiteContentAiChatLastApply | null;
}): Promise<SiteContentAiChatState> {
  const row = await ensureSiteContentAiChat();
  const messages = [
    ...parseMessages(row.messages),
    { role: "assistant" as const, content: options.assistantMessage },
  ].slice(-MAX_STORED_MESSAGES);

  const updated = await prisma.siteContentAiChat.update({
    where: { id: SITE_CONTENT_AI_CHAT_ID },
    data: {
      messages,
      pending: false,
      draftContent: Prisma.JsonNull,
      lastApply: options.lastApply
        ? (options.lastApply as unknown as Prisma.InputJsonValue)
        : Prisma.JsonNull,
    },
  });

  return {
    messages: parseMessages(updated.messages),
    pending: false,
    lastApply: parseLastApply(updated.lastApply),
  };
}

export async function failAiJob(errorMessage: string): Promise<void> {
  const row = await ensureSiteContentAiChat();
  const messages = [
    ...parseMessages(row.messages),
    { role: "assistant" as const, content: errorMessage },
  ].slice(-MAX_STORED_MESSAGES);

  await prisma.siteContentAiChat.update({
    where: { id: SITE_CONTENT_AI_CHAT_ID },
    data: {
      messages,
      pending: false,
      draftContent: Prisma.JsonNull,
    },
  });
}

export async function clearSiteContentAiChat(): Promise<SiteContentAiChatState> {
  await prisma.siteContentAiChat.upsert({
    where: { id: SITE_CONTENT_AI_CHAT_ID },
    create: {
      id: SITE_CONTENT_AI_CHAT_ID,
      messages: [],
      pending: false,
    },
    update: {
      messages: [],
      pending: false,
      draftContent: Prisma.JsonNull,
      lastApply: Prisma.JsonNull,
    },
  });
  return { messages: [], pending: false, lastApply: null };
}

export async function ackLastApply(): Promise<void> {
  await prisma.siteContentAiChat.updateMany({
    where: { id: SITE_CONTENT_AI_CHAT_ID },
    data: { lastApply: Prisma.JsonNull },
  });
}

export async function getPendingJobContext(): Promise<{
  messages: SiteContentChatMessage[];
  content: SiteContent | null;
  userMessage: string | null;
} | null> {
  const row = await ensureSiteContentAiChat();
  if (!row.pending) return null;
  const messages = parseMessages(row.messages);
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const content =
    row.draftContent && typeof row.draftContent === "object"
      ? (row.draftContent as SiteContent)
      : null;
  return {
    messages: messages.filter((m, i) => {
      if (!lastUser) return true;
      return !(i === messages.length - 1 && m.role === "user");
    }),
    content,
    userMessage: lastUser?.content ?? null,
  };
}
