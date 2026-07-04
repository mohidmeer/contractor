import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  EstimateBodySchema,
  normalizeEstimateBody,
} from "@/lib/estimateSchema";
import { serializeEstimate } from "@/lib/estimateHelpers";
import { ZodError } from "zod";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const estimates = await prisma.estimate.findMany({
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      items: estimates.map(serializeEstimate),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to list estimates" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const json = await req.json();
    const parsed = EstimateBodySchema.parse(json);
    const data = normalizeEstimateBody(parsed);

    const estimate = await prisma.estimate.create({
      data: {
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        title: data.title,
        description: data.description,
        notes: data.notes,
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

    return NextResponse.json(serializeEstimate(estimate), { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create estimate" },
      { status: 500 }
    );
  }
}
