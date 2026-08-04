import prisma from "@/lib/prisma";
import { siteName } from "@/data";
import {
  recordTokenUsage,
  resolveChatbotApiKey,
  SETTING_ID,
} from "@/lib/apiKeys";
import {
  completeChat,
  type ChatMessage,
} from "@/lib/chatbot/client";

const MAX_HISTORY = 12;
const MAX_MESSAGE_LEN = 2000;

function normalizeHistory(history: unknown): ChatMessage[] {
  if (!Array.isArray(history)) return [];
  const out: ChatMessage[] = [];
  for (const item of history) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (
      (role === "user" || role === "assistant") &&
      typeof content === "string" &&
      content.trim()
    ) {
      out.push({ role, content: content.trim().slice(0, MAX_MESSAGE_LEN) });
    }
  }
  return out.slice(-MAX_HISTORY);
}

async function buildSystemPrompt(ownerPrompt: string | null | undefined) {
  const [services, projects] = await Promise.all([
    prisma.service.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
      select: { title: true, label: true },
      take: 80,
    }),
    prisma.project.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [{ sortOrder: "asc" }, { title: "asc" }],
      select: { title: true, label: true },
      take: 40,
    }),
  ]);

  const serviceLines =
    services.length > 0
      ? services
          .map((s) => `- ${s.title || s.label}`)
          .join("\n")
      : "- (No published services listed yet)";

  const projectLines =
    projects.length > 0
      ? projects
          .map((p) => `- ${p.title || p.label}`)
          .join("\n")
      : "- (No published projects listed yet)";

  const ownerBlock =
    ownerPrompt?.trim() != null && ownerPrompt.trim() !== ""
      ? `\nOwner instructions (follow carefully):\n${ownerPrompt.trim()}\n`
      : "";

  return `You are the helpful website chatbot for "${siteName}", a professional contractor business.

Goals:
- Answer questions about the company’s services, projects, process, and how to get started.
- Be concise, friendly, and trustworthy. Avoid inventing prices, guarantees, licenses, or schedules you do not know.
- When the visitor is ready to move forward, encourage them to request a quote or book a free consultation.
- Prefer these CTAs: Request a Quote (/contact) and Free Consultation (home page form at /).

Published services:
${serviceLines}

Published projects:
${projectLines}
${ownerBlock}
If you are unsure, say so and invite them to contact the team.`;
}

export async function runChatbot(params: {
  message: string;
  history?: unknown;
}): Promise<{ reply: string }> {
  const message = params.message?.trim() ?? "";
  if (!message) {
    throw new Error("Message is required");
  }
  if (message.length > MAX_MESSAGE_LEN) {
    throw new Error(`Message must be under ${MAX_MESSAGE_LEN} characters`);
  }

  const key = await resolveChatbotApiKey();
  const setting = await prisma.setting.findUnique({
    where: { id: SETTING_ID },
  });
  const systemPrompt = await buildSystemPrompt(setting?.ownerPrompt);
  const history = normalizeHistory(params.history);
  const messages: ChatMessage[] = [
    ...history,
    { role: "user", content: message },
  ];

  const result = await completeChat({
    apiKey: key.apiKey,
    systemPrompt,
    messages,
  });

  await recordTokenUsage(key.id, result.inputTokens, result.outputTokens);

  return { reply: result.reply };
}
