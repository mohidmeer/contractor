/**
 * One-time migration: download images from the old media server into root uploads/
 * and rewrite DB paths to `uploads/<file>`.
 *
 * Usage: npm run migrate:images
 * Requires: MEDIA_SERVER_URL, DATABASEURL
 * Optional: BASIC_AUTH_USER, BASIC_AUTH_PASS (if media server needs auth)
 */
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

function loadEnvFile() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function getMediaBase(): string {
  return (process.env.MEDIA_SERVER_URL || "").replace(/\/+$/, "");
}

function authHeaders(): HeadersInit {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;
  if (!user || !pass) return {};
  return {
    Authorization:
      "Basic " + Buffer.from(`${user}:${pass}`).toString("base64"),
  };
}

function needsMigration(value: string | null | undefined): boolean {
  if (!value?.trim()) return false;
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return true;
  const pathOnly = trimmed.replace(/^\/+/, "");
  if (pathOnly.startsWith("uploads/")) return false;
  if (pathOnly.startsWith("media/")) return true;
  return false;
}

function toPathKey(value: string): string {
  const trimmed = value.trim();
  try {
    if (/^https?:\/\//i.test(trimmed)) {
      return new URL(trimmed).pathname.replace(/^\/+/, "");
    }
  } catch {
    // fall through
  }
  return trimmed.replace(/^\/+/, "");
}

function resolveDownloadUrl(value: string, mediaBase: string): string | null {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const pathOnly = trimmed.replace(/^\/+/, "");
  if (!mediaBase) return null;
  return `${mediaBase}/${pathOnly}`;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

async function downloadToUploads(
  sourceValue: string,
  mediaBase: string,
  cache: Map<string, string>
): Promise<string | null> {
  const key = toPathKey(sourceValue);
  const cached = cache.get(key);
  if (cached) return cached;

  if (key.startsWith("uploads/")) {
    cache.set(key, key);
    return key;
  }

  const url = resolveDownloadUrl(sourceValue, mediaBase);
  if (!url) {
    console.warn(`[migrate] Cannot resolve URL for: ${sourceValue}`);
    return null;
  }

  try {
    const res = await fetch(url, { headers: authHeaders() });
    if (!res.ok) {
      console.warn(
        `[migrate] Download failed (${res.status}): ${url}`
      );
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    const ext =
      path.extname(key).toLowerCase() ||
      extFromContentType(res.headers.get("content-type")) ||
      ".bin";
    const filename = `${randomUUID()}${ext}`;
    const uploadDir = path.join(process.cwd(), "uploads");
    fs.mkdirSync(uploadDir, { recursive: true });
    fs.writeFileSync(path.join(uploadDir, filename), buffer);

    const newPath = `uploads/${filename}`;
    cache.set(key, newPath);
    console.log(`[migrate] ${key} → ${newPath}`);
    return newPath;
  } catch (error) {
    console.warn(`[migrate] Error downloading ${url}:`, error);
    return null;
  }
}

function extFromContentType(ct: string | null): string | null {
  if (!ct) return null;
  const mime = ct.split(";")[0].trim().toLowerCase();
  switch (mime) {
    case "image/jpeg":
      return ".jpg";
    case "image/png":
      return ".png";
    case "image/webp":
      return ".webp";
    case "image/gif":
      return ".gif";
    case "image/svg+xml":
      return ".svg";
    default:
      return null;
  }
}

async function migrateScalar(
  value: string | null,
  mediaBase: string,
  cache: Map<string, string>
): Promise<{ next: string | null; changed: boolean; failed: boolean }> {
  if (!value || !needsMigration(value)) {
    return { next: value, changed: false, failed: false };
  }
  const migrated = await downloadToUploads(value, mediaBase, cache);
  if (!migrated) return { next: value, changed: false, failed: true };
  return { next: migrated, changed: migrated !== value, failed: false };
}

async function migrateArray(
  value: unknown,
  mediaBase: string,
  cache: Map<string, string>
): Promise<{ next: string[]; changed: boolean; failed: number }> {
  const items = asStringArray(value);
  const next: string[] = [];
  let changed = false;
  let failed = 0;

  for (const item of items) {
    const result = await migrateScalar(item, mediaBase, cache);
    next.push(result.next ?? item);
    if (result.changed) changed = true;
    if (result.failed) failed += 1;
  }

  return { next, changed, failed };
}

async function main() {
  loadEnvFile();

  const mediaBase = getMediaBase();
  if (!mediaBase) {
    throw new Error(
      "[migrate] MEDIA_SERVER_URL is required to download legacy media files."
    );
  }

  const cache = new Map<string, string>();
  let failures = 0;
  let updatedRows = 0;

  const blogs = await prisma.blog.findMany({ select: { id: true, image: true } });
  for (const blog of blogs) {
    const result = await migrateScalar(blog.image, mediaBase, cache);
    if (result.failed) failures += 1;
    if (result.changed) {
      await prisma.blog.update({
        where: { id: blog.id },
        data: { image: result.next },
      });
      updatedRows += 1;
    }
  }

  const services = await prisma.service.findMany({
    select: { id: true, image: true, images: true },
  });
  for (const service of services) {
    const imageResult = await migrateScalar(service.image, mediaBase, cache);
    const imagesResult = await migrateArray(service.images, mediaBase, cache);
    if (imageResult.failed) failures += 1;
    failures += imagesResult.failed;

    if (imageResult.changed || imagesResult.changed) {
      await prisma.service.update({
        where: { id: service.id },
        data: {
          ...(imageResult.changed ? { image: imageResult.next } : {}),
          ...(imagesResult.changed
            ? { images: imagesResult.next as Prisma.InputJsonValue }
            : {}),
        },
      });
      updatedRows += 1;
    }
  }

  const projects = await prisma.project.findMany({
    select: { id: true, image: true, images: true },
  });
  for (const project of projects) {
    const imageResult = await migrateScalar(project.image, mediaBase, cache);
    const imagesResult = await migrateArray(project.images, mediaBase, cache);
    if (imageResult.failed) failures += 1;
    failures += imagesResult.failed;

    if (imageResult.changed || imagesResult.changed) {
      await prisma.project.update({
        where: { id: project.id },
        data: {
          ...(imageResult.changed ? { image: imageResult.next } : {}),
          ...(imagesResult.changed
            ? { images: imagesResult.next as Prisma.InputJsonValue }
            : {}),
        },
      });
      updatedRows += 1;
    }
  }

  const estimates = await prisma.estimate.findMany({
    select: { id: true, images: true },
  });
  for (const estimate of estimates) {
    const imagesResult = await migrateArray(estimate.images, mediaBase, cache);
    failures += imagesResult.failed;
    if (imagesResult.changed) {
      await prisma.estimate.update({
        where: { id: estimate.id },
        data: { images: imagesResult.next as Prisma.InputJsonValue },
      });
      updatedRows += 1;
    }
  }

  console.log(
    `[migrate] Done. Updated ${updatedRows} row(s), cached ${cache.size} file(s), failures: ${failures}`
  );

  if (failures > 0) {
    process.exitCode = 1;
  }
}

main()
  .catch((error) => {
    console.error("[migrate] Fatal:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
