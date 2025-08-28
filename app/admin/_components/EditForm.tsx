"use client";

import React, { useEffect, useState, useCallback } from "react";
import MediaForm from "./MediaForm";
import { BlogContentType } from "@/lib/blogSchema";

type EditFormProps = {
  blog_id: string;
  onClose: () => void;
  onSave?: (updated:any) => void; // optional callback with updated blog
};

const EditForm: React.FC<EditFormProps> = ({ blog_id, onClose, onSave }) => {
  const [jsonText, setJsonText] = useState<string>(""); 
  const [parsed, setParsed] = useState<BlogContentType|null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  // load blog by id
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/admin/blogs/${blog_id}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load blog (${res.status})`);
        const data = await res.json();

        if (!cancelled) {
          setParsed(data);
          setJsonText(JSON.stringify(data, null, 2));
        }
      } catch (e:any) {
        if (!cancelled) setError(e.message ?? "Failed to load blog");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [blog_id]);

  // sync text → parsed
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonText(value);
    try {
      const obj = JSON.parse(value);
      setParsed(obj);
      setError(null);
    } catch (err:any) {
      setError("Invalid JSON: " + err.message);
    }
  };

  // update parsed + jsonText when image uploaded
  const handleImageUploaded = (url: string) => {
    setParsed((prev:any) => {
      const updated = { ...prev, image: url };
      setJsonText(JSON.stringify(updated, null, 2));
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/blogs/${blog_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `Failed to save (${res.status})`);
      }

      const result = await res.json();
      onSave?.(result);
      onClose();
    } catch (err:any) {
      setError(err.message || "Failed to save blog");
    } finally {
      setSaving(false);
    }
  };

  // close on ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-w-5xl w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white rounded-md shadow-lg p-4 max-h-[85vh]"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Edit Blog</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {loading ? (
            <div className="p-4 text-sm text-gray-600">Loading blog…</div>
          ) : (
            <div className="flex gap-8">
              <div className="w-full">
                <label className="font-semibold">Blog JSON</label>
                <textarea
                  value={jsonText}
                  onChange={handleChange}
                  rows={18}
                  className="w-full border rounded-md p-2 text-sm overflow-auto font-mono"
                  spellCheck={false}
                />
              </div>

              <div>
                <MediaForm
                  initialUrl={parsed?.image || ""}
                  onUploaded={handleImageUploaded}
                />
              </div>
            </div>
          )}

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-end gap-2 border-t pt-3">
            <button
              type="button"
              className="px-3 py-2 bg-gray-200 rounded-md"
              onClick={onClose}
              disabled={saving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-60"
              disabled={!!error || loading || saving}
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
