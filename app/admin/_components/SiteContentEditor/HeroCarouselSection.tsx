"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Images, ImageUp, Pencil } from "lucide-react";
import { toast } from "sonner";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
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
import { toMediaPath, toMediaUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export default function HeroCarouselSection({
  data,
  setData,
  forceOpenSections,
  forceOpenKey,
}: SiteContentSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeSlide =
    activeIndex !== null ? data.hero2.slides[activeIndex] : null;

  const updateSlide = (
    index: number,
    patch: Partial<(typeof data.hero2.slides)[number]>
  ) => {
    const slides = [...data.hero2.slides];
    slides[index] = { ...slides[index], ...patch };
    setData({ ...data, hero2: { slides } });
  };

  const handleReplaceImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || activeIndex === null) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    try {
      const res = await fetch("/api/media", { method: "POST", body: formData });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      const path = toMediaPath(json.url ?? json.path ?? "");
      if (!path) throw new Error("Upload returned no path");
      updateSlide(activeIndex, { backgroundImage: path });
      toast.success("Image updated");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <CollapsibleSection
      title="Hero carousel"
      description="Click a slide to edit image, title, and description"
      icon={Images}
      forceOpen={forceOpenSections?.has("hero-carousel")}
      forceOpenKey={forceOpenKey}
    >
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {data.hero2.slides.map((slide, index) => {
          const src = toMediaUrl(slide.backgroundImage);
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative aspect-[4/5] overflow-hidden rounded-xl border border-border/70 text-left shadow-sm transition-all",
                "hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                activeIndex === index && "ring-2 ring-primary/50"
              )}
            >
              {src ? (
                <Image
                  src={src}
                  alt={slide.title || `Slide ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 bg-muted" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 space-y-0.5 p-2.5 text-white">
                {slide.tagline ? (
                  <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-white/80">
                    {slide.tagline}
                  </p>
                ) : null}
                <p className="line-clamp-2 text-xs font-bold leading-snug sm:text-sm">
                  {slide.title || `Slide ${index + 1}`}
                </p>
              </div>
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Pencil className="h-3.5 w-3.5" />
              </span>
              <span className="absolute left-2 top-2 rounded-md bg-black/45 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto sm:rounded-2xl">
          {activeSlide && activeIndex !== null ? (
            <>
              <DialogHeader>
                <DialogTitle>Edit slide {activeIndex + 1}</DialogTitle>
                <DialogDescription>
                  Changes update the preview below and the grid card live. Click
                  Save all on the page to publish.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/60 bg-muted">
                  {toMediaUrl(activeSlide.backgroundImage) ? (
                    <Image
                      src={toMediaUrl(activeSlide.backgroundImage)}
                      alt={activeSlide.title || "Slide preview"}
                      fill
                      className="object-cover"
                      sizes="672px"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-1 p-4 pr-28 text-white">
                    {activeSlide.tagline ? (
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/85">
                        {activeSlide.tagline}
                      </p>
                    ) : null}
                    <p className="text-lg font-bold leading-tight sm:text-xl">
                      {activeSlide.title || "Slide title"}
                    </p>
                    {activeSlide.description ? (
                      <p className="line-clamp-2 text-sm text-white/85">
                        {activeSlide.description}
                      </p>
                    ) : null}
                  </div>
                  <div className="absolute bottom-3 right-3 z-10">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => void handleReplaceImage(e)}
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="secondary"
                      disabled={uploading}
                      className="shadow-md"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <ImageUp className="h-4 w-4" />
                      {uploading ? "Uploading…" : "Replace image"}
                    </Button>
                  </div>
                </div>

                <Field label="Tagline">
                  <Input
                    className={fieldClass}
                    value={activeSlide.tagline}
                    onChange={(e) =>
                      updateSlide(activeIndex, { tagline: e.target.value })
                    }
                  />
                </Field>
                <Field label="Title">
                  <Input
                    className={fieldClass}
                    value={activeSlide.title}
                    onChange={(e) =>
                      updateSlide(activeIndex, { title: e.target.value })
                    }
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    className={areaClass}
                    rows={3}
                    value={activeSlide.description}
                    onChange={(e) =>
                      updateSlide(activeIndex, { description: e.target.value })
                    }
                  />
                </Field>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </CollapsibleSection>
  );
}
