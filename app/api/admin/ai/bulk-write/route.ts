import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import { runBulkAiWrite, MAX_BULK_PROMPTS } from "@/lib/ai/runBulkWrite";
import type { BulkEntityType } from "@/lib/ai/bulkMap";

const ENTITY_TYPES: BulkEntityType[] = [
  "blogs",
  "services",
  "projects",
  "estimates",
];

export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const json = await req.json();
    const entityType = json?.entityType as BulkEntityType;
    if (!ENTITY_TYPES.includes(entityType)) {
      return NextResponse.json(
        { error: "entityType must be blogs, services, projects, or estimates" },
        { status: 400 }
      );
    }

    const promptsRaw = Array.isArray(json?.prompts) ? json.prompts : [];
    const prompts = promptsRaw
      .filter((p: unknown): p is string => typeof p === "string")
      .map((p: string) => p.trim())
      .filter(Boolean)
      .slice(0, MAX_BULK_PROMPTS);

    if (!prompts.length) {
      return NextResponse.json(
        { error: "prompts must be a non-empty string array" },
        { status: 400 }
      );
    }

    const result = await runBulkAiWrite({ entityType, prompts });
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Bulk write failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
