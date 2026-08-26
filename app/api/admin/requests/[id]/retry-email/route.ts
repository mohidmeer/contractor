import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { serializeFormRequest } from "@/lib/formRequestSchema";
import { sendFormRequestNotification } from "@/lib/mail/sendFormRequestNotification";

type Props = {
  params: Promise<{ id: string }>;
};

export async function POST(req: NextRequest, { params }: Props) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await params;

  try {
    const existing = await prisma.formRequest.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const result = await sendFormRequestNotification(id);
    const updated = await prisma.formRequest.findUniqueOrThrow({
      where: { id },
    });

    if (!result.ok) {
      return NextResponse.json(
        {
          error: result.error || "Failed to send email",
          ...serializeFormRequest(updated),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(serializeFormRequest(updated));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to retry email" },
      { status: 500 }
    );
  }
}
