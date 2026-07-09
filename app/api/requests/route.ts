import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  CreateFormRequestSchema,
  normalizeFormRequestBody,
} from "@/lib/formRequestSchema";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = CreateFormRequestSchema.parse(json);
    const data = normalizeFormRequestBody(parsed);

    const request = await prisma.formRequest.create({ data });

    return NextResponse.json(
      { id: request.id, message: "Request submitted" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit request" },
      { status: 500 }
    );
  }
}
