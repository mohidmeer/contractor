"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Loader2,
  MessageSquare,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import type { SiteContent } from "@/lib/siteContent";
import type { SiteContentChatMessage } from "@/lib/ai/content/schema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type Props = {
  content: SiteContent;
  onApplyMerged: (merged: SiteContent, sections: string[]) => void;
};

export default function SiteContentAiChat({ content, onApplyMerged }: Props) {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [history, setHistory] = useState<SiteContentChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, sending]);

  const clearChat = () => {
    setHistory([]);
    setInput("");
  };

  const send = async () => {
    const message = input.trim();
    if (!message || sending) return;

    setInput("");
    setSending(true);
    setHistory((prev) => [...prev, { role: "user", content: message }]);

    try {
      const res = await fetch("/api/admin/ai/site-content-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history,
          content,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Agent request failed");

      const reply =
        typeof json.reply === "string" ? json.reply : "No reply from agent.";
      const nextHistory = Array.isArray(json.history)
        ? (json.history as SiteContentChatMessage[])
        : [
            ...history,
            { role: "user" as const, content: message },
            { role: "assistant" as const, content: reply },
          ];
      setHistory(nextHistory);

      if (
        json.intent === "apply" &&
        json.merged &&
        typeof json.merged === "object"
      ) {
        const sections = Array.isArray(json.sections)
          ? (json.sections as string[])
          : [];
        onApplyMerged(json.merged as SiteContent, sections);
        toast.success(
          sections.length > 0
            ? `AI updated: ${sections.join(", ")} — review and Save all`
            : "AI updated site content — review and Save all"
        );
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Agent failed");
      setHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — I could not complete that request. Check your API key and try again.",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm transition-all",
        open
          ? "border-primary/25 shadow-md ring-1 ring-primary/10"
          : "border-border/70"
      )}
    >
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors",
            open ? "bg-primary/[0.04]" : "hover:bg-muted/40"
          )}
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                open
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                  : "bg-muted text-foreground/80"
              )}
            >
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold tracking-tight">
                AI site content assistant
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Ask clarifying questions, then update marketing copy only —
                never phone, email, or IDs. Changes land in the draft until you
                Save all.
              </p>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180 text-primary"
            )}
          />
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-3 border-t border-border/60 bg-muted/[0.15] px-4 py-4 sm:px-5">
          <div className="flex max-h-72 flex-col gap-2.5 overflow-y-auto rounded-xl border border-border/60 bg-background p-3">
            {history.length === 0 ? (
              <div className="flex flex-col items-center gap-2 px-3 py-8 text-center text-sm text-muted-foreground">
                <MessageSquare className="h-8 w-8 text-primary/50" />
                <p>
                  Try: “Rewrite the FAQ answers in a clearer tone” or “Update
                  the hero and process section for commercial restoration.”
                </p>
              </div>
            ) : (
              history.map((msg, index) => (
                <div
                  key={`${msg.role}-${index}`}
                  className={cn(
                    "max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "mr-auto border border-border/60 bg-muted/40 text-foreground"
                  )}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              ))
            )}
            {sending ? (
              <div className="mr-auto flex items-center gap-2 rounded-2xl border border-border/60 bg-muted/40 px-3.5 py-2.5 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking…
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell the agent what to update…"
              rows={2}
              disabled={sending}
              className="min-h-[68px] flex-1 resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
            />
            <div className="flex shrink-0 gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={clearChat}
                disabled={sending || history.length === 0}
                title="Clear chat"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                className="ai-rainbow-btn min-w-[7.5rem]"
                onClick={() => void send()}
                disabled={sending || !input.trim()}
              >
                <span className="inline-flex items-center gap-2">
                  {sending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Send
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
