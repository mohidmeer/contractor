"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { MessageSquare, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ChatbotPromptPanel() {
  const [ownerPrompt, setOwnerPrompt] = useState("");
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

  const configured = ownerPrompt.trim().length > 0;
  const preview = ownerPrompt.trim().replace(/\s+/g, " ");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/settings", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load settings (${res.status})`);
        const data = await res.json();
        if (!cancelled) {
          const value = data.ownerPrompt ?? "";
          setOwnerPrompt(value);
          setDraft(value);
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to load settings");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = () => {
    setDraft(ownerPrompt);
    setOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerPrompt: draft }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save settings");
      }

      setOwnerPrompt(draft);
      setOpen(false);
      toast.success("Chatbot prompt saved");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Card className="h-full">
        <CardContent className="flex h-full flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MessageSquare className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight">Chatbot</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Owner instructions for the landing assistant
                </p>
              </div>
            </div>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="shrink-0"
              onClick={openModal}
              disabled={loading}
            >
              <Pencil className="h-3.5 w-3.5" />
              Edit prompt
            </Button>
          </div>

          <div className="mt-auto space-y-2 border-t pt-4">
            {loading ? (
              <p className="text-xs text-muted-foreground">Loading…</p>
            ) : configured ? (
              <>
                <Badge variant="secondary">Configured</Badge>
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {preview}
                </p>
              </>
            ) : (
              <p className="text-xs text-muted-foreground">Not set — add tone, specialties, or CTAs.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (saving) return;
          setOpen(next);
          if (!next) setDraft(ownerPrompt);
        }}
      >
        <DialogContent className="flex max-h-[92vh] w-[min(96vw,36rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
          <form onSubmit={handleSave} className="flex min-h-0 flex-1 flex-col">
            <DialogHeader className="border-b bg-muted/20 px-6 py-5">
              <DialogTitle className="flex items-center gap-2 text-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageSquare className="h-4 w-4" />
                </span>
                Chatbot prompt
              </DialogTitle>
              <DialogDescription>
                Appended to the system prompt with your published services and projects.
              </DialogDescription>
            </DialogHeader>

            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-6 py-5">
              <div className="space-y-2">
                <Label htmlFor="owner-prompt">Owner instructions</Label>
                <Textarea
                  id="owner-prompt"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Add tone, specialties, service areas, or CTA preferences for the landing chatbot…"
                  rows={10}
                  className="min-h-[12rem] resize-y"
                />
              </div>
            </div>

            <DialogFooter className="gap-2 border-t bg-muted/20 px-6 py-4 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : "Save prompt"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
