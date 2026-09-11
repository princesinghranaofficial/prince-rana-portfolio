import { NextResponse } from 'next/server';
import { calClient } from '@/lib/cal/client';
import { calConfig } from '@/lib/cal/config';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const check = await calClient.checkConnection();

    if (!check.connected || !check.user) {
      return NextResponse.json(
        {
          success: false,
          connected: false,
          message: check.error || 'Cal.com API could not be verified.',
          calLink: calConfig.calLink,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        connected: true,
        user: {
          id: check.user.id,
          name: check.user.name,
          username: check.user.username,
          timeZone: check.user.timeZone,
          avatarUrl: check.user.avatarUrl,
        },
        calLink: calConfig.calLink,
        defaultEventType: calConfig.defaultEventTypeSlug,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('[API /api/cal GET Exception]:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
