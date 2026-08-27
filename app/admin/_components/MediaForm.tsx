"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toMediaPath, toMediaUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

const MediaForm = ({
  initialUrl = "",
  onUploaded,
  label = "Cover image",
  hint = "Main image shown on cards and page headers.",
  compact = false,
  className,
}: {
  initialUrl?: string;
  onUploaded?: (url: string) => void;
  label?: string;
  hint?: string | null;
  compact?: boolean;
  className?: string;
}) => {
  const [imgPath, setImgPath] = useState(toMediaPath(initialUrl));
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setImgPath(toMediaPath(initialUrl));
  }, [initialUrl]);

  const displayUrl = toMediaUrl(imgPath);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg);
      }

      const data = await res.json();
      const path = toMediaPath(data.url ?? data.path ?? "");
      setImgPath(path);
      setSuccess("Image updated successfully");
      onUploaded?.(path);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {(label || hint) && (
        <div>
          {label ? <Label>{label}</Label> : null}
          {hint ? (
            <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
          ) : null}
        </div>
      )}

      {displayUrl && (
        <Image
          src={displayUrl}
          width={compact ? 480 : 640}
          height={compact ? 360 : 360}
          alt="Uploaded image"
          className={cn(
            "w-full rounded-md border object-cover",
            compact ? "aspect-[4/3] max-h-44" : "max-h-48 max-w-md"
          )}
          unoptimized
        />
      )}

      <div
        className={cn(
          "relative cursor-pointer rounded-md border border-dashed p-3 text-center text-sm font-medium text-primary",
          compact ? "max-w-none" : "max-w-md"
        )}
      >
        {uploading
          ? "Uploading..."
          : displayUrl
            ? "Replace image"
            : compact
              ? "Upload image"
              : "Add cover image"}
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="absolute inset-0 h-full cursor-pointer opacity-0"
        />
      </div>

      {imgPath && !compact && (
        <p className="break-all text-xs text-muted-foreground">{imgPath}</p>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
      {success && !compact && (
        <p className="text-sm text-muted-foreground">{success}</p>
      )}
    </div>
  );
};

export default MediaForm;
