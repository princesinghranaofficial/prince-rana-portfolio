import { NextResponse } from 'next/server';

/**
 * RFC 9116 Security Disclosure (security.txt)
 * Standardized security contact specification for responsible vulnerability reporting.
 */
export async function GET() {
  const securityTxt = [
    '# Responsible Security Vulnerability Disclosure Policy',
    '# RFC 9116: https://www.rfc-editor.org/rfc/rfc9116',
    '',
    'Contact: mailto:princesinghranaofficial@gmail.com',
    'Expires: 2027-12-31T23:59:59.000Z',
    'Preferred-Languages: en',
    'Canonical: https://princesinghrana.in/.well-known/security.txt',
    'Policy: https://princesinghrana.in/contact',
    '',
  ].join('\n');

  return new NextResponse(securityTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
