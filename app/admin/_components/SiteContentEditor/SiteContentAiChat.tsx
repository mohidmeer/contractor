"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type LastApply = {
  merged: SiteContent;
  sections: string[];
};

function AssistantMarkdown({ content }: { content: string }) {
  return (
    <div
      className={cn(
        "text-sm leading-relaxed",
        "[&_p]:mb-2 [&_p:last-child]:mb-0",
        "[&_ul]:mb-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5",
        "[&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5",
        "[&_li]:leading-snug",
        "[&_strong]:font-semibold",
        "[&_em]:italic",
        "[&_h1]:mb-2 [&_h1]:text-base [&_h1]:font-bold",
        "[&_h2]:mb-2 [&_h2]:text-sm [&_h2]:font-bold",
        "[&_h3]:mb-1.5 [&_h3]:text-sm [&_h3]:font-semibold",
        "[&_code]:rounded [&_code]:bg-background/80 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[12px]",
        "[&_pre]:mb-2 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-background/80 [&_pre]:p-2 [&_pre]:text-[12px]",
        "[&_a]:underline [&_a]:underline-offset-2",
        "[&_blockquote]:mb-2 [&_blockquote]:border-l-2 [&_blockquote]:border-primary/40 [&_blockquote]:pl-3 [&_blockquote]:text-muted-foreground"
      )}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

type Props = {
  content: SiteContent;
  onApplyMerged: (merged: SiteContent, sections: string[]) => void;
};

export default function SiteContentAiChat({ content, onApplyMerged }: Props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [pending, setPending] = useState(false);
  const [history, setHistory] = useState<SiteContentChatMessage[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const onApplyMergedRef = useRef(onApplyMerged);
  onApplyMergedRef.current = onApplyMerged;

  const applyLastApply = useCallback(async (lastApply: LastApply | null) => {
    if (!lastApply?.merged) return;
    onApplyMergedRef.current(lastApply.merged, lastApply.sections ?? []);
    toast.success(
      lastApply.sections?.length
        ? `AI updated: ${lastApply.sections.join(", ")} — review and Save all`
        : "AI updated site content — review and Save all"
    );
    try {
      await fetch("/api/admin/ai/site-content-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "ack-apply" }),
      });
    } catch {
      // non-fatal
    }
  }, []);

  const loadChat = useCallback(async () => {
    const res = await fetch("/api/admin/ai/site-content-chat");
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to load chat");
    const nextHistory = Array.isArray(json.history)
      ? (json.history as SiteContentChatMessage[])
      : [];
    setHistory(nextHistory);
    setPending(Boolean(json.pending));
    if (json.lastApply?.merged) {
      await applyLastApply(json.lastApply as LastApply);
    }
    return { pending: Boolean(json.pending), history: nextHistory };
  }, [applyLastApply]);

  useEffect(() => {
    void (async () => {
      try {
        await loadChat();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to load AI chat"
        );
      } finally {
        setHydrated(true);
      }
    })();
  }, [loadChat]);

  useEffect(() => {
    if (!hydrated || !pending) return;
    const id = window.setInterval(() => {
      void (async () => {
        try {
          const state = await loadChat();
          if (!state.pending) {
            setSending(false);
          }
        } catch {
          // keep polling; transient errors are fine
        }
      })();
    }, 1500);
    return () => window.clearInterval(id);
  }, [hydrated, pending, loadChat]);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, pending, sending, open]);

  const clearChat = async () => {
    try {
      const res = await fetch("/api/admin/ai/site-content-chat", {
        method: "DELETE",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to clear chat");
      setHistory([]);
      setInput("");
      setPending(false);
      setSending(false);
      toast.success("Chat cleared — starting a new conversation");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Clear failed");
    }
  };

  const send = async () => {
    const message = input.trim();
    if (!message || sending || pending) return;

    setInput("");
    setSending(true);
    setPending(true);
    setHistory((prev) => [...prev, { role: "user", content: message }]);

    try {
      const res = await fetch("/api/admin/ai/site-content-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          content,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Agent request failed");

      if (Array.isArray(json.history)) {
        setHistory(json.history as SiteContentChatMessage[]);
      }
      setPending(Boolean(json.pending));
      if (!json.pending) {
        setSending(false);
        if (json.lastApply?.merged) {
          await applyLastApply(json.lastApply as LastApply);
        }
      }
    } catch (error) {
      setSending(false);
      setPending(false);
      toast.error(error instanceof Error ? error.message : "Agent failed");
      try {
        await loadChat();
      } catch {
        // ignore
      }
    }
  };

  const busy = sending || pending;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-12 items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-950 px-4 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 md:bottom-8 md:right-8"
        )}
        aria-label="Open AI site content chat"
      >
        <Sparkles className="h-4 w-4" />
        <span className="hidden sm:inline">AI Chat</span>
        {busy ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : history.length > 0 ? (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/15 px-1.5 text-[10px] font-semibold tabular-nums">
            {history.length}
          </span>
        ) : null}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[90vh] w-[calc(100%-1.5rem)] max-w-3xl flex-col gap-0 overflow-hidden border-border/80 bg-background p-0 shadow-2xl sm:rounded-2xl">
          <DialogHeader className="relative space-y-0 overflow-hidden border-b border-border/70 bg-white px-5 py-4 text-left sm:px-6">
            <div className="flex items-start justify-between gap-3 pr-8">
              <div className="flex min-w-0 items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <DialogTitle className="text-base font-semibold tracking-tight sm:text-lg">
                    Site content assistant
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                    Saved in the database — closing the page won’t drop the
                    reply. Marketing copy only.
                  </DialogDescription>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-0.5 h-9 shrink-0 rounded-lg px-3 text-xs sm:text-sm"
                onClick={() => void clearChat()}
                disabled={busy || history.length === 0}
                title="Clear chat and start new"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear chat
              </Button>
            </div>
          </DialogHeader>

          <div className="flex min-h-0 flex-1 flex-col bg-zinc-50">
            <div className="flex min-h-[300px] max-h-[50vh] flex-1 flex-col gap-3 overflow-y-auto px-4 py-4 sm:min-h-[340px] sm:max-h-[54vh] sm:px-6 sm:py-5">
              {!hydrated ? (
                <div className="flex flex-1 items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading chat…
                </div>
              ) : history.length === 0 && !busy ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-zinc-500">
                    <MessageSquare className="h-6 w-6" />
                  </span>
                  <div className="max-w-md space-y-1.5">
                    <p className="text-sm font-medium text-foreground">
                      Ask what to update
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      e.g. rewrite FAQ answers more clearly, or refresh the hero
                      and process copy for commercial restoration.
                    </p>
                  </div>
                </div>
              ) : (
                history.map((msg, index) => (
                  <div
                    key={`${msg.role}-${index}`}
                    className={cn(
                      "max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[80%]",
                      msg.role === "user"
                        ? "ml-auto rounded-br-md bg-zinc-950 text-white"
                        : "mr-auto rounded-bl-md border border-zinc-200 bg-white text-zinc-900 shadow-sm"
                    )}
                  >
                    {msg.role === "assistant" ? (
                      <AssistantMarkdown content={msg.content} />
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    )}
                  </div>
                ))
              )}
              {busy ? (
                <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-md border border-zinc-200 bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking…
                </div>
              ) : null}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border/70 bg-white px-4 py-3.5 sm:px-6 sm:py-4">
              <div className="relative">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tell the agent what to update…"
                  rows={3}
                  disabled={busy}
                  className="min-h-[96px] resize-none rounded-xl border-zinc-200 !bg-white pb-12 pr-12 text-zinc-900 shadow-none placeholder:text-zinc-400 focus-visible:ring-zinc-400 disabled:opacity-60 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send();
                    }
                  }}
                />
                <Button
                  type="button"
                  size="icon"
                  className="absolute bottom-2.5 right-2.5 h-9 w-9 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800 disabled:bg-zinc-400"
                  onClick={() => void send()}
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  title="Send"
                >
                  {busy ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
