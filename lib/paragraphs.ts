/** Normalize legacy string or JSON content into paragraph strings. */
export function asParagraphs(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).map((p) => p.trim()).filter(Boolean);
  }
  if (typeof value === "string" && value.trim()) {
    const trimmed = value.trim();
    if (trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed) as unknown;
        if (Array.isArray(parsed)) {
          return parsed.map(String).map((p) => p.trim()).filter(Boolean);
        }
      } catch {
        // fall through to plain-string split
      }
    }
    return trimmed
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\s+/g, " ").trim())
      .filter(Boolean);
  }
  return [];
}
