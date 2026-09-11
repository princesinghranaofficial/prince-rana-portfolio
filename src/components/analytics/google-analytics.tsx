import * as React from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/config/site';

/**
 * Production Google Analytics 4 Script Loader
 * 
 * - Loads asynchronously via Next.js Script strategy="afterInteractive" (non-blocking).
 * - Preserves Core Web Vitals (zero layout shift, non-render-blocking).
 * - Disables tracking on local development, staging, and preview domains (workers.dev).
 * - Prevents duplicate initialization and duplicate page_view events.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());

            // Safeguard: Opt out of tracking on non-production hosts (localhost, preview, workers.dev)
            if (typeof window !== 'undefined' && window.location.hostname !== 'princesinghrana.in') {
              window['ga-disable-${GA_MEASUREMENT_ID}'] = true;
            }

            gtag('config', '${GA_MEASUREMENT_ID}', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
