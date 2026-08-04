import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { isAuthorized } from "@/lib/auth";
import {
  estimateKeyCost,
  ensureSettingRow,
  maskApiKey,
  SETTING_ID,
  setActiveApiKeyId,
  setDefaultApiKey,
} from "@/lib/apiKeys";

function serializeKey(
  key: {
    id: string;
    label: string;
    provider: string;
    apiKey: string;
    inputTokensUsed: number;
    outputTokensUsed: number;
    inputPricePerMillion: number;
    outputPricePerMillion: number;
    isDefault: boolean;
    createdAt: Date;
  },
  activeApiKeyId: string | null
) {
  return {
    id: key.id,
    label: key.label,
    provider: key.provider,
    maskedKey: maskApiKey(key.apiKey),
    inputTokensUsed: key.inputTokensUsed,
    outputTokensUsed: key.outputTokensUsed,
    inputPricePerMillion: key.inputPricePerMillion,
    outputPricePerMillion: key.outputPricePerMillion,
    estimatedCost: estimateKeyCost(
      key.inputTokensUsed,
      key.outputTokensUsed,
      key.inputPricePerMillion,
      key.outputPricePerMillion
    ),
    isDefault: key.isDefault,
    isActive: key.id === activeApiKeyId,
    createdAt: key.createdAt.toISOString(),
  };
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  await ensureSettingRow();
  const [setting, keys] = await Promise.all([
    prisma.setting.findUnique({ where: { id: SETTING_ID } }),
    prisma.apiKey.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  const activeApiKeyId = setting?.activeApiKeyId ?? null;
  const items = keys.map((k) => serializeKey(k, activeApiKeyId));
  const active = items.find((k) => k.isActive) ?? null;

  return NextResponse.json({
    items,
    active,
    activeApiKeyId,
  });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const label = typeof json.label === "string" ? json.label.trim() : "";
    const apiKey = typeof json.apiKey === "string" ? json.apiKey.trim() : "";
    const inputPricePerMillion = Number(json.inputPricePerMillion ?? 0);
    const outputPricePerMillion = Number(json.outputPricePerMillion ?? 0);
    const makeDefault = Boolean(json.isDefault);
    const makeActive = json.makeActive !== false;

    if (!label) throw new Error("Label is required");
    if (!apiKey) throw new Error("API key is required");
    if (!Number.isFinite(inputPricePerMillion) || inputPricePerMillion < 0) {
      throw new Error("Invalid input price per million");
    }
    if (!Number.isFinite(outputPricePerMillion) || outputPricePerMillion < 0) {
      throw new Error("Invalid output price per million");
    }

    await ensureSettingRow();

    if (makeDefault) {
      await prisma.apiKey.updateMany({
        where: { isDefault: true },
        data: { isDefault: false },
      });
    }

    const created = await prisma.apiKey.create({
      data: {
        label,
        provider: "ANTHROPIC",
        apiKey,
        inputPricePerMillion,
        outputPricePerMillion,
        isDefault: makeDefault,
      },
    });

    const setting = await prisma.setting.findUnique({
      where: { id: SETTING_ID },
    });

    if (makeActive || !setting?.activeApiKeyId) {
      await setActiveApiKeyId(created.id);
    }

    const refreshed = await prisma.setting.findUnique({
      where: { id: SETTING_ID },
    });

    return NextResponse.json({
      message: "created",
      item: serializeKey(created, refreshed?.activeApiKeyId ?? null),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json();
    const id = typeof json.id === "string" ? json.id : "";
    if (!id) throw new Error("id is required");

    const existing = await prisma.apiKey.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "API key not found" }, { status: 404 });
    }

    if (json.action === "set-active") {
      await setActiveApiKeyId(id);
    } else if (json.action === "set-default") {
      await setDefaultApiKey(id);
    } else if (json.action === "update-pricing") {
      const inputPricePerMillion = Number(json.inputPricePerMillion ?? 0);
      const outputPricePerMillion = Number(json.outputPricePerMillion ?? 0);
      if (!Number.isFinite(inputPricePerMillion) || inputPricePerMillion < 0) {
        throw new Error("Invalid input price per million");
      }
      if (!Number.isFinite(outputPricePerMillion) || outputPricePerMillion < 0) {
        throw new Error("Invalid output price per million");
      }
      await prisma.apiKey.update({
        where: { id },
        data: { inputPricePerMillion, outputPricePerMillion },
      });
    } else if (json.action === "reset-usage") {
      await prisma.apiKey.update({
        where: { id },
        data: { inputTokensUsed: 0, outputTokensUsed: 0 },
      });
    } else {
      throw new Error(
        "action must be set-active, set-default, update-pricing, or reset-usage"
      );
    }

    const setting = await prisma.setting.findUnique({
      where: { id: SETTING_ID },
    });
    const key = await prisma.apiKey.findUniqueOrThrow({ where: { id } });

    return NextResponse.json({
      message: "updated",
      item: serializeKey(key, setting?.activeApiKeyId ?? null),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const json = await req.json().catch(() => ({}));
    const id =
      typeof json.id === "string"
        ? json.id
        : new URL(req.url).searchParams.get("id") ?? "";
    if (!id) throw new Error("id is required");

    const existing = await prisma.apiKey.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "API key not found" }, { status: 404 });
    }

    const setting = await prisma.setting.findUnique({
      where: { id: SETTING_ID },
    });

    await prisma.apiKey.delete({ where: { id } });

    if (setting?.activeApiKeyId === id) {
      const fallback = await prisma.apiKey.findFirst({
        orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
      });
      await setActiveApiKeyId(fallback?.id ?? null);
    }

    return NextResponse.json({ message: "deleted" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Invalid payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
