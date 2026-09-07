import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";
import {
  revalidateCategoriesCache,
  revalidateProjectsCache,
  revalidateServicesCache,
  revalidateSiteContentCache,
} from "@/lib/revalidateCatalog";

export async function POST(req: NextRequest) {
  if (!(await isAuthorized(req))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  revalidateServicesCache();
  revalidateProjectsCache();
  revalidateCategoriesCache();
  revalidateSiteContentCache();

  return NextResponse.json({ message: "revalidated" });
}
