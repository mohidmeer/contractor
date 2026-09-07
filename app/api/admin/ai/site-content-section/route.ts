import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import {
  generateSiteContentSection,
  isSiteContentSectionId,
} from "@/lib/ai/siteContentSectionAi";
import {
  SiteContentSchema,
  type SiteContent,
} from "@/lib/siteContent/schema";

export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const json = await req.json();
    const sectionId = json?.sectionId;
    const prompt = typeof json?.prompt === "string" ? json.prompt.trim() : "";

    if (!isSiteContentSectionId(sectionId)) {
      return NextResponse.json(
        { error: "Invalid sectionId" },
        { status: 400 }
      );
    }
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const content = SiteContentSchema.parse(json.content) as SiteContent;
    const data = await generateSiteContentSection({
      sectionId,
      prompt,
      content,
    });

    return NextResponse.json({ data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Section AI update failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
