"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Plus, Sparkles, Trash2 } from "lucide-react";
import MediaForm from "./MediaForm";
import GalleryImagesField from "./GalleryImagesField";
import AiFillDialog from "./AiFillDialog";
import { ProjectBodySchema, type ProjectBody } from "@/lib/projectSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const emptyProject = (): ProjectBody => ({
  slug: "",
  label: "",
  title: "",
  description: "",
  content: "",
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
      const res = await fetch("/api/admin/ai/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
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
        content: generated.content ?? prev.content,
        location: generated.location ?? prev.location,
        duration: generated.duration ?? prev.duration,
        materials: generated.materials?.length
          ? generated.materials
          : prev.materials,
        sortOrder: generated.sortOrder ?? prev.sortOrder,
        // Keep images for the user to upload
        image: prev.image,
        images: prev.images,
      }));
      setAiOpen(false);
      toast.success("Form filled with AI — add images when ready");
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
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-lg bg-background/80 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm font-medium">Generating project with AI...</p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">AI-assisted drafting</p>
          <p className="text-sm text-muted-foreground">
            Describe the project and Claude fills the form — images stay yours to add.
          </p>
        </div>
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
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="project-slug">Slug</Label>
            <Input
              id="project-slug"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-sort">Sort order</Label>
            <Input
              id="project-sort"
              type="number"
              value={form.sortOrder}
              onChange={(e) =>
                setForm({ ...form, sortOrder: Number(e.target.value) })
              }
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="project-label">Label</Label>
            <Input
              id="project-label"
              value={form.label}
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="project-title">Title</Label>
            <Input
              id="project-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-location">Location</Label>
            <Input
              id="project-location"
              value={form.location ?? ""}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project-duration">Duration</Label>
            <Input
              id="project-duration"
              value={form.duration ?? ""}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="project-description">Description</Label>
            <Textarea
              id="project-description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="project-content">Content</Label>
            <Textarea
              id="project-content"
              rows={6}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              required
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {form.materials.map((material, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={material}
                onChange={(e) => {
                  const materials = [...form.materials];
                  materials[index] = e.target.value;
                  setForm({ ...form, materials });
                }}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() =>
                  setForm({
                    ...form,
                    materials: form.materials.filter((_, i) => i !== index),
                  })
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setForm({ ...form, materials: [...form.materials, ""] })
            }
          >
            <Plus className="h-4 w-4" /> Add material
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Images</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <MediaForm
            initialUrl={form.image ?? ""}
            onUploaded={(path) => setForm({ ...form, image: path })}
          />
          <GalleryImagesField
            images={form.images}
            onChange={(images) => setForm({ ...form, images })}
          />
        </CardContent>
      </Card>

      <div className="sticky bottom-0 flex gap-3 border-t bg-background py-4">
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
      title="Fill project with AI"
      description="Describe the project. Text fields will be filled; leave images for you to upload."
      placeholder="e.g. Full kitchen remodel in Orlando with quartz counters, custom cabinets, and a 6-week timeline..."
      loading={aiLoading}
      onGenerate={handleAiGenerate}
    />
    </>
  );
}
