"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Plus, Sparkles, Trash2 } from "lucide-react";
import MediaForm from "./MediaForm";
import GalleryImagesField from "./GalleryImagesField";
import AiFillDialog from "./AiFillDialog";
import { ServiceBodySchema, type ServiceBody } from "@/lib/serviceSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const emptyService = (): ServiceBody => ({
  slug: "",
  label: "",
  title: "",
  description: "",
  content: [""],
  image: "",
  typeOfSolutions: { headings: "Solutions we offer", types: [""] },
  benefitsOFChoosing: [{ title: "", description: "" }],
  faqs: [{ question: "", answer: "" }],
  images: [],
  sortOrder: 0,
  categoryId: null,
});

type CategoryOption = { id: number; name: string; slug: string };

type ServiceFormProps = {
  mode: "create" | "edit";
  serviceId?: string;
  initialValues?: ServiceBody;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function ServiceForm({
  mode,
  serviceId,
  initialValues,
  onSuccess,
  onCancel,
}: ServiceFormProps) {
  const [form, setForm] = useState<ServiceBody>(
    initialValues ?? emptyService()
  );
  const [saving, setSaving] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryOption[]>([]);

  useEffect(() => {
    if (initialValues) setForm(initialValues);
  }, [initialValues]);

  useEffect(() => {
    let cancelled = false;
    async function loadCategories() {
      try {
        const res = await fetch("/api/admin/categories?take=200", {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setCategories(data.items || []);
      } catch {
        // non-blocking
      }
    }
    loadCategories();
    return () => {
      cancelled = true;
    };
  }, []);

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
              typeOfSolutions: form.typeOfSolutions,
              benefitsOFChoosing: form.benefitsOFChoosing,
              faqs: form.faqs,
              sortOrder: form.sortOrder,
              categoryId: form.categoryId,
            }
          : null;

      const res = await fetch("/api/admin/ai/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          id: mode === "edit" ? serviceId : null,
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
        typeOfSolutions: generated.typeOfSolutions ?? prev.typeOfSolutions,
        benefitsOFChoosing:
          generated.benefitsOFChoosing ?? prev.benefitsOFChoosing,
        faqs: generated.faqs ?? prev.faqs,
        sortOrder: generated.sortOrder ?? prev.sortOrder,
        categoryId: prev.categoryId,
        // Keep images for the user to upload
        image: prev.image,
        images: prev.images,
      }));
      setAiOpen(false);
      toast.success(
        mode === "edit"
          ? "Service updated with AI — review before saving"
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
      const parsed = ServiceBodySchema.parse({
        ...form,
        typeOfSolutions: {
          ...form.typeOfSolutions,
          types: form.typeOfSolutions.types.filter(Boolean),
        },
        benefitsOFChoosing: form.benefitsOFChoosing.filter(
          (b) => b.title.trim() || b.description.trim()
        ),
        faqs: form.faqs.filter((f) => f.question.trim() || f.answer.trim()),
      });

      const res = await fetch(
        mode === "create"
          ? "/api/admin/services"
          : `/api/admin/services/${serviceId}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save service");
      }

      toast.success(mode === "create" ? "Service created" : "Service updated");
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
          <p className="text-sm font-medium">Generating service with AI...</p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">AI-assisted drafting</p>
          <p className="text-sm text-muted-foreground">
            Describe the service and Claude fills the form — images stay yours to add.
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
          <CardTitle>Service details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="service-slug">Slug</Label>
            <Input
              id="service-slug"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service-sort">Sort order</Label>
            <Input
              id="service-sort"
              type="number"
              value={form.sortOrder}
              onChange={(e) =>
                setForm({ ...form, sortOrder: Number(e.target.value) })
              }
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Category</Label>
            <Select
              value={
                form.categoryId != null ? String(form.categoryId) : "none"
              }
              onValueChange={(value) =>
                setForm({
                  ...form,
                  categoryId: value === "none" ? null : Number(value),
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No category</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={String(cat.id)}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="service-label">Label</Label>
            <Input
              id="service-label"
              value={form.label}
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="service-title">Title</Label>
            <Input
              id="service-title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="service-description">Description</Label>
            <Textarea
              id="service-description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <Label>Content paragraphs</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setForm({ ...form, content: [...form.content, ""] })
                }
              >
                <Plus className="h-4 w-4 mr-1" />
                Add paragraph
              </Button>
            </div>
            {form.content.map((paragraph, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  rows={4}
                  value={paragraph}
                  placeholder={`Paragraph ${index + 1}`}
                  onChange={(e) => {
                    const content = [...form.content];
                    content[index] = e.target.value;
                    setForm({ ...form, content });
                  }}
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solutions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Section heading</Label>
            <Input
              value={form.typeOfSolutions.headings}
              onChange={(e) =>
                setForm({
                  ...form,
                  typeOfSolutions: {
                    ...form.typeOfSolutions,
                    headings: e.target.value,
                  },
                })
              }
            />
          </div>
          {form.typeOfSolutions.types.map((type, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={type}
                onChange={(e) => {
                  const types = [...form.typeOfSolutions.types];
                  types[index] = e.target.value;
                  setForm({
                    ...form,
                    typeOfSolutions: { ...form.typeOfSolutions, types },
                  });
                }}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => {
                  const types = form.typeOfSolutions.types.filter(
                    (_, i) => i !== index
                  );
                  setForm({
                    ...form,
                    typeOfSolutions: { ...form.typeOfSolutions, types },
                  });
                }}
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
              setForm({
                ...form,
                typeOfSolutions: {
                  ...form.typeOfSolutions,
                  types: [...form.typeOfSolutions.types, ""],
                },
              })
            }
          >
            <Plus className="h-4 w-4" /> Add solution
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {form.benefitsOFChoosing.map((benefit, index) => (
            <div key={index} className="grid gap-2 rounded-md border p-4">
              <Input
                placeholder="Title"
                value={benefit.title}
                onChange={(e) => {
                  const benefits = [...form.benefitsOFChoosing];
                  benefits[index] = { ...benefit, title: e.target.value };
                  setForm({ ...form, benefitsOFChoosing: benefits });
                }}
              />
              <Textarea
                placeholder="Description"
                value={benefit.description}
                onChange={(e) => {
                  const benefits = [...form.benefitsOFChoosing];
                  benefits[index] = {
                    ...benefit,
                    description: e.target.value,
                  };
                  setForm({ ...form, benefitsOFChoosing: benefits });
                }}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setForm({
                    ...form,
                    benefitsOFChoosing: form.benefitsOFChoosing.filter(
                      (_, i) => i !== index
                    ),
                  })
                }
              >
                Remove benefit
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setForm({
                ...form,
                benefitsOFChoosing: [
                  ...form.benefitsOFChoosing,
                  { title: "", description: "" },
                ],
              })
            }
          >
            <Plus className="h-4 w-4" /> Add benefit
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {form.faqs.map((faq, index) => (
            <div key={index} className="grid gap-2 rounded-md border p-4">
              <Input
                placeholder="Question"
                value={faq.question}
                onChange={(e) => {
                  const faqs = [...form.faqs];
                  faqs[index] = { ...faq, question: e.target.value };
                  setForm({ ...form, faqs });
                }}
              />
              <Textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => {
                  const faqs = [...form.faqs];
                  faqs[index] = { ...faq, answer: e.target.value };
                  setForm({ ...form, faqs });
                }}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setForm({
                    ...form,
                    faqs: form.faqs.filter((_, i) => i !== index),
                  })
                }
              >
                Remove FAQ
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setForm({
                ...form,
                faqs: [...form.faqs, { question: "", answer: "" }],
              })
            }
          >
            <Plus className="h-4 w-4" /> Add FAQ
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
              ? "Create service"
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
      title={mode === "edit" ? "Update service with AI" : "Fill service with AI"}
      description={
        mode === "edit"
          ? "Describe what to change. Current service content is sent to AI as reference."
          : "Describe the service. Text fields will be filled; leave images for you to upload."
      }
      placeholder={
        mode === "edit"
          ? "e.g. Make the benefits more specific to Florida coastal homes, and add an FAQ about permits..."
          : "e.g. Concrete driveway installation and replacement for Florida homes, including sealing and repairs..."
      }
      loading={aiLoading}
      onGenerate={handleAiGenerate}
    />
    </>
  );
}
