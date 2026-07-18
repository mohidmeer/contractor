/** Media server base URL (no trailing slash). */
export function getMediaServerUrl() {
  return (process.env.MEDIA_SERVER_URL || "").replace(/\/+$/, "");
}

/**
 * Persistable media path only, e.g. `media/costal/file.png`.
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
 * Full media URL for display, e.g. `http://localhost:4000/media/costal/file.png`.
 * Leaves already-absolute URLs unchanged (legacy rows).
 * Local public paths (not under media/) are returned as site-relative URLs.
 */
export function toMediaUrl(pathOrUrl: string | null | undefined): string {
  if (!pathOrUrl) return "";
  const trimmed = pathOrUrl.trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const path = trimmed.replace(/^\/+/, "");

  // Local public/ assets (e.g. costal/images/...), not media-server paths
  if (!path.startsWith("media/")) {
    return `/${path}`;
  }

  const base = getMediaServerUrl();
  if (!base) return `/${path}`;
  return `${base}/${path}`;
}
