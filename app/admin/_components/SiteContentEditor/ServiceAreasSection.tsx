"use client";

import { useState } from "react";
import { MapPinned, Pencil, Plus, Trash2 } from "lucide-react";
import { MdLocationPin } from "react-icons/md";
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

function slugifyCity(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueServiceAreaHref(
  name: string,
  areas: { href: string }[],
  excludeIndex?: number
) {
  const base = slugifyCity(name) || "service-area";
  const used = new Set(
    areas
      .filter((_, i) => i !== excludeIndex)
      .map((a) => a.href.replace(/^\/+/, "").toLowerCase())
  );
  let slug = base;
  let n = 2;
  while (used.has(slug)) {
    slug = `${base}-${n++}`;
  }
  return `/${slug}`;
}

function cityMapEmbedUrl(cityName: string) {
  const query = encodeURIComponent(`${cityName}, Florida, USA`);
  return `https://maps.google.com/maps?q=${query}&z=11&output=embed`;
}

export default function ServiceAreasSection({
  data,
  setData,
}: SiteContentSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const active =
    activeIndex !== null ? data.serviceAreasData[activeIndex] : null;

  const updateArea = (
    index: number,
    patch: Partial<(typeof data.serviceAreasData)[number]>
  ) => {
    const serviceAreasData = [...data.serviceAreasData];
    serviceAreasData[index] = { ...serviceAreasData[index], ...patch };
    setData({ ...data, serviceAreasData });
  };

  const renameArea = (index: number, name: string) => {
    const href = uniqueServiceAreaHref(name, data.serviceAreasData, index);
    const current = data.serviceAreasData[index];
    const titleLooksDefault =
      !current.title.trim() ||
      / in .+, FL$/i.test(current.title) ||
      current.title === `${current.name} Service Area`;

    updateArea(index, {
      name,
      href,
      title: titleLooksDefault
        ? `${data.siteName || "Services"} in ${name || "City"}, FL`
        : current.title,
    });
  };

  const addArea = () => {
    const name = "New City";
    const href = uniqueServiceAreaHref(name, data.serviceAreasData);
    const fallbackImage =
      data.serviceAreasData[0]?.image ||
      data.landingPage?.seo?.ogImage ||
      "";
    const serviceAreasData = [
      ...data.serviceAreasData,
      {
        name,
        href,
        title: `${data.siteName || "Services"} in ${name}, FL`,
        description: "",
        content: "",
        image: fallbackImage,
      },
    ];
    setData({ ...data, serviceAreasData });
    setActiveIndex(serviceAreasData.length - 1);
  };

  const removeArea = (index: number) => {
    const serviceAreasData = data.serviceAreasData.filter((_, i) => i !== index);
    setData({ ...data, serviceAreasData });
    setDeleteIndex(null);
    if (activeIndex === index) setActiveIndex(null);
    else if (activeIndex !== null && activeIndex > index) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <CollapsibleSection
      title="Service areas"
      description="Click a city to edit · path updates from the city name"
      icon={MapPinned}
    >
      <div className="flex justify-end">
        <Button type="button" size="sm" onClick={addArea}>
          <Plus className="h-4 w-4" />
          Add service area
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {data.serviceAreasData.map((area, index) => (
          <div key={`${area.href}-${index}`} className="relative">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative flex min-h-[180px] w-full overflow-hidden rounded-2xl bg-heading text-left shadow-sm transition-all",
                "hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                activeIndex === index && "ring-2 ring-primary/50"
              )}
            >
              <iframe
                title={`Map of ${area.name}, Florida`}
                src={cityMapEmbedUrl(area.name || "Florida")}
                className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] border-0 transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden
                tabIndex={-1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heading via-heading/50 to-heading/10 opacity-90 transition-opacity group-hover:opacity-95" />

              <div className="relative z-[1] mt-auto flex w-full flex-col gap-2 p-3.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30 transition-colors group-hover:bg-white group-hover:text-primary">
                  <MdLocationPin className="text-base" />
                </span>
                <div>
                  <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Florida
                  </p>
                  <p className="truncate text-sm font-bold leading-snug text-white">
                    {area.name || "Untitled"}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-white/60">
                    /service-areas{area.href}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-[11px] font-light text-white/75">
                    {area.description || "No description yet…"}
                  </p>
                </div>
              </div>

              <span className="absolute right-2 top-2 z-[1] flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Pencil className="h-3.5 w-3.5" />
              </span>
            </button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute bottom-2 right-2 z-[2] h-8 w-8 border-white/20 bg-black/50 text-white hover:bg-destructive hover:text-destructive-foreground"
              aria-label="Delete service area"
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

      {data.serviceAreasData.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border/70 px-4 py-8 text-center text-sm text-muted-foreground">
          No service areas yet. Add a city to create its page path.
        </p>
      ) : null}

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-w-lg overflow-hidden sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle>{active?.name || "Service area"}</DialogTitle>
            <DialogDescription>
              City name rebuilds the URL path. Changes go live after Save all
              (cache refreshes automatically).
            </DialogDescription>
          </DialogHeader>

          {active && activeIndex !== null ? (
            <div className="space-y-4">
              <div className="relative h-36 overflow-hidden rounded-xl bg-heading">
                <iframe
                  title={`Map of ${active.name || "City"}, Florida`}
                  src={cityMapEmbedUrl(active.name || "Florida")}
                  className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading via-heading/40 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <MdLocationPin className="text-base" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      Florida
                    </p>
                    <p className="text-sm font-bold">
                      {active.name || "City"}
                    </p>
                  </div>
                </div>
              </div>

              <Field label="City name">
                <Input
                  className={fieldClass}
                  value={active.name}
                  onChange={(e) => renameArea(activeIndex, e.target.value)}
                />
              </Field>

              <Field label="Path (auto from name)">
                <Input
                  className={fieldClass}
                  value={`/service-areas${active.href}`}
                  disabled
                />
              </Field>

              <Field label="Page title">
                <Input
                  className={fieldClass}
                  value={active.title}
                  onChange={(e) =>
                    updateArea(activeIndex, { title: e.target.value })
                  }
                />
              </Field>

              <Field label="Short description">
                <Textarea
                  className={areaClass}
                  rows={3}
                  value={active.description}
                  onChange={(e) =>
                    updateArea(activeIndex, { description: e.target.value })
                  }
                />
              </Field>

              <Field label="Page content">
                <Textarea
                  className={areaClass}
                  rows={4}
                  value={active.content}
                  onChange={(e) =>
                    updateArea(activeIndex, { content: e.target.value })
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
        title="Delete service area?"
        description="This removes the city page path after you save. The live cache will refresh on save."
        onConfirm={() => {
          if (deleteIndex !== null) removeArea(deleteIndex);
        }}
      />
    </CollapsibleSection>
  );
}
