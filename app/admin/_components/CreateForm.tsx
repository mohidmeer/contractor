"use client";

import React, { useState } from "react";
import { BlogContentSchema } from "@/lib/blogSchema";
import MediaForm from "./MediaForm";

type CreateBlogFormProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreated?: (blog:any) => void;
};

const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ isOpen, onClose, onCreated }) => {
    const [jsonText, setJsonText] = useState<string>(
        JSON.stringify(
            {
                title: "My New Blog",
                read_time: "5 min",
                seo: { title: "SEO Title", description: "SEO description here" },
                image: "",
                content: [{ heading: "Intro", body: "Write your blog here", listItems: [], table: [], quote: null }],
            },
            null,
            2
        )
    );
    const [error, setError] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    if (!isOpen) return null;

    const handleImageUploaded = (url: string) => {
        try {
            const current = JSON.parse(jsonText);
            const updated = { ...current, image: url };
            setJsonText(JSON.stringify(updated, null, 2));
            // clear any prior JSON errors since this is derived, valid JSON
            setError(null);
        } catch {
            // if textarea currently has invalid JSON, surface a friendly hint
            setError("JSON is invalid; fix it or reset before setting image.");
        }
    };

    const getInitialUrl = () => {
        try {
            const current = JSON.parse(jsonText);
            return typeof current?.image === "string" ? current.image : "";
        } catch {
            return "";
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError(null);

        try {
            const parsed = JSON.parse(jsonText);

            const result = BlogContentSchema.safeParse(parsed);
            if (!result.success) {
                setError("Validation failed: " + JSON.stringify(result.error.format(), null, 2));
                setSaving(false);
                return;
            }

            const res = await fetch("/api/admin/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(result.data),
            });

            if (!res.ok) throw new Error(await res.text());

            const data = await res.json();
            onCreated?.(data);
            alert("✅ Blog created!");
            onClose();
        } catch (err:any) {
            setError(err.message || "Failed to create blog");
        } finally {
            setSaving(false);
        }
    };

    // ESC to close + backdrop click close are kept same pattern as your edit form
    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}>
            <div className="max-w-4xl w-full bg-white rounded-md shadow-lg p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Create Blog</h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">×</button>
                </div>
                <div className="flex  gap-10">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                        <textarea
                            value={jsonText}
                            onChange={(e) => setJsonText(e.target.value)}
                            rows={18}
                            className="border p-2 rounded font-mono text-sm w-full"
                            spellCheck={false}
                        />

                        {error && (
                            <pre className="bg-red-50 text-red-600 text-xs p-2 rounded whitespace-pre-wrap">
                                {error}
                            </pre>
                        )}

                        <div className="flex justify-end gap-2 border-t pt-3">
                            <button type="button" onClick={onClose} className="px-3 py-2 bg-gray-200 rounded-md">
                                Cancel
                            </button>
                            <button type="submit" disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                                {saving ? "Saving…" : "Create"}
                            </button>
                        </div>
                    </form>

                    {/* Media uploader: updates "image" inside the JSON */}
                    <div className="mt-4">
                        <MediaForm
                            initialUrl={getInitialUrl()}
                            onUploaded={handleImageUploaded}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBlogForm;