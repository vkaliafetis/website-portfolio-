import { NextResponse } from "next/server";

export function GET() {
  const body = `User-agent: *\nDisallow:\nSitemap: https://van-portfolio.vercel.app/sitemap.xml`;
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}