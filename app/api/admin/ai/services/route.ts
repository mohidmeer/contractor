import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import { generateServiceWithAi } from "@/lib/ai/services";

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();
    const prompt = typeof json.prompt === "string" ? json.prompt.trim() : "";

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const data = await generateServiceWithAi(prompt);
    return NextResponse.json({ data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to generate service";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
