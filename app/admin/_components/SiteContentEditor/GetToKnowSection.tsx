"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImageUp, Info } from "lucide-react";
import { toast } from "sonner";
import type { SiteContentSectionProps } from "./types";
import CollapsibleSection from "./CollapsibleSection";
import SectionAiUpdateButton from "./SectionAiUpdateButton";
import { Field, fieldClass, areaClass } from "../formUi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toMediaPath, toMediaUrl } from "@/lib/media";

const IMAGE_KEYS = [
  "image1_url",
  "image2_url",
  "image3_url",
  "image4_url",
] as const;

type ImageKey = (typeof IMAGE_KEYS)[number];

const IMAGE_LABELS: Record<ImageKey, string> = {
  image1_url: "Image 1",
  image2_url: "Image 2",
  image3_url: "Image 3",
  image4_url: "Image 4",
};

export default function GetToKnowSection({ data, setData }: SiteContentSectionProps) {
  const [uploadingKey, setUploadingKey] = useState<ImageKey | null>(null);
  const fileInputRefs = useRef<
    Partial<Record<ImageKey, HTMLInputElement | null>>
  >({});

  const handleReplaceImage = async (
    key: ImageKey,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploadingKey(key);
    try {
      const res = await fetch("/api/media", { method: "POST", body: formData });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      const path = toMediaPath(json.url ?? json.path ?? "");
      if (!path) throw new Error("Upload returned no path");
      setData({
        ...data,
        getToKnow: { ...data.getToKnow, [key]: path },
      });
      toast.success(`${IMAGE_LABELS[key]} updated`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploadingKey(null);
    }
  };

  return (
    <CollapsibleSection
      title="Get to know"
      description="About blurb, key points, and gallery images"
      icon={Info}
      headerAction={
        <SectionAiUpdateButton
          sectionId="get-to-know"
          sectionLabel="Get to know"
          data={data}
          setData={setData}
        />
      }
    >
      <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Left: copy + key points (landing-like) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-muted/20 p-4 sm:p-5">
          <Field label="Eyebrow title">
            <Input
              className={fieldClass}
              value={data.getToKnow.title}
              onChange={(e) =>
                setData({
                  ...data,
                  getToKnow: { ...data.getToKnow, title: e.target.value },
                })
              }
            />
          </Field>
          <Field label="Heading">
            <Input
              className={fieldClass}
              value={data.getToKnow.heading}
              onChange={(e) =>
                setData({
                  ...data,
                  getToKnow: { ...data.getToKnow, heading: e.target.value },
                })
              }
            />
          </Field>
          <Field label="Description">
            <Textarea
              className={areaClass}
              rows={4}
              value={data.getToKnow.description}
              onChange={(e) =>
                setData({
                  ...data,
                  getToKnow: {
                    ...data.getToKnow,
                    description: e.target.value,
                  },
                })
              }
            />
          </Field>

          <div className="space-y-3 border-t border-border/50 pt-4">
            <p className="text-[13px] font-semibold tracking-tight">
              Key points
            </p>
            {data.getToKnow.keyPoints.map((point, index) => (
              <div
                key={index}
                className="space-y-2 rounded-xl border border-border/50 bg-background/80 p-3"
              >
                <Field label={`Point ${index + 1} title`}>
                  <Input
                    className={fieldClass}
                    value={point.title}
                    onChange={(e) => {
                      const keyPoints = [...data.getToKnow.keyPoints];
                      keyPoints[index] = { ...point, title: e.target.value };
                      setData({
                        ...data,
                        getToKnow: { ...data.getToKnow, keyPoints },
                      });
                    }}
                  />
                </Field>
                <Field label="Description">
                  <Input
                    className={fieldClass}
                    value={point.desc}
                    onChange={(e) => {
                      const keyPoints = [...data.getToKnow.keyPoints];
                      keyPoints[index] = { ...point, desc: e.target.value };
                      setData({
                        ...data,
                        getToKnow: { ...data.getToKnow, keyPoints },
                      });
                    }}
                  />
                </Field>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 2x2 image grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {IMAGE_KEYS.map((key) => {
            const src = toMediaUrl(data.getToKnow[key]);
            const uploading = uploadingKey === key;
            return (
              <div
                key={key}
                className="relative aspect-square overflow-hidden rounded-xl border border-border/60 bg-muted"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={IMAGE_LABELS[key]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 20vw"
                  />
                ) : null}
                <span className="absolute left-2 top-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                  {IMAGE_LABELS[key]}
                </span>
                <div className="absolute bottom-2 right-2 z-10">
                  <input
                    ref={(el) => {
                      fileInputRefs.current[key] = el;
                    }}
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => void handleReplaceImage(key, e)}
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    disabled={uploading}
                    className="h-8 px-2.5 text-xs shadow-md"
                    onClick={() => fileInputRefs.current[key]?.click()}
                  >
                    <ImageUp className="h-3.5 w-3.5" />
                    {uploading ? "…" : "Replace"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CollapsibleSection>
  );
}
