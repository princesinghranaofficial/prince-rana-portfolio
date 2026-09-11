'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Globe, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { CalEmbed } from './cal-embed';
import { calConfig } from '@/lib/cal/config';

export function BookingInterface() {
  const [embedState, setEmbedState] = React.useState<'ready' | 'loading' | 'error'>('ready');
  const calLink = calConfig.calLink;

  React.useEffect(() => {
    trackEvent('book_page_viewed');
  }, []);

  const handleBookingStart = () => {
    trackEvent('booking_started');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left: Call Agenda & Expectations */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 rounded-3xl border border-border/80 bg-surface-50/70 dark:bg-surface-900/70 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-muted text-accent flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">30-Minute Video Call</h3>
              <span className="text-xs text-muted-foreground font-mono">Google Meet / Zoom</span>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Discussion Agenda
            </span>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-foreground/90 leading-snug">
                  Your product vision, business model, and target users
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-foreground/90 leading-snug">
                  Technical architecture, database modeling &amp; stack fit
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-foreground/90 leading-snug">
                  Feasibility of AI workflows, integrations, and milestones
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-foreground/90 leading-snug">
                  Transparent qualification: scope, timeline, and budget ($1.5K–$15K+)
                </span>
              </li>
            </ul>
          </div>

          {/* Three Concise Stages */}
          <div className="space-y-3 pt-4 border-t border-border/60">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              What to Expect
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-surface-100/60 dark:bg-surface-950/60 border border-border/40">
                <strong className="text-foreground block font-mono text-[11px]">BEFORE</strong>
                <span className="text-muted-foreground">Share brief project context so our discussion is focused.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-100/60 dark:bg-surface-950/60 border border-border/40">
                <strong className="text-foreground block font-mono text-[11px]">DURING</strong>
                <span className="text-muted-foreground">Direct conversation about technical scope and architecture.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-100/60 dark:bg-surface-950/60 border border-border/40">
                <strong className="text-foreground block font-mono text-[11px]">AFTER</strong>
                <span className="text-muted-foreground">Determine if there is an aligned next step or milestone scope.</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-surface-100 dark:bg-surface-950 border border-border/50 text-xs font-mono text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span>International Timezones</span>
            </div>
            <span className="text-[10px] text-accent font-bold uppercase">Remote</span>
          </div>
        </div>
      </div>

      {/* Right: Direct Cal.com / Scheduler Integration Container */}
      <div className="lg:col-span-7 space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-surface-50/70 dark:bg-surface-900/70 backdrop-blur-md space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-border/60">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-foreground">Select a Date &amp; Time</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">Direct Calendar Integration</span>
          </div>

          {/* Embedded Live Calendar Scheduler */}
          <CalEmbed calLink={calLink} />

          {/* Action Row & Direct Email Fallback */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-border/50">
            <Link href="/start-project" onClick={() => trackEvent('book_start_project_clicked')} className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full justify-center" leftIcon={<MessageSquare className="w-4 h-4" />}>
                Submit Project Details First
              </Button>
            </Link>
            <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
              <span>Can&apos;t find a slot?</span>
              <a
                href="mailto:princesinghranaofficial@gmail.com?subject=Discovery%20Call%20Request"
                className="text-accent font-bold hover:underline flex items-center gap-0.5"
              >
                <span>Email directly</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
