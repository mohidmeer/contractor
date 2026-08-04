"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  CheckCircle2,
  Loader2,
  Plus,
  Sparkles,
  Trash2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  type BulkEntityType,
  getBulkAiEndpoint,
  getBulkCreateEndpoint,
  mapAiResultToCreatePayload,
  parseBulkPrompts,
} from "@/lib/ai/bulkMap";

type ProgressStatus =
  | "idle"
  | "pending"
  | "generating"
  | "saving"
  | "done"
  | "error"
  | "cancelled";

type PromptCard = {
  id: string;
  text: string;
  status: ProgressStatus;
  error?: string;
};

const TYPE_OPTIONS: {
  value: BulkEntityType;
  label: string;
  hint: string;
}[] = [
  { value: "blogs", label: "Blogs", hint: "Articles & posts" },
  { value: "services", label: "Services", hint: "Service pages" },
  { value: "projects", label: "Projects", hint: "Case studies" },
  { value: "estimates", label: "Estimates", hint: "Client drafts" },
];

const TYPE_LABELS: Record<BulkEntityType, string> = {
  blogs: "Blogs",
  services: "Services",
  projects: "Projects",
  estimates: "Estimates",
};

function newCard(text = ""): PromptCard {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text,
    status: "idle",
  };
}

export default function BulkAiWritePanel() {
  const [open, setOpen] = useState(false);
  const [entityType, setEntityType] = useState<BulkEntityType>("blogs");
  const [cards, setCards] = useState<PromptCard[]>([newCard()]);
  const [running, setRunning] = useState(false);
  const cancelRef = useRef(false);

  const readyPrompts = cards
    .map((c) => c.text.trim())
    .filter(Boolean);
  const completed = cards.filter((c) => c.status === "done").length;
  const failed = cards.filter((c) => c.status === "error").length;
  const finished = cards.filter((c) =>
    ["done", "error", "cancelled"].includes(c.status)
  ).length;
  const activeTotal = cards.filter((c) =>
    ["pending", "generating", "saving", "done", "error", "cancelled"].includes(
      c.status
    )
  ).length;
  const progressPct =
    activeTotal > 0 ? Math.round((finished / activeTotal) * 100) : 0;

  useEffect(() => {
    if (!open && !running) {
      setCards([newCard()]);
      cancelRef.current = false;
    }
  }, [open, running]);

  const updateCard = (id: string, patch: Partial<PromptCard>) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, ...patch } : card))
    );
  };

  const addCard = () => {
    if (running) return;
    setCards((prev) => [...prev, newCard()]);
  };

  const removeCard = (id: string) => {
    if (running) return;
    setCards((prev) => {
      if (prev.length <= 1) return [newCard()];
      return prev.filter((card) => card.id !== id);
    });
  };

  const handleCardChange = (id: string, value: string) => {
    updateCard(id, { text: value, status: "idle", error: undefined });
  };

  const handlePaste = (
    id: string,
    event: React.ClipboardEvent<HTMLTextAreaElement>
  ) => {
    if (running) return;
    const pasted = event.clipboardData.getData("text");
    if (!pasted.includes("\n") && !pasted.includes("\r")) return;

    event.preventDefault();
    const pieces = parseBulkPrompts(pasted);
    if (!pieces.length) return;

    const target = event.currentTarget;
    const selectionStart = target?.selectionStart ?? 0;
    const selectionEnd = target?.selectionEnd ?? selectionStart;

    setCards((prev) => {
      const index = prev.findIndex((card) => card.id === id);
      if (index === -1) return prev;

      const current = prev[index];
      const before = current.text.slice(0, selectionStart);
      const after = current.text.slice(selectionEnd);

      const splitCards = pieces.map((text, i) => {
        if (i === 0) {
          const merged = `${before}${text}${
            pieces.length === 1 ? after : ""
          }`.trim();
          return {
            ...current,
            text: merged,
            status: "idle" as const,
            error: undefined,
          };
        }
        if (i === pieces.length - 1 && after.trim()) {
          return newCard(`${text}${after}`.trim());
        }
        return newCard(text);
      });

      return [...prev.slice(0, index), ...splitCards, ...prev.slice(index + 1)];
    });

    toast.success(
      `Split into ${pieces.length} prompt${pieces.length === 1 ? "" : "s"}`
    );
  };

  const handleCancel = () => {
    cancelRef.current = true;
  };

  const handleBulkWrite = async () => {
    const active = cards.filter((c) => c.text.trim());
    if (!active.length) {
      toast.error("Add at least one prompt");
      return;
    }

    cancelRef.current = false;
    setRunning(true);

    // Reset statuses for cards that will run
    setCards((prev) =>
      prev.map((card) =>
        card.text.trim()
          ? { ...card, status: "pending", error: undefined }
          : card
      )
    );

    const aiUrl = getBulkAiEndpoint(entityType);
    const createUrl = getBulkCreateEndpoint(entityType);
    let doneCount = 0;
    let failCount = 0;

    // Work from a snapshot of ids with non-empty prompts
    const queue = active.map((c) => ({ id: c.id, prompt: c.text.trim() }));

    for (const item of queue) {
      if (cancelRef.current) {
        setCards((prev) =>
          prev.map((card) =>
            card.status === "pending" ||
            card.status === "generating" ||
            card.status === "saving"
              ? { ...card, status: "cancelled" }
              : card
          )
        );
        break;
      }

      updateCard(item.id, { status: "generating", error: undefined });

      try {
        const aiRes = await fetch(aiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: item.prompt, existing: null }),
        });
        const aiJson = await aiRes.json().catch(() => ({}));
        if (!aiRes.ok) {
          throw new Error(
            typeof aiJson.error === "string"
              ? aiJson.error
              : `AI failed (${aiRes.status})`
          );
        }

        if (cancelRef.current) {
          updateCard(item.id, { status: "cancelled" });
          break;
        }

        updateCard(item.id, { status: "saving" });
        const payload = mapAiResultToCreatePayload(
          entityType,
          (aiJson.data ?? {}) as Record<string, unknown>
        );

        const createRes = await fetch(createUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const createJson = await createRes.json().catch(() => ({}));
        if (!createRes.ok) {
          throw new Error(
            typeof createJson.error === "string"
              ? createJson.error
              : `Save failed (${createRes.status})`
          );
        }

        updateCard(item.id, { status: "done" });
        doneCount += 1;
      } catch (err) {
        failCount += 1;
        updateCard(item.id, {
          status: "error",
          error: err instanceof Error ? err.message : "Failed",
        });
      }
    }

    setRunning(false);
    if (cancelRef.current) {
      toast.message("Bulk write stopped", {
        description: `${doneCount} saved as draft, ${failCount} failed`,
      });
    } else if (failCount === 0) {
      toast.success(
        `Created ${doneCount} ${TYPE_LABELS[entityType].toLowerCase()} as drafts`
      );
    } else {
      toast.error(
        `Finished with errors: ${doneCount} saved, ${failCount} failed`
      );
    }
  };

  return (
    <>
      <Card className="h-full">
        <CardContent className="flex h-full flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight">Bulk write</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Generate many drafts at once from a list of prompts
                </p>
              </div>
            </div>
            <Button
              type="button"
              size="sm"
              className="shrink-0"
              onClick={() => setOpen(true)}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open
            </Button>
          </div>

          <div className="mt-auto space-y-2 border-t pt-4">
            <p className="text-xs text-muted-foreground">
              Blogs, services, projects, and estimates — saved as drafts.
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (running) return;
          setOpen(next);
        }}
      >
        <DialogContent className="flex max-h-[92vh] w-[min(96vw,40rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
          <DialogHeader className="border-b bg-muted/20 px-6 py-5">
            <DialogTitle className="flex items-center gap-2 text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              Bulk write
            </DialogTitle>
            <DialogDescription>
              Paste a list and we’ll split each line into its own prompt card.
              Everything saves as a draft — add images later when you publish.
            </DialogDescription>
          </DialogHeader>

          <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-6 py-5">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What to generate
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TYPE_OPTIONS.map((option) => {
                  const selected = entityType === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      disabled={running}
                      onClick={() => setEntityType(option.value)}
                      className={cn(
                        "rounded-xl border px-3 py-2.5 text-left transition",
                        selected
                          ? "border-primary bg-accent text-accent-foreground shadow-sm"
                          : "hover:border-border hover:bg-muted/40",
                        running && "opacity-60"
                      )}
                    >
                      <div className="text-sm font-medium">{option.label}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {option.hint}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {(running || activeTotal > 0) && (
              <div className="space-y-2 rounded-xl border bg-muted/30 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium">
                    {running ? "Writing drafts…" : "Run complete"}
                  </span>
                  <span className="text-muted-foreground">
                    {completed}/{activeTotal || readyPrompts.length} done
                    {failed > 0 ? ` · ${failed} failed` : ""}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      failed > 0 ? "bg-destructive" : "bg-primary"
                    )}
                    style={{
                      width: `${running ? Math.max(progressPct, 6) : progressPct || 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Prompts ({readyPrompts.length})
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={running}
                  onClick={addCard}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add prompt
                </Button>
              </div>

              <div className="space-y-3">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={cn(
                      "rounded-xl border p-3 transition",
                      card.status === "done" &&
                        "border-primary/40 bg-accent/50",
                      card.status === "error" &&
                        "border-destructive/40 bg-destructive/5",
                      (card.status === "generating" ||
                        card.status === "saving") &&
                        "border-primary/30 bg-muted/40",
                      card.status === "pending" && "opacity-80"
                    )}
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-muted px-1.5 text-[11px] text-foreground">
                          {index + 1}
                        </span>
                        <StatusLabel status={card.status} error={card.error} />
                      </div>
                      <button
                        type="button"
                        disabled={running || cards.length <= 1}
                        onClick={() => removeCard(card.id)}
                        className="rounded-md p-1 text-muted-foreground transition hover:bg-muted hover:text-destructive disabled:opacity-40"
                        aria-label="Remove prompt"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <Textarea
                      rows={2}
                      value={card.text}
                      disabled={running}
                      onChange={(e) => handleCardChange(card.id, e.target.value)}
                      onPaste={(e) => handlePaste(card.id, e)}
                      placeholder={
                        index === 0
                          ? "Paste several lines at once — each line becomes its own card"
                          : "Describe this draft…"
                      }
                      className="min-h-[4.5rem] resize-y border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 border-t bg-muted/20 px-6 py-4 sm:justify-between">
            <p className="hidden text-xs text-muted-foreground sm:block">
              Multi-line paste auto-splits into cards
            </p>
            <div className="flex flex-wrap justify-end gap-2">
              {running ? (
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Stop
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              )}
              <Button
                type="button"
                disabled={running || readyPrompts.length === 0}
                onClick={handleBulkWrite}
              >
                {running ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Writing…
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Write {readyPrompts.length || ""} draft
                    {readyPrompts.length === 1 ? "" : "s"}
                  </>
                )}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function StatusLabel({
  status,
  error,
}: {
  status: ProgressStatus;
  error?: string;
}) {
  if (status === "done") {
    return (
      <span className="inline-flex items-center gap-1 text-primary">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Saved as draft
      </span>
    );
  }
  if (status === "error") {
    return (
      <span className="inline-flex items-center gap-1 text-destructive">
        <XCircle className="h-3.5 w-3.5" />
        {error || "Error"}
      </span>
    );
  }
  if (status === "generating") {
    return (
      <span className="inline-flex items-center gap-1 text-foreground">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        Generating…
      </span>
    );
  }
  if (status === "saving") {
    return (
      <span className="inline-flex items-center gap-1 text-foreground">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        Saving draft…
      </span>
    );
  }
  if (status === "pending") {
    return <span>Waiting…</span>;
  }
  if (status === "cancelled") {
    return <span>Cancelled</span>;
  }
  return <span>Prompt</span>;
}
