import prisma from "@/lib/prisma";
import { generateBlogWithAi } from "@/lib/ai/blogs";
import { generateServiceWithAi } from "@/lib/ai/services";
import { generateProjectWithAi } from "@/lib/ai/projects";
import { generateEstimateWithAi } from "@/lib/ai/estimates";
import {
  type BulkEntityType,
  mapAiResultToCreatePayload,
} from "@/lib/ai/bulkMap";
import { BlogContentSchema, normalizeBlogContentBlocks } from "@/lib/blogSchema";
import {
  ServiceBodySchema,
  normalizeServiceBody,
} from "@/lib/serviceSchema";
import {
  ProjectBodySchema,
  normalizeProjectBody,
} from "@/lib/projectSchema";
import {
  EstimateBodySchema,
  normalizeEstimateBody,
} from "@/lib/estimateSchema";
import { toMediaPath } from "@/lib/media";
import { generateUniqueSlug, slugify } from "@/lib/slug";

export const MAX_BULK_PROMPTS = 20;

export type BulkWriteItemResult = {
  prompt: string;
  ok: boolean;
  id?: string;
  title?: string;
  error?: string;
};

export type BulkWriteResult = {
  entityType: BulkEntityType;
  results: BulkWriteItemResult[];
  summary: string;
};

async function generateForType(
  entityType: BulkEntityType,
  prompt: string
): Promise<Record<string, unknown>> {
  switch (entityType) {
    case "blogs":
      return (await generateBlogWithAi(prompt)) as unknown as Record<
        string,
        unknown
      >;
    case "services":
      return (await generateServiceWithAi(prompt)) as unknown as Record<
        string,
        unknown
      >;
    case "projects":
      return (await generateProjectWithAi(prompt)) as unknown as Record<
        string,
        unknown
      >;
    case "estimates":
      return (await generateEstimateWithAi(prompt)) as unknown as Record<
        string,
        unknown
      >;
  }
}

async function createDraft(
  entityType: BulkEntityType,
  data: Record<string, unknown>
): Promise<{ id: string; title: string }> {
  const payload = mapAiResultToCreatePayload(entityType, data);

  switch (entityType) {
    case "blogs": {
      const parsed = BlogContentSchema.parse(payload);
      const uniqueSlug = await generateUniqueSlug(
        "blog",
        slugify(parsed.title)
      );
      const created = await prisma.blog.create({
        data: {
          title: parsed.title,
          read_time: parsed.read_time,
          description: parsed.seo.description,
          seo_title: parsed.seo.title,
          seo_description: parsed.seo.description,
          slug: uniqueSlug,
          image: toMediaPath(parsed.image),
          content: normalizeBlogContentBlocks(parsed.content),
          status: "DRAFT",
        },
      });
      return { id: String(created.id), title: created.title };
    }
    case "services": {
      const parsed = ServiceBodySchema.parse(payload);
      const normalized = normalizeServiceBody(parsed);
      const uniqueSlug = await generateUniqueSlug(
        "service",
        slugify(normalized.slug) || slugify(normalized.title)
      );
      const created = await prisma.service.create({
        data: {
          slug: uniqueSlug,
          label: normalized.label,
          title: normalized.title,
          description: normalized.description,
          seo_title: normalized.seo_title,
          seo_description: normalized.seo_description,
          content: normalized.content,
          image: normalized.image,
          typeOfSolutions: normalized.typeOfSolutions,
          benefitsOFChoosing: normalized.benefitsOFChoosing,
          faqs: normalized.faqs,
          images: normalized.images,
          sortOrder: normalized.sortOrder,
          status: "DRAFT",
          categoryId: normalized.categoryId,
        },
      });
      return { id: String(created.id), title: created.title };
    }
    case "projects": {
      const parsed = ProjectBodySchema.parse(payload);
      const normalized = normalizeProjectBody(parsed);
      const uniqueSlug = await generateUniqueSlug(
        "project",
        slugify(normalized.slug) || slugify(normalized.title)
      );
      const created = await prisma.project.create({
        data: {
          slug: uniqueSlug,
          label: normalized.label,
          title: normalized.title,
          description: normalized.description,
          seo_title: normalized.seo_title,
          seo_description: normalized.seo_description,
          content: normalized.content,
          image: normalized.image,
          location: normalized.location,
          duration: normalized.duration,
          materials: normalized.materials,
          images: normalized.images,
          sortOrder: normalized.sortOrder,
          status: "DRAFT",
        },
      });
      return { id: String(created.id), title: created.title };
    }
    case "estimates": {
      const parsed = EstimateBodySchema.parse(payload);
      const normalized = normalizeEstimateBody(parsed);
      const created = await prisma.estimate.create({
        data: {
          clientName: normalized.clientName,
          clientEmail: normalized.clientEmail,
          clientPhone: normalized.clientPhone,
          title: normalized.title,
          description: normalized.description,
          notes: normalized.notes,
          youtubeUrl: normalized.youtubeUrl,
          images: normalized.images,
          status: "DRAFT",
          items: {
            create: normalized.items.map((item) => ({
              name: item.name,
              description: item.description,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              sortOrder: item.sortOrder,
            })),
          },
        },
      });
      return { id: String(created.id), title: created.title };
    }
  }
}

function formatSummary(
  entityType: BulkEntityType,
  results: BulkWriteItemResult[]
): string {
  const ok = results.filter((r) => r.ok);
  const fail = results.filter((r) => !r.ok);
  const label = entityType;
  const lines: string[] = [
    `### Bulk write (${label})`,
    "",
    `Created **${ok.length}** draft${ok.length === 1 ? "" : "s"}${
      fail.length ? `, **${fail.length}** failed` : ""
    }.`,
  ];
  if (ok.length) {
    lines.push("", "**Saved:**");
    for (const r of ok) {
      lines.push(`- ${r.title ?? "Draft"}${r.id ? ` (\`${r.id}\`)` : ""}`);
    }
  }
  if (fail.length) {
    lines.push("", "**Failed:**");
    for (const r of fail) {
      lines.push(`- ${r.prompt.slice(0, 80)}${r.prompt.length > 80 ? "…" : ""}: ${r.error ?? "Error"}`);
    }
  }
  return lines.join("\n");
}

/**
 * Generate + create DRAFT records for each prompt (sequential).
 * Shared by the Bulk Write UI and the Site Content AI chat agent.
 */
export async function runBulkAiWrite(options: {
  entityType: BulkEntityType;
  prompts: string[];
}): Promise<BulkWriteResult> {
  const prompts = options.prompts
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, MAX_BULK_PROMPTS);

  if (!prompts.length) {
    throw new Error("Add at least one prompt");
  }

  const results: BulkWriteItemResult[] = [];

  for (const prompt of prompts) {
    try {
      const generated = await generateForType(options.entityType, prompt);
      const created = await createDraft(options.entityType, generated);
      results.push({
        prompt,
        ok: true,
        id: created.id,
        title: created.title,
      });
    } catch (error) {
      results.push({
        prompt,
        ok: false,
        error: error instanceof Error ? error.message : "Failed",
      });
    }
  }

  return {
    entityType: options.entityType,
    results,
    summary: formatSummary(options.entityType, results),
  };
}
