"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import MediaForm from "./MediaForm";
import { BlogContentSchema } from "@/lib/blogSchema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultJson = {
  title: "My New Blog",
  read_time: "5 min",
  seo: { title: "SEO Title", description: "SEO description here" },
  image: "",
  content: [
    {
      heading: "Intro",
      body: "Write your blog here",
      listItems: [],
      table: [],
      quote: null,
    },
  ],
};

type BlogFormProps = {
  mode: "create" | "edit";
  blogId?: string;
};

export default function BlogForm({ mode, blogId }: BlogFormProps) {
  const router = useRouter();
  const [jsonText, setJsonText] = useState(
    JSON.stringify(defaultJson, null, 2)
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(mode === "edit");
  const [saving, setSaving] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (mode !== "edit" || !blogId) return;

    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/blogs/${blogId}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to load blog (${res.status})`);
        const data = await res.json();
        if (cancelled) return;

        const payload = {
          title: data.title,
          read_time: data.read_time,
          seo: {
            title: data.seo_title ?? data.title,
            description: data.description ?? data.seo_description ?? "",
          },
          image: data.image ?? "",
          content: data.content,
        };
        setJsonText(JSON.stringify(payload, null, 2));
        setImageUrl(payload.image);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load blog";
        setError(message);
        toast.error(message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [mode, blogId]);

  const handleImageUploaded = (url: string) => {
    try {
      const current = JSON.parse(jsonText);
      const updated = { ...current, image: url };
      setJsonText(JSON.stringify(updated, null, 2));
      setImageUrl(url);
      setError(null);
    } catch {
      setError("JSON is invalid; fix it before setting image.");
    }
  };

  const handleJsonChange = (value: string) => {
    setJsonText(value);
    try {
      const parsed = JSON.parse(value);
      setImageUrl(typeof parsed?.image === "string" ? parsed.image : "");
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? `Invalid JSON: ${err.message}` : "Invalid JSON"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const parsedJson = JSON.parse(jsonText);
      const result = BlogContentSchema.safeParse(parsedJson);
      if (!result.success) {
        setError(
          "Validation failed: " + JSON.stringify(result.error.format(), null, 2)
        );
        setSaving(false);
        return;
      }

      const res = await fetch(
        mode === "create" ? "/api/admin/blogs" : `/api/admin/blogs/${blogId}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result.data),
        }
      );

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to save blog");
      }

      toast.success(mode === "create" ? "Blog created" : "Blog updated");
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save blog";
      setError(message);
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-sm text-muted-foreground">Loading blog...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {mode === "create" ? "New Blog Post" : "Edit Blog Post"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="min-w-0 flex-1 space-y-2">
              <Label htmlFor="blog-json">Blog JSON</Label>
              <Textarea
                id="blog-json"
                value={jsonText}
                onChange={(e) => handleJsonChange(e.target.value)}
                rows={20}
                className="font-mono text-sm"
                spellCheck={false}
              />
            </div>
            <MediaForm initialUrl={imageUrl} onUploaded={handleImageUploaded} />
          </div>

          {error && (
            <pre className="mt-4 whitespace-pre-wrap rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
              {error}
            </pre>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={saving || !!error}>
          {saving ? "Saving..." : mode === "create" ? "Create post" : "Save post"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/blogs")}
          disabled={saving}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
