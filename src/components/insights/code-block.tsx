'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'typescript', filename, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      trackEvent('insight_code_copied', { language });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API unavailable
    }
  };

  return (
    <div className={cn('rounded-xl border border-border/70 bg-surface-100/80 dark:bg-surface-950/80 overflow-hidden my-6 font-mono text-xs shadow-xs', className)}>
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-200/50 dark:bg-surface-900/50 border-b border-border/50 text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase text-accent font-semibold">
            {language}
          </span>
          {filename && (
            <>
              <span className="text-border select-none">|</span>
              <span className="text-[11px] text-foreground font-mono truncate">{filename}</span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Code snippet copied to clipboard' : 'Copy code snippet'}
          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-mono text-muted-foreground hover:text-foreground hover:bg-surface-200 dark:hover:bg-surface-800 transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Scroll Body */}
      <pre className="p-4 overflow-x-auto text-foreground/90 font-mono leading-relaxed selection:bg-accent/20">
        <code>{code}</code>
      </pre>
    </div>
  );
}
