"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import AdminPageHeader from "../_components/AdminPageHeader";
import DeleteConfirmDialog from "../_components/DeleteConfirmDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FORM_REQUEST_STATUS_LABELS,
  FORM_REQUEST_TYPE_LABELS,
  type FormRequestStatus,
  type FormRequestType,
} from "@/lib/formRequestSchema";

type FormRequestRow = {
  id: string;
  type: FormRequestType;
  name: string;
  phone: string;
  address: string | null;
  message: string | null;
  site: string;
  status: FormRequestStatus;
  createdAt: string;
};

type TypeFilter = "ALL" | FormRequestType;

const typeVariant = (type: FormRequestType) => {
  return type === "FREE_CONSULTATION" ? ("default" as const) : ("secondary" as const);
};

function truncate(value: string | null, max = 48) {
  if (!value) return "—";
  return value.length > max ? `${value.slice(0, max)}…` : value;
}

function formatDate(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function RequestsPage() {
  const [items, setItems] = useState<FormRequestRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("ALL");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadRequests = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (typeFilter !== "ALL") params.set("type", typeFilter);
      const res = await fetch(`/api/admin/requests?${params.toString()}`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load requests");
      setItems(data.items || []);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load requests");
    } finally {
      setLoading(false);
    }
  }, [typeFilter]);

  useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  const handleStatusChange = async (id: string, status: FormRequestStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");

      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item))
      );
      toast.success("Status updated");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/admin/requests/${deletingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete request");

      setItems((prev) => prev.filter((item) => item.id !== deletingId));
      toast.success("Request deleted");
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
        title="Requests"
        description="Form submissions from the landing consultation and contact pages"
      />

      <div className="mb-4 max-w-xs">
        <Select
          value={typeFilter}
          onValueChange={(value) => setTypeFilter(value as TypeFilter)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All requests</SelectItem>
            <SelectItem value="FREE_CONSULTATION">
              {FORM_REQUEST_TYPE_LABELS.FREE_CONSULTATION}
            </SelectItem>
            <SelectItem value="REQUEST_QUOTE">
              {FORM_REQUEST_TYPE_LABELS.REQUEST_QUOTE}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-xl border bg-card">
        {loading ? (
          <p className="p-6 text-sm text-muted-foreground">Loading requests…</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[60px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="py-10 text-center text-muted-foreground">
                    No form requests yet
                  </TableCell>
                </TableRow>
              ) : (
                items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="whitespace-nowrap text-sm">
                      {formatDate(item.createdAt)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={typeVariant(item.type)}>
                        {FORM_REQUEST_TYPE_LABELS[item.type]}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell className="max-w-[160px]">
                      <span title={item.address ?? undefined}>
                        {truncate(item.address, 32)}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <span title={item.message ?? undefined}>
                        {truncate(item.message, 40)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={item.status}
                        disabled={updatingId === item.id}
                        onValueChange={(value) =>
                          handleStatusChange(item.id, value as FormRequestStatus)
                        }
                      >
                        <SelectTrigger className="h-8 w-[130px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {(Object.keys(FORM_REQUEST_STATUS_LABELS) as FormRequestStatus[]).map(
                            (status) => (
                              <SelectItem key={status} value={status}>
                                {FORM_REQUEST_STATUS_LABELS[status]}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Delete request"
                        onClick={() => setDeletingId(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <DeleteConfirmDialog
        open={Boolean(deletingId)}
        onOpenChange={(open) => !open && setDeletingId(null)}
        onConfirm={handleDelete}
        loading={deleteLoading}
        title="Delete request?"
        description="This form submission will be permanently removed."
      />
    </div>
  );
}
