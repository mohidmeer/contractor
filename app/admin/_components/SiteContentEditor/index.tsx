"use client";

import { useCallback, useEffect, useRef, useState, type SetStateAction } from "react";
import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import type { SiteContent } from "@/lib/siteContent";
import AdminPageHeader from "../AdminPageHeader";
import { Button } from "@/components/ui/button";
import BrandSection from "./BrandSection";
import ContactSection from "./ContactSection";
import LandingSeoSection from "./LandingSeoSection";
import HeroCarouselSection from "./HeroCarouselSection";
import GetToKnowSection from "./GetToKnowSection";
import FaqsSection from "./FaqsSection";
import ProcessSection from "./ProcessSection";
import WhyUsSection from "./WhyUsSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import ServiceAreasSection from "./ServiceAreasSection";

export default function SiteContentEditor() {
  const [data, setDataState] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const savedSnapshot = useRef<string>("");

  const setData = useCallback((action: SetStateAction<SiteContent | null>) => {
    setDataState((prev) =>
      typeof action === "function" ? action(prev) : action
    );
  }, []);

  useEffect(() => {
    if (!data) {
      setDirty(false);
      return;
    }
    setDirty(JSON.stringify(data) !== savedSnapshot.current);
  }, [data]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/site-content");
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      const loaded = json.data as SiteContent;
      savedSnapshot.current = JSON.stringify(loaded);
      setDataState(loaded);
      setDirty(false);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to load site content"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!dirty) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty]);

  const save = async () => {
    if (!data) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Save failed");
      const saved = json.data as SiteContent;
      savedSnapshot.current = JSON.stringify(saved);
      setDataState(saved);
      setDirty(false);
      toast.success("Site content saved — cache refreshed");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !data) {
    return (
      <div>
        <AdminPageHeader
          title="Site Content"
          description="Edit marketing copy, contact info, hero, FAQs, and more"
        />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  const sectionProps = { data, setData };

  return (
    <div>
      {dirty ? (
        <div className="sticky top-0 z-50 -mx-4 mb-4 w-[calc(100%+2rem)] sm:-mx-6 sm:mb-5 sm:w-[calc(100%+3rem)]">
          <div className="flex w-full items-start gap-2.5 border-b-2 border-amber-500 bg-amber-400 px-4 py-3 text-amber-950 shadow-md sm:px-6">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-950" />
            <div className="min-w-0">
              <p className="text-sm font-bold tracking-tight">
                Warning: unsaved changes — these will not be saved yet
              </p>
              <p className="mt-0.5 text-xs text-amber-950/80">
                Please save site content with the button below so updates can be
                cached and revalidated on the live site.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <AdminPageHeader
        title="Site Content"
        description="Static marketing content stored in the database. Changes apply after save (cache refreshes automatically)."
      />

      <p className="mx-auto mb-4 max-w-5xl text-sm text-muted-foreground">
        Open a section to edit. Brand starts expanded; everything else is
        collapsed until you need it.
      </p>

      <div className="mx-auto max-w-5xl space-y-3 pb-24">
        <BrandSection {...sectionProps} />
        <ContactSection {...sectionProps} />
        <LandingSeoSection {...sectionProps} />
        <HeroCarouselSection {...sectionProps} />
        <GetToKnowSection {...sectionProps} />
        <FaqsSection {...sectionProps} />
        <ProcessSection {...sectionProps} />
        <WhyUsSection {...sectionProps} />
        <AboutSection {...sectionProps} />
        <TestimonialsSection {...sectionProps} />
        <ServiceAreasSection {...sectionProps} />
      </div>

      <div className="sticky bottom-4 z-20 mx-auto max-w-5xl">
        <div
          className={
            dirty
              ? "flex items-center justify-between gap-3 rounded-2xl border-2 border-amber-500 bg-amber-400 px-4 py-3.5 text-amber-950 shadow-2xl shadow-amber-500/40 ring-4 ring-amber-300/60 animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-300"
              : "flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/90 px-4 py-3 shadow-lg backdrop-blur"
          }
        >
          <p
            className={
              dirty
                ? "hidden text-xs font-medium text-amber-950/85 sm:block"
                : "hidden text-xs text-muted-foreground sm:block"
            }
          >
            {dirty
              ? "Unsaved changes — save now to cache and revalidate the live site."
              : "All changes are saved. The live cache is up to date."}
          </p>
          <Button
            size="lg"
            className={
              dirty
                ? "ml-auto scale-105 bg-amber-950 text-amber-50 shadow-lg shadow-amber-950/30 hover:scale-110 hover:bg-amber-900"
                : "ml-auto"
            }
            onClick={() => void save()}
            disabled={saving || !dirty}
          >
            {saving ? "Saving…" : "Save all site content"}
          </Button>
        </div>
      </div>
    </div>
  );
}
