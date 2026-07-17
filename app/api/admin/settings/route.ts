import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";

const SETTING_ID = 1;

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  const setting = await prisma.setting.findUnique({
    where: { id: SETTING_ID },
  });

  return NextResponse.json({
    anthropicKey: setting?.anthropicKey ?? "",
  });
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const anthropicKey =
      typeof json.anthropicKey === "string" ? json.anthropicKey.trim() : "";

    const setting = await prisma.setting.upsert({
      where: { id: SETTING_ID },
      create: { id: SETTING_ID, anthropicKey: anthropicKey || null },
      update: { anthropicKey: anthropicKey || null },
    });

    return NextResponse.json({
      message: "saved",
      anthropicKey: setting.anthropicKey ?? "",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
