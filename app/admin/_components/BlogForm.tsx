"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Loader2,
  ImageIcon,
  Link2,
  List,
  MessageSquareWarning,
  PanelLeft,
  PanelRight,
  Plus,
  Quote,
  Sparkles,
  Table2,
  Trash2,
} from "lucide-react";
import MediaForm from "./MediaForm";
import AiFillDialog from "./AiFillDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  AiDraftBanner,
  Field,
  FormCard,
  areaClass,
  fieldClass,
} from "./formUi";
import {
  BlogContentSchema,
  emptyBlog,
  emptyBlogBlock,
  type BlogBlock,
  type BlogContentType,
} from "@/lib/blogSchema";
import { toMediaPath } from "@/lib/media";

function normalizeBlock(raw: Record<string, unknown>): BlogBlock {
  const paragraph =
    typeof raw.paragraph === "string"
      ? raw.paragraph
      : typeof raw.body === "string"
        ? raw.body
        : null;
  const listItems = Array.isArray(raw.listItems)
    ? (raw.listItems as string[])
    : null;
  const table = Array.isArray(raw.table)
    ? (raw.table as string[][])
    : null;
  const quote = typeof raw.quote === "string" ? raw.quote : null;

  const calloutRaw = raw.callout as Record<string, unknown> | null | undefined;
  const ctaRaw = raw.cta as Record<string, unknown> | null | undefined;
  const imageFigureRaw = raw.imageFigure as
    | Record<string, unknown>
    | null
    | undefined;
  const mediaSplitRaw = raw.mediaSplit as
    | Record<string, unknown>
    | null
    | undefined;

  const callout =
    calloutRaw && typeof calloutRaw.text === "string"
      ? {
          text: calloutRaw.text,
          tone: (
            calloutRaw.tone === "tip" ||
            calloutRaw.tone === "note" ||
            calloutRaw.tone === "warning"
              ? calloutRaw.tone
              : "note"
          ) as "tip" | "note" | "warning",
        }
      : null;

  const cta =
    ctaRaw &&
    typeof ctaRaw.label === "string" &&
    typeof ctaRaw.href === "string"
      ? { label: ctaRaw.label, href: ctaRaw.href }
      : null;

  const imageFigure =
    imageFigureRaw && typeof imageFigureRaw.image === "string"
      ? {
          image: imageFigureRaw.image,
          caption:
            typeof imageFigureRaw.caption === "string"
              ? imageFigureRaw.caption
              : null,
        }
      : null;

  const mediaSplit =
    mediaSplitRaw && typeof mediaSplitRaw.image === "string"
      ? {
          image: mediaSplitRaw.image,
          side: mediaSplitRaw.side === "right" ? ("right" as const) : ("left" as const),
          heading:
            typeof mediaSplitRaw.heading === "string"
              ? mediaSplitRaw.heading
              : "",
          paragraph:
            typeof mediaSplitRaw.paragraph === "string"
              ? mediaSplitRaw.paragraph
              : null,
          listItems: Array.isArray(mediaSplitRaw.listItems)
            ? (mediaSplitRaw.listItems as string[])
            : null,
          table: Array.isArray(mediaSplitRaw.table)
            ? (mediaSplitRaw.table as string[][])
            : null,
          quote:
            typeof mediaSplitRaw.quote === "string"
              ? mediaSplitRaw.quote
              : null,
          cta:
            mediaSplitRaw.cta &&
            typeof (mediaSplitRaw.cta as Record<string, unknown>).label ===
              "string" &&
            typeof (mediaSplitRaw.cta as Record<string, unknown>).href ===
              "string"
              ? {
                  label: String(
                    (mediaSplitRaw.cta as Record<string, unknown>).label
                  ),
                  href: String(
                    (mediaSplitRaw.cta as Record<string, unknown>).href
                  ),
                }
              : null,
        }
      : null;

  return {
    heading: typeof raw.heading === "string" ? raw.heading : "",
    paragraph,
    listItems: listItems?.length ? listItems : null,
    table: table?.length ? table : null,
    quote,
    callout,
    cta,
    imageFigure,
    mediaSplit,
  };
}

function emptyTable(rows = 2, cols = 2): string[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => "")
  );
}

function cleanTable(table: string[][] | null): string[][] | null {
  if (!table?.length) return null;
  const cleaned = table
    .map((row) => row.map((cell) => cell.trim()))
    .filter((row) => row.some((cell) => cell.length > 0));
  return cleaned.length ? cleaned : null;
}

type BlogFormProps = {
  mode: "create" | "edit";
  blogId?: string;
  initialValues?: BlogContentType;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function BlogForm({
  mode,
  blogId,
  initialValues,
  onSuccess,
  onCancel,
}: BlogFormProps) {
  const [form, setForm] = useState<BlogContentType>(
    initialValues ?? emptyBlog()
  );
  const [saving, setSaving] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (!initialValues) return;
    setForm(initialValues);
  }, [initialValues]);

  const updateField = <K extends keyof BlogContentType>(
    key: K,
    value: BlogContentType[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateSection = (index: number, patch: Partial<BlogBlock>) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) =>
        i === index ? { ...block, ...patch } : block
      ),
    }));
  };

  const addSection = () => {
    setForm((prev) => ({
      ...prev,
      content: [...prev.content, emptyBlogBlock()],
    }));
  };

  const removeSection = (index: number) => {
    setForm((prev) => ({
      ...prev,
      content:
        prev.content.length <= 1
          ? prev.content
          : prev.content.filter((_, i) => i !== index),
    }));
  };

  const updateListItem = (
    sectionIndex: number,
    itemIndex: number,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex) return block;
        const listItems = [...(block.listItems ?? [])];
        listItems[itemIndex] = value;
        return { ...block, listItems };
      }),
    }));
  };

  const addListItem = (sectionIndex: number) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex) return block;
        return {
          ...block,
          listItems: [...(block.listItems ?? [""]), ""],
        };
      }),
    }));
  };

  const removeListItem = (sectionIndex: number, itemIndex: number) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex) return block;
        const next = (block.listItems ?? []).filter((_, j) => j !== itemIndex);
        return { ...block, listItems: next.length ? next : null };
      }),
    }));
  };

  const enableList = (sectionIndex: number) => {
    updateSection(sectionIndex, { listItems: [""] });
  };

  const clearList = (sectionIndex: number) => {
    updateSection(sectionIndex, { listItems: null });
  };

  const enableTable = (sectionIndex: number) => {
    updateSection(sectionIndex, { table: emptyTable() });
  };

  const clearTable = (sectionIndex: number) => {
    updateSection(sectionIndex, { table: null });
  };

  const updateTableCell = (
    sectionIndex: number,
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex || !block.table) return block;
        const table = block.table.map((row, r) =>
          r === rowIndex
            ? row.map((cell, c) => (c === colIndex ? value : cell))
            : row
        );
        return { ...block, table };
      }),
    }));
  };

  const addTableRow = (sectionIndex: number) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex || !block.table?.length) return block;
        const cols = block.table[0]?.length ?? 2;
        return {
          ...block,
          table: [...block.table, Array.from({ length: cols }, () => "")],
        };
      }),
    }));
  };

  const removeTableRow = (sectionIndex: number, rowIndex: number) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex || !block.table) return block;
        const table = block.table.filter((_, r) => r !== rowIndex);
        return { ...block, table: table.length ? table : null };
      }),
    }));
  };

  const addTableCol = (sectionIndex: number) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex || !block.table) return block;
        return {
          ...block,
          table: block.table.map((row) => [...row, ""]),
        };
      }),
    }));
  };

  const removeTableCol = (sectionIndex: number, colIndex: number) => {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((block, i) => {
        if (i !== sectionIndex || !block.table) return block;
        const cols = block.table[0]?.length ?? 0;
        if (cols <= 1) return { ...block, table: null };
        return {
          ...block,
          table: block.table.map((row) =>
            row.filter((_, c) => c !== colIndex)
          ),
        };
      }),
    }));
  };

  const enableQuote = (sectionIndex: number) => {
    updateSection(sectionIndex, { quote: "" });
  };

  const clearQuote = (sectionIndex: number) => {
    updateSection(sectionIndex, { quote: null });
  };

  const enableCallout = (sectionIndex: number) => {
    updateSection(sectionIndex, {
      callout: { text: "", tone: "note" },
    });
  };

  const clearCallout = (sectionIndex: number) => {
    updateSection(sectionIndex, { callout: null });
  };

  const enableCta = (sectionIndex: number) => {
    updateSection(sectionIndex, { cta: { label: "", href: "" } });
  };

  const clearCta = (sectionIndex: number) => {
    updateSection(sectionIndex, { cta: null });
  };

  const enableImageFigure = (sectionIndex: number) => {
    updateSection(sectionIndex, {
      imageFigure: { image: "", caption: null },
    });
  };

  const clearImageFigure = (sectionIndex: number) => {
    updateSection(sectionIndex, { imageFigure: null });
  };

  const enableMediaSplit = (sectionIndex: number) => {
    updateSection(sectionIndex, {
      mediaSplit: {
        image: "",
        side: "left",
        heading: "",
        paragraph: null,
        listItems: null,
        table: null,
        quote: null,
        cta: null,
      },
    });
  };

  const clearMediaSplit = (sectionIndex: number) => {
    updateSection(sectionIndex, { mediaSplit: null });
  };

  const handleAiGenerate = async (prompt: string) => {
    setAiLoading(true);
    try {
      const existing =
        mode === "edit"
          ? {
              title: form.title,
              read_time: form.read_time,
              seo: form.seo,
              content: form.content,
            }
          : null;

      const res = await fetch("/api/admin/ai/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          id: mode === "edit" ? blogId : null,
          existing,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to generate with AI");

      const generated = data.data;
      const prevContent = form.content;

      setForm((prev) => ({
        ...prev,
        title: generated.title ?? prev.title,
        read_time: generated.read_time ?? prev.read_time,
        seo: {
          title: generated.seo?.title ?? prev.seo.title,
          description: generated.seo?.description ?? prev.seo.description,
        },
        content:
          Array.isArray(generated.content) && generated.content.length
            ? generated.content.map(
                (block: Record<string, unknown>, i: number) => {
                  const next = normalizeBlock(block);
                  const prevBlock = prevContent[i];
                  return {
                    ...next,
                    imageFigure: next.imageFigure ?? prevBlock?.imageFigure ?? null,
                    mediaSplit: next.mediaSplit ?? prevBlock?.mediaSplit ?? null,
                  };
                }
              )
            : prev.content,
        image: prev.image,
      }));
      setAiOpen(false);
      toast.success(
        mode === "edit"
          ? "Blog updated with AI — review before saving"
          : "Blog filled with AI — add an image when ready"
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
      const payload = BlogContentSchema.parse({
        ...form,
        image: toMediaPath(form.image),
        seo: {
          title: form.seo.title,
          description: form.seo.description,
        },
        content: form.content.map((block) => {
          const callout =
            block.callout?.text?.trim()
              ? {
                  text: block.callout.text.trim(),
                  tone: block.callout.tone,
                }
              : null;
          const cta =
            block.cta?.label?.trim() && block.cta?.href?.trim()
              ? {
                  label: block.cta.label.trim(),
                  href: block.cta.href.trim(),
                }
              : null;
          const imageFigure =
            block.imageFigure?.image?.trim()
              ? {
                  image: toMediaPath(block.imageFigure.image),
                  caption: block.imageFigure.caption?.trim() || null,
                }
              : null;
          const mediaSplit =
            block.mediaSplit?.image?.trim()
              ? {
                  image: toMediaPath(block.mediaSplit.image),
                  side: block.mediaSplit.side,
                  heading: block.mediaSplit.heading ?? "",
                  paragraph: block.mediaSplit.paragraph?.trim()
                    ? block.mediaSplit.paragraph
                    : null,
                  listItems:
                    block.mediaSplit.listItems
                      ?.map((i) => i.trim())
                      .filter(Boolean).length
                      ? block.mediaSplit.listItems
                          .map((i) => i.trim())
                          .filter(Boolean)
                      : null,
                  table: cleanTable(block.mediaSplit.table ?? null),
                  quote: block.mediaSplit.quote?.trim()
                    ? block.mediaSplit.quote
                    : null,
                  cta:
                    block.mediaSplit.cta?.label?.trim() &&
                    block.mediaSplit.cta?.href?.trim()
                      ? {
                          label: block.mediaSplit.cta.label.trim(),
                          href: block.mediaSplit.cta.href.trim(),
                        }
                      : null,
                }
              : null;

          return {
            heading: block.heading,
            paragraph: block.paragraph?.trim() ? block.paragraph : null,
            listItems:
              block.listItems?.map((i) => i.trim()).filter(Boolean).length
                ? block.listItems.map((i) => i.trim()).filter(Boolean)
                : null,
            table: cleanTable(block.table),
            quote: block.quote?.trim() ? block.quote : null,
            callout,
            cta,
            imageFigure,
            mediaSplit,
          };
        }),
      });

      const res = await fetch(
        mode === "create" ? "/api/admin/blogs" : `/api/admin/blogs/${blogId}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save blog");
      }

      toast.success(mode === "create" ? "Blog created" : "Blog updated");
      onSuccess?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save blog");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <AiDraftBanner
          description={
            mode === "edit"
              ? "Describe changes and Claude updates the post — images stay yours."
              : "Describe the article and Claude fills the form — images stay yours to add."
          }
          action={
            <Button
              type="button"
              variant="outline"
              className="ai-rainbow-btn"
              onClick={() => setAiOpen(true)}
              disabled={saving || aiLoading}
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Fill with AI
              </span>
            </Button>
          }
        />

        <FormCard
          title="Post details"
          description="Title and estimated reading time for the article."
          contentClassName="grid gap-5 sm:grid-cols-[1fr_9rem]"
        >
          <Field label="Title" htmlFor="blog-title">
            <Input
              id="blog-title"
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Roofing Basics for Homeowners"
              className={fieldClass}
              required
            />
          </Field>
          <Field label="Read time" htmlFor="blog-read-time">
            <Input
              id="blog-read-time"
              value={form.read_time}
              onChange={(e) => updateField("read_time", e.target.value)}
              placeholder="5 min"
              className={fieldClass}
              required
            />
          </Field>
          <Field label="Status" className="sm:col-span-2">
            <Select
              value={form.status}
              onValueChange={(value) =>
                updateField("status", value as BlogContentType["status"])
              }
            >
              <SelectTrigger className={fieldClass}>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="PUBLISHED">Published</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FormCard>

        <FormCard
          title="SEO"
          description="Search title and meta description."
          contentClassName="grid gap-5"
        >
          <Field label="SEO title" htmlFor="blog-seo-title">
            <Input
              id="blog-seo-title"
              value={form.seo.title}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  seo: { ...prev.seo, title: e.target.value },
                }))
              }
              placeholder="SEO title"
              className={fieldClass}
              required
            />
          </Field>
          <Field label="SEO description" htmlFor="blog-seo-desc">
            <Textarea
              id="blog-seo-desc"
              value={form.seo.description}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  seo: { ...prev.seo, description: e.target.value },
                }))
              }
              rows={3}
              placeholder="Short meta description"
              className={areaClass}
              required
            />
          </Field>
        </FormCard>

        <div className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3 px-1">
            <div>
              <h3 className="text-base font-semibold">Content sections</h3>
              <p className="text-sm text-muted-foreground">
                One section at a time — add lists, tables, or quotes only when
                needed.
              </p>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={addSection}>
              <Plus className="h-4 w-4" />
              Add section
            </Button>
          </div>

          {form.content.map((block, index) => {
            const hasList = block.listItems !== null;
            const hasTable = block.table !== null;
            const hasQuote = block.quote !== null;
            const hasCallout = block.callout !== null;
            const hasCta = block.cta !== null;
            const hasImageFigure = block.imageFigure !== null;
            const hasMediaSplit = block.mediaSplit !== null;
            const hasAnyOptional =
              hasList ||
              hasTable ||
              hasQuote ||
              hasCallout ||
              hasCta ||
              hasImageFigure ||
              hasMediaSplit;
            const colCount = block.table?.[0]?.length ?? 0;

            return (
              <section
                key={index}
                className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
              >
                <div className="flex items-center justify-between gap-3 border-b bg-gradient-to-r from-muted/40 to-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        {block.heading.trim() || `Section ${index + 1}`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Heading & paragraph
                        {hasList ? " · list" : ""}
                        {hasTable ? " · table" : ""}
                        {hasQuote ? " · quote" : ""}
                        {hasCallout ? " · callout" : ""}
                        {hasCta ? " · cta" : ""}
                        {hasImageFigure ? " · image" : ""}
                        {hasMediaSplit ? " · image+text" : ""}
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive"
                    onClick={() => removeSection(index)}
                    disabled={form.content.length <= 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-5 p-4 sm:p-5">
                  <Field label="Heading">
                    <Input
                      value={block.heading}
                      onChange={(e) =>
                        updateSection(index, { heading: e.target.value })
                      }
                      placeholder="Section heading"
                      className={cn(fieldClass, "text-[15px] font-medium")}
                    />
                  </Field>

                  <Field label="Paragraph">
                    <Textarea
                      value={block.paragraph ?? ""}
                      onChange={(e) =>
                        updateSection(index, {
                          paragraph: e.target.value || null,
                        })
                      }
                      rows={4}
                      placeholder="Section body copy"
                      className={areaClass}
                    />
                  </Field>

                  {!hasAnyOptional ? (
                    <div className="flex flex-wrap gap-2 rounded-xl border border-dashed border-border/80 bg-muted/15 p-3">
                      <span className="mr-1 self-center text-xs font-medium text-muted-foreground">
                        Optional blocks
                      </span>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableList(index)}
                      >
                        <List className="h-3.5 w-3.5" />
                        List
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableTable(index)}
                      >
                        <Table2 className="h-3.5 w-3.5" />
                        Table
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableQuote(index)}
                      >
                        <Quote className="h-3.5 w-3.5" />
                        Quote
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableCallout(index)}
                      >
                        <MessageSquareWarning className="h-3.5 w-3.5" />
                        Callout
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableCta(index)}
                      >
                        <Link2 className="h-3.5 w-3.5" />
                        CTA
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableImageFigure(index)}
                      >
                        <ImageIcon className="h-3.5 w-3.5" />
                        Image figure
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => enableMediaSplit(index)}
                      >
                        <PanelLeft className="h-3.5 w-3.5" />
                        Image + text
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {!hasList && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableList(index)}
                        >
                          <List className="h-3.5 w-3.5" />
                          Add list
                        </Button>
                      )}
                      {!hasTable && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableTable(index)}
                        >
                          <Table2 className="h-3.5 w-3.5" />
                          Add table
                        </Button>
                      )}
                      {!hasQuote && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableQuote(index)}
                        >
                          <Quote className="h-3.5 w-3.5" />
                          Add quote
                        </Button>
                      )}
                      {!hasCallout && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableCallout(index)}
                        >
                          <MessageSquareWarning className="h-3.5 w-3.5" />
                          Add callout
                        </Button>
                      )}
                      {!hasCta && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableCta(index)}
                        >
                          <Link2 className="h-3.5 w-3.5" />
                          Add CTA
                        </Button>
                      )}
                      {!hasImageFigure && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableImageFigure(index)}
                        >
                          <ImageIcon className="h-3.5 w-3.5" />
                          Add image figure
                        </Button>
                      )}
                      {!hasMediaSplit && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-lg"
                          onClick={() => enableMediaSplit(index)}
                        >
                          <PanelLeft className="h-3.5 w-3.5" />
                          Add image + text
                        </Button>
                      )}
                    </div>
                  )}

                  {hasList && (
                    <div className="space-y-3 rounded-2xl border border-sky-500/15 bg-sky-500/[0.04] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <List className="h-4 w-4 text-sky-700" />
                          <p className="text-sm font-semibold">Bullet list</p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 text-destructive"
                          onClick={() => clearList(index)}
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {(block.listItems ?? []).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-600/10 text-xs font-semibold text-sky-800">
                              {itemIndex + 1}
                            </span>
                            <Input
                              value={item}
                              onChange={(e) =>
                                updateListItem(index, itemIndex, e.target.value)
                              }
                              placeholder={`List item ${itemIndex + 1}`}
                              className={cn(fieldClass, "bg-background/80")}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 shrink-0 text-destructive"
                              onClick={() => removeListItem(index, itemIndex)}
                              disabled={(block.listItems?.length ?? 0) <= 1}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => addListItem(index)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Add item
                      </Button>
                    </div>
                  )}

                  {hasTable && block.table && (
                    <div className="space-y-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Table2 className="h-4 w-4 text-emerald-700" />
                          <p className="text-sm font-semibold">Table</p>
                          <span className="text-xs text-muted-foreground">
                            {block.table.length}×{colCount}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-lg"
                            onClick={() => addTableRow(index)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Row
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-lg"
                            onClick={() => addTableCol(index)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Column
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-8 text-destructive"
                            onClick={() => clearTable(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-emerald-600/10 bg-background/70">
                        <table className="min-w-full border-collapse">
                          <thead>
                            <tr className="border-b bg-muted/40">
                              <th className="w-10 px-2 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                                #
                              </th>
                              {Array.from({ length: colCount }).map((_, c) => (
                                <th
                                  key={c}
                                  className="min-w-[8rem] px-2 py-2 text-left"
                                >
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                                      Col {c + 1}
                                    </span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6 text-destructive"
                                      onClick={() => removeTableCol(index, c)}
                                      disabled={colCount <= 1}
                                      title="Remove column"
                                    >
                                      <Trash2 className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </th>
                              ))}
                              <th className="w-10 px-2 py-2" />
                            </tr>
                          </thead>
                          <tbody>
                            {block.table.map((row, rowIndex) => (
                              <tr
                                key={rowIndex}
                                className="border-b last:border-0"
                              >
                                <td className="px-2 py-2 align-middle">
                                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600/10 text-[11px] font-semibold text-emerald-800">
                                    {rowIndex + 1}
                                  </span>
                                </td>
                                {row.map((cell, colIndex) => (
                                  <td
                                    key={colIndex}
                                    className="px-1.5 py-1.5 align-middle"
                                  >
                                    <Input
                                      value={cell}
                                      onChange={(e) =>
                                        updateTableCell(
                                          index,
                                          rowIndex,
                                          colIndex,
                                          e.target.value
                                        )
                                      }
                                      placeholder={
                                        rowIndex === 0
                                          ? `Header ${colIndex + 1}`
                                          : "Cell"
                                      }
                                      className={cn(
                                        fieldClass,
                                        "h-9 bg-background",
                                        rowIndex === 0 && "font-semibold"
                                      )}
                                    />
                                  </td>
                                ))}
                                <td className="px-1.5 py-1.5 align-middle">
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-destructive"
                                    onClick={() =>
                                      removeTableRow(index, rowIndex)
                                    }
                                    disabled={block.table!.length <= 1}
                                    title="Remove row"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        First row is usually the header. Empty cells are fine.
                      </p>
                    </div>
                  )}

                  {hasQuote && (
                    <div className="space-y-3 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Quote className="h-4 w-4 text-amber-700" />
                          <p className="text-sm font-semibold">Pull quote</p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 text-destructive"
                          onClick={() => clearQuote(index)}
                        >
                          Remove
                        </Button>
                      </div>
                      <Textarea
                        value={block.quote ?? ""}
                        onChange={(e) =>
                          updateSection(index, {
                            quote: e.target.value,
                          })
                        }
                        rows={2}
                        placeholder="A short line worth highlighting…"
                        className={cn(
                          areaClass,
                          "border-l-4 border-l-amber-500/50 bg-background/80 italic"
                        )}
                      />
                    </div>
                  )}

                  {hasCallout && block.callout && (
                    <div className="space-y-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <MessageSquareWarning className="h-4 w-4 text-violet-700" />
                          <p className="text-sm font-semibold">Callout</p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 text-destructive"
                          onClick={() => clearCallout(index)}
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-medium text-muted-foreground">
                          Tone
                        </p>
                        <div
                          className="inline-flex items-center rounded-lg border border-violet-600/20 bg-background/80 p-0.5"
                          role="group"
                          aria-label="Callout tone"
                        >
                          {(
                            [
                              { value: "tip", label: "Tip" },
                              { value: "note", label: "Note" },
                              { value: "warning", label: "Warning" },
                            ] as const
                          ).map((opt) => {
                            const callout = block.callout!;
                            return (
                              <button
                                key={opt.value}
                                type="button"
                                className={cn(
                                  "inline-flex h-8 items-center rounded-md px-2.5 text-xs font-semibold transition-colors",
                                  callout.tone === opt.value
                                    ? "bg-violet-700 text-white shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() =>
                                  updateSection(index, {
                                    callout: {
                                      ...callout,
                                      tone: opt.value,
                                    },
                                  })
                                }
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <Textarea
                        value={block.callout.text}
                        onChange={(e) =>
                          updateSection(index, {
                            callout: {
                              ...block.callout!,
                              text: e.target.value,
                            },
                          })
                        }
                        rows={3}
                        placeholder="Helpful tip or important note…"
                        className={areaClass}
                      />
                    </div>
                  )}

                  {hasCta && block.cta && (
                    <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/[0.04] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Link2 className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold">Call to action</p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 text-destructive"
                          onClick={() => clearCta(index)}
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Field label="Button label">
                          <Input
                            value={block.cta.label}
                            onChange={(e) =>
                              updateSection(index, {
                                cta: {
                                  ...block.cta!,
                                  label: e.target.value,
                                },
                              })
                            }
                            placeholder="Get a free estimate"
                            className={fieldClass}
                          />
                        </Field>
                        <Field label="Link href">
                          <Input
                            value={block.cta.href}
                            onChange={(e) =>
                              updateSection(index, {
                                cta: {
                                  ...block.cta!,
                                  href: e.target.value,
                                },
                              })
                            }
                            placeholder="/contact"
                            className={fieldClass}
                          />
                        </Field>
                      </div>
                    </div>
                  )}

                  {hasImageFigure && block.imageFigure && (
                    <div className="space-y-3 rounded-2xl border border-slate-500/15 bg-slate-500/[0.04] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <ImageIcon className="h-4 w-4 text-slate-700" />
                          <p className="text-sm font-semibold">Image figure</p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 text-destructive"
                          onClick={() => clearImageFigure(index)}
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="rounded-xl border border-slate-500/10 bg-background/70 p-3">
                        <MediaForm
                          initialUrl={block.imageFigure.image}
                          label="Section image"
                          hint="Shown full-width in this section with an optional caption."
                          compact
                          onUploaded={(url) =>
                            updateSection(index, {
                              imageFigure: {
                                ...block.imageFigure!,
                                image: toMediaPath(url),
                              },
                            })
                          }
                        />
                      </div>
                      <Field label="Caption (optional)">
                        <Input
                          value={block.imageFigure.caption ?? ""}
                          onChange={(e) =>
                            updateSection(index, {
                              imageFigure: {
                                ...block.imageFigure!,
                                caption: e.target.value || null,
                              },
                            })
                          }
                          placeholder="Photo caption"
                          className={fieldClass}
                        />
                      </Field>
                    </div>
                  )}

                  {hasMediaSplit && block.mediaSplit && (
                    <div className="space-y-3 rounded-2xl border border-teal-500/20 bg-teal-500/[0.04] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <PanelLeft className="h-4 w-4 text-teal-700" />
                          <p className="text-sm font-semibold">Image + text</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <div
                            className="inline-flex items-center rounded-lg border border-teal-600/20 bg-background/80 p-0.5"
                            role="group"
                            aria-label="Image side"
                          >
                            <button
                              type="button"
                              className={cn(
                                "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold transition-colors",
                                block.mediaSplit.side === "left"
                                  ? "bg-teal-700 text-white shadow-sm"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                              onClick={() =>
                                updateSection(index, {
                                  mediaSplit: {
                                    ...block.mediaSplit!,
                                    side: "left",
                                  },
                                })
                              }
                            >
                              <PanelLeft className="h-3.5 w-3.5" />
                              Left
                            </button>
                            <button
                              type="button"
                              className={cn(
                                "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold transition-colors",
                                block.mediaSplit.side === "right"
                                  ? "bg-teal-700 text-white shadow-sm"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                              onClick={() =>
                                updateSection(index, {
                                  mediaSplit: {
                                    ...block.mediaSplit!,
                                    side: "right",
                                  },
                                })
                              }
                            >
                              Right
                              <PanelRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-8 text-destructive"
                            onClick={() => clearMediaSplit(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        Layout preview — image on the{" "}
                        <span className="font-semibold text-foreground">
                          {block.mediaSplit.side}
                        </span>
                        .
                      </p>

                      <div
                        className={cn(
                          "flex flex-col gap-4 rounded-xl border border-teal-600/10 bg-background/70 p-3 md:flex-row md:items-stretch",
                          block.mediaSplit.side === "right" &&
                            "md:flex-row-reverse"
                        )}
                      >
                        <div className="w-full shrink-0 md:w-[42%]">
                          <MediaForm
                            initialUrl={block.mediaSplit.image}
                            label="Image"
                            hint={null}
                            compact
                            onUploaded={(url) =>
                              updateSection(index, {
                                mediaSplit: {
                                  ...block.mediaSplit!,
                                  image: toMediaPath(url),
                                },
                              })
                            }
                          />
                        </div>

                        <div className="min-w-0 flex-1 space-y-3">
                          <Field label="Heading">
                            <Input
                              value={block.mediaSplit.heading}
                              onChange={(e) =>
                                updateSection(index, {
                                  mediaSplit: {
                                    ...block.mediaSplit!,
                                    heading: e.target.value,
                                  },
                                })
                              }
                              placeholder="Short heading beside image"
                              className={fieldClass}
                            />
                          </Field>

                          {(() => {
                            const split = block.mediaSplit!;
                            const hasSplitParagraph = split.paragraph !== null;
                            const hasSplitList = split.listItems !== null;
                            const hasSplitTable = split.table !== null;
                            const hasSplitQuote = split.quote !== null;
                            const hasSplitCta = split.cta !== null;
                            const hasSplitOptional =
                              hasSplitParagraph ||
                              hasSplitList ||
                              hasSplitTable ||
                              hasSplitQuote ||
                              hasSplitCta;
                            const splitColCount = split.table?.[0]?.length ?? 0;

                            return (
                              <>
                                {!hasSplitOptional ? (
                                  <div className="flex flex-wrap gap-2 rounded-xl border border-dashed border-border/80 bg-muted/15 p-3">
                                    <span className="mr-1 self-center text-xs font-medium text-muted-foreground">
                                      Optional blocks
                                    </span>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      size="sm"
                                      className="rounded-lg"
                                      onClick={() =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            paragraph: "",
                                          },
                                        })
                                      }
                                    >
                                      Paragraph
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      size="sm"
                                      className="rounded-lg"
                                      onClick={() =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            listItems: [""],
                                          },
                                        })
                                      }
                                    >
                                      <List className="h-3.5 w-3.5" />
                                      List
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      size="sm"
                                      className="rounded-lg"
                                      onClick={() =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            table: emptyTable(),
                                          },
                                        })
                                      }
                                    >
                                      <Table2 className="h-3.5 w-3.5" />
                                      Table
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      size="sm"
                                      className="rounded-lg"
                                      onClick={() =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            quote: "",
                                          },
                                        })
                                      }
                                    >
                                      <Quote className="h-3.5 w-3.5" />
                                      Quote
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      size="sm"
                                      className="rounded-lg"
                                      onClick={() =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            cta: { label: "", href: "" },
                                          },
                                        })
                                      }
                                    >
                                      <Link2 className="h-3.5 w-3.5" />
                                      CTA
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="flex flex-wrap gap-2">
                                    {!hasSplitParagraph && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              paragraph: "",
                                            },
                                          })
                                        }
                                      >
                                        Add paragraph
                                      </Button>
                                    )}
                                    {!hasSplitList && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              listItems: [""],
                                            },
                                          })
                                        }
                                      >
                                        <List className="h-3.5 w-3.5" />
                                        Add list
                                      </Button>
                                    )}
                                    {!hasSplitTable && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              table: emptyTable(),
                                            },
                                          })
                                        }
                                      >
                                        <Table2 className="h-3.5 w-3.5" />
                                        Add table
                                      </Button>
                                    )}
                                    {!hasSplitQuote && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              quote: "",
                                            },
                                          })
                                        }
                                      >
                                        <Quote className="h-3.5 w-3.5" />
                                        Add quote
                                      </Button>
                                    )}
                                    {!hasSplitCta && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="rounded-lg"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              cta: { label: "", href: "" },
                                            },
                                          })
                                        }
                                      >
                                        <Link2 className="h-3.5 w-3.5" />
                                        Add CTA
                                      </Button>
                                    )}
                                  </div>
                                )}

                                {hasSplitParagraph && (
                                  <div className="space-y-2 rounded-2xl border border-border/60 bg-muted/15 p-3">
                                    <div className="flex items-center justify-between gap-2">
                                      <p className="text-sm font-semibold">
                                        Paragraph
                                      </p>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 text-destructive"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              paragraph: null,
                                            },
                                          })
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                    <Textarea
                                      value={split.paragraph ?? ""}
                                      onChange={(e) =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            paragraph: e.target.value,
                                          },
                                        })
                                      }
                                      rows={4}
                                      placeholder="Compact supporting copy"
                                      className={areaClass}
                                    />
                                  </div>
                                )}

                                {hasSplitList && (
                                  <div className="space-y-3 rounded-2xl border border-sky-500/15 bg-sky-500/[0.04] p-3">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        <List className="h-4 w-4 text-sky-700" />
                                        <p className="text-sm font-semibold">
                                          Bullet list
                                        </p>
                                      </div>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 text-destructive"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              listItems: null,
                                            },
                                          })
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                    <div className="space-y-2">
                                      {(split.listItems ?? []).map(
                                        (item, itemIndex) => (
                                          <div
                                            key={itemIndex}
                                            className="flex items-center gap-2"
                                          >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-600/10 text-xs font-semibold text-sky-800">
                                              {itemIndex + 1}
                                            </span>
                                            <Input
                                              value={item}
                                              onChange={(e) => {
                                                const listItems = [
                                                  ...(split.listItems ?? []),
                                                ];
                                                listItems[itemIndex] =
                                                  e.target.value;
                                                updateSection(index, {
                                                  mediaSplit: {
                                                    ...split,
                                                    listItems,
                                                  },
                                                });
                                              }}
                                              placeholder={`List item ${itemIndex + 1}`}
                                              className={cn(
                                                fieldClass,
                                                "bg-background/80"
                                              )}
                                            />
                                            <Button
                                              type="button"
                                              variant="ghost"
                                              size="icon"
                                              className="h-9 w-9 shrink-0 text-destructive"
                                              onClick={() => {
                                                const next = (
                                                  split.listItems ?? []
                                                ).filter(
                                                  (_, j) => j !== itemIndex
                                                );
                                                updateSection(index, {
                                                  mediaSplit: {
                                                    ...split,
                                                    listItems: next.length
                                                      ? next
                                                      : null,
                                                  },
                                                });
                                              }}
                                              disabled={
                                                (split.listItems?.length ??
                                                  0) <= 1
                                              }
                                            >
                                              <Trash2 className="h-4 w-4" />
                                            </Button>
                                          </div>
                                        )
                                      )}
                                    </div>
                                    <Button
                                      type="button"
                                      variant="outline"
                                      size="sm"
                                      className="rounded-lg"
                                      onClick={() =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            listItems: [
                                              ...(split.listItems ?? [""]),
                                              "",
                                            ],
                                          },
                                        })
                                      }
                                    >
                                      <Plus className="h-3.5 w-3.5" />
                                      Add item
                                    </Button>
                                  </div>
                                )}

                                {hasSplitTable && split.table && (
                                  <div className="space-y-3 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] p-3">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        <Table2 className="h-4 w-4 text-emerald-700" />
                                        <p className="text-sm font-semibold">
                                          Table
                                        </p>
                                      </div>
                                      <div className="flex flex-wrap gap-1.5">
                                        <Button
                                          type="button"
                                          variant="outline"
                                          size="sm"
                                          className="h-8 rounded-lg"
                                          onClick={() => {
                                            const cols =
                                              split.table![0]?.length ?? 2;
                                            updateSection(index, {
                                              mediaSplit: {
                                                ...split,
                                                table: [
                                                  ...split.table!,
                                                  Array.from(
                                                    { length: cols },
                                                    () => ""
                                                  ),
                                                ],
                                              },
                                            });
                                          }}
                                        >
                                          <Plus className="h-3.5 w-3.5" />
                                          Row
                                        </Button>
                                        <Button
                                          type="button"
                                          variant="outline"
                                          size="sm"
                                          className="h-8 rounded-lg"
                                          onClick={() =>
                                            updateSection(index, {
                                              mediaSplit: {
                                                ...split,
                                                table: split.table!.map(
                                                  (row) => [...row, ""]
                                                ),
                                              },
                                            })
                                          }
                                        >
                                          <Plus className="h-3.5 w-3.5" />
                                          Column
                                        </Button>
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 text-destructive"
                                          onClick={() =>
                                            updateSection(index, {
                                              mediaSplit: {
                                                ...split,
                                                table: null,
                                              },
                                            })
                                          }
                                        >
                                          Remove
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="overflow-x-auto rounded-xl border border-emerald-600/10 bg-background/70">
                                      <table className="min-w-full border-collapse">
                                        <tbody>
                                          {split.table.map((row, rowIndex) => (
                                            <tr
                                              key={rowIndex}
                                              className="border-b last:border-0"
                                            >
                                              {row.map((cell, colIndex) => (
                                                <td
                                                  key={colIndex}
                                                  className="px-1.5 py-1.5 align-middle"
                                                >
                                                  <Input
                                                    value={cell}
                                                    onChange={(e) => {
                                                      const table =
                                                        split.table!.map(
                                                          (r, ri) =>
                                                            ri === rowIndex
                                                              ? r.map(
                                                                  (c, ci) =>
                                                                    ci ===
                                                                    colIndex
                                                                      ? e.target
                                                                          .value
                                                                      : c
                                                                )
                                                              : r
                                                        );
                                                      updateSection(index, {
                                                        mediaSplit: {
                                                          ...split,
                                                          table,
                                                        },
                                                      });
                                                    }}
                                                    placeholder={
                                                      rowIndex === 0
                                                        ? `Header ${colIndex + 1}`
                                                        : "Cell"
                                                    }
                                                    className={cn(
                                                      fieldClass,
                                                      "h-9 bg-background",
                                                      rowIndex === 0 &&
                                                        "font-semibold"
                                                    )}
                                                  />
                                                </td>
                                              ))}
                                              <td className="px-1.5 py-1.5">
                                                <Button
                                                  type="button"
                                                  variant="ghost"
                                                  size="icon"
                                                  className="h-8 w-8 text-destructive"
                                                  disabled={
                                                    split.table!.length <= 1
                                                  }
                                                  onClick={() => {
                                                    const table =
                                                      split.table!.filter(
                                                        (_, r) =>
                                                          r !== rowIndex
                                                      );
                                                    updateSection(index, {
                                                      mediaSplit: {
                                                        ...split,
                                                        table: table.length
                                                          ? table
                                                          : null,
                                                      },
                                                    });
                                                  }}
                                                >
                                                  <Trash2 className="h-3.5 w-3.5" />
                                                </Button>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                    {splitColCount > 1 && (
                                      <div className="flex flex-wrap gap-1">
                                        {Array.from({
                                          length: splitColCount,
                                        }).map((_, c) => (
                                          <Button
                                            key={c}
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="h-7 text-xs text-destructive"
                                            onClick={() => {
                                              if (splitColCount <= 1) {
                                                updateSection(index, {
                                                  mediaSplit: {
                                                    ...split,
                                                    table: null,
                                                  },
                                                });
                                                return;
                                              }
                                              updateSection(index, {
                                                mediaSplit: {
                                                  ...split,
                                                  table: split.table!.map(
                                                    (row) =>
                                                      row.filter(
                                                        (_, ci) => ci !== c
                                                      )
                                                  ),
                                                },
                                              });
                                            }}
                                          >
                                            Remove col {c + 1}
                                          </Button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}

                                {hasSplitQuote && (
                                  <div className="space-y-2 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-3">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        <Quote className="h-4 w-4 text-amber-700" />
                                        <p className="text-sm font-semibold">
                                          Pull quote
                                        </p>
                                      </div>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 text-destructive"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              quote: null,
                                            },
                                          })
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                    <Textarea
                                      value={split.quote ?? ""}
                                      onChange={(e) =>
                                        updateSection(index, {
                                          mediaSplit: {
                                            ...split,
                                            quote: e.target.value,
                                          },
                                        })
                                      }
                                      rows={2}
                                      placeholder="A short line worth highlighting…"
                                      className={cn(
                                        areaClass,
                                        "border-l-4 border-l-amber-500/50 bg-background/80 italic"
                                      )}
                                    />
                                  </div>
                                )}

                                {hasSplitCta && split.cta && (
                                  <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/[0.04] p-3">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        <Link2 className="h-4 w-4 text-primary" />
                                        <p className="text-sm font-semibold">
                                          Call to action
                                        </p>
                                      </div>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 text-destructive"
                                        onClick={() =>
                                          updateSection(index, {
                                            mediaSplit: {
                                              ...split,
                                              cta: null,
                                            },
                                          })
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                      <Field label="Button label">
                                        <Input
                                          value={split.cta.label}
                                          onChange={(e) =>
                                            updateSection(index, {
                                              mediaSplit: {
                                                ...split,
                                                cta: {
                                                  ...split.cta!,
                                                  label: e.target.value,
                                                },
                                              },
                                            })
                                          }
                                          placeholder="Get a free estimate"
                                          className={fieldClass}
                                        />
                                      </Field>
                                      <Field label="Link href">
                                        <Input
                                          value={split.cta.href}
                                          onChange={(e) =>
                                            updateSection(index, {
                                              mediaSplit: {
                                                ...split,
                                                cta: {
                                                  ...split.cta!,
                                                  href: e.target.value,
                                                },
                                              },
                                            })
                                          }
                                          placeholder="/contact"
                                          className={fieldClass}
                                        />
                                      </Field>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <FormCard
          title="Cover image"
          description="Upload after drafting — AI never invents images."
        >
          <MediaForm
            initialUrl={form.image}
            onUploaded={(url) => updateField("image", toMediaPath(url))}
          />
        </FormCard>

        <div className="sticky bottom-0 flex flex-wrap gap-2 border-t bg-background/95 py-3 backdrop-blur">
          <Button type="submit" disabled={saving || aiLoading}>
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : mode === "create" ? (
              "Create post"
            ) : (
              "Save post"
            )}
          </Button>
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={saving}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>

      <AiFillDialog
        open={aiOpen}
        onOpenChange={setAiOpen}
        title={mode === "edit" ? "Update blog with AI" : "Fill blog with AI"}
        description={
          mode === "edit"
            ? "Describe what to change. Current blog content is sent to AI as reference."
            : "Describe the article topic. Text fields will be filled; leave the image for you to upload."
        }
        placeholder={
          mode === "edit"
            ? "e.g. Add a section about storm preparation and tighten the intro..."
            : "e.g. A homeowner guide to concrete driveway maintenance in Florida, including sealing tips and crack repair..."
        }
        loading={aiLoading}
        onGenerate={handleAiGenerate}
      />
    </>
  );
}

export { emptyBlog };
