import OgImage from '@/app/opengraph-image';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  return OgImage();
}
