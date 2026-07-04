"use client";

import { useParams } from "next/navigation";
import AdminPageHeader from "../../../_components/AdminPageHeader";
import BlogForm from "../../../_components/BlogForm";

export default function EditBlogPage() {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <AdminPageHeader
        title="Edit Post"
        description="Update blog content and image"
      />
      <BlogForm mode="edit" blogId={params.id} />
    </div>
  );
}
