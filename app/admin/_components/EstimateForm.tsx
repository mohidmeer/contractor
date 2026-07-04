"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EstimateBodySchema,
  type EstimateStatus,
} from "@/lib/estimateSchema";
import { computeEstimateTotal, formatCurrency } from "@/lib/utils";
import CopyEstimateLink, {
  getEstimatePublicUrl,
} from "./CopyEstimateLink";

type LineItem = {
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  sortOrder: number;
};

export type EstimateFormValues = {
  clientName: string;
  clientEmail?: string | null;
  clientPhone?: string | null;
  title: string;
  description?: string | null;
  notes?: string | null;
  status: EstimateStatus;
  items: LineItem[];
};

type EstimateFormProps = {
  mode: "create" | "edit";
  estimateId?: string;
  initialToken?: string;
  initialValues?: EstimateFormValues;
  onSuccess?: () => void;
  onCancel?: () => void;
};

const emptyItem = (sortOrder = 0): LineItem => ({
  name: "",
  description: "",
  quantity: 1,
  unitPrice: 0,
  sortOrder,
});

function buildInitialState(initialValues?: EstimateFormValues) {
  return {
    clientName: initialValues?.clientName ?? "",
    clientEmail: initialValues?.clientEmail ?? "",
    clientPhone: initialValues?.clientPhone ?? "",
    title: initialValues?.title ?? "",
    description: initialValues?.description ?? "",
    notes: initialValues?.notes ?? "",
    status: (initialValues?.status ?? "DRAFT") as EstimateStatus,
    items: initialValues?.items?.length
      ? initialValues.items.map((item, index) => ({
          ...item,
          description: item.description ?? "",
          sortOrder: index,
        }))
      : [emptyItem(0)],
  };
}

export default function EstimateForm({
  mode,
  estimateId,
  initialToken,
  initialValues,
  onSuccess,
  onCancel,
}: EstimateFormProps) {
  const initial = buildInitialState(initialValues);
  const [saving, setSaving] = useState(false);
  const [clientName, setClientName] = useState(initial.clientName);
  const [clientEmail, setClientEmail] = useState(initial.clientEmail);
  const [clientPhone, setClientPhone] = useState(initial.clientPhone);
  const [title, setTitle] = useState(initial.title);
  const [description, setDescription] = useState(initial.description);
  const [notes, setNotes] = useState(initial.notes);
  const [status, setStatus] = useState<EstimateStatus>(initial.status);
  const [items, setItems] = useState<LineItem[]>(initial.items);

  useEffect(() => {
    const next = buildInitialState(initialValues);
    setClientName(next.clientName);
    setClientEmail(next.clientEmail);
    setClientPhone(next.clientPhone);
    setTitle(next.title);
    setDescription(next.description);
    setNotes(next.notes);
    setStatus(next.status);
    setItems(next.items);
  }, [initialValues, mode, estimateId]);

  const total = useMemo(() => computeEstimateTotal(items), [items]);

  const updateItem = (index: number, patch: Partial<LineItem>) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...patch } : item))
    );
  };

  const moveItem = (index: number, direction: -1 | 1) => {
    setItems((prev) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= prev.length) return prev;
      const copy = [...prev];
      const [removed] = copy.splice(index, 1);
      copy.splice(nextIndex, 0, removed);
      return copy.map((item, i) => ({ ...item, sortOrder: i }));
    });
  };

  const removeItem = (index: number) => {
    setItems((prev) => {
      if (prev.length === 1) return prev;
      return prev
        .filter((_, i) => i !== index)
        .map((item, i) => ({ ...item, sortOrder: i }));
    });
  };

  const addItem = () => {
    setItems((prev) => [...prev, emptyItem(prev.length)]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      clientName,
      clientEmail: clientEmail || null,
      clientPhone: clientPhone || null,
      title,
      description: description || null,
      notes: notes || null,
      status,
      items: items.map((item, index) => ({
        name: item.name,
        description: item.description || null,
        quantity: Number(item.quantity),
        unitPrice: Number(item.unitPrice),
        sortOrder: index,
      })),
    };

    const parsed = EstimateBodySchema.safeParse(payload);
    if (!parsed.success) {
      const firstError =
        Object.values(parsed.error.flatten().fieldErrors)[0]?.[0] ||
        parsed.error.issues[0]?.message ||
        "Validation failed";
      toast.error(firstError);
      setSaving(false);
      return;
    }

    try {
      const res = await fetch(
        mode === "create" ? "/api/estimates" : `/api/estimates/${estimateId}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        }
      );

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Failed to save estimate");
      }

      toast.success(
        mode === "create" ? "Estimate created" : "Estimate updated"
      );
      onSuccess?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {initialToken && (
        <div className="flex flex-col gap-2 rounded-md border bg-muted/40 p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium">Public link</p>
            <p className="truncate text-xs text-muted-foreground">
              {getEstimatePublicUrl(initialToken)}
            </p>
          </div>
          <CopyEstimateLink token={initialToken} />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="clientName">Client name *</Label>
          <Input
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientEmail">Client email</Label>
          <Input
            id="clientEmail"
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientPhone">Client phone</Label>
          <Input
            id="clientPhone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>Status</Label>
          <Select
            value={status}
            onValueChange={(value) => setStatus(value as EstimateStatus)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DRAFT">Draft</SelectItem>
              <SelectItem value="SENT">Sent</SelectItem>
              <SelectItem value="VIEWED">Viewed</SelectItem>
              <SelectItem value="ACCEPTED">Accepted</SelectItem>
              <SelectItem value="DECLINED">Declined</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Line items</p>
            <p className="text-xs text-muted-foreground">
              One row per item — name, details, qty, and price
            </p>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={addItem}>
            <Plus className="h-4 w-4" />
            Add row
          </Button>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-muted/20">
          <div className="min-w-[680px]">
            <div className="grid grid-cols-[1.75rem_minmax(7rem,1.1fr)_minmax(7rem,1fr)_4rem_5.5rem_5.5rem_6.5rem] items-center gap-1.5 border-b bg-muted/50 px-2 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              <span>#</span>
              <span>Name</span>
              <span>Description</span>
              <span>Qty</span>
              <span>Price</span>
              <span className="text-right">Total</span>
              <span className="text-right">Actions</span>
            </div>

            <div className="divide-y">
              {items.map((item, index) => {
                const subtotal =
                  (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0);
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[1.75rem_minmax(7rem,1.1fr)_minmax(7rem,1fr)_4rem_5.5rem_5.5rem_6.5rem] items-center gap-1.5 bg-background px-2 py-2 transition-colors hover:bg-accent/40"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                      {index + 1}
                    </span>
                    <Input
                      value={item.name}
                      onChange={(e) =>
                        updateItem(index, { name: e.target.value })
                      }
                      placeholder="Item name"
                      className="h-9"
                      required
                    />
                    <Input
                      value={item.description}
                      onChange={(e) =>
                        updateItem(index, { description: e.target.value })
                      }
                      placeholder="Optional details"
                      className="h-9"
                    />
                    <Input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(index, {
                          quantity: Number(e.target.value) || 1,
                        })
                      }
                      className="h-9 text-center"
                    />
                    <Input
                      type="number"
                      min={0}
                      step="0.01"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateItem(index, {
                          unitPrice: Number(e.target.value) || 0,
                        })
                      }
                      className="h-9"
                    />
                    <div className="text-right text-sm font-semibold tabular-nums">
                      {formatCurrency(subtotal)}
                    </div>
                    <div className="flex justify-end gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => moveItem(index, -1)}
                        disabled={index === 0}
                        title="Move up"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => moveItem(index, 1)}
                        disabled={index === items.length - 1}
                        title="Move down"
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(index)}
                        disabled={items.length === 1}
                        title="Remove row"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border bg-primary/5 px-4 py-3">
          <p className="text-sm font-medium text-muted-foreground">
            {items.length} item{items.length === 1 ? "" : "s"}
          </p>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Grand total
            </p>
            <p className="text-xl font-bold tabular-nums">{formatCurrency(total)}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2 border-t pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={saving}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save estimate"}
        </Button>
      </div>
    </form>
  );
}
