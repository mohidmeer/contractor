const YOUTUBE_PATTERNS = [
  /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  /youtube\.com\/watch\?.*\bv=([a-zA-Z0-9_-]{11})/,
];

export function getYouTubeVideoId(url: string | null | undefined): string | null {
  if (!url?.trim()) return null;
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = url.trim().match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

export function isValidYouTubeUrl(url: string | null | undefined): boolean {
  if (!url?.trim()) return true;
  return Boolean(getYouTubeVideoId(url));
}

export function getYouTubeEmbedUrl(url: string | null | undefined): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export function getYouTubeWatchUrl(url: string | null | undefined): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://www.youtube.com/watch?v=${id}` : null;
}

export function getYouTubeThumbnailUrl(
  url: string | null | undefined
): string | null {
  const id = getYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
