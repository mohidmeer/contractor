import { SignJWT, jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export const ADMIN_SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7; // 7 days

function getExpectedUser() {
  return process.env.BASIC_AUTH_USER || "";
}

function getExpectedPass() {
  return process.env.BASIC_AUTH_PASS || "";
}

/** Prefer AUTH_SECRET in production; falls back to BASIC_AUTH_PASS. */
function getAuthSecret(): Uint8Array {
  const secret =
    process.env.AUTH_SECRET ||
    process.env.BASIC_AUTH_PASS ||
    "dev-admin-auth-secret";
  return new TextEncoder().encode(secret);
}

/** Constant-time-ish string compare (Edge + Node safe). */
function safeEqualString(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) {
    out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return out === 0;
}

export function verifyCredentials(user: string, pass: string): boolean {
  const expectedUser = getExpectedUser();
  const expectedPass = getExpectedPass();
  if (!expectedUser || !expectedPass) return false;
  return (
    safeEqualString(user, expectedUser) && safeEqualString(pass, expectedPass)
  );
}

export async function createAdminSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SEC}s`)
    .sign(getAuthSecret());
}

export async function verifyAdminSessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getAuthSecret());
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export function getSessionTokenFromRequest(req: NextRequest): string | null {
  return req.cookies.get(ADMIN_SESSION_COOKIE)?.value ?? null;
}

function getBasicCredentials(req: NextRequest): {
  user: string;
  pass: string;
} | null {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) return null;
  try {
    const base64Credentials = authHeader.split(" ")[1];
    // atob works in Edge; Buffer in Node — use universal approach
    const decoded =
      typeof atob === "function"
        ? atob(base64Credentials)
        : Buffer.from(base64Credentials, "base64").toString("utf-8");
    const colon = decoded.indexOf(":");
    if (colon < 0) return null;
    return {
      user: decoded.slice(0, colon),
      pass: decoded.slice(colon + 1),
    };
  } catch {
    return null;
  }
}

/** True if valid session cookie or Basic Auth (scripts/seed). */
export async function isAuthorized(req: NextRequest): Promise<boolean> {
  const token = getSessionTokenFromRequest(req);
  if (await verifyAdminSessionToken(token)) return true;

  const basic = getBasicCredentials(req);
  if (basic && verifyCredentials(basic.user, basic.pass)) return true;

  return false;
}

export function getAdminSessionCookieOptions(maxAge = SESSION_MAX_AGE_SEC) {
  const secure = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export function getClearAdminSessionCookieOptions() {
  return {
    ...getAdminSessionCookieOptions(0),
    maxAge: 0,
  };
}
