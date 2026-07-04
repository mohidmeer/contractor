import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  EstimateBodySchema,
  normalizeEstimateBody,
} from "@/lib/estimateSchema";
import { serializeEstimate } from "@/lib/estimateHelpers";
import { ZodError } from "zod";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const estimate = await prisma.estimate.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!estimate) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(serializeEstimate(estimate));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load estimate" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const existing = await prisma.estimate.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const json = await req.json();
    const parsed = EstimateBodySchema.parse(json);
    const data = normalizeEstimateBody(parsed);

    const estimate = await prisma.$transaction(async (tx) => {
      await tx.estimateItem.deleteMany({ where: { estimateId: id } });

      return tx.estimate.update({
        where: { id },
        data: {
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          clientPhone: data.clientPhone,
          title: data.title,
          description: data.description,
          notes: data.notes,
          youtubeUrl: data.youtubeUrl,
          images: data.images,
          status: data.status,
          items: {
            create: data.items.map((item) => ({
              name: item.name,
              description: item.description,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              sortOrder: item.sortOrder,
            })),
          },
        },
        include: { items: true },
      });
    });

    return NextResponse.json(serializeEstimate(estimate));
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update estimate" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.estimate.delete({ where: { id } });
    return NextResponse.json({ message: "deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete estimate" },
      { status: 500 }
    );
  }
}
