"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Pencil, Plus, Trash2 } from "lucide-react";
import AdminPageHeader from "../_components/AdminPageHeader";
import DeleteConfirmDialog from "../_components/DeleteConfirmDialog";
import ProjectFormDialog from "../_components/ProjectFormDialog";
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

type ProjectRow = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  createdAt: string;
};

export default function ProjectsAdminPage() {
  const [items, setItems] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");
  const [editingId, setEditingId] = useState<string | null>(null);

  const loadItems = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("q", search.trim());
      const res = await fetch(`/api/admin/projects?${params.toString()}`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load projects");
      setItems(data.items || []);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const openCreate = () => {
    setFormMode("create");
    setEditingId(null);
    setFormOpen(true);
  };

  const openEdit = (id: number) => {
    setFormMode("edit");
    setEditingId(String(id));
    setFormOpen(true);
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/admin/projects/${deletingId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to delete project");
      }
      setItems((prev) => prev.filter((b) => String(b.id) !== deletingId));
      toast.success("Project deleted");
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
        title="Projects"
        description="Manage projects for the active site"
        action={
          <Button onClick={openCreate}>
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        }
      />

      <div className="mb-4 max-w-md">
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rounded-xl border bg-card">
        {loading ? (
          <p className="p-6 text-sm text-muted-foreground">Loading projects...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="mt-1 max-w-xl truncate text-xs text-muted-foreground">
                        {item.description}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">/{item.slug}</Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => openEdit(item.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDeletingId(String(item.id))}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {items.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No projects found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <ProjectFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        mode={formMode}
        projectId={editingId}
        onSaved={loadItems}
      />

      <DeleteConfirmDialog
        open={!!deletingId}
        onOpenChange={(open) => !open && setDeletingId(null)}
        title="Delete project?"
        description="This will permanently delete the project."
        loading={deleteLoading}
        onConfirm={handleDelete}
      />
    </div>
  );
}
