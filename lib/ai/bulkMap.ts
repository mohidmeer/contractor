import type { BlogContentType } from "@/lib/blogSchema";
import type { ServiceBody } from "@/lib/serviceSchema";
import type { ProjectBody } from "@/lib/projectSchema";
import type { EstimateBody } from "@/lib/estimateSchema";

export type BulkEntityType = "blogs" | "services" | "projects" | "estimates";

export function parseBulkPrompts(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function mapBlogAiToCreatePayload(data: Record<string, unknown>): BlogContentType {
  const seo = (data.seo ?? {}) as Record<string, unknown>;
  const content = Array.isArray(data.content) ? data.content : [];

  return {
    title: String(data.title ?? ""),
    read_time: String(data.read_time ?? "5 min"),
    seo: {
      title: String(seo.title ?? data.title ?? ""),
      description: String(seo.description ?? ""),
      keywords: Array.isArray(seo.keywords)
        ? seo.keywords.filter((k): k is string => typeof k === "string")
        : [],
    },
    image: "",
    content: content.map((block) => {
      const item = (block ?? {}) as Record<string, unknown>;
      return {
        heading: String(item.heading ?? ""),
        paragraph:
          typeof item.paragraph === "string" ? item.paragraph : null,
        listItems: Array.isArray(item.listItems)
          ? (item.listItems as string[])
          : null,
        table: Array.isArray(item.table)
          ? (item.table as string[][])
          : null,
        quote: typeof item.quote === "string" ? item.quote : null,
      };
    }),
    status: "DRAFT",
  };
}

export function mapServiceAiToCreatePayload(
  data: Record<string, unknown>
): ServiceBody {
  const typeOfSolutions = (data.typeOfSolutions ?? {}) as Record<
    string,
    unknown
  >;
  const content = Array.isArray(data.content)
    ? data.content.filter((p): p is string => typeof p === "string" && Boolean(p.trim()))
    : [];

  return {
    slug: String(data.slug ?? ""),
    label: String(data.label ?? data.title ?? ""),
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    content: content.length ? content : [String(data.description ?? "Draft")],
    image: null,
    typeOfSolutions: {
      headings: String(typeOfSolutions.headings ?? "Solutions we offer"),
      types: Array.isArray(typeOfSolutions.types)
        ? typeOfSolutions.types.filter(
            (t): t is string => typeof t === "string" && Boolean(t.trim())
          )
        : [],
    },
    benefitsOFChoosing: Array.isArray(data.benefitsOFChoosing)
      ? (data.benefitsOFChoosing as ServiceBody["benefitsOFChoosing"])
      : [],
    faqs: Array.isArray(data.faqs)
      ? (data.faqs as ServiceBody["faqs"])
      : [],
    images: [],
    sortOrder:
      typeof data.sortOrder === "number" ? data.sortOrder : 0,
    categoryId: null,
    status: "DRAFT",
  };
}

export function mapProjectAiToCreatePayload(
  data: Record<string, unknown>
): ProjectBody {
  const content = Array.isArray(data.content)
    ? data.content.filter((p): p is string => typeof p === "string" && Boolean(p.trim()))
    : [];

  return {
    slug: String(data.slug ?? ""),
    label: String(data.label ?? data.title ?? ""),
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    content: content.length ? content : [String(data.description ?? "Draft")],
    image: null,
    location: typeof data.location === "string" ? data.location : null,
    duration: typeof data.duration === "string" ? data.duration : null,
    materials: Array.isArray(data.materials)
      ? data.materials.filter((m): m is string => typeof m === "string")
      : [],
    images: [],
    sortOrder:
      typeof data.sortOrder === "number" ? data.sortOrder : 0,
    status: "DRAFT",
  };
}

export function mapEstimateAiToCreatePayload(
  data: Record<string, unknown>
): EstimateBody {
  const items = Array.isArray(data.items) ? data.items : [];

  return {
    clientName: String(data.clientName ?? "Client"),
    clientEmail:
      typeof data.clientEmail === "string" ? data.clientEmail : "",
    clientPhone:
      typeof data.clientPhone === "string" ? data.clientPhone : "",
    title: String(data.title ?? "Estimate"),
    description:
      typeof data.description === "string" ? data.description : "",
    notes: typeof data.notes === "string" ? data.notes : "",
    youtubeUrl: "",
    images: [],
    status: "DRAFT",
    items: items.length
      ? items.map((item, index) => {
          const row = (item ?? {}) as Record<string, unknown>;
          return {
            name: String(row.name ?? `Item ${index + 1}`),
            description:
              typeof row.description === "string" ? row.description : null,
            quantity:
              typeof row.quantity === "number" && row.quantity > 0
                ? row.quantity
                : 1,
            unitPrice:
              typeof row.unitPrice === "number" ? row.unitPrice : 0,
            sortOrder:
              typeof row.sortOrder === "number" ? row.sortOrder : index,
          };
        })
      : [
          {
            name: "Line item",
            description: null,
            quantity: 1,
            unitPrice: 0,
            sortOrder: 0,
          },
        ],
  };
}

export function getBulkAiEndpoint(type: BulkEntityType) {
  switch (type) {
    case "blogs":
      return "/api/admin/ai/blogs";
    case "services":
      return "/api/admin/ai/services";
    case "projects":
      return "/api/admin/ai/projects";
    case "estimates":
      return "/api/admin/ai/estimates";
  }
}

export function getBulkCreateEndpoint(type: BulkEntityType) {
  switch (type) {
    case "blogs":
      return "/api/admin/blogs";
    case "services":
      return "/api/admin/services";
    case "projects":
      return "/api/admin/projects";
    case "estimates":
      return "/api/estimates";
  }
}

export function mapAiResultToCreatePayload(
  type: BulkEntityType,
  data: Record<string, unknown>
) {
  switch (type) {
    case "blogs":
      return mapBlogAiToCreatePayload(data);
    case "services":
      return mapServiceAiToCreatePayload(data);
    case "projects":
      return mapProjectAiToCreatePayload(data);
    case "estimates":
      return mapEstimateAiToCreatePayload(data);
  }
}
