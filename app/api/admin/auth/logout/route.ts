import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getClearAdminSessionCookieOptions,
} from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(
    ADMIN_SESSION_COOKIE,
    "",
    getClearAdminSessionCookieOptions()
  );
  return res;
}
