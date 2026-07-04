import { parseEstimateImages } from "@/lib/estimateSchema";
import { computeEstimateTotal } from "@/lib/utils";

type ItemLike = {
  id?: string;
  name: string;
  description?: string | null;
  quantity: number;
  unitPrice: { toString(): string } | number | string;
  sortOrder: number;
};

export function serializeEstimateItem(item: ItemLike) {
  const unitPrice = Number(item.unitPrice.toString());
  const quantity = Number(item.quantity);
  return {
    id: item.id,
    name: item.name,
    description: item.description ?? null,
    quantity,
    unitPrice,
    sortOrder: item.sortOrder,
    subtotal: quantity * unitPrice,
  };
}

export function serializeEstimate<
  T extends {
    id: string;
    token: string;
    clientName: string;
    clientEmail: string | null;
    clientPhone: string | null;
    title: string;
    description: string | null;
    notes: string | null;
    youtubeUrl?: string | null;
    images?: unknown;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    items: ItemLike[];
  },
>(estimate: T) {
  const items = [...estimate.items]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(serializeEstimateItem);

  return {
    id: estimate.id,
    token: estimate.token,
    clientName: estimate.clientName,
    clientEmail: estimate.clientEmail,
    clientPhone: estimate.clientPhone,
    title: estimate.title,
    description: estimate.description,
    notes: estimate.notes,
    youtubeUrl: estimate.youtubeUrl ?? null,
    images: parseEstimateImages(estimate.images),
    status: estimate.status,
    items,
    total: computeEstimateTotal(items),
    createdAt: estimate.createdAt.toISOString(),
    updatedAt: estimate.updatedAt.toISOString(),
  };
}
