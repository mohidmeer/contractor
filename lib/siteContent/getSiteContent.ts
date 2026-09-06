import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";
import { SiteContentSchema, SITE_CONTENT_ID, type SiteContent } from "./schema";
import { siteContentFromStaticModule } from "./fromStatic";

async function loadSiteContentUncached(): Promise<SiteContent> {
  const row = await prisma.siteContent.findUnique({
    where: { id: SITE_CONTENT_ID },
  });

  if (row?.data) {
    return SiteContentSchema.parse(row.data);
  }

  // Dev / pre-seed fallback: brand static module still on disk
  const mod = (await import("@/data")) as Record<string, unknown>;
  return siteContentFromStaticModule(mod);
}

export function getSiteContent(): Promise<SiteContent> {
  return unstable_cache(loadSiteContentUncached, ["site-content"], {
    tags: ["site-content"],
  })();
}

export async function saveSiteContent(data: SiteContent): Promise<SiteContent> {
  const parsed = SiteContentSchema.parse(data);
  await prisma.siteContent.upsert({
    where: { id: SITE_CONTENT_ID },
    create: { id: SITE_CONTENT_ID, data: parsed },
    update: { data: parsed },
  });
  return parsed;
}

export async function ensureSiteContentRow(): Promise<SiteContent> {
  const existing = await prisma.siteContent.findUnique({
    where: { id: SITE_CONTENT_ID },
  });
  if (existing?.data) {
    return SiteContentSchema.parse(existing.data);
  }
  const mod = (await import("@/data")) as Record<string, unknown>;
  const built = siteContentFromStaticModule(mod);
  await prisma.siteContent.create({
    data: { id: SITE_CONTENT_ID, data: built },
  });
  return built;
}
