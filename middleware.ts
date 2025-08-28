// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECT = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const shouldProtect = PROTECT.some((p) => pathname.startsWith(p));
  if (!shouldProtect) return NextResponse.next();

  const authHeader = req.headers.get("authorization") || "";
  const expectedUser = process.env.BASIC_AUTH_USER || "";
  const expectedPass = process.env.BASIC_AUTH_PASS || "";

  if (authHeader.startsWith("Basic ")) {
    const base64 = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    const [user, pass] = decoded.split(":");

    if (user === expectedUser && pass === expectedPass) {
      return NextResponse.next();
    }
  }

  const res = new NextResponse("Unauthorized", { status: 401 });
  res.headers.set("WWW-Authenticate", 'Basic realm="Admin Area"');
  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};