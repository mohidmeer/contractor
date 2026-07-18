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
import CategoryForm, { emptyCategory } from "./CategoryForm";
import type { CategoryBody } from "@/lib/categorySchema";

type CategoryFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  categoryId?: string | null;
  onSaved?: () => void;
};

export default function CategoryFormDialog({
  open,
  onOpenChange,
  mode,
  categoryId,
  onSaved,
}: CategoryFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<CategoryBody | null>(null);

  useEffect(() => {
    if (!open) {
      setInitialValues(null);
      setLoading(false);
      return;
    }

    if (mode === "create") {
      setInitialValues(emptyCategory());
      setLoading(false);
      return;
    }

    if (!categoryId) return;

    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/categories/${categoryId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load category (${res.status})`);
        const data = await res.json();
        if (cancelled) return;
        setInitialValues({
          slug: data.slug,
          name: data.name,
          description: data.description ?? "",
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
  }, [open, mode, categoryId, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "New Category" : "Edit Category"}
          </DialogTitle>
          <DialogDescription>
            Categories group services (e.g. Repair Methods).
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <p className="py-6 text-sm text-muted-foreground">Loading...</p>
        ) : (
          <CategoryForm
            key={mode === "edit" ? categoryId ?? "edit" : "create"}
            mode={mode}
            categoryId={categoryId ?? undefined}
            initialValues={initialValues ?? emptyCategory()}
            onSuccess={() => {
              onOpenChange(false);
              onSaved?.();
            }}
            onCancel={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
