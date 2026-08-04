/**
 * Media path helpers.
 * New uploads persist as `uploads/<file>` and are served at `/uploads/<file>`.
 * Legacy `media/...` paths are still resolved via MEDIA_SERVER_URL until migrated.
 */

/** Media server base URL (no trailing slash). Used only for legacy paths. */
export function getMediaServerUrl() {
  return (process.env.MEDIA_SERVER_URL || "").replace(/\/+$/, "");
}

/**
 * Persistable media path only, e.g. `uploads/uuid.png` or legacy `media/costal/file.png`.
 * Strips origin and leading slash from full URLs.
 */
export function toMediaPath(input: string | null | undefined): string {
  if (!input) return "";
  const trimmed = input.trim();
  if (!trimmed) return "";

  try {
    if (/^https?:\/\//i.test(trimmed)) {
      const url = new URL(trimmed);
      return url.pathname.replace(/^\/+/, "");
    }
  } catch {
    // fall through
  }

  return trimmed.replace(/^\/+/, "");
}

/**
 * Full media URL for display.
 * - Absolute URLs left unchanged (legacy rows).
 * - `uploads/...` and other local paths → site-relative `/${path}`.
 * - Legacy `media/...` → MEDIA_SERVER_URL if set, else `/${path}`.
 */
export function toMediaUrl(pathOrUrl: string | null | undefined): string {
  if (!pathOrUrl) return "";
  const trimmed = pathOrUrl.trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const path = trimmed.replace(/^\/+/, "");

  if (path.startsWith("uploads/") || !path.startsWith("media/")) {
    return `/${path}`;
  }

  const base = getMediaServerUrl();
  if (!base) return `/${path}`;
  return `${base}/${path}`;
}
