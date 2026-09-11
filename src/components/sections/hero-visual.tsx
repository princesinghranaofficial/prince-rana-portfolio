'use client';

import * as React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  DollarSign, 
  Users, 
  ArrowUpRight,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function HeroVisual() {
  // Subtle mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-8, 8]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
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
      className="relative w-full max-w-5xl mx-auto perspective-1000 my-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 w-full rounded-2xl border border-border/80 bg-surface-50/70 dark:bg-surface-50/30 backdrop-blur-xl p-4 sm:p-6 shadow-2xl transition-all duration-300 group"
      >
        {/* Fake Window Header Bar */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-muted-foreground hidden sm:inline-block">
              app.collectai.io / receivables-copilot
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="real-product" size="sm">
              Flagship Product
            </Badge>
            <Badge variant="accent" size="sm">
              Live Production
            </Badge>
          </div>
        </div>

        {/* Dashboard Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Dashboard Card */}
          <div className="md:col-span-2 rounded-xl border border-border/60 bg-background/90 p-5 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  CollectAI SaaS Platform
                </span>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mt-0.5">
                  Accounts Receivable Overview
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    +24.8% recovered
                  </span>
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-surface-50 dark:bg-surface-50/50 border border-border/40">
                <span className="text-[11px] text-muted-foreground block">Outstanding</span>
                <span className="text-lg font-mono font-bold text-foreground">$142,850</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-50 dark:bg-surface-50/50 border border-border/40">
                <span className="text-[11px] text-muted-foreground block">AI Collected</span>
                <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">$98,400</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-50 dark:bg-surface-50/50 border border-border/40">
                <span className="text-[11px] text-muted-foreground block">Avg DSO</span>
                <span className="text-lg font-mono font-bold text-foreground">18.4 Days</span>
              </div>
            </div>

            {/* AI Workflow Action Card */}
            <div className="p-4 rounded-xl border border-accent/30 bg-accent-muted/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2 text-accent">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="font-semibold">AI Collector Agent Active</span>
                </div>
                <span className="text-muted-foreground font-mono">Workflow #AR-902</span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">
                Autonomous escalation sent for Acme Corp ($14,200). Payment link generated with 2.5% early settlement prompt.
              </p>
            </div>
          </div>

          {/* Secondary Stacked UI: AI CFO Copilot */}
          <div className="space-y-4">
            {/* AI CFO Widget */}
            <div className="rounded-xl border border-border/60 bg-background/90 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-foreground">AI CFO Copilot</span>
                </div>
                <Badge variant="real-product" size="sm">
                  Active
                </Badge>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-surface-50 dark:bg-surface-50/50 border border-border/30 flex items-center justify-between">
                  <span className="text-muted-foreground">Cash Runrate</span>
                  <span className="font-mono font-semibold text-foreground">14.2 Months</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-50 dark:bg-surface-50/50 border border-border/30 flex items-center justify-between">
                  <span className="text-muted-foreground">MRR Forecast</span>
                  <span className="font-mono font-semibold text-emerald-500">$64.2k (+12%)</span>
                </div>
              </div>
            </div>

            {/* Architecture Stack Badge */}
            <div className="rounded-xl border border-border/60 bg-background/90 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Product Architecture
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Next.js 15', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-50/80 text-foreground border border-border/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
