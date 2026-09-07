import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import {
  getAnthropicClient,
  recordAnthropicMessageUsage,
} from "@/lib/ai/clients";
import type { SiteContent } from "@/lib/siteContent/schema";
import type { BulkEntityType } from "@/lib/ai/bulkMap";
import {
  ALLOWLIST_PROMPT,
  describePatchSectionIds,
  describePatchSections,
  sanitizeSiteContentPatch,
} from "./allowlist";
import { mergeSiteContentPatch } from "./merge";
import { normalizeSiteContentPatch } from "./normalizePatch";
import {
  SiteContentAgentOutputSchema,
  type SiteContentAgentOutput,
  type SiteContentChatMessage,
} from "./schema";

const MAX_HISTORY = 12;
const MAX_MESSAGE_LEN = 2000;

const PATCH_FAIL_REPLY = `I couldn't apply that to the editor — the content patch was empty or not allowlisted.

For the homepage hero carousel, patch must look like:
\`\`\`json
{ "hero2": { "slides": [{ "tagline": "...", "title": "...", "description": "..." }] } }
\`\`\`
(Use the full slides array. Images stay locked.)

Other sections use keys like \`faqs\`, \`getToKnow\`, \`ourProcessData\`, \`WhyUSData\`, \`landingPage.seo\`. Say which section to update and I'll try again.`;

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
  return `You are an admin assistant for "${siteName}".

You have TWO jobs:
1) Site Content — update allowlisted marketing/SEO copy on the public site (homepage JSON).
2) Bulk write — create DRAFT database records for blogs, services, projects, or estimates from a list of prompts.

=== Site Content (intent: apply | clarify) ===
- Prefer intent "apply" when the admin asked for concrete copy changes and scope is clear enough. Put a sparse allowlisted JSON patch in "patch". Set bulkWrite to null.
- Use "clarify" ONLY when you need a real follow-up question (which sections, tone, what to change).
- CRITICAL: Never claim you updated the editor or say "Hit Save All" unless "patch" is a non-empty allowlisted object. The UI only updates forms when sanitize accepts the patch.
- Homepage hero = hero2.slides (carousel). There is NO landingPage.hero. For "hero headline" requests, patch hero2.slides.
- Prefer small targeted patches. For array sections (faqs, slides, process steps, why-us, testimonials, service areas), return the FULL array for that section when editing it, with only allowlisted fields filled; locked fields are restored server-side.
- Never invent phones, emails, addresses, URLs, image paths, icons, analytics IDs, or slugs.

${ALLOWLIST_PROMPT}

=== Bulk write (intent: bulk_write) ===
- When the admin wants new blogs/services/projects/estimates created as drafts, use intent "bulk_write".
- Set patch to null. Set bulkWrite.entityType and bulkWrite.prompts (one concrete generation brief per draft).
- If entity type or the list of items is unclear, use "clarify" instead.
- Do not use bulk_write for homepage/marketing Site Content edits.

=== Output rules ===
- Write "reply" in Markdown (headings, bold, lists). Keep it scannable.
- clarify → patch null, bulkWrite null
- apply → non-empty allowlisted patch, bulkWrite null; reply confirms what was applied to the editor (admin still clicks Save all)
- bulk_write → patch null, non-empty bulkWrite.prompts`;
}

function summarizeContentForPrompt(content: SiteContent) {
  return {
    siteName: content.siteName,
    landingPage: {
      seo: {
        title: content.landingPage.seo.title,
        description: content.landingPage.seo.description,
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

function trySanitizePatch(raw: unknown): Record<string, unknown> | null {
  const normalized = normalizeSiteContentPatch(raw);
  if (!normalized) return null;
  return sanitizeSiteContentPatch(normalized);
}

export type SiteContentAgentBulkWrite = {
  entityType: BulkEntityType;
  prompts: string[];
};

export type SiteContentAgentResult = {
  intent: "clarify" | "apply" | "bulk_write";
  reply: string;
  patch: Record<string, unknown> | null;
  bulkWrite: SiteContentAgentBulkWrite | null;
  merged: SiteContent | null;
  sections: string[];
  sectionIds: string[];
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

  let parsed = response.parsed_output as SiteContentAgentOutput | null;
  if (!parsed) {
    throw new Error("AI returned empty response");
  }

  const withHistory = (reply: string): SiteContentChatMessage[] =>
    [
      ...history,
      { role: "user" as const, content: message },
      { role: "assistant" as const, content: reply },
    ].slice(-MAX_HISTORY);

  const clarify = (reply: string): SiteContentAgentResult => ({
    intent: "clarify",
    reply,
    patch: null,
    bulkWrite: null,
    merged: null,
    sections: [],
    sectionIds: [],
    history: withHistory(reply),
  });

  if (parsed.intent === "bulk_write") {
    const entityType = parsed.bulkWrite?.entityType;
    const prompts = (parsed.bulkWrite?.prompts ?? [])
      .map((p) => p.trim())
      .filter(Boolean)
      .slice(0, 20);

    if (
      !entityType ||
      !["blogs", "services", "projects", "estimates"].includes(entityType) ||
      prompts.length === 0
    ) {
      return clarify(
        "I need a clear entity type and at least one prompt to bulk-write drafts. Which should I create — blogs, services, projects, or estimates — and what should each cover?"
      );
    }

    return {
      intent: "bulk_write",
      reply: parsed.reply,
      patch: null,
      bulkWrite: { entityType, prompts },
      merged: null,
      sections: [],
      sectionIds: [],
      history: withHistory(parsed.reply),
    };
  }

  if (parsed.intent === "clarify" || !parsed.patch) {
    return clarify(parsed.reply);
  }

  let sanitized = trySanitizePatch(parsed.patch);

  // One repair retry if apply patch was empty after normalize+sanitize
  if (!sanitized) {
    const rejected = JSON.stringify(parsed.patch).slice(0, 4000);
    const repair = await client.messages.parse({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
      system: buildSystemPrompt(options.content.siteName),
      messages: [
        ...messages,
        {
          role: "assistant",
          content: JSON.stringify({
            intent: parsed.intent,
            reply: parsed.reply,
            patch: parsed.patch,
            bulkWrite: null,
          }),
        },
        {
          role: "user",
          content: `Your previous patch was rejected (empty after allowlist sanitize). Rewrite with intent "apply" and a valid allowlisted patch only.

Rejected patch JSON:
${rejected}

Rules:
- Homepage hero → hero2.slides with FULL array of { tagline, title, description }
- Never landingPage.hero
- Never claim success without a valid patch
- Set bulkWrite to null`,
        },
      ],
      output_config: {
        format: zodOutputFormat(SiteContentAgentOutputSchema),
      },
    });

    await recordAnthropicMessageUsage(apiKeyId, repair.usage);
    const repaired = repair.parsed_output as SiteContentAgentOutput | null;
    if (repaired?.intent === "apply" && repaired.patch) {
      parsed = repaired;
      sanitized = trySanitizePatch(repaired.patch);
    }
  }

  if (!sanitized) {
    return clarify(PATCH_FAIL_REPLY);
  }

  const merged = mergeSiteContentPatch(options.content, sanitized);
  const sections = describePatchSections(sanitized);
  const sectionIds = describePatchSectionIds(sanitized);
  const reply = parsed.reply.trim() || `Updated: ${sections.join(", ") || "site content"}. Review the forms and click Save all.`;

  return {
    intent: "apply",
    reply,
    patch: sanitized,
    bulkWrite: null,
    merged,
    sections,
    sectionIds,
    history: withHistory(reply),
  };
}
