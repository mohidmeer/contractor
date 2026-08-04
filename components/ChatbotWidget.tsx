"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  BsChatDotsFill,
  BsXLg,
  BsSendFill,
  BsArrowCounterclockwise,
} from "react-icons/bs";
import { siteName } from "@/data";

type ChatRole = "user" | "assistant";

type ChatMsg = {
  id: string;
  role: ChatRole;
  content: string;
};

const WELCOME = `Hi! I'm the ${siteName} assistant. Ask about our services or projects — or tap a button below to get started.`;

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { id: "welcome", role: "assistant", content: WELCOME },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const resetChat = () => {
    setMessages([{ id: newId(), role: "assistant", content: WELCOME }]);
    setInput("");
  };

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const userMsg: ChatMsg = {
      id: newId(),
      role: "user",
      content: trimmed,
    };
    const nextHistory = [...messages, userMsg].filter((m) => m.id !== "welcome");
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const history = nextHistory
        .filter((m) => m.role === "user" || m.role === "assistant")
        .slice(0, -1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          typeof data.error === "string" ? data.error : "Chat failed"
        );
      }
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "assistant",
          content:
            String(data.reply ?? "").trim() ||
            "Sorry, I had trouble answering that.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "assistant",
          content:
            err instanceof Error
              ? err.message
              : "Something went wrong. Please try again or contact us.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative flex items-center">
      {open ? (
        <div
          className="absolute bottom-[calc(100%+0.75rem)] right-0 flex h-[min(30rem,68vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]"
          role="dialog"
          aria-label="Chat assistant"
        >
          <div className="flex items-center justify-between gap-3 bg-primary px-4 py-3.5 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                <BsChatDotsFill size={16} className="text-white" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight">
                  Chat with us
                </p>
                <p className="truncate text-xs text-white/75">{siteName}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                type="button"
                onClick={resetChat}
                className="rounded-lg p-2 text-white/85 transition hover:bg-white/15 hover:text-white"
                aria-label="Reset conversation"
                title="Reset"
              >
                <BsArrowCounterclockwise size={15} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-white/85 transition hover:bg-white/15 hover:text-white"
                aria-label="Close chat"
              >
                <BsXLg size={14} />
              </button>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-secondary/5 px-3.5 py-3.5">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-white shadow-sm"
                    : "mr-auto max-w-[88%] rounded-2xl rounded-bl-md border border-primary/10 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-heading shadow-sm"
                }
              >
                {m.content}
              </div>
            ))}
            {sending ? (
              <div className="mr-auto rounded-2xl rounded-bl-md border border-primary/10 bg-white px-3.5 py-2.5 text-sm text-gray-500 shadow-sm">
                <span className="inline-flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary [animation-delay:300ms]" />
                  </span>
                  Thinking…
                </span>
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-primary/10 bg-white px-3.5 py-2.5">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white transition hover:scale-105"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
            <Link
              href="/"
              className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-white transition hover:scale-105"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </Link>
          </div>

          <form
            className="flex items-end gap-2 border-t border-primary/10 bg-white p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              placeholder="Ask a question…"
              className="input max-h-24 min-h-[2.5rem] flex-1 !rounded-xl !px-3 !py-2 text-sm resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send(input);
                }
              }}
              disabled={sending}
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="btn-primary inline-flex h-10 w-10 shrink-0 items-center justify-center !rounded-full !px-0 !py-0 hover:!scale-105 disabled:opacity-50 disabled:hover:!scale-100"
              aria-label="Send message"
            >
              <BsSendFill size={15} className="text-white" />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="animate-ring-pulse relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-secondary text-white shadow-2xl transition-[filter] duration-200 hover:brightness-110"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
      >
        {open ? (
          <BsXLg size={18} className="text-white" />
        ) : (
          <BsChatDotsFill size={22} className="text-white" />
        )}
      </button>
    </div>
  );
}
