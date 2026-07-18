"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CategoryBodySchema, type CategoryBody } from "@/lib/categorySchema";

export const emptyCategory = (): CategoryBody => ({
  slug: "",
  name: "",
  description: "",
  sortOrder: 0,
});

type CategoryFormProps = {
  mode: "create" | "edit";
  categoryId?: string;
  initialValues?: CategoryBody;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function CategoryForm({
  mode,
  categoryId,
  initialValues,
  onSuccess,
  onCancel,
}: CategoryFormProps) {
  const [form, setForm] = useState<CategoryBody>(
    initialValues ?? emptyCategory()
  );
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (initialValues) setForm(initialValues);
  }, [initialValues]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const parsed = CategoryBodySchema.parse(form);
      const res = await fetch(
        mode === "create"
          ? "/api/admin/categories"
          : `/api/admin/categories/${categoryId}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save category");
      }

      toast.success(mode === "create" ? "Category created" : "Category updated");
      onSuccess?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="category-name">Name</Label>
          <Input
            id="category-name"
            value={form.name}
            onChange={(e) => {
              const name = e.target.value;
              setForm((prev) => ({
                ...prev,
                name,
                slug:
                  mode === "create" && !prev.slug
                    ? name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "")
                    : prev.slug,
              }));
            }}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category-slug">Slug</Label>
          <Input
            id="category-slug"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="category-sort">Sort order</Label>
          <Input
            id="category-sort"
            type="number"
            value={form.sortOrder}
            onChange={(e) =>
              setForm({ ...form, sortOrder: Number(e.target.value) })
            }
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="category-description">Description</Label>
          <Textarea
            id="category-description"
            rows={3}
            value={form.description ?? ""}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex gap-2 border-t pt-4">
        <Button type="submit" disabled={saving}>
          {saving
            ? "Saving..."
            : mode === "create"
              ? "Create category"
              : "Save changes"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
