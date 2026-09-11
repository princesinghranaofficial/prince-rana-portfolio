import * as React from 'react';
import Link from 'next/link';
import { 
  Bot, 
  ArrowUpRight
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { BodyLarge } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { ProjectStatus } from '@/components/ui/project-status';
import { Button } from '@/components/ui/button';

export function AICFOShowcase() {
  return (
    <section className="py-20 md:py-32 border-t border-border/80 bg-surface-muted/40 relative overflow-hidden">
      <Container size="wide">
        {/* Flagship Project 02 Container */}
        <div className="rounded-3xl border border-border-strong bg-surface p-6 sm:p-10 lg:p-14 space-y-12 shadow-sm">
          {/* Top Story Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <ProjectStatus status="REAL PRODUCT" size="sm" />
                <Badge variant="category">AI Financial Intelligence SaaS</Badge>
                <span className="text-xs font-mono text-text-secondary">2025 Release</span>
              </div>

              <h3 className="type-h2 text-text-primary">
                AI CFO & Copilot — Financial intelligence designed for better business decisions.
              </h3>

              <BodyLarge className="text-text-secondary">
                Traditional accounting tools report the past, while spreadsheet models break under changing assumptions. AI CFO & Copilot unifies banking webhooks, operational expenses, and recurring revenue into real-time runway forecasting and conversational financial scenario modeling.
              </BodyLarge>
            </div>

            {/* Compact Metadata Column */}
            <div className="lg:col-span-4 p-5 rounded-2xl border border-border bg-surface-muted space-y-4 font-mono text-xs">
              <div>
                <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Role & Ownership</span>
                <span className="text-text-primary font-semibold block mt-0.5">Product Design + Full-Stack Architecture</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Production Stack</span>
                <span className="text-text-primary font-semibold block mt-0.5">TypeScript, React, Node.js, PostgreSQL, Tailwind CSS, Cloudflare</span>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="text-text-secondary block text-[10px] uppercase font-bold tracking-wider">Core Capabilities</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold block mt-0.5">Cash Flow Intelligence / Scenario Simulation / Copilot</span>
              </div>
            </div>
          </div>

          {/* Interface Visual: Financial Dashboard Mockup with Scenario Modeler */}
          <div className="rounded-2xl border border-border-strong bg-background p-4 sm:p-7 shadow-product space-y-6">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border pb-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-[11px] text-text-secondary">
                  app.aicfo.io / scenario-forecasting
                </span>
              </div>
              <span className="text-[11px] font-mono text-text-secondary hidden sm:inline-block">
                Predictive Cash Runway Engine
              </span>
            </div>

            {/* Financial Intelligence Metric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-secondary block">Current Cash Balance</span>
                <span className="text-xl font-mono font-bold text-text-primary block">$485,200</span>
                <span className="text-[11px] text-text-secondary font-mono block">Across 3 Operating Accounts</span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-secondary block">Net Monthly Burn</span>
                <span className="text-xl font-mono font-bold text-text-primary block">$29,500</span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono block">-14% Burn Optimization</span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-1">
                <span className="text-[10px] font-mono uppercase text-text-secondary block">Projected Runway</span>
                <span className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400 block">16.4 Months</span>
                <span className="text-[11px] text-purple-600 dark:text-purple-400 font-mono block">Zero Dilution Horizon</span>
              </div>
            </div>

            {/* Conversational Scenario Modeler Preview */}
            <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-semibold text-purple-600 dark:text-purple-400">
                  <Bot className="w-4 h-4" />
                  <span>Natural Language Financial Query</span>
                </div>
                <span className="text-[10px] font-mono text-text-secondary">Real-time LLM Tool Execution</span>
              </div>
              <div className="p-3 rounded-lg bg-surface border border-border/80 text-xs font-mono space-y-1">
                <span className="text-text-secondary block">Founder Prompt:</span>
                <p className="text-text-primary font-medium">
                  &ldquo;What is our cash runway impact if we hire 2 senior full-stack engineers at $120k/yr next month?&rdquo;
                </p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                <strong>Copilot Analysis:</strong> Adding $20,000 to monthly payroll reduces cash runway from 16.4 months to 11.2 months without revenue growth. If current MRR growth (+12% MoM) holds, runway extends to 14.8 months.
              </p>
            </div>
          </div>

          {/* Key Capabilities Pills & Case Study CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-border gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" size="md">Cash Flow Intelligence</Badge>
              <Badge variant="outline" size="md">Scenario Modeling</Badge>
              <Badge variant="outline" size="md">Transaction Anomaly Detection</Badge>
              <Badge variant="outline" size="md">Conversational Copilot</Badge>
            </div>

            <Link href="/work/ai-cfo-copilot">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                View Full AI CFO Case Study
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
