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
import BlogForm, { emptyBlog } from "./BlogForm";
import type { BlogContentType } from "@/lib/blogSchema";

type BlogFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  blogId?: string | null;
  onSaved?: () => void;
};

function normalizeLoadedContent(raw: unknown): BlogContentType["content"] {
  if (!Array.isArray(raw) || !raw.length) {
    return emptyBlog().content;
  }

  return raw.map((block) => {
    const item = (block ?? {}) as Record<string, unknown>;
    const paragraph =
      typeof item.paragraph === "string"
        ? item.paragraph
        : typeof item.body === "string"
          ? item.body
          : null;
    const listItems = Array.isArray(item.listItems)
      ? (item.listItems as string[])
      : null;
    const table = Array.isArray(item.table)
      ? (item.table as string[][])
      : null;

    return {
      heading: typeof item.heading === "string" ? item.heading : "",
      paragraph,
      listItems: listItems?.length ? listItems : null,
      table: table?.length ? table : null,
      quote: typeof item.quote === "string" ? item.quote : null,
    };
  });
}

export default function BlogFormDialog({
  open,
  onOpenChange,
  mode,
  blogId,
  onSaved,
}: BlogFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<BlogContentType | null>(
    null
  );

  useEffect(() => {
    if (!open) {
      setInitialValues(null);
      setLoading(false);
      return;
    }

    if (mode === "create") {
      setInitialValues(emptyBlog());
      setLoading(false);
      return;
    }

    if (!blogId) return;

    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/blogs/${blogId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load blog (${res.status})`);
        const data = await res.json();
        if (cancelled) return;

        setInitialValues({
          title: data.title ?? "",
          read_time: data.read_time ?? "5 min",
          seo: {
            title: data.seo_title ?? data.title ?? "",
            description:
              data.seo_description ?? data.description ?? "",
            keywords: [],
          },
          image: data.image ?? "",
          content: normalizeLoadedContent(data.content),
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
  }, [open, mode, blogId, onOpenChange]);

  const handleSuccess = () => {
    onOpenChange(false);
    onSaved?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[92vh] w-[min(96vw,56rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle>
            {mode === "create" ? "New Blog Post" : "Edit Blog Post"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Create a new post — use AI to draft content, then add a cover image."
              : "Update blog details, sections, SEO, and cover image."}
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto px-4 py-4 sm:px-6">
          {loading ? (
            <p className="py-8 text-sm text-muted-foreground">Loading blog...</p>
          ) : mode === "edit" && !initialValues ? (
            <p className="py-8 text-sm text-destructive">Blog not found.</p>
          ) : (
            <BlogForm
              key={mode === "edit" ? blogId ?? "edit" : "create"}
              mode={mode}
              blogId={blogId ?? undefined}
              initialValues={initialValues ?? emptyBlog()}
              onSuccess={handleSuccess}
              onCancel={() => onOpenChange(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
