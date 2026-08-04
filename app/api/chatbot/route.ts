import { NextRequest, NextResponse } from "next/server";
import { runChatbot } from "@/lib/chatbot/chat";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const message =
      typeof json.message === "string" ? json.message : "";
    const { reply } = await runChatbot({
      message,
      history: json.history,
    });
    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Chat failed";
    const status =
      message.includes("not configured") || message.includes("required")
        ? 400
        : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
