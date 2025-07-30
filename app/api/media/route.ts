import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { mkdirSync, existsSync } from "fs";
import { isAuthorized } from "@/lib/auth";

export async function POST(req: NextRequest) {

    if (!isAuthorized(req)) {
        return new NextResponse("Unauthorized", {
            status: 401,
        });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExt = file.name.split(".").pop();
    const fileName = `${randomUUID()}.${fileExt}`;
    const uploadDir = path.join(process.cwd(), "public/images", "uploads");
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const fileUrl = `${req.nextUrl.origin}/images/uploads/${fileName}`;
    return NextResponse.json({ url: fileUrl });
}