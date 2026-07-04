"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import AdminPageHeader from "../../../_components/AdminPageHeader";
import EstimateForm from "../../../_components/EstimateForm";
import type { EstimateStatus } from "@/lib/estimateSchema";

type EstimateData = {
  id: string;
  token: string;
  clientName: string;
  clientEmail?: string | null;
  clientPhone?: string | null;
  title: string;
  description?: string | null;
  notes?: string | null;
  status: EstimateStatus;
  items: Array<{
    name: string;
    description?: string | null;
    quantity: number;
    unitPrice: number;
    sortOrder: number;
  }>;
};

export default function EditEstimatePage() {
  const params = useParams<{ id: string }>();
  const [estimate, setEstimate] = useState<EstimateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/estimates/${params.id}`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load estimate");
        setEstimate(data);
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id]);

  if (loading) {
    return <p className="text-sm text-muted-foreground">Loading estimate...</p>;
  }

  if (!estimate) {
    return <p className="text-sm text-destructive">Estimate not found.</p>;
  }

  return (
    <div>
      <AdminPageHeader
        title="Edit Estimate"
        description="Update estimate details and line items"
      />
      <EstimateForm
        mode="edit"
        estimateId={estimate.id}
        initialToken={estimate.token}
        initialValues={{
          clientName: estimate.clientName,
          clientEmail: estimate.clientEmail,
          clientPhone: estimate.clientPhone,
          title: estimate.title,
          description: estimate.description,
          notes: estimate.notes,
          status: estimate.status,
          items: estimate.items.map((item) => ({
            name: item.name,
            description: item.description ?? "",
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            sortOrder: item.sortOrder,
          })),
        }}
      />
    </div>
  );
}
