"use client";
import React, { useState } from "react";
import Image from "next/image";

const MediaForm = ({
    initialUrl = "",
    onUploaded,
}: {
    initialUrl?: string;
    onUploaded?: (url: string) => void;
}) => {
    const [imgUrl, setImgUrl] = useState(initialUrl);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

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
            setImgUrl(data.url);
            setSuccess("✅ Updated successfully!");
            onUploaded?.(data.url); // callback to parent if needed
        } catch (err:any) {
            setError(err.message ?? "Upload failed");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col gap-2 shrink-0 w-[300px]">
            <label className="font-semibold">Image</label>

            {imgUrl && (
                <Image
                    src={imgUrl}
                    width={400}
                    height={400}
                    alt="Uploaded image"
                    className="rounded-md shrink-0 border"
                />
            )}
            <div className="border text-blue-600 font-bold text-center p-2 relative cursor-pointer">
                 Add new image
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={uploading}
                    className="border opacity-0 inset-0 absolute cursor-pointer"
                />
            </div>

            {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
            {error && <p className="text-sm text-red-500">{error}</p>}
            {success && <p className="text-sm text-green-600">{success}</p>}
        </div>
    );
};

export default MediaForm;