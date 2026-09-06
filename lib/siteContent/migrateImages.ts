import { resolveImagePathForSeed } from "@/lib/uploadLocalMedia";
import type { SiteContent } from "./schema";

/** Only rewrite these keys (and nested keys with the same names). */
const IMAGE_KEYS = new Set([
  "ogImage",
  "backgroundImage",
  "image",
  "siteLogo",
  "image1_url",
  "image2_url",
  "image3_url",
  "image4_url",
]);

function isImageFilePath(value: string): boolean {
  if (!value.trim()) return false;
  if (/^https?:\/\//i.test(value)) return false;
  return (
    value.startsWith("uploads/") ||
    value.startsWith("media/") ||
    /\.(jpe?g|png|webp|gif|svg|avif)$/i.test(value)
  );
}

async function rewriteValue(key: string, value: unknown): Promise<unknown> {
  if (typeof value === "string") {
    if (IMAGE_KEYS.has(key) && isImageFilePath(value)) {
      const resolved = await resolveImagePathForSeed(value);
      return resolved ?? value;
    }
    return value;
  }

  if (Array.isArray(value)) {
    return Promise.all(value.map((item, i) => rewriteValue(String(i), item)));
  }

  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = await rewriteValue(k, v);
    }
    return out;
  }

  return value;
}

/** Copy public brand images into uploads/ and rewrite image paths inside SiteContent. */
export async function migrateSiteContentImages(
  content: SiteContent
): Promise<SiteContent> {
  return (await rewriteValue("root", content)) as SiteContent;
}
