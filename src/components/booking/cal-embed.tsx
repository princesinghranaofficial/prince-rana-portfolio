'use client';

import * as React from 'react';
import { Calendar as CalendarIcon, ExternalLink, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

interface CalEmbedProps {
  calLink: string;
}

export function CalEmbed({ calLink }: CalEmbedProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  // Format embed url with theme and embed parameters
  const embedUrl = React.useMemo(() => {
    try {
      const url = new URL(calLink);
      url.searchParams.set('embed', 'true');
      return url.toString();
    } catch {
      return `${calLink}?embed=true`;
    }
  }, [calLink]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
  };

  return (
    <div className="relative w-full rounded-2xl border border-border/80 bg-surface-50/50 dark:bg-surface-950/50 overflow-hidden shadow-sm transition-all">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-surface-100/50 dark:bg-surface-900/50 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-foreground font-semibold">Live Calendar</span>
          <span className="text-muted-foreground hidden sm:inline">&middot; 30-Min Discovery</span>
        </div>
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('booking_started', { mode: 'external_fullscreen' })}
          className="text-accent hover:underline flex items-center gap-1 text-[11px]"
        >
          <span>Open in Fullscreen</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-x-0 bottom-0 top-11 flex flex-col items-center justify-center p-8 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur-xs z-10 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-accent-muted text-accent flex items-center justify-center animate-spin">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm font-semibold text-foreground">Connecting to Live Calendar...</p>
            <p className="text-xs text-muted-foreground font-mono">Synchronizing available timezone slots</p>
          </div>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1 max-w-sm mx-auto">
            <h5 className="text-sm font-bold text-foreground">Calendar Embed Blocked</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your browser or ad-blocker may be restricting third-party iframes. You can book directly in a new window.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={handleRetry}>
              Retry
            </Button>
            <a href={calLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                Open Cal.com Directly
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Embedded Cal.com Iframe */}
      <div className="w-full h-[620px] bg-background/50">
        <iframe
          src={embedUrl}
          title="Schedule a 30-minute discovery call"
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          loading="lazy"
          allow="camera; microphone; autoplay; fullscreen"
        />
      </div>
    </div>
  );
}
