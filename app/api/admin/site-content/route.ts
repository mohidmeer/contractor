import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import {
  ensureSiteContentRow,
  saveSiteContent,
  SiteContentSchema,
} from "@/lib/siteContent/server";
import { revalidateSiteContentCache } from "@/lib/revalidateCatalog";

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const data = await ensureSiteContentRow();
    return NextResponse.json({ data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to load site content";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const json = await req.json();
    const parsed = SiteContentSchema.parse(json.data ?? json);
    const data = await saveSiteContent(parsed);
    revalidateSiteContentCache();
    return NextResponse.json({ message: "saved", data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Invalid site content payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
