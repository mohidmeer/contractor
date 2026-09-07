import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import {
  getAnthropicClient,
  recordAnthropicMessageUsage,
} from "@/lib/ai/clients";
import type { SiteContent } from "@/lib/siteContent/schema";
import {
  ALLOWLIST_PROMPT,
  describePatchSections,
  sanitizeSiteContentPatch,
} from "./allowlist";
import { mergeSiteContentPatch } from "./merge";
import {
  SiteContentAgentOutputSchema,
  type SiteContentAgentOutput,
  type SiteContentChatMessage,
} from "./schema";

const MAX_HISTORY = 12;
const MAX_MESSAGE_LEN = 2000;

export function normalizeChatHistory(
  history: unknown
): SiteContentChatMessage[] {
  if (!Array.isArray(history)) return [];
  const out: SiteContentChatMessage[] = [];
  for (const item of history) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if (
      (role === "user" || role === "assistant") &&
      typeof content === "string" &&
      content.trim()
    ) {
      out.push({
        role,
        content: content.trim().slice(0, MAX_MESSAGE_LEN),
      });
    }
  }
  return out.slice(-MAX_HISTORY);
}

function buildSystemPrompt(siteName: string) {
  return `You are an admin assistant for "${siteName}" Site Content editing.

Your job: help the admin update marketing and SEO copy on the public site.
You ONLY edit Site Content (homepage/marketing JSON). Never blogs, services, projects, or estimates.

Workflow:
1. If the request is vague, set intent to "clarify" and ask short questions: which sections, tone, what to change vs leave alone.
2. When scope is clear, set intent to "apply", put a sparse JSON patch in "patch", and confirm briefly in "reply".
3. Prefer small targeted patches. For array sections (faqs, slides, process steps, why-us, testimonials, service areas), return the FULL array for that section when editing it, with only allowlisted fields filled; locked fields are restored server-side.
4. Never invent phones, emails, addresses, URLs, image paths, icons, analytics IDs, or slugs.

Formatting:
- Write "reply" in Markdown (headings, bold, bullet lists, numbered lists, short paragraphs).
- Keep replies scannable for an admin — not walls of plain text.

${ALLOWLIST_PROMPT}

When intent is "clarify", patch must be null.
When intent is "apply", patch must be a non-empty object using the same top-level keys as Site Content (landingPage, faqs, etc.).`;
}

function summarizeContentForPrompt(content: SiteContent) {
  // Compact summary so the model knows current copy without huge token waste
  return {
    siteName: content.siteName,
    landingPage: {
      seo: {
        title: content.landingPage.seo.title,
        description: content.landingPage.seo.description,
      },
      hero: {
        title: content.landingPage.hero.title,
        description: content.landingPage.hero.description,
        ctaText: content.landingPage.hero.ctaText,
      },
      services: content.landingPage.services,
      projects: content.landingPage.projects,
    },
    hero2: {
      slides: content.hero2.slides.map(({ tagline, title, description }) => ({
        tagline,
        title,
        description,
      })),
    },
    getToKnow: {
      title: content.getToKnow.title,
      heading: content.getToKnow.heading,
      description: content.getToKnow.description,
      keyPoints: content.getToKnow.keyPoints,
    },
    faqs: content.faqs,
    ourProcessData: {
      heading: content.ourProcessData.heading,
      description: content.ourProcessData.description,
      list: content.ourProcessData.list.map(({ title, description }) => ({
        title,
        description,
      })),
    },
    WhyUSData: content.WhyUSData.map(({ title, description }) => ({
      title,
      description,
    })),
    accomplishmentData: content.accomplishmentData.map(({ title, number }) => ({
      title,
      number,
    })),
    aboutPage: {
      seo: {
        title: content.aboutPage.seo.title,
        description: content.aboutPage.seo.description,
      },
      content: content.aboutPage.content,
    },
    FooterData: content.FooterData,
    testimonialsData: content.testimonialsData,
    serviceAreasData: content.serviceAreasData.map(
      ({ name, title, description, content: body }) => ({
        name,
        title,
        description,
        content: body.slice(0, 280),
      })
    ),
  };
}

export type SiteContentAgentResult = {
  intent: "clarify" | "apply";
  reply: string;
  patch: Record<string, unknown> | null;
  merged: SiteContent | null;
  sections: string[];
  history: SiteContentChatMessage[];
};

export async function runSiteContentAgent(options: {
  message: string;
  history?: unknown;
  content: SiteContent;
}): Promise<SiteContentAgentResult> {
  const message = options.message.trim().slice(0, MAX_MESSAGE_LEN);
  if (!message) {
    throw new Error("Message is required");
  }

  const history = normalizeChatHistory(options.history);
  const { client, apiKeyId } = await getAnthropicClient();

  const messages: { role: "user" | "assistant"; content: string }[] = [
    ...history.map((h) => ({ role: h.role, content: h.content })),
    {
      role: "user",
      content: `Current Site Content draft (JSON summary — protected fields omitted or truncated):
${JSON.stringify(summarizeContentForPrompt(options.content), null, 2)}

Admin message:
${message}`,
    },
  ];

  const response = await client.messages.parse({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    system: buildSystemPrompt(options.content.siteName),
    messages,
    output_config: {
      format: zodOutputFormat(SiteContentAgentOutputSchema),
    },
  });

  await recordAnthropicMessageUsage(apiKeyId, response.usage);

  const parsed = response.parsed_output as SiteContentAgentOutput | null;
  if (!parsed) {
    throw new Error("AI returned empty response");
  }

  const nextHistory: SiteContentChatMessage[] = [
    ...history,
    { role: "user" as const, content: message },
    { role: "assistant" as const, content: parsed.reply },
  ].slice(-MAX_HISTORY);

  if (parsed.intent === "clarify" || !parsed.patch) {
    return {
      intent: "clarify",
      reply: parsed.reply,
      patch: null,
      merged: null,
      sections: [],
      history: nextHistory,
    };
  }

  const sanitized = sanitizeSiteContentPatch(parsed.patch);
  if (!sanitized) {
    return {
      intent: "clarify",
      reply:
        parsed.reply +
        "\n\n(I could not produce an allowed content patch yet. Please specify which marketing sections to update.)",
      patch: null,
      merged: null,
      sections: [],
      history: nextHistory,
    };
  }

  const merged = mergeSiteContentPatch(options.content, sanitized);
  const sections = describePatchSections(sanitized);

  return {
    intent: "apply",
    reply: parsed.reply,
    patch: sanitized,
    merged,
    sections,
    history: nextHistory,
  };
}
