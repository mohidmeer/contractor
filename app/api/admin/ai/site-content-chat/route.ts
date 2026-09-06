import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import { runSiteContentAgent } from "@/lib/ai/content";
import {
  SiteContentSchema,
  type SiteContent,
} from "@/lib/siteContent/schema";
import { getSiteContent } from "@/lib/siteContent/server";

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();
    const message = typeof json.message === "string" ? json.message.trim() : "";
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    let content: SiteContent;
    if (json.content && typeof json.content === "object") {
      content = SiteContentSchema.parse(json.content);
    } else {
      content = await getSiteContent();
    }

    const result = await runSiteContentAgent({
      message,
      history: json.history,
      content,
    });

    return NextResponse.json({
      reply: result.reply,
      intent: result.intent,
      patch: result.patch,
      merged: result.merged,
      sections: result.sections,
      history: result.history,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to run site content agent";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
