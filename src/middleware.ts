import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto');

  // Redirect www to canonical apex
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const targetHost = newHost === 'princesinghrana.online' ? 'princesinghrana.in' : (newHost === 'princesinghrana.in' ? 'princesinghrana.in' : newHost);
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${targetHost}`);
    return NextResponse.redirect(url, 308);
  }

  // Redirect legacy domain to new canonical domain
  if (host === 'princesinghrana.online') {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://princesinghrana.in');
    return NextResponse.redirect(url, 308);
  }

  // Redirect HTTP to HTTPS in production if behind proxy
  if (proto === 'http' && (host === 'princesinghrana.in' || host.endsWith('princesinghrana.in'))) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${host}`);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon|apple-icon|manifest.webmanifest).*)',
  ],
};
