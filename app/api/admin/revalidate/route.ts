import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import {
  revalidateCategoriesCache,
  revalidateProjectsCache,
  revalidateServicesCache,
} from "@/lib/revalidateCatalog";

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  revalidateServicesCache();
  revalidateProjectsCache();
  revalidateCategoriesCache();

  return NextResponse.json({ message: "revalidated" });
}
