import { siteUrl } from '@/data';
import { NextResponse } from "next/server"


export function GET() { 
  const content = `
User-agent: *
Allow: /
Sitemap: ${siteUrl}sitemap.xml
  `.trim()

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}