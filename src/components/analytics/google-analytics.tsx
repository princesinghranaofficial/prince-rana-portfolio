import * as React from 'react';
import { GA_MEASUREMENT_ID } from '@/config/site';

/**
 * Production Google Analytics 4 Script Loader (Google tag - gtag.js)
 * 
 * Injects standard Google tag directly into document <head> so that:
 * 1. Static HTML pre-renders the <script async src="https://www.googletagmanager.com/gtag/js?id=G-B9PXN9Y57P"> tag.
 * 2. Automated crawlers, Google Tag Assistant, and GA4 verification immediately detect the tag.
 * 3. window.dataLayer, gtag('js', ...), and gtag('config', 'G-B9PXN9Y57P') execute reliably.
 * 4. Zero Core Web Vitals impact via asynchronous execution.
 */
export function GoogleAnalytics() {
  const measurementId = GA_MEASUREMENT_ID || 'G-B9PXN9Y57P';

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        id="google-analytics-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}

