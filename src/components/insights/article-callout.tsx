'use client';

import * as React from 'react';
import { Info, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CalloutType = 'NOTE' | 'IMPORTANT' | 'DECISION' | 'TRADE-OFF';

interface ArticleCalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  NOTE: {
    icon: Info,
    label: 'NOTE',
    border: 'border-blue-500/30 dark:border-blue-500/20',
    bg: 'bg-blue-500/5 dark:bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-400',
  },
  IMPORTANT: {
    icon: AlertTriangle,
    label: 'IMPORTANT',
    border: 'border-amber-500/30 dark:border-amber-500/20',
    bg: 'bg-amber-500/5 dark:bg-amber-500/10',
    text: 'text-amber-600 dark:text-amber-400',
  },
  DECISION: {
    icon: CheckCircle,
    label: 'DECISION',
    border: 'border-emerald-500/30 dark:border-emerald-500/20',
    bg: 'bg-emerald-500/5 dark:bg-emerald-500/10',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  'TRADE-OFF': {
    icon: Scale,
    label: 'TRADE-OFF',
    border: 'border-accent/40',
    bg: 'bg-accent-muted/30',
    text: 'text-accent',
  },
};

export function ArticleCallout({
  type = 'NOTE',
  title,
  children,
  className,
}: ArticleCalloutProps) {
  const config = calloutConfig[type] || calloutConfig.NOTE;
  const Icon = config.icon;

  return (
    <div
      role="note"
      className={cn(
        'p-5 rounded-2xl border my-8 space-y-2 backdrop-blur-xs text-xs sm:text-sm leading-relaxed',
        config.border,
        config.bg,
        className
      )}
    >
      <div className="flex items-center gap-2 font-mono font-bold">
        <Icon className={cn('w-4 h-4 shrink-0', config.text)} />
        <span className={cn('text-xs uppercase tracking-wider', config.text)}>
          {title || config.label}
        </span>
      </div>
      <div className="text-foreground/90 leading-relaxed font-normal pt-1">
        {children}
      </div>
    </div>
  );
}
