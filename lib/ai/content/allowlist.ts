/**
 * Server-enforced allowlist for Site Content AI patches.
 * Only marketing/SEO copy paths are writable; identity/contact/media stay locked.
 */

/** Leaf paths the agent may set (dot notation). */
export const ALLOWED_LEAF_PATHS = new Set([
  "landingPage.seo.title",
  "landingPage.seo.description",
  "landingPage.services.heading",
  "landingPage.projects.heading",

  "servicesPage.seo.title",
  "servicesPage.seo.description",
  "projectsPage.seo.title",
  "projectsPage.seo.description",
  "aboutPage.seo.title",
  "aboutPage.seo.description",
  "aboutPage.content",
  "contactPage.seo.title",
  "contactPage.seo.description",
  "contactPage.form.heading",
  "contactPage.form.messagePlaceholder",
  "blogPage.seo.title",
  "blogPage.seo.description",
  "serviceAreaPage.seo.title",
  "serviceAreaPage.seo.description",

  "getToKnow.title",
  "getToKnow.heading",
  "getToKnow.description",

  "ourProcessData.heading",
  "ourProcessData.description",

  "FooterData.tagline",
]);

/** Array roots the agent may replace wholesale, with allowed item fields. */
export const ALLOWED_ARRAY_FIELDS: Record<string, Set<string>> = {
  faqs: new Set(["question", "answer"]),
  "hero2.slides": new Set(["tagline", "title", "description"]),
  "heroBarData": new Set(["label"]),
  "getToKnow.keyPoints": new Set(["title", "desc"]),
  "ourProcessData.list": new Set(["title", "description"]),
  WhyUSData: new Set(["title", "description"]),
  accomplishmentData: new Set(["title"]),
  serviceAreasData: new Set(["title", "description", "content"]),
  testimonialsData: new Set(["feedback"]),
};

export const ALLOWLIST_PROMPT = `Editable fields (ONLY these):
- landingPage.seo.title/description; services/projects headings
- Page SEO title/description for services, projects, about, contact, blog, serviceArea (never ogImage or canonical)
- aboutPage.content; contactPage.form.heading/messagePlaceholder
- getToKnow title/heading/description/keyPoints (title+desc only)
- faqs (question+answer)
- Homepage hero carousel is hero2.slides (tagline/title/description only). There is NO landingPage.hero.
  Example patch:
  { "hero2": { "slides": [{ "tagline": "...", "title": "...", "description": "..." }] } }
  Return the FULL slides array when editing carousel copy. Images/backgroundImage are locked server-side.
- heroBarData labels only; ourProcessData heading/description/list title+description
- WhyUSData title+description; accomplishmentData titles only (never numbers)
- FooterData.tagline; serviceAreasData title/description/content; testimonialsData feedback only

NEVER change: siteName, siteUrl, siteLogo, analytics IDs, justCall, enable_estimates,
contactInfo (phone/email/address/map/hours), socialLinks, licenses, any images/URLs/canonicals,
icons, service area name/href/image, testimonial name/role, accomplishment numbers, static_assets, bussinessType.
NEVER use landingPage.hero (removed). Use hero2.slides for homepage hero headlines.`;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function sanitizeArrayItem(
  item: unknown,
  allowedFields: Set<string>
): Record<string, unknown> | null {
  if (!isPlainObject(item)) return null;
  const out: Record<string, unknown> = {};
  for (const key of Object.keys(item)) {
    if (!allowedFields.has(key)) continue;
    const v = item[key];
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
      out[key] = v;
    }
  }
  return Object.keys(out).length > 0 ? out : null;
}

/**
 * Strip any keys not on the allowlist. Returns a sparse patch or null if empty.
 */
export function sanitizeSiteContentPatch(
  patch: unknown
): Record<string, unknown> | null {
  if (!isPlainObject(patch)) return null;

  function walk(
    node: Record<string, unknown>,
    pathPrefix: string
  ): Record<string, unknown> | null {
    const out: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(node)) {
      const path = pathPrefix ? `${pathPrefix}.${key}` : key;

      if (ALLOWED_ARRAY_FIELDS[path] && Array.isArray(value)) {
        const fields = ALLOWED_ARRAY_FIELDS[path];
        const items = value
          .map((item) => sanitizeArrayItem(item, fields))
          .filter((item): item is Record<string, unknown> => item != null);
        if (items.length > 0) out[key] = items;
        continue;
      }

      if (isPlainObject(value)) {
        // Nested array under this object (e.g. hero2.slides, getToKnow.keyPoints)
        const nested: Record<string, unknown> = {};
        let has = false;
        for (const [nk, nv] of Object.entries(value)) {
          const childPath = `${path}.${nk}`;
          if (ALLOWED_ARRAY_FIELDS[childPath] && Array.isArray(nv)) {
            const fields = ALLOWED_ARRAY_FIELDS[childPath];
            const items = nv
              .map((item) => sanitizeArrayItem(item, fields))
              .filter((item): item is Record<string, unknown> => item != null);
            if (items.length > 0) {
              nested[nk] = items;
              has = true;
            }
            continue;
          }
          if (isPlainObject(nv)) {
            const child = walk(nv, childPath);
            if (child) {
              nested[nk] = child;
              has = true;
            }
            continue;
          }
          if (
            ALLOWED_LEAF_PATHS.has(childPath) &&
            (typeof nv === "string" ||
              typeof nv === "number" ||
              typeof nv === "boolean")
          ) {
            nested[nk] = nv;
            has = true;
          }
        }
        if (has) out[key] = nested;
        continue;
      }

      if (
        ALLOWED_LEAF_PATHS.has(path) &&
        (typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean")
      ) {
        out[key] = value;
      }
    }

    return Object.keys(out).length > 0 ? out : null;
  }

  return walk(patch, "");
}

/** Top-level Site Content keys → editor CollapsibleSection ids. */
export const PATCH_KEY_TO_SECTION_ID: Record<string, string> = {
  heroBarData: "landing-seo",
  servicesPage: "landing-seo",
  projectsPage: "landing-seo",
  blogPage: "landing-seo",
  serviceAreaPage: "landing-seo",
  contactPage: "landing-seo",
  hero2: "hero-carousel",
  getToKnow: "get-to-know",
  faqs: "faqs",
  ourProcessData: "process",
  WhyUSData: "why-us",
  accomplishmentData: "why-us",
  aboutPage: "about",
  testimonialsData: "testimonials",
  serviceAreasData: "service-areas",
  FooterData: "brand",
};

/** Human-readable section names touched by a sanitized patch. */
export function describePatchSections(
  patch: Record<string, unknown> | null
): string[] {
  if (!patch) return [];
  const labels: string[] = [];
  const map: Record<string, string> = {
    hero2: "Hero carousel",
    heroBarData: "Hero bar",
    getToKnow: "Get to know",
    faqs: "FAQs",
    ourProcessData: "Process",
    WhyUSData: "Why us",
    accomplishmentData: "Stats labels",
    aboutPage: "About",
    contactPage: "Contact page",
    servicesPage: "Services SEO",
    projectsPage: "Projects SEO",
    blogPage: "Blog SEO",
    serviceAreaPage: "Service areas SEO",
    serviceAreasData: "Service areas copy",
    testimonialsData: "Testimonials",
    FooterData: "Footer",
  };

  for (const key of Object.keys(patch)) {
    if (key === "landingPage" && isPlainObject(patch.landingPage)) {
      const lp = patch.landingPage;
      if ("seo" in lp || "services" in lp || "projects" in lp) {
        labels.push("Landing SEO");
      }
      continue;
    }
    labels.push(map[key] ?? key);
  }
  return labels;
}

/** Unique CollapsibleSection ids to expand after an AI apply. */
export function describePatchSectionIds(
  patch: Record<string, unknown> | null
): string[] {
  if (!patch) return [];
  const ids = new Set<string>();
  for (const key of Object.keys(patch)) {
    if (key === "landingPage" && isPlainObject(patch.landingPage)) {
      ids.add("landing-seo");
      continue;
    }
    const id = PATCH_KEY_TO_SECTION_ID[key];
    if (id) ids.add(id);
  }
  return [...ids];
}
