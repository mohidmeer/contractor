"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { KeyRound, Loader2, Pencil, Plus, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ApiKeyRow = {
  id: string;
  label: string;
  maskedKey: string;
  inputTokensUsed: number;
  outputTokensUsed: number;
  inputPricePerMillion: number;
  outputPricePerMillion: number;
  estimatedCost: number;
  isDefault: boolean;
  isActive: boolean;
  createdAt: string;
};

function formatTokens(n: number) {
  return n.toLocaleString();
}

function formatUsd(n: number) {
  if (!Number.isFinite(n) || n <= 0) return "$0.00";
  if (n < 0.01) return `$${n.toFixed(4)}`;
  return `$${n.toFixed(2)}`;
}

export default function ApiKeysPanel() {
  const [items, setItems] = useState<ApiKeyRow[]>([]);
  const [active, setActive] = useState<ApiKeyRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<ApiKeyRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const [label, setLabel] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [inputPrice, setInputPrice] = useState("0");
  const [outputPrice, setOutputPrice] = useState("0");
  const [makeDefault, setMakeDefault] = useState(false);
  const [editInputPrice, setEditInputPrice] = useState("0");
  const [editOutputPrice, setEditOutputPrice] = useState("0");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/api-keys", { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load API keys (${res.status})`);
      const data = await res.json();
      setItems(data.items ?? []);
      setActive(data.active ?? null);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load keys");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const resetForm = () => {
    setLabel("");
    setApiKey("");
    setInputPrice("0");
    setOutputPrice("0");
    setMakeDefault(false);
  };

  const openEdit = (row: ApiKeyRow) => {
    setEditing(row);
    setEditInputPrice(String(row.inputPricePerMillion ?? 0));
    setEditOutputPrice(String(row.outputPricePerMillion ?? 0));
    setEditOpen(true);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/api-keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label,
          apiKey,
          inputPricePerMillion: Number(inputPrice) || 0,
          outputPricePerMillion: Number(outputPrice) || 0,
          isDefault: makeDefault,
          makeActive: true,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to add key");
      toast.success("API key added");
      setOpen(false);
      resetForm();
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to add key");
    } finally {
      setSaving(false);
    }
  };

  const handleSavePricing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/api-keys", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editing.id,
          action: "update-pricing",
          inputPricePerMillion: Number(editInputPrice) || 0,
          outputPricePerMillion: Number(editOutputPrice) || 0,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to update pricing");
      toast.success("Pricing updated");
      setEditOpen(false);
      setEditing(null);
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update pricing");
    } finally {
      setSaving(false);
    }
  };

  const handleResetUsage = async () => {
    if (!editing) return;
    if (!confirm("Reset In and Out token usage for this key to 0?")) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/api-keys", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing.id, action: "reset-usage" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to reset usage");
      toast.success("Usage reset");
      setEditing((prev) =>
        prev
          ? { ...prev, inputTokensUsed: 0, outputTokensUsed: 0, estimatedCost: 0 }
          : prev
      );
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to reset usage");
    } finally {
      setSaving(false);
    }
  };

  const patchKey = async (id: string, action: "set-active" | "set-default") => {
    setBusyId(id);
    try {
      const res = await fetch("/api/admin/api-keys", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Update failed");
      toast.success(action === "set-active" ? "Active key updated" : "Default key updated");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed");
    } finally {
      setBusyId(null);
    }
  };

  const deleteKey = async (id: string) => {
    if (!confirm("Delete this API key?")) return;
    setBusyId(id);
    try {
      const res = await fetch("/api/admin/api-keys", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Delete failed");
      toast.success("API key deleted");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <>
      <Card>
        <CardContent className="space-y-5 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <KeyRound className="h-4 w-4" />
              </span>
              <div className="min-w-0 space-y-1">
                <h3 className="text-sm font-semibold tracking-tight">API Keys</h3>
                <p className="text-xs text-muted-foreground">
                  Used for the landing chatbot, Bulk write, and Fill with AI.
                </p>
                {active ? (
                  <p className="pt-1 text-xs text-foreground">
                    Active: <span className="font-medium">{active.label}</span>{" "}
                    <span className="font-mono text-muted-foreground">
                      {active.maskedKey}
                    </span>
                  </p>
                ) : !loading ? (
                  <p className="pt-1 text-xs text-muted-foreground">No active key set.</p>
                ) : null}
              </div>
            </div>
            <Button
              type="button"
              size="sm"
              className="shrink-0"
              onClick={() => setOpen(true)}
            >
              <Plus className="h-3.5 w-3.5" />
              Add key
            </Button>
          </div>

          {loading ? (
            <p className="text-sm text-muted-foreground">Loading keys…</p>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-muted/20 px-6 py-10 text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <KeyRound className="h-4 w-4 text-muted-foreground" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-medium">No API keys yet</p>
                <p className="text-xs text-muted-foreground">
                  Add a key to enable AI generation and the chatbot.
                </p>
              </div>
              <Button type="button" size="sm" onClick={() => setOpen(true)}>
                <Plus className="h-3.5 w-3.5" />
                Add key
              </Button>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Label</TableHead>
                    <TableHead>Key</TableHead>
                    <TableHead className="text-right">In</TableHead>
                    <TableHead className="text-right">Out</TableHead>
                    <TableHead className="text-right">Est. cost</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {row.label}
                          {row.isActive ? <Badge>Active</Badge> : null}
                          {row.isDefault ? (
                            <Badge variant="outline">Default</Badge>
                          ) : null}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {row.maskedKey}
                      </TableCell>
                      <TableCell className="text-right text-xs tabular-nums text-muted-foreground">
                        {formatTokens(row.inputTokensUsed)}
                      </TableCell>
                      <TableCell className="text-right text-xs tabular-nums text-muted-foreground">
                        {formatTokens(row.outputTokensUsed)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatUsd(row.estimatedCost)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            disabled={busyId === row.id}
                            onClick={() => openEdit(row)}
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit
                          </Button>
                          {!row.isActive ? (
                            <Button
                              type="button"
                              size="sm"
                              variant="outline"
                              disabled={busyId === row.id}
                              onClick={() => patchKey(row.id, "set-active")}
                            >
                              Set active
                            </Button>
                          ) : null}
                          {!row.isDefault ? (
                            <Button
                              type="button"
                              size="sm"
                              variant="ghost"
                              disabled={busyId === row.id}
                              onClick={() => patchKey(row.id, "set-default")}
                            >
                              Default
                            </Button>
                          ) : null}
                          <Button
                            type="button"
                            size="sm"
                            variant="ghost"
                            disabled={busyId === row.id}
                            onClick={() => deleteKey(row.id)}
                            aria-label="Delete key"
                          >
                            {busyId === row.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4 text-destructive" />
                            )}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (saving) return;
          setOpen(next);
          if (!next) resetForm();
        }}
      >
        <DialogContent className="flex w-[min(96vw,28rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
          <form onSubmit={handleCreate} className="flex flex-col">
            <DialogHeader className="border-b bg-muted/20 px-6 py-5">
              <DialogTitle className="flex items-center gap-2 text-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <KeyRound className="h-4 w-4" />
                </span>
                Add API key
              </DialogTitle>
              <DialogDescription>
                Stored in plain text. Shown masked in the list after save.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 px-6 py-5">
              <div className="space-y-2">
                <Label htmlFor="key-label">Label</Label>
                <Input
                  id="key-label"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Production"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="key-value">API key</Label>
                <Input
                  id="key-value"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-ant-..."
                  autoComplete="off"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="in-price">Input $/1M tokens</Label>
                  <Input
                    id="in-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={inputPrice}
                    onChange={(e) => setInputPrice(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="out-price">Output $/1M tokens</Label>
                  <Input
                    id="out-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={outputPrice}
                    onChange={(e) => setOutputPrice(e.target.value)}
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={makeDefault}
                  onChange={(e) => setMakeDefault(e.target.checked)}
                  className="h-4 w-4 rounded border"
                />
                Set as default key
              </label>
            </div>

            <DialogFooter className="gap-2 border-t bg-muted/20 px-6 py-4 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : "Add key"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={editOpen}
        onOpenChange={(next) => {
          if (saving) return;
          setEditOpen(next);
          if (!next) setEditing(null);
        }}
      >
        <DialogContent className="flex w-[min(96vw,28rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
          <form onSubmit={handleSavePricing} className="flex flex-col">
            <DialogHeader className="border-b bg-muted/20 px-6 py-5">
              <DialogTitle className="flex items-center gap-2 text-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Pencil className="h-4 w-4" />
                </span>
                Edit pricing
              </DialogTitle>
              <DialogDescription>
                Only pricing and usage counters can be changed. Label and API key stay fixed.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 px-6 py-5">
              {editing ? (
                <div className="rounded-xl border bg-muted/20 px-3 py-2.5 text-sm">
                  <p className="font-medium">{editing.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {editing.maskedKey}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    In {formatTokens(editing.inputTokensUsed)} · Out{" "}
                    {formatTokens(editing.outputTokensUsed)}
                  </p>
                </div>
              ) : null}

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="edit-in-price">Input $/1M tokens</Label>
                  <Input
                    id="edit-in-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={editInputPrice}
                    onChange={(e) => setEditInputPrice(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-out-price">Output $/1M tokens</Label>
                  <Input
                    id="edit-out-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={editOutputPrice}
                    onChange={(e) => setEditOutputPrice(e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                disabled={saving || !editing}
                onClick={handleResetUsage}
                className="justify-start"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset In / Out usage to 0
              </Button>
            </div>

            <DialogFooter className="gap-2 border-t bg-muted/20 px-6 py-4 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditOpen(false)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : "Save pricing"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
