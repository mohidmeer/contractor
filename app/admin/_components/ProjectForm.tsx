"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Plus, Sparkles, Trash2 } from "lucide-react";
import MediaForm from "./MediaForm";
import GalleryImagesField from "./GalleryImagesField";
import AiFillDialog from "./AiFillDialog";
import {
  AiDraftBanner,
  Field,
  FormCard,
  ItemBadge,
  areaClass,
  fieldClass,
} from "./formUi";
import { ProjectBodySchema, type ProjectBody } from "@/lib/projectSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const emptyProject = (): ProjectBody => ({
  slug: "",
  label: "",
  title: "",
  description: "",
  content: [""],
  image: "",
  location: "",
  duration: "",
  materials: [""],
  images: [],
  sortOrder: 0,
});

type ProjectFormProps = {
  mode: "create" | "edit";
  projectId?: string;
  initialValues?: ProjectBody;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function ProjectForm({
  mode,
  projectId,
  initialValues,
  onSuccess,
  onCancel,
}: ProjectFormProps) {
  const [form, setForm] = useState<ProjectBody>(
    initialValues ?? emptyProject()
  );
  const [saving, setSaving] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (initialValues) setForm(initialValues);
  }, [initialValues]);

  const handleAiGenerate = async (prompt: string) => {
    setAiLoading(true);
    try {
      const existing =
        mode === "edit"
          ? {
              slug: form.slug,
              label: form.label,
              title: form.title,
              description: form.description,
              content: form.content,
              location: form.location,
              duration: form.duration,
              materials: form.materials,
              sortOrder: form.sortOrder,
            }
          : null;

      const res = await fetch("/api/admin/ai/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          id: mode === "edit" ? projectId : null,
          existing,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to generate with AI");

      const generated = data.data;
      setForm((prev) => ({
        ...prev,
        slug: generated.slug ?? prev.slug,
        label: generated.label ?? prev.label,
        title: generated.title ?? prev.title,
        description: generated.description ?? prev.description,
        content:
          Array.isArray(generated.content) && generated.content.length
            ? generated.content
            : prev.content,
        location: generated.location ?? prev.location,
        duration: generated.duration ?? prev.duration,
        materials: generated.materials?.length
          ? generated.materials
          : prev.materials,
        sortOrder: generated.sortOrder ?? prev.sortOrder,
        image: prev.image,
        images: prev.images,
      }));
      setAiOpen(false);
      toast.success(
        mode === "edit"
          ? "Project updated with AI — review before saving"
          : "Form filled with AI — add images when ready"
      );
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "AI generation failed");
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const parsed = ProjectBodySchema.parse({
        ...form,
        materials: form.materials.filter(Boolean),
      });

      const res = await fetch(
        mode === "create"
          ? "/api/admin/projects"
          : `/api/admin/projects/${projectId}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save project");
      }

      toast.success(mode === "create" ? "Project created" : "Project updated");
      onSuccess?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative space-y-6">
        {aiLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-2xl bg-background/80 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm font-medium">Generating project with AI...</p>
          </div>
        )}

        <AiDraftBanner
          description="Describe the project and Claude fills the form — images stay yours to add."
          action={
            <Button
              type="button"
              variant="outline"
              className="ai-rainbow-btn"
              disabled={aiLoading || saving}
              onClick={() => setAiOpen(true)}
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Fill with AI
              </span>
            </Button>
          }
        />

        <FormCard
          title="Project details"
          description="Listing info, location, timeline, and body copy."
          contentClassName="grid gap-5 md:grid-cols-2"
        >
          <Field label="Slug" htmlFor="project-slug">
            <Input
              id="project-slug"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className={fieldClass}
              required
            />
          </Field>
          <Field label="Sort order" htmlFor="project-sort">
            <Input
              id="project-sort"
              type="number"
              value={form.sortOrder}
              onChange={(e) =>
                setForm({ ...form, sortOrder: Number(e.target.value) })
              }
              className={fieldClass}
            />
          </Field>
          <Field label="Label" htmlFor="project-label" className="md:col-span-2">
            <Input
              id="project-label"
              value={form.label}
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              className={fieldClass}
              required
            />
          </Field>
          <Field label="Title" htmlFor="project-title" className="md:col-span-2">
            <Input
              id="project-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={cn(fieldClass, "text-[15px] font-medium")}
              required
            />
          </Field>
          <Field label="Location" htmlFor="project-location">
            <Input
              id="project-location"
              value={form.location ?? ""}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className={fieldClass}
              placeholder="City, FL"
            />
          </Field>
          <Field label="Duration" htmlFor="project-duration">
            <Input
              id="project-duration"
              value={form.duration ?? ""}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              className={fieldClass}
              placeholder="6 weeks"
            />
          </Field>
          <Field
            label="Description"
            htmlFor="project-description"
            className="md:col-span-2"
          >
            <Textarea
              id="project-description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className={areaClass}
              rows={3}
              required
            />
          </Field>

          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] font-semibold tracking-tight">
                Content paragraphs
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-lg"
                onClick={() =>
                  setForm({ ...form, content: [...form.content, ""] })
                }
              >
                <Plus className="h-4 w-4" />
                Add paragraph
              </Button>
            </div>
            <div className="space-y-3">
              {form.content.map((paragraph, index) => (
                <div
                  key={index}
                  className="flex gap-2 rounded-2xl border border-border/60 bg-muted/15 p-3"
                >
                  <ItemBadge n={index + 1} />
                  <Textarea
                    rows={4}
                    value={paragraph}
                    placeholder={`Paragraph ${index + 1}`}
                    onChange={(e) => {
                      const content = [...form.content];
                      content[index] = e.target.value;
                      setForm({ ...form, content });
                    }}
                    className={cn(areaClass, "bg-background/80")}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 shrink-0 text-destructive"
                    disabled={form.content.length <= 1}
                    onClick={() => {
                      const content = form.content.filter((_, i) => i !== index);
                      setForm({
                        ...form,
                        content: content.length ? content : [""],
                      });
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </FormCard>

        <FormCard
          title="Materials"
          description="One material per row — keep them short and specific."
          action={
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-lg"
              onClick={() =>
                setForm({ ...form, materials: [...form.materials, ""] })
              }
            >
              <Plus className="h-4 w-4" />
              Add material
            </Button>
          }
          contentClassName="space-y-2 rounded-2xl border border-sky-500/15 bg-sky-500/[0.04] p-4"
        >
          {form.materials.map((material, index) => (
            <div key={index} className="flex items-center gap-2">
              <ItemBadge n={index + 1} tone="sky" />
              <Input
                value={material}
                onChange={(e) => {
                  const materials = [...form.materials];
                  materials[index] = e.target.value;
                  setForm({ ...form, materials });
                }}
                placeholder={`Material ${index + 1}`}
                className={cn(fieldClass, "bg-background/80")}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 shrink-0 text-destructive"
                onClick={() => {
                  const next = form.materials.filter((_, i) => i !== index);
                  setForm({
                    ...form,
                    materials: next.length ? next : [""],
                  });
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </FormCard>

        <FormCard
          title="Images"
          description="Cover image and gallery — AI never invents these."
          contentClassName="flex flex-col gap-6"
        >
          <MediaForm
            initialUrl={form.image ?? ""}
            onUploaded={(path) => setForm({ ...form, image: path })}
          />
          <GalleryImagesField
            images={form.images}
            onChange={(images) => setForm({ ...form, images })}
          />
        </FormCard>

        <div className="sticky bottom-0 flex gap-3 border-t bg-background/95 py-3 backdrop-blur">
          <Button type="submit" disabled={saving || aiLoading}>
            {saving
              ? "Saving..."
              : mode === "create"
                ? "Create project"
                : "Save changes"}
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={aiLoading}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>

      <AiFillDialog
        open={aiOpen}
        onOpenChange={setAiOpen}
        title={
          mode === "edit" ? "Update project with AI" : "Fill project with AI"
        }
        description={
          mode === "edit"
            ? "Describe what to change. Current project content is sent to AI as reference."
            : "Describe the project. Text fields will be filled; leave images for you to upload."
        }
        placeholder={
          mode === "edit"
            ? "e.g. Emphasize the custom cabinetry work and shorten the timeline language..."
            : "e.g. Full kitchen remodel in Orlando with quartz counters, custom cabinets, and a 6-week timeline..."
        }
        loading={aiLoading}
        onGenerate={handleAiGenerate}
      />
    </>
  );
}
