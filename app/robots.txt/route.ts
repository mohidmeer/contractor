import { getSiteContent } from "@/lib/siteContent/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { siteUrl } = await getSiteContent();
  const content = `
User-agent: *
Allow: /
Sitemap: ${siteUrl}sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
