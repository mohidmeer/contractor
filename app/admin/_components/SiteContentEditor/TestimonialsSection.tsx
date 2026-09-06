"use client";

import { useState } from "react";
import { MessageSquareQuote, Pencil, Plus, Quote, Trash2 } from "lucide-react";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const EMPTY_TESTIMONIAL = {
  name: "",
  role: "",
  feedback: "",
};

export default function TestimonialsSection({
  data,
  setData,
}: SiteContentSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const active =
    activeIndex !== null ? data.testimonialsData[activeIndex] : null;

  const updateItem = (
    index: number,
    patch: Partial<(typeof data.testimonialsData)[number]>
  ) => {
    const testimonialsData = [...data.testimonialsData];
    testimonialsData[index] = { ...testimonialsData[index], ...patch };
    setData({ ...data, testimonialsData });
  };

  const addTestimonial = () => {
    const testimonialsData = [
      ...data.testimonialsData,
      { ...EMPTY_TESTIMONIAL },
    ];
    setData({ ...data, testimonialsData });
    setActiveIndex(testimonialsData.length - 1);
  };

  const removeTestimonial = (index: number) => {
    const testimonialsData = data.testimonialsData.filter((_, i) => i !== index);
    setData({ ...data, testimonialsData });
    setDeleteIndex(null);
    if (activeIndex === index) setActiveIndex(null);
    else if (activeIndex !== null && activeIndex > index) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <CollapsibleSection
      title="Testimonials"
      description="Click a card to edit · add or remove quotes"
      icon={MessageSquareQuote}
    >
      <div className="flex justify-end">
        <Button type="button" size="sm" onClick={addTestimonial}>
          <Plus className="h-4 w-4" />
          Add testimonial
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.testimonialsData.map((item, index) => (
          <div key={index} className="relative">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative flex h-full min-h-[180px] w-full flex-col gap-3 rounded-2xl border border-border/60 bg-card p-4 text-left shadow-sm transition-all",
                "hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                activeIndex === index && "ring-2 ring-primary/50"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Quote className="h-4 w-4" />
                </span>
                <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-foreground/90">
                {item.feedback || "No feedback yet…"}
              </p>

              <div className="border-t border-border/50 pt-3">
                <p className="truncate text-sm font-semibold tracking-tight">
                  {item.name || "Untitled"}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.role || "No role"}
                </p>
              </div>

              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                <Pencil className="h-3.5 w-3.5" />
              </span>
            </button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute bottom-3 right-3 z-[1] h-8 w-8 border-destructive/30 bg-background/90 text-destructive hover:bg-destructive hover:text-destructive-foreground"
              aria-label="Delete testimonial"
              onClick={(e) => {
                e.stopPropagation();
                setDeleteIndex(index);
              }}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        ))}
      </div>

      {data.testimonialsData.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border/70 px-4 py-8 text-center text-sm text-muted-foreground">
          No testimonials yet. Add one to get started.
        </p>
      ) : null}

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-w-lg sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle>
              Edit testimonial{" "}
              {activeIndex !== null
                ? String(activeIndex + 1).padStart(2, "0")
                : ""}
            </DialogTitle>
            <DialogDescription>
              Update the client quote shown on the homepage.
            </DialogDescription>
          </DialogHeader>

          {active && activeIndex !== null ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
                <Quote className="mb-2 h-4 w-4 text-primary" />
                <p className="line-clamp-3 text-sm italic text-muted-foreground">
                  {active.feedback || "Feedback preview…"}
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {active.name || "Name"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {active.role || "Role"}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Name">
                  <Input
                    className={fieldClass}
                    value={active.name}
                    onChange={(e) =>
                      updateItem(activeIndex, { name: e.target.value })
                    }
                  />
                </Field>
                <Field label="Role">
                  <Input
                    className={fieldClass}
                    value={active.role}
                    onChange={(e) =>
                      updateItem(activeIndex, { role: e.target.value })
                    }
                  />
                </Field>
              </div>
              <Field label="Feedback">
                <Textarea
                  className={areaClass}
                  rows={5}
                  value={active.feedback}
                  onChange={(e) =>
                    updateItem(activeIndex, { feedback: e.target.value })
                  }
                />
              </Field>

              <div className="flex items-center justify-between gap-2">
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    const idx = activeIndex;
                    setActiveIndex(null);
                    setDeleteIndex(idx);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
                <Button type="button" onClick={() => setActiveIndex(null)}>
                  Done
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <DeleteConfirmDialog
        open={deleteIndex !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteIndex(null);
        }}
        title="Delete testimonial?"
        description="This removes the quote from the homepage after you save."
        onConfirm={() => {
          if (deleteIndex !== null) removeTestimonial(deleteIndex);
        }}
      />
    </CollapsibleSection>
  );
}
