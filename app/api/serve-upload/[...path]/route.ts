import { createReadStream } from "fs";
import { stat } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { Readable } from "stream";
import { getUploadDir } from "@/lib/uploads";

export const runtime = "nodejs";

function contentTypeFor(ext: string): string {
  switch (ext.toLowerCase()) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await context.params;

  if (!segments?.length) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Only allow a single flat filename — no nested dirs / traversal
  if (segments.length !== 1) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filename = segments[0];
  if (
    !filename ||
    filename.includes("..") ||
    filename.includes("/") ||
    filename.includes("\\")
  ) {
    return new NextResponse("Not found", { status: 404 });
  }

  const uploadDir = getUploadDir();
  const absolute = path.resolve(uploadDir, filename);

  if (!absolute.startsWith(path.resolve(uploadDir) + path.sep)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const info = await stat(absolute);
    if (!info.isFile()) {
      return new NextResponse("Not found", { status: 404 });
    }

    const stream = createReadStream(absolute);
    const webStream = Readable.toWeb(stream) as ReadableStream;

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        "Content-Type": contentTypeFor(path.extname(filename)),
        "Content-Length": String(info.size),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
