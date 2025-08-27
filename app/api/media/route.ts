import { NextRequest, NextResponse } from "next/server";
import { isAuthorized } from "@/lib/auth";

export async function POST(req: NextRequest) {
    if (!isAuthorized(req)) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const forwardForm = new FormData();
    forwardForm.append("file", new Blob([buffer]), file.name);
    // Forward to media server
    const mediaRes = await fetch(`${process.env.MEDIA_SERVER_URL}/upload?category=${process.env.DATA}`, {
        method: "POST",
        headers: {
            "Authorization": "Basic " + Buffer.from(
                `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
            ).toString("base64"),
        },
        body: forwardForm,
    });
    if (!mediaRes.ok) {
        const errText = await mediaRes.text();
        return NextResponse.json({ error: "Upload failed", details: errText }, { status: 500 });
    }
    const data = await mediaRes.json();
    return NextResponse.json({ url: data.url });
}