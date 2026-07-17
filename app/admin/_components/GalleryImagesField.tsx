"use client";

import { useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toMediaPath, toMediaUrl } from "@/lib/media";

type GalleryImagesFieldProps = {
  label?: string;
  images: string[];
  onChange: (images: string[]) => void;
};

export default function GalleryImagesField({
  label = "Gallery images",
  images,
  onChange,
}: GalleryImagesFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    setUploading(true);
    setError(null);

    try {
      const uploaded: string[] = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/media", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || "Upload failed");
        }

        const data = await res.json();
        const path = toMediaPath(data.url ?? data.path ?? "");
        if (path) uploaded.push(path);
      }

      if (uploaded.length) {
        onChange([...images, ...uploaded]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3 md:col-span-2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <Label>{label}</Label>
          <p className="mt-1 text-xs text-muted-foreground">
            Optional gallery images. Paths are stored without the media server base URL.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
        >
          <Plus className="h-4 w-4" />
          {uploading ? "Uploading..." : "Add images"}
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleUpload}
        />
      </div>

      {images.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group relative overflow-hidden rounded-md border bg-muted/20"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={toMediaUrl(image)}
                alt={`Gallery image ${index + 1}`}
                className="h-28 w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-2 top-2 rounded-md bg-background/90 p-1.5 text-destructive shadow-sm"
                title="Remove image"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <p className="truncate px-2 py-1 text-[10px] text-muted-foreground">
                {image}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-dashed px-4 py-6 text-center text-sm text-muted-foreground">
          No gallery images added yet.
        </div>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
