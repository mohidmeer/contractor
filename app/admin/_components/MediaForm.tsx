"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toMediaPath, toMediaUrl } from "@/lib/media";

const MediaForm = ({
  initialUrl = "",
  onUploaded,
}: {
  initialUrl?: string;
  onUploaded?: (url: string) => void;
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
      // Save only the path after the first slash (media/...)
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
    <div className="flex w-full shrink-0 flex-col gap-2 md:w-[300px]">
      <Label>Image</Label>

      {displayUrl && (
        <Image
          src={displayUrl}
          width={400}
          height={400}
          alt="Uploaded image"
          className="shrink-0 rounded-md border"
          unoptimized
        />
      )}

      <div className="relative cursor-pointer rounded-md border border-dashed p-3 text-center text-sm font-medium text-primary">
        {uploading ? "Uploading..." : "Add new image"}
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="absolute inset-0 h-full cursor-pointer opacity-0"
        />
      </div>

      {imgPath && (
        <p className="break-all text-xs text-muted-foreground">{imgPath}</p>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
      {success && <p className="text-sm text-muted-foreground">{success}</p>}
    </div>
  );
};

export default MediaForm;
