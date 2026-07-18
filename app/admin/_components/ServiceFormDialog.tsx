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
import ServiceForm, { emptyService } from "./ServiceForm";
import type { ServiceBody } from "@/lib/serviceSchema";

type ServiceFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  serviceId?: string | null;
  onSaved?: () => void;
};

export default function ServiceFormDialog({
  open,
  onOpenChange,
  mode,
  serviceId,
  onSaved,
}: ServiceFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<ServiceBody | null>(null);

  useEffect(() => {
    if (!open) {
      setInitialValues(null);
      setLoading(false);
      return;
    }

    if (mode === "create") {
      setInitialValues(emptyService());
      setLoading(false);
      return;
    }

    if (!serviceId) return;

    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/services/${serviceId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load service (${res.status})`);
        const data = await res.json();
        if (cancelled) return;

        setInitialValues({
          slug: data.slug,
          label: data.label,
          title: data.title,
          description: data.description,
          content: data.content,
          image: data.image ?? "",
          typeOfSolutions: data.typeOfSolutions,
          benefitsOFChoosing: data.benefitsOFChoosing,
          faqs: data.faqs,
          images: Array.isArray(data.images) ? data.images : [],
          sortOrder: data.sortOrder ?? 0,
        });
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
  }, [open, mode, serviceId, onOpenChange]);

  const handleSuccess = () => {
    onOpenChange(false);
    onSaved?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[92vh] w-[min(96vw,56rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle>
            {mode === "create" ? "New Service" : "Edit Service"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Create a new service."
              : "Update service details, gallery, and content."}
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto px-4 py-4 sm:px-6">
          {loading ? (
            <p className="py-8 text-sm text-muted-foreground">
              Loading service...
            </p>
          ) : mode === "edit" && !initialValues ? (
            <p className="py-8 text-sm text-destructive">Service not found.</p>
          ) : (
            <ServiceForm
              key={mode === "edit" ? serviceId ?? "edit" : "create"}
              mode={mode}
              serviceId={serviceId ?? undefined}
              initialValues={initialValues ?? emptyService()}
              onSuccess={handleSuccess}
              onCancel={() => onOpenChange(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
