/**
 * Coerce common malformed AI patches into allowlisted Site Content shapes
 * before sanitizeSiteContentPatch runs.
 */

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function parseMaybeJson(value: unknown): unknown {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return value;
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    return value;
  }
}

function normalizeSlideItem(item: unknown): Record<string, unknown> | null {
  if (typeof item === "string" && item.trim()) {
    return { title: item.trim() };
  }
  if (!isPlainObject(item)) return null;

  const out: Record<string, unknown> = { ...item };
  if (typeof out.title !== "string" || !out.title.trim()) {
    const alias =
      (typeof out.headline === "string" && out.headline) ||
      (typeof out.heading === "string" && out.heading) ||
      null;
    if (alias) out.title = alias;
  }
  delete out.headline;
  delete out.heading;
  return out;
}

function normalizeFaqItem(item: unknown): Record<string, unknown> | null {
  if (!isPlainObject(item)) return null;
  const out: Record<string, unknown> = { ...item };
  if (typeof out.question !== "string" && typeof out.q === "string") {
    out.question = out.q;
  }
  if (typeof out.answer !== "string" && typeof out.a === "string") {
    out.answer = out.a;
  }
  delete out.q;
  delete out.a;
  return out;
}

function normalizeSlidesArray(slides: unknown): unknown[] | null {
  if (!Array.isArray(slides)) return null;
  const items = slides
    .map(normalizeSlideItem)
    .filter((x): x is Record<string, unknown> => x != null);
  return items.length ? items : null;
}

/**
 * Returns a plain object patch ready for sanitize, or null if unusable.
 */
export function normalizeSiteContentPatch(
  raw: unknown
): Record<string, unknown> | null {
  let patch = parseMaybeJson(raw);
  if (!isPlainObject(patch)) return null;

  const next: Record<string, unknown> = { ...patch };

  // Removed landing hero — drop so we don't pretend it applied
  if (isPlainObject(next.landingPage)) {
    const lp = { ...next.landingPage };
    if ("hero" in lp) delete lp.hero;
    if (Object.keys(lp).length === 0) delete next.landingPage;
    else next.landingPage = lp;
  }

  // Top-level slides → hero2.slides
  if (Array.isArray(next.slides) && !isPlainObject(next.hero2)) {
    const slides = normalizeSlidesArray(next.slides);
    if (slides) next.hero2 = { slides };
    delete next.slides;
  } else if (Array.isArray(next.slides) && isPlainObject(next.hero2)) {
    const hero2 = { ...next.hero2 };
    if (!Array.isArray(hero2.slides)) {
      const slides = normalizeSlidesArray(next.slides);
      if (slides) hero2.slides = slides;
    }
    next.hero2 = hero2;
    delete next.slides;
  }

  // hero2 as bare slide array
  if (Array.isArray(next.hero2)) {
    const slides = normalizeSlidesArray(next.hero2);
    if (slides) next.hero2 = { slides };
    else delete next.hero2;
  }

  if (isPlainObject(next.hero2)) {
    const hero2 = { ...next.hero2 };
    if (Array.isArray(hero2.slides)) {
      const slides = normalizeSlidesArray(hero2.slides);
      if (slides) hero2.slides = slides;
      else delete hero2.slides;
    }
    if (Object.keys(hero2).length === 0) delete next.hero2;
    else next.hero2 = hero2;
  }

  // FAQ aliases
  if (Array.isArray(next.faqs)) {
    const faqs = next.faqs
      .map(normalizeFaqItem)
      .filter((x): x is Record<string, unknown> => x != null);
    if (faqs.length) next.faqs = faqs;
    else delete next.faqs;
  }

  return Object.keys(next).length > 0 ? next : null;
}
