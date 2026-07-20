import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import { generateBlogWithAi } from "@/lib/ai/blogs";

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();
    const prompt = typeof json.prompt === "string" ? json.prompt.trim() : "";
    const id =
      json.id != null && String(json.id).trim() !== ""
        ? String(json.id).trim()
        : null;
    const existing =
      json.existing && typeof json.existing === "object"
        ? (json.existing as Record<string, unknown>)
        : null;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const data = await generateBlogWithAi(prompt, { id, existing });
    return NextResponse.json({ data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to generate blog";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
