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
import ProjectForm, { emptyProject } from "./ProjectForm";
import type { ProjectBody } from "@/lib/projectSchema";

type ProjectFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  projectId?: string | null;
  onSaved?: () => void;
};

export default function ProjectFormDialog({
  open,
  onOpenChange,
  mode,
  projectId,
  onSaved,
}: ProjectFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<ProjectBody | null>(null);

  useEffect(() => {
    if (!open) {
      setInitialValues(null);
      setLoading(false);
      return;
    }

    if (mode === "create") {
      setInitialValues(emptyProject());
      setLoading(false);
      return;
    }

    if (!projectId) return;

    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/projects/${projectId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load project (${res.status})`);
        const data = await res.json();
        if (cancelled) return;

        setInitialValues({
          slug: data.slug,
          label: data.label,
          title: data.title,
          description: data.description,
          content: data.content,
          image: data.image ?? "",
          location: data.location ?? "",
          duration: data.duration ?? "",
          materials: Array.isArray(data.materials) ? data.materials : [],
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
  }, [open, mode, projectId, onOpenChange]);

  const handleSuccess = () => {
    onOpenChange(false);
    onSaved?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[92vh] w-[min(96vw,56rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle>
            {mode === "create" ? "New Project" : "Edit Project"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Create a new project for the active site."
              : "Update project details, gallery, and content."}
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto px-4 py-4 sm:px-6">
          {loading ? (
            <p className="py-8 text-sm text-muted-foreground">
              Loading project...
            </p>
          ) : mode === "edit" && !initialValues ? (
            <p className="py-8 text-sm text-destructive">Project not found.</p>
          ) : (
            <ProjectForm
              key={mode === "edit" ? projectId ?? "edit" : "create"}
              mode={mode}
              projectId={projectId ?? undefined}
              initialValues={initialValues ?? emptyProject()}
              onSuccess={handleSuccess}
              onCancel={() => onOpenChange(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
