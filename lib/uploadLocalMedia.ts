import fs from "fs";
import path from "path";
import { getMediaServerUrl, toMediaPath } from "@/lib/media";

/**
 * Upload a file from public/ to the media server.
 * Returns a persistable path like media/costal/file.jpg, or null on failure.
 */
export async function uploadLocalFileToMedia(
  inputPath: string,
  category: string
): Promise<string | null> {
  const trimmed = inputPath.trim();
  if (!trimmed) return null;

  const normalized = trimmed.replace(/^\/+/, "");
  if (normalized.startsWith("media/")) {
    return normalized;
  }

  const absolutePath = path.join(process.cwd(), "public", normalized);
  if (!fs.existsSync(absolutePath)) {
    console.warn(`[seed] Missing local file: ${absolutePath}`);
    return null;
  }

  const mediaBase = getMediaServerUrl();
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;

  if (!mediaBase || !user || !pass) {
    console.warn("[seed] MEDIA_SERVER_URL or Basic Auth env vars not set");
    return null;
  }

  const buffer = fs.readFileSync(absolutePath);
  const fileName = path.basename(absolutePath);
  const formData = new FormData();
  formData.append("file", new Blob([buffer]), fileName);

  try {
    const res = await fetch(`${mediaBase}/upload?category=${category}`, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " + Buffer.from(`${user}:${pass}`).toString("base64"),
      },
      body: formData,
    });

    if (!res.ok) {
      console.warn(
        `[seed] Upload failed for ${inputPath}:`,
        await res.text()
      );
      return null;
    }

    const data = (await res.json()) as { url?: string; path?: string };
    return toMediaPath(data.url ?? data.path ?? "") || null;
  } catch (error) {
    console.warn(`[seed] Upload error for ${inputPath}:`, error);
    return null;
  }
}

export async function resolveImagePathForSeed(
  inputPath: string,
  category: string
): Promise<string | null> {
  if (!inputPath?.trim()) return null;
  return uploadLocalFileToMedia(inputPath, category);
}
