import { NextRequest } from "next/server";

export function isAuthorized(req: NextRequest): boolean {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Basic ")) return false;
    const base64Credentials = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64Credentials, "base64").toString("utf-8");
    const [username, password] = decoded.split(":");
    return username === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASS;
}
