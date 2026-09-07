import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getSessionTokenFromRequest,
  verifyAdminSessionToken,
} from "@/lib/auth";

const PUBLIC_PREFIXES = ["/admin/login", "/api/admin/auth"];

function isPublic(pathname: string) {
  return PUBLIC_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);

  if (isPublic(pathname)) {
    // Already signed in → skip login page
    if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
      const token = getSessionTokenFromRequest(req);
      if (await verifyAdminSessionToken(token)) {
        const next = req.nextUrl.searchParams.get("next");
        const dest =
          next && next.startsWith("/admin") && !next.startsWith("/admin/login")
            ? next
            : "/admin";
        return NextResponse.redirect(new URL(dest, req.url));
      }
    }
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const token = getSessionTokenFromRequest(req);
  const ok = await verifyAdminSessionToken(token);

  if (ok) {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const isApi =
    pathname.startsWith("/api/") ||
    pathname.startsWith("/api/admin") ||
    pathname.startsWith("/api/estimates");

  if (isApi) {
    // Allow Basic Auth for scripts/seed on APIs (no browser challenge)
    const authHeader = req.headers.get("authorization") || "";
    if (authHeader.startsWith("Basic ")) {
      // Let the route handler's isAuthorized decide; pass through
      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const login = new URL("/admin/login", req.url);
  login.searchParams.set("next", pathname);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/api/admin/:path*",
    "/api/estimates",
    "/api/estimates/:path*",
  ],
};
