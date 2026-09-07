import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminSessionCookieOptions,
  verifyCredentials,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const email =
      typeof json.email === "string"
        ? json.email.trim()
        : typeof json.username === "string"
          ? json.username.trim()
          : "";
    const password = typeof json.password === "string" ? json.password : "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (!verifyCredentials(email, password)) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken();
    const res = NextResponse.json({ ok: true });
    res.cookies.set(
      ADMIN_SESSION_COOKIE,
      token,
      getAdminSessionCookieOptions()
    );
    return res;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Login failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
