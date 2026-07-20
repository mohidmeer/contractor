"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Trash2 } from "lucide-react";
import AdminPageHeader from "../_components/AdminPageHeader";
import DeleteConfirmDialog from "../_components/DeleteConfirmDialog";
import BlogFormDialog from "../_components/BlogFormDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Blog = {
  id: string | number;
  title: string;
  slug: string;
  description?: string;
  createdAt: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");
  const [editingId, setEditingId] = useState<string | null>(null);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("q", search.trim());
      const res = await fetch(`/api/admin/blogs?${params.toString()}`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load blogs");
      setBlogs(data.items || []);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const openCreate = () => {
    setFormMode("create");
    setEditingId(null);
    setFormOpen(true);
  };

  const openEdit = (id: string | number) => {
    setFormMode("edit");
    setEditingId(String(id));
    setFormOpen(true);
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/admin/blogs/${deletingId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to delete blog");
      }
      setBlogs((prev) => prev.filter((b) => String(b.id) !== deletingId));
      toast.success("Blog deleted");
      setDeletingId(null);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to delete");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div>
      <AdminPageHeader
        title="Blogs"
        description="Manage blog posts"
        action={
          <Button onClick={openCreate}>
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        }
      />

      <div className="mb-4 max-w-md">
        <Input
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rounded-xl border bg-card">
        {loading ? (
          <p className="p-6 text-sm text-muted-foreground">Loading blogs...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>
                    <div className="font-medium">{blog.title}</div>
                    {blog.description && (
                      <div className="mt-1 max-w-xl truncate text-xs text-muted-foreground">
                        {blog.description}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Live</Badge>
                    <div className="mt-1 text-xs text-muted-foreground">
                      /{blog.slug}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => openEdit(blog.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDeletingId(String(blog.id))}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {blogs.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No blogs found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <BlogFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        mode={formMode}
        blogId={editingId}
        onSaved={loadBlogs}
      />

      <DeleteConfirmDialog
        open={!!deletingId}
        onOpenChange={(open) => !open && setDeletingId(null)}
        title="Delete blog post?"
        description="This will permanently delete the blog post."
        loading={deleteLoading}
        onConfirm={handleDelete}
      />
    </div>
  );
}
