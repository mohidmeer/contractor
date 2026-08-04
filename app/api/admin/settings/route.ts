import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { ensureSettingRow, SETTING_ID } from "@/lib/apiKeys";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  await ensureSettingRow();
  const setting = await prisma.setting.findUnique({
    where: { id: SETTING_ID },
  });

  return NextResponse.json({
    ownerPrompt: setting?.ownerPrompt ?? "",
    activeApiKeyId: setting?.activeApiKeyId ?? null,
  });
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const ownerPrompt =
      typeof json.ownerPrompt === "string" ? json.ownerPrompt : "";

    await ensureSettingRow();
    const setting = await prisma.setting.update({
      where: { id: SETTING_ID },
      data: { ownerPrompt: ownerPrompt.trim() || null },
    });

    return NextResponse.json({
      message: "saved",
      ownerPrompt: setting.ownerPrompt ?? "",
      activeApiKeyId: setting.activeApiKeyId ?? null,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
