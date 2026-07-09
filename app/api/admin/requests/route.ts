import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import {
  FormRequestTypeSchema,
  serializeFormRequest,
} from "@/lib/formRequestSchema";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const typeParam = searchParams.get("type");
    const typeFilter = typeParam
      ? FormRequestTypeSchema.safeParse(typeParam)
      : null;

    const where =
      typeFilter?.success ? { type: typeFilter.data } : undefined;

    const requests = await prisma.formRequest.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      items: requests.map(serializeFormRequest),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to list requests" },
      { status: 500 }
    );
  }
}
