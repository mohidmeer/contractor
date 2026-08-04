import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { getUploadDir, toUploadPath } from "@/lib/uploads";

/**
 * Copy a file from public/ into the root uploads/ folder.
 * Returns a persistable path like uploads/uuid.jpg, or null on failure.
 */
export async function copyLocalFileToUploads(
  inputPath: string
): Promise<string | null> {
  const trimmed = inputPath.trim();
  if (!trimmed) return null;

  const normalized = trimmed.replace(/^\/+/, "");

  if (normalized.startsWith("uploads/")) {
    return normalized;
  }

  // Already a remote media path — leave for migrate:images
  if (normalized.startsWith("media/")) {
    return normalized;
  }

  const absolutePath = path.join(process.cwd(), "public", normalized);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`[seed] Missing local file: ${absolutePath}`);
    return null;
  }

  try {
    const uploadDir = getUploadDir();
    fs.mkdirSync(uploadDir, { recursive: true });

    const ext = path.extname(absolutePath).toLowerCase() || ".bin";
    const filename = `${randomUUID()}${ext}`;
    const dest = path.join(uploadDir, filename);

    fs.copyFileSync(absolutePath, dest);
    return toUploadPath(filename);
  } catch (error) {
    console.warn(`[seed] Copy error for ${inputPath}:`, error);
    return null;
  }
}

export async function resolveImagePathForSeed(
  inputPath: string
): Promise<string | null> {
  if (!inputPath?.trim()) return null;

  const uploaded = await copyLocalFileToUploads(inputPath);
  if (uploaded) return uploaded;

  // Fall back to local public path so pages still render
  const local = inputPath.trim().replace(/^\/+/, "");
  return local || null;
}
