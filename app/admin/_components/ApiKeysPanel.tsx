"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const [label, setLabel] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [inputPrice, setInputPrice] = useState("0");
  const [outputPrice, setOutputPrice] = useState("0");
  const [makeDefault, setMakeDefault] = useState(false);

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
    <Card className="max-w-4xl">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div className="space-y-1.5">
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Used for the landing chatbot, Bulk write, and Fill with AI.
          </CardDescription>
          {active ? (
            <p className="pt-1 text-sm text-foreground">
              Active: <span className="font-medium">{active.label}</span>{" "}
              <span className="text-muted-foreground">{active.maskedKey}</span>
            </p>
          ) : (
            <p className="pt-1 text-sm text-muted-foreground">No active key set.</p>
          )}
        </div>
        <Button type="button" onClick={() => setOpen(true)}>
          <Plus className="mr-1.5 h-4 w-4" />
          Add key
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading keys...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No API keys yet. Add a key to enable AI generation and the chatbot.
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Est. cost</TableHead>
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
                  <TableCell className="text-xs text-muted-foreground">
                    in {formatTokens(row.inputTokensUsed)}
                    <br />
                    out {formatTokens(row.outputTokensUsed)}
                  </TableCell>
                  <TableCell>{formatUsd(row.estimatedCost)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
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
        )}
      </CardContent>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) resetForm();
        }}
      >
        <DialogContent>
          <form onSubmit={handleCreate}>
            <DialogHeader>
              <DialogTitle>Add API key</DialogTitle>
              <DialogDescription>
                Stored in plain text in the database. Shown masked in the list after save.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Add key"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
