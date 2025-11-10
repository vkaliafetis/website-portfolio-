import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = 'https://van-portfolio.vercel.app';
  const routes = ['', '/#about', '/#experience', '/#interests', '/#contact'];
  const urls = routes
    .map(
      (path) =>
        `<url><loc>${baseUrl}${path}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}