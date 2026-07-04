import AdminPageHeader from "../../_components/AdminPageHeader";
import BlogForm from "../../_components/BlogForm";

export default function NewBlogPage() {
  return (
    <div>
      <AdminPageHeader
        title="New Post"
        description="Create a new blog post"
      />
      <BlogForm mode="create" />
    </div>
  );
}
