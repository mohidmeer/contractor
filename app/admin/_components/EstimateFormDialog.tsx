"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EstimateForm, { type EstimateFormValues } from "./EstimateForm";
import type { EstimateStatus } from "@/lib/estimateSchema";

type EstimateFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  estimateId?: string | null;
  onSaved?: () => void;
};

type EstimateData = EstimateFormValues & {
  id: string;
  token: string;
};

export default function EstimateFormDialog({
  open,
  onOpenChange,
  mode,
  estimateId,
  onSaved,
}: EstimateFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<EstimateData | null>(null);

  useEffect(() => {
    if (!open) {
      setEstimate(null);
      setLoading(false);
      return;
    }

    if (mode === "create") {
      setEstimate(null);
      setLoading(false);
      return;
    }

    if (!estimateId) return;

    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/estimates/${estimateId}`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load estimate");
        if (!cancelled) setEstimate(data);
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to load");
        if (!cancelled) onOpenChange(false);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [open, mode, estimateId, onOpenChange]);

  const handleSuccess = () => {
    onOpenChange(false);
    onSaved?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90vh] w-full max-w-3xl flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle>
            {mode === "create" ? "New Estimate" : "Edit Estimate"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Create a new client estimate with line items."
              : "Update estimate details and line items."}
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto px-6 py-4">
          {loading ? (
            <p className="py-8 text-sm text-muted-foreground">
              Loading estimate...
            </p>
          ) : mode === "edit" && !estimate ? (
            <p className="py-8 text-sm text-destructive">Estimate not found.</p>
          ) : (
            <EstimateForm
              key={mode === "edit" ? estimate?.id ?? "edit" : "create"}
              mode={mode}
              estimateId={estimate?.id}
              initialToken={estimate?.token}
              initialValues={
                estimate
                  ? {
                      clientName: estimate.clientName,
                      clientEmail: estimate.clientEmail,
                      clientPhone: estimate.clientPhone,
                      title: estimate.title,
                      description: estimate.description,
                      notes: estimate.notes,
                      status: estimate.status as EstimateStatus,
                      items: estimate.items.map((item) => ({
                        name: item.name,
                        description: item.description ?? "",
                        quantity: item.quantity,
                        unitPrice: item.unitPrice,
                        sortOrder: item.sortOrder,
                      })),
                    }
                  : undefined
              }
              onSuccess={handleSuccess}
              onCancel={() => onOpenChange(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
