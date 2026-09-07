import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import {
  getAnthropicClient,
  recordAnthropicMessageUsage,
} from "@/lib/ai/clients";
import type { SiteContent } from "@/lib/siteContent/schema";

/** Leaf the model may rewrite; only applied when update === true. */
const updatableString = z.object({
  value: z.string(),
  update: z
    .boolean()
    .describe("true only if this field should replace the current value"),
});

export type SiteContentSectionId =
  | "landing-seo"
  | "hero-carousel"
  | "get-to-know"
  | "faqs"
  | "process"
  | "why-us"
  | "about"
  | "testimonials"
  | "service-areas";

const SECTION_IDS: SiteContentSectionId[] = [
  "landing-seo",
  "hero-carousel",
  "get-to-know",
  "faqs",
  "process",
  "why-us",
  "about",
  "testimonials",
  "service-areas",
];

export function isSiteContentSectionId(
  value: unknown
): value is SiteContentSectionId {
  return (
    typeof value === "string" &&
    (SECTION_IDS as string[]).includes(value)
  );
}

type SectionDef = {
  label: string;
  /** Slice of SiteContent sent to / returned for this section UI. */
  getSlice: (content: SiteContent) => unknown;
  /** Apply merged slice back onto full SiteContent. */
  setSlice: (content: SiteContent, slice: unknown) => SiteContent;
  /** Zod schema for AI structured output (update flags, no locked fields). */
  aiSchema: z.ZodType;
  /** Compact current JSON for the prompt (writable fields only). */
  promptSlice: (content: SiteContent) => unknown;
};

function applyUpdates(current: unknown, ai: unknown): unknown {
  if (ai == null) return current;

  if (
    typeof ai === "object" &&
    !Array.isArray(ai) &&
    ai !== null &&
    "update" in ai &&
    "value" in ai
  ) {
    const leaf = ai as { update: unknown; value: unknown };
    if (leaf.update === true) return leaf.value;
    return current;
  }

  if (Array.isArray(current)) {
    if (!Array.isArray(ai)) return current;
    return current.map((item, index) =>
      applyUpdates(item, ai[index] ?? item)
    );
  }

  if (
    typeof current === "object" &&
    current !== null &&
    !Array.isArray(current) &&
    typeof ai === "object" &&
    ai !== null &&
    !Array.isArray(ai)
  ) {
    const cur = current as Record<string, unknown>;
    const nextAi = ai as Record<string, unknown>;
    const out: Record<string, unknown> = { ...cur };
    for (const key of Object.keys(nextAi)) {
      if (!(key in cur)) continue;
      out[key] = applyUpdates(cur[key], nextAi[key]);
    }
    return out;
  }

  return current;
}

const landingSeoAiSchema = z.object({
  seo: z.object({
    title: updatableString,
    description: updatableString,
  }),
  services: z.object({
    heading: updatableString,
  }),
  projects: z.object({
    heading: updatableString,
  }),
});

const heroCarouselAiSchema = z.object({
  slides: z.array(
    z.object({
      tagline: updatableString,
      title: updatableString,
      description: updatableString,
    })
  ),
});

const getToKnowAiSchema = z.object({
  title: updatableString,
  heading: updatableString,
  description: updatableString,
  keyPoints: z.array(
    z.object({
      title: updatableString,
      desc: updatableString,
    })
  ),
});

const faqsAiSchema = z.object({
  faqs: z.array(
    z.object({
      question: updatableString,
      answer: updatableString,
    })
  ),
});

const processAiSchema = z.object({
  heading: updatableString,
  description: updatableString,
  list: z.array(
    z.object({
      title: updatableString,
      description: updatableString,
    })
  ),
});

const whyUsAiSchema = z.object({
  WhyUSData: z.array(
    z.object({
      title: updatableString,
      description: updatableString,
    })
  ),
  accomplishmentData: z.array(
    z.object({
      title: updatableString,
    })
  ),
});

const aboutAiSchema = z.object({
  seo: z.object({
    title: updatableString,
    description: updatableString,
  }),
  content: updatableString,
});

const testimonialsAiSchema = z.object({
  testimonialsData: z.array(
    z.object({
      feedback: updatableString,
    })
  ),
});

const serviceAreasAiSchema = z.object({
  serviceAreasData: z.array(
    z.object({
      title: updatableString,
      description: updatableString,
      content: updatableString,
    })
  ),
});

export const SECTION_DEFS: Record<SiteContentSectionId, SectionDef> = {
  "landing-seo": {
    label: "Landing SEO",
    getSlice: (c) => ({
      seo: {
        title: c.landingPage.seo.title,
        description: c.landingPage.seo.description,
        ogImage: c.landingPage.seo.ogImage,
        canonical: c.landingPage.seo.canonical,
      },
      services: c.landingPage.services,
      projects: c.landingPage.projects,
    }),
    setSlice: (c, slice) => {
      const s = slice as {
        seo: SiteContent["landingPage"]["seo"];
        services: SiteContent["landingPage"]["services"];
        projects: SiteContent["landingPage"]["projects"];
      };
      return {
        ...c,
        landingPage: {
          ...c.landingPage,
          seo: {
            ...c.landingPage.seo,
            title: s.seo.title,
            description: s.seo.description,
            // keep ogImage/canonical from full seo if present
            ogImage: s.seo.ogImage ?? c.landingPage.seo.ogImage,
            canonical: s.seo.canonical ?? c.landingPage.seo.canonical,
          },
          services: s.services,
          projects: s.projects,
        },
      };
    },
    aiSchema: landingSeoAiSchema,
    promptSlice: (c) => ({
      seo: {
        title: c.landingPage.seo.title,
        description: c.landingPage.seo.description,
      },
      services: c.landingPage.services,
      projects: c.landingPage.projects,
    }),
  },
  "hero-carousel": {
    label: "Hero carousel",
    getSlice: (c) => c.hero2,
    setSlice: (c, slice) => ({
      ...c,
      hero2: slice as SiteContent["hero2"],
    }),
    aiSchema: heroCarouselAiSchema,
    promptSlice: (c) => ({
      slides: c.hero2.slides.map(({ tagline, title, description }) => ({
        tagline,
        title,
        description,
      })),
    }),
  },
  "get-to-know": {
    label: "Get to know",
    getSlice: (c) => c.getToKnow,
    setSlice: (c, slice) => ({
      ...c,
      getToKnow: slice as SiteContent["getToKnow"],
    }),
    aiSchema: getToKnowAiSchema,
    promptSlice: (c) => ({
      title: c.getToKnow.title,
      heading: c.getToKnow.heading,
      description: c.getToKnow.description,
      keyPoints: c.getToKnow.keyPoints,
    }),
  },
  faqs: {
    label: "FAQs",
    getSlice: (c) => ({ faqs: c.faqs }),
    setSlice: (c, slice) => ({
      ...c,
      faqs: (slice as { faqs: SiteContent["faqs"] }).faqs,
    }),
    aiSchema: faqsAiSchema,
    promptSlice: (c) => ({ faqs: c.faqs }),
  },
  process: {
    label: "Process",
    getSlice: (c) => c.ourProcessData,
    setSlice: (c, slice) => ({
      ...c,
      ourProcessData: slice as SiteContent["ourProcessData"],
    }),
    aiSchema: processAiSchema,
    promptSlice: (c) => ({
      heading: c.ourProcessData.heading,
      description: c.ourProcessData.description,
      list: c.ourProcessData.list.map(({ title, description }) => ({
        title,
        description,
      })),
    }),
  },
  "why-us": {
    label: "Why us & stats",
    getSlice: (c) => ({
      WhyUSData: c.WhyUSData,
      accomplishmentData: c.accomplishmentData,
    }),
    setSlice: (c, slice) => {
      const s = slice as {
        WhyUSData: SiteContent["WhyUSData"];
        accomplishmentData: SiteContent["accomplishmentData"];
      };
      return {
        ...c,
        WhyUSData: s.WhyUSData,
        accomplishmentData: s.accomplishmentData,
      };
    },
    aiSchema: whyUsAiSchema,
    promptSlice: (c) => ({
      WhyUSData: c.WhyUSData.map(({ title, description }) => ({
        title,
        description,
      })),
      accomplishmentData: c.accomplishmentData.map(({ title }) => ({ title })),
    }),
  },
  about: {
    label: "About page",
    getSlice: (c) => c.aboutPage,
    setSlice: (c, slice) => ({
      ...c,
      aboutPage: slice as SiteContent["aboutPage"],
    }),
    aiSchema: aboutAiSchema,
    promptSlice: (c) => ({
      seo: {
        title: c.aboutPage.seo.title,
        description: c.aboutPage.seo.description,
      },
      content: c.aboutPage.content,
    }),
  },
  testimonials: {
    label: "Testimonials",
    getSlice: (c) => ({ testimonialsData: c.testimonialsData }),
    setSlice: (c, slice) => ({
      ...c,
      testimonialsData: (slice as { testimonialsData: SiteContent["testimonialsData"] })
        .testimonialsData,
    }),
    aiSchema: testimonialsAiSchema,
    promptSlice: (c) => ({
      testimonialsData: c.testimonialsData.map(({ feedback }) => ({
        feedback,
      })),
    }),
  },
  "service-areas": {
    label: "Service areas",
    getSlice: (c) => ({ serviceAreasData: c.serviceAreasData }),
    setSlice: (c, slice) => ({
      ...c,
      serviceAreasData: (
        slice as { serviceAreasData: SiteContent["serviceAreasData"] }
      ).serviceAreasData,
    }),
    aiSchema: serviceAreasAiSchema,
    promptSlice: (c) => ({
      serviceAreasData: c.serviceAreasData.map(
        ({ title, description, content }) => ({
          title,
          description,
          content,
        })
      ),
    }),
  },
};

/**
 * Merge AI output into the current full SiteContent for one section.
 * Only fields with update:true are written; locked/image fields stay from current.
 */
export function mergeSectionAiIntoContent(
  content: SiteContent,
  sectionId: SiteContentSectionId,
  aiOutput: unknown
): SiteContent {
  const def = SECTION_DEFS[sectionId];
  const currentSlice = def.getSlice(content);
  const promptShape = def.promptSlice(content);

  // Merge AI into the writable prompt shape, then reinject locked fields from currentSlice
  const updatedWritable = applyUpdates(promptShape, aiOutput);
  const mergedSlice = reinjectLocked(currentSlice, updatedWritable, sectionId);
  return def.setSlice(content, mergedSlice);
}

function reinjectLocked(
  currentSlice: unknown,
  updatedWritable: unknown,
  sectionId: SiteContentSectionId
): unknown {
  switch (sectionId) {
    case "landing-seo": {
      const cur = currentSlice as {
        seo: SiteContent["landingPage"]["seo"];
        services: { heading: string };
        projects: { heading: string };
      };
      const upd = updatedWritable as {
        seo: { title: string; description: string };
        services: { heading: string };
        projects: { heading: string };
      };
      return {
        seo: {
          ...cur.seo,
          title: upd.seo.title,
          description: upd.seo.description,
        },
        services: upd.services,
        projects: upd.projects,
      };
    }
    case "hero-carousel": {
      const cur = currentSlice as SiteContent["hero2"];
      const upd = updatedWritable as {
        slides: { tagline: string; title: string; description: string }[];
      };
      return {
        slides: cur.slides.map((slide, i) => ({
          ...slide,
          tagline: upd.slides[i]?.tagline ?? slide.tagline,
          title: upd.slides[i]?.title ?? slide.title,
          description: upd.slides[i]?.description ?? slide.description,
        })),
      };
    }
    case "get-to-know": {
      const cur = currentSlice as SiteContent["getToKnow"];
      const upd = updatedWritable as {
        title: string;
        heading: string;
        description: string;
        keyPoints: { title: string; desc: string }[];
      };
      return {
        ...cur,
        title: upd.title,
        heading: upd.heading,
        description: upd.description,
        keyPoints: cur.keyPoints.map((kp, i) => ({
          ...kp,
          title: upd.keyPoints[i]?.title ?? kp.title,
          desc: upd.keyPoints[i]?.desc ?? kp.desc,
        })),
      };
    }
    case "faqs": {
      const upd = updatedWritable as { faqs: SiteContent["faqs"] };
      return { faqs: upd.faqs };
    }
    case "process": {
      const cur = currentSlice as SiteContent["ourProcessData"];
      const upd = updatedWritable as {
        heading: string;
        description: string;
        list: { title: string; description: string }[];
      };
      return {
        heading: upd.heading,
        description: upd.description,
        list: cur.list.map((item, i) => ({
          ...item,
          title: upd.list[i]?.title ?? item.title,
          description: upd.list[i]?.description ?? item.description,
        })),
      };
    }
    case "why-us": {
      const cur = currentSlice as {
        WhyUSData: SiteContent["WhyUSData"];
        accomplishmentData: SiteContent["accomplishmentData"];
      };
      const upd = updatedWritable as {
        WhyUSData: { title: string; description: string }[];
        accomplishmentData: { title: string }[];
      };
      return {
        WhyUSData: cur.WhyUSData.map((item, i) => ({
          ...item,
          title: upd.WhyUSData[i]?.title ?? item.title,
          description: upd.WhyUSData[i]?.description ?? item.description,
        })),
        accomplishmentData: cur.accomplishmentData.map((item, i) => ({
          ...item,
          title: upd.accomplishmentData[i]?.title ?? item.title,
        })),
      };
    }
    case "about": {
      const cur = currentSlice as SiteContent["aboutPage"];
      const upd = updatedWritable as {
        seo: { title: string; description: string };
        content: string;
      };
      return {
        ...cur,
        seo: {
          ...cur.seo,
          title: upd.seo.title,
          description: upd.seo.description,
        },
        content: upd.content,
      };
    }
    case "testimonials": {
      const cur = currentSlice as {
        testimonialsData: SiteContent["testimonialsData"];
      };
      const upd = updatedWritable as {
        testimonialsData: { feedback: string }[];
      };
      return {
        testimonialsData: cur.testimonialsData.map((item, i) => ({
          ...item,
          feedback: upd.testimonialsData[i]?.feedback ?? item.feedback,
        })),
      };
    }
    case "service-areas": {
      const cur = currentSlice as {
        serviceAreasData: SiteContent["serviceAreasData"];
      };
      const upd = updatedWritable as {
        serviceAreasData: {
          title: string;
          description: string;
          content: string;
        }[];
      };
      return {
        serviceAreasData: cur.serviceAreasData.map((item, i) => ({
          ...item,
          title: upd.serviceAreasData[i]?.title ?? item.title,
          description: upd.serviceAreasData[i]?.description ?? item.description,
          content: upd.serviceAreasData[i]?.content ?? item.content,
        })),
      };
    }
    default:
      return currentSlice;
  }
}

export async function generateSiteContentSection(options: {
  sectionId: SiteContentSectionId;
  prompt: string;
  content: SiteContent;
}): Promise<SiteContent> {
  const def = SECTION_DEFS[options.sectionId];
  const prompt = options.prompt.trim();
  if (!prompt) throw new Error("Prompt is required");

  const { client, apiKeyId } = await getAnthropicClient();
  const current = def.promptSlice(options.content);

  const response = await client.messages.parse({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    system: `You update one Site Content section ("${def.label}") for a contractor marketing site.

Return the SAME structure as the current section JSON, but every writable string field is an object { "value": string, "update": boolean }.
Set update to true ONLY for fields the admin asked to change; leave update false (and keep the current value) for everything else.
Keep array lengths the same as current (same number of slides, FAQs, etc.).
Never invent image URLs, icons, phones, emails, or analytics IDs — those fields are not in your schema.`,
    messages: [
      {
        role: "user",
        content: `Current "${def.label}" section (writable fields only):
${JSON.stringify(current, null, 2)}

Admin request:
${prompt}

Return structured output with { value, update } for each field.`,
      },
    ],
    output_config: {
      format: zodOutputFormat(def.aiSchema),
    },
  });

  await recordAnthropicMessageUsage(apiKeyId, response.usage);

  const parsed = response.parsed_output;
  if (!parsed) throw new Error("AI returned empty response");

  return mergeSectionAiIntoContent(
    options.content,
    options.sectionId,
    parsed
  );
}
