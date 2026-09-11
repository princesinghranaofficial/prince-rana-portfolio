'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Bot, 
  ShieldCheck, 
  DollarSign,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProjectStatus } from '@/components/ui/project-status';
import { cn } from '@/lib/utils';

export function HeroProductShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Subtle restrained mouse response (disabled on touch & reduced-motion)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 140 };
  const rotateX = useSpring(useTransform(mouseY, [-250, 250], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-4, 4]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouchDevice) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto my-8 sm:my-12 select-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={!shouldReduceMotion && !isTouchDevice ? { rotateX, rotateY } : undefined}
        className="relative z-10 w-full rounded-2xl border border-border-strong bg-surface/90 backdrop-blur-xl p-4 sm:p-7 shadow-product transition-shadow duration-300"
      >
        {/* Fake Window Header Bar */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4 mb-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
            </div>
            <span className="ml-3 font-mono text-[11px] text-text-tertiary hidden sm:inline-block">
              app.collectai.io / receivables-control
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectStatus status="REAL PRODUCT" size="sm" />
            <Badge variant="accent" size="sm">
              Live Production
            </Badge>
          </div>
        </div>

        {/* Art-Directed Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* PRIMARY DOMINANT INTERFACE: CollectAI Dashboard (8 of 12 cols = ~67-75%) */}
          <div className="lg:col-span-8 space-y-4 rounded-xl border border-border/80 bg-background/95 p-5">
            {/* Header row */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block">
                  Flagship SaaS Architecture 01
                </span>
                <h2 className="type-h3 text-foreground mt-0.5 flex items-center gap-2">
                  <span>CollectAI</span>
                  <span className="text-xs font-normal text-text-secondary font-mono">
                    Accounts Receivable Platform
                  </span>
                </h2>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+24.8% recovered</span>
              </div>
            </div>

            {/* Metrics cards row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-surface-muted border border-border/60">
                <span className="text-[10px] font-mono uppercase text-text-tertiary block">
                  Outstanding AR
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-foreground">
                  $142,850
                </span>
                <span className="text-[10px] text-text-tertiary block mt-0.5">38 Invoices</span>
              </div>

              <div className="p-3 rounded-lg bg-surface-muted border border-border/60">
                <span className="text-[10px] font-mono uppercase text-text-tertiary block">
                  AI Collected
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  $98,400
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block mt-0.5">
                  Autonomous
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-muted border border-border/60">
                <span className="text-[10px] font-mono uppercase text-text-tertiary block">
                  Avg DSO
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-foreground">
                  18.4 Days
                </span>
                <span className="text-[10px] text-accent block mt-0.5">-8.2 days vs avg</span>
              </div>
            </div>

            {/* AI Agent Execution Activity */}
            <div className="p-3.5 rounded-xl border border-accent/30 bg-accent-muted space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-semibold text-accent">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Collector Agent Active</span>
                </div>
                <span className="text-[10px] font-mono text-text-tertiary">
                  Workflow #AR-904
                </span>
              </div>
              <p className="text-xs text-text-primary/90 leading-relaxed">
                Escalation reminder dispatched for Acme Corp ($14,200). Dynamic payment link generated with early settlement discount.
              </p>
            </div>
          </div>

          {/* SECONDARY LAYER: AI CFO & Copilot (4 of 12 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* AI CFO Copilot Card */}
            <div className="rounded-xl border border-border/80 bg-background/95 p-4 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">
                      AI CFO Copilot
                    </span>
                    <span className="text-[10px] font-mono text-text-tertiary block">
                      Flagship Product 02
                    </span>
                  </div>
                </div>
                <Badge variant="outline" size="sm">
                  Fintech
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-surface-muted border border-border/50 flex items-center justify-between">
                  <span className="text-text-secondary text-[11px]">Runway Projection</span>
                  <span className="font-mono font-bold text-foreground">16.4 Months</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-muted border border-border/50 flex items-center justify-between">
                  <span className="text-text-secondary text-[11px]">MRR Growth</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    $64.2k (+12%)
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture Stack Tag Pill */}
            <div className="rounded-xl border border-border/80 bg-background/95 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
                <span className="text-[10px] uppercase font-bold text-text-tertiary">
                  Verified Stack
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <div className="flex flex-wrap gap-1">
                {['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Vercel'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 text-text-secondary border border-border/50"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Subtle Restrained Ambient Backdrop Shift (No obnoxious glowing blobs) */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-accent/5 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-60"
        aria-hidden="true"
      />
    </div>
  );
}
