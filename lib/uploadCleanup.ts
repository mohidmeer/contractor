import { unlink } from "fs/promises";
import path from "path";
import prisma from "@/lib/prisma";
import { getUploadDir } from "@/lib/uploads";

function normalizeUploadPath(input: string): string | null {
  const trimmed = input.trim().replace(/^\/+/, "");
  if (!trimmed.startsWith("uploads/")) return null;
  const filename = trimmed.slice("uploads/".length);
  if (
    !filename ||
    filename.includes("..") ||
    filename.includes("/") ||
    filename.includes("\\")
  ) {
    return null;
  }
  return `uploads/${filename}`;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

/** Collect persistable `uploads/...` paths from image / images fields. */
export function collectUploadPaths(
  image?: string | null,
  images?: unknown
): string[] {
  const out: string[] = [];
  if (image) {
    const normalized = normalizeUploadPath(image);
    if (normalized) out.push(normalized);
  }
  for (const item of asStringArray(images)) {
    const normalized = normalizeUploadPath(item);
    if (normalized) out.push(normalized);
  }
  return out;
}

async function getReferencedUploadPaths(): Promise<Set<string>> {
  const referenced = new Set<string>();

  const [blogs, services, projects, estimates] = await Promise.all([
    prisma.blog.findMany({ select: { image: true } }),
    prisma.service.findMany({ select: { image: true, images: true } }),
    prisma.project.findMany({ select: { image: true, images: true } }),
    prisma.estimate.findMany({ select: { images: true } }),
  ]);

  for (const blog of blogs) {
    for (const p of collectUploadPaths(blog.image)) referenced.add(p);
  }
  for (const service of services) {
    for (const p of collectUploadPaths(service.image, service.images)) {
      referenced.add(p);
    }
  }
  for (const project of projects) {
    for (const p of collectUploadPaths(project.image, project.images)) {
      referenced.add(p);
    }
  }
  for (const estimate of estimates) {
    for (const p of collectUploadPaths(null, estimate.images)) {
      referenced.add(p);
    }
  }

  return referenced;
}

async function unlinkUploadPath(uploadPath: string): Promise<void> {
  const normalized = normalizeUploadPath(uploadPath);
  if (!normalized) return;

  const filename = normalized.slice("uploads/".length);
  const absolute = path.resolve(getUploadDir(), filename);
  const root = path.resolve(getUploadDir()) + path.sep;
  if (!absolute.startsWith(root)) return;

  try {
    await unlink(absolute);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code !== "ENOENT") {
      console.warn(`[uploads] Failed to delete ${normalized}:`, error);
    }
  }
}

/**
 * After deleting DB rows, remove any of `candidatePaths` that are no longer
 * referenced by Blog / Service / Project / Estimate (shared gallery-safe).
 */
export async function deleteOrphanedUploadFiles(
  candidatePaths: string[]
): Promise<void> {
  const unique = [
    ...new Set(
      candidatePaths
        .map((p) => normalizeUploadPath(p))
        .filter((p): p is string => Boolean(p))
    ),
  ];
  if (!unique.length) return;

  const referenced = await getReferencedUploadPaths();
  await Promise.all(
    unique.filter((p) => !referenced.has(p)).map((p) => unlinkUploadPath(p))
  );
}
