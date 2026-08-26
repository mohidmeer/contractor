import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { ensureSettingRow, SETTING_ID, maskApiKey } from "@/lib/apiKeys";

function serializeSmtp(setting: {
  smtpHost: string | null;
  smtpPort: number | null;
  smtpSecure: boolean;
  smtpUser: string | null;
  smtpPass: string | null;
  smtpFrom: string | null;
  smtpTo: string | null;
}) {
  const configured = Boolean(
    setting.smtpHost?.trim() &&
      setting.smtpPort &&
      setting.smtpUser?.trim() &&
      setting.smtpPass?.trim() &&
      setting.smtpFrom?.trim() &&
      setting.smtpTo?.trim()
  );

  return {
    smtpHost: setting.smtpHost ?? "",
    smtpPort: setting.smtpPort ?? 587,
    smtpSecure: Boolean(setting.smtpSecure),
    smtpUser: setting.smtpUser ?? "",
    smtpPassMasked: setting.smtpPass?.trim()
      ? maskApiKey(setting.smtpPass)
      : "",
    hasSmtpPass: Boolean(setting.smtpPass?.trim()),
    smtpFrom: setting.smtpFrom ?? "",
    smtpTo: setting.smtpTo ?? "",
    smtpConfigured: configured,
  };
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  await ensureSettingRow();
  const setting = await prisma.setting.findUnique({
    where: { id: SETTING_ID },
  });

  return NextResponse.json({
    ownerPrompt: setting?.ownerPrompt ?? "",
    activeApiKeyId: setting?.activeApiKeyId ?? null,
    ...serializeSmtp(
      setting ?? {
        smtpHost: null,
        smtpPort: null,
        smtpSecure: false,
        smtpUser: null,
        smtpPass: null,
        smtpFrom: null,
        smtpTo: null,
      }
    ),
  });
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    await ensureSettingRow();

    const existing = await prisma.setting.findUnique({
      where: { id: SETTING_ID },
    });

    const data: {
      ownerPrompt?: string | null;
      smtpHost?: string | null;
      smtpPort?: number | null;
      smtpSecure?: boolean;
      smtpUser?: string | null;
      smtpPass?: string | null;
      smtpFrom?: string | null;
      smtpTo?: string | null;
    } = {};

    if ("ownerPrompt" in json) {
      data.ownerPrompt =
        typeof json.ownerPrompt === "string"
          ? json.ownerPrompt.trim() || null
          : null;
    }

    if ("smtpHost" in json || "smtpTo" in json || "smtpFrom" in json) {
      const host =
        typeof json.smtpHost === "string" ? json.smtpHost.trim() : "";
      const user =
        typeof json.smtpUser === "string" ? json.smtpUser.trim() : "";
      const from =
        typeof json.smtpFrom === "string" ? json.smtpFrom.trim() : "";
      const to = typeof json.smtpTo === "string" ? json.smtpTo.trim() : "";
      const portRaw = Number(json.smtpPort ?? 587);
      const port = Number.isFinite(portRaw) && portRaw > 0 ? Math.floor(portRaw) : 587;
      const secure = Boolean(json.smtpSecure);
      const pass =
        typeof json.smtpPass === "string" ? json.smtpPass.trim() : "";

      data.smtpHost = host || null;
      data.smtpPort = port;
      data.smtpSecure = secure;
      data.smtpUser = user || null;
      data.smtpFrom = from || null;
      data.smtpTo = to || null;
      // Empty password keeps existing value
      if (pass) {
        data.smtpPass = pass;
      } else if (!existing?.smtpPass) {
        data.smtpPass = null;
      }
    }

    const setting = await prisma.setting.update({
      where: { id: SETTING_ID },
      data,
    });

    return NextResponse.json({
      message: "saved",
      ownerPrompt: setting.ownerPrompt ?? "",
      activeApiKeyId: setting.activeApiKeyId ?? null,
      ...serializeSmtp(setting),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
