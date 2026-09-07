import { after } from "next/server";
import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import { runSiteContentAgent } from "@/lib/ai/content";
import {
  ackLastApply,
  appendUserMessageAndStartJob,
  clearSiteContentAiChat,
  completeAiJob,
  failAiJob,
  getPendingJobContext,
  getSiteContentAiChatState,
} from "@/lib/ai/content/chatStore";
import {
  SiteContentSchema,
  type SiteContent,
} from "@/lib/siteContent/schema";
import { getSiteContent } from "@/lib/siteContent/server";

async function processPendingJob() {
  const ctx = await getPendingJobContext();
  if (!ctx?.userMessage || !ctx.content) {
    await failAiJob(
      "Sorry — the AI job lost its context. Please send your message again."
    );
    return;
  }

  try {
    const result = await runSiteContentAgent({
      message: ctx.userMessage,
      history: ctx.messages,
      content: ctx.content,
    });

    await completeAiJob({
      assistantMessage: result.reply,
      lastApply:
        result.intent === "apply" && result.merged
          ? { merged: result.merged, sections: result.sections }
          : null,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Sorry — I could not complete that request. Check your API key and try again.";
    await failAiJob(message);
  }
}

export async function GET(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const state = await getSiteContentAiChatState();
    return NextResponse.json({
      history: state.messages,
      pending: state.pending,
      lastApply: state.lastApply,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to load chat";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();

    if (json?.action === "ack-apply") {
      await ackLastApply();
      const state = await getSiteContentAiChatState();
      return NextResponse.json({
        history: state.messages,
        pending: state.pending,
        lastApply: null,
      });
    }

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

    const state = await appendUserMessageAndStartJob({ message, content });

    after(() => {
      void processPendingJob();
    });

    return NextResponse.json({
      history: state.messages,
      pending: true,
      lastApply: null,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to run site content agent";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const state = await clearSiteContentAiChat();
    return NextResponse.json({
      history: state.messages,
      pending: false,
      lastApply: null,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to clear chat";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
