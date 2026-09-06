import {
  SiteContentSchema,
  type SiteContent,
} from "@/lib/siteContent/schema";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

/**
 * When applying list patches that only contain allowlisted fields,
 * preserve locked fields (icons, images, names, etc.) from the current items.
 */
export function mergeArrayPreservingLocked(
  current: Record<string, unknown>[],
  patched: Record<string, unknown>[],
  lockedKeys: string[]
): Record<string, unknown>[] {
  return patched.map((item, index) => {
    const prev = current[index] ?? {};
    const next: Record<string, unknown> = { ...item };
    for (const key of lockedKeys) {
      if (key in prev) next[key] = prev[key];
    }
    return next;
  });
}

/**
 * After sanitize, reinject locked array fields from the live document
 * so SiteContentSchema still validates (icons/images/names required).
 */
export function reinjectLockedArrayFields(
  base: SiteContent,
  patch: Record<string, unknown>
): Record<string, unknown> {
  const next = structuredClone(patch);

  if (Array.isArray(next.heroBarData)) {
    next.heroBarData = mergeArrayPreservingLocked(
      base.heroBarData as unknown as Record<string, unknown>[],
      next.heroBarData as Record<string, unknown>[],
      ["icon"]
    );
  }

  if (isPlainObject(next.hero2) && Array.isArray(next.hero2.slides)) {
    next.hero2.slides = mergeArrayPreservingLocked(
      base.hero2.slides as unknown as Record<string, unknown>[],
      next.hero2.slides as Record<string, unknown>[],
      ["backgroundImage"]
    );
  }

  if (
    isPlainObject(next.ourProcessData) &&
    Array.isArray(next.ourProcessData.list)
  ) {
    next.ourProcessData.list = mergeArrayPreservingLocked(
      base.ourProcessData.list as unknown as Record<string, unknown>[],
      next.ourProcessData.list as Record<string, unknown>[],
      ["icon"]
    );
  }

  if (Array.isArray(next.WhyUSData)) {
    next.WhyUSData = mergeArrayPreservingLocked(
      base.WhyUSData as unknown as Record<string, unknown>[],
      next.WhyUSData as Record<string, unknown>[],
      ["icon"]
    );
  }

  if (Array.isArray(next.accomplishmentData)) {
    next.accomplishmentData = mergeArrayPreservingLocked(
      base.accomplishmentData as unknown as Record<string, unknown>[],
      next.accomplishmentData as Record<string, unknown>[],
      ["number"]
    );
  }

  if (Array.isArray(next.serviceAreasData)) {
    next.serviceAreasData = mergeArrayPreservingLocked(
      base.serviceAreasData as unknown as Record<string, unknown>[],
      next.serviceAreasData as Record<string, unknown>[],
      ["name", "href", "image"]
    );
  }

  if (Array.isArray(next.testimonialsData)) {
    next.testimonialsData = mergeArrayPreservingLocked(
      base.testimonialsData as unknown as Record<string, unknown>[],
      next.testimonialsData as Record<string, unknown>[],
      ["name", "role"]
    );
  }

  return next;
}

/**
 * Deep-merge an allowlisted patch into current SiteContent.
 * Arrays in the patch replace the target array wholesale.
 */
export function mergeSiteContentPatch(
  base: SiteContent,
  patch: Record<string, unknown>
): SiteContent {
  function mergeValue(current: unknown, incoming: unknown): unknown {
    if (Array.isArray(incoming)) {
      return incoming;
    }
    if (isPlainObject(incoming) && isPlainObject(current)) {
      const out: Record<string, unknown> = { ...current };
      for (const [key, value] of Object.entries(incoming)) {
        out[key] = mergeValue(current[key], value);
      }
      return out;
    }
    return incoming;
  }

  const withLocked = reinjectLockedArrayFields(base, patch);
  const merged = mergeValue(
    structuredClone(base) as unknown as Record<string, unknown>,
    withLocked
  );

  return SiteContentSchema.parse(merged);
}
