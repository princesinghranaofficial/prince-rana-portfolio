import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} — ${siteConfig.primaryPositioning}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0b0c0e',
          color: '#f4f5f7',
          fontFamily: 'sans-serif',
          border: '12px solid #16181d',
        }}
      >
        {/* Header with AV Monogram & Positioning */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'monospace',
              }}
            >
              PSR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: 700, color: '#f4f5f7' }}>
                {siteConfig.name}
              </span>
              <span
                style={{
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  color: '#9da0ac',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                {siteConfig.primaryPositioning}
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              fontSize: '14px',
              fontFamily: 'monospace',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '999px',
                background: '#10b981',
              }}
            />
            Available for Selected SaaS & AI Projects
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '980px' }}>
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Building SaaS products people want to use.
          </h1>
          <p
            style={{
              fontSize: '24px',
              lineHeight: 1.5,
              color: '#9da0ac',
              margin: 0,
            }}
          >
            Production SaaS platforms, autonomous AI copilots, and high-performance digital systems.
          </p>
        </div>

        {/* Footer Meta Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontFamily: 'monospace',
            fontSize: '15px',
            color: '#696c78',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>TypeScript</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Supabase</span>
            <span>•</span>
            <span>PostgreSQL</span>
            <span>•</span>
            <span>AI Copilots</span>
          </div>
          <span style={{ color: '#2563eb', fontWeight: 600 }}>{new URL(siteConfig.url).hostname}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
