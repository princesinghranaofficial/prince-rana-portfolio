'use client';

import * as React from 'react';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Download, 
  ArrowRight, 
  Bell, 
  Layers, 
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';

const sampleReports = [
  { title: 'Consolidated Cash Flow Statement', type: 'Cash Movement', period: 'Trailing 12 Months', generated: 'Daily at 00:00 UTC', formats: ['PDF', 'CSV'] },
  { title: 'Operating P&L and Contribution Margins', type: 'Income & Expense', period: 'Q2 2025 (YTD)', generated: 'Weekly Reconciled', formats: ['PDF', 'CSV', 'JSON'] },
  { title: 'Executive Investor Brief & Runway Horizon', type: 'Forecast & Scenario', period: 'Rolling 18 Months', generated: 'On-Demand', formats: ['PDF'] },
  { title: 'Vendor SaaS Spend & Anomaly Audit', type: 'Cost Optimization', period: 'Month-to-Date', generated: 'Continuous Scan', formats: ['CSV'] },
];

const sampleAlerts = [
  {
    severity: 'IMPORTANT',
    badgeClass: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    title: 'Upcoming Tax Disbursement: $14,500 Due in 18 Days',
    desc: 'Q2 estimated federal tax payment due on June 15. Verify Treasury-to-Operating account balance transfer.',
    action: 'Review Transfer &rarr;',
  },
  {
    severity: 'REVIEW',
    badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    title: 'Vendor Cost Surge: Datadog Bill (+38% MoM)',
    desc: 'Log ingestion volume increased 2.4x following deployment of new telemetry workers on May 24.',
    action: 'Inspect Anomaly &rarr;',
  },
  {
    severity: 'INFO',
    badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    title: 'Milestone Reached: 4 Consecutive Cash-Flow Positive Months',
    desc: 'Net operating inflows exceeded outflows by $28,400 in May, extending baseline runway to 14.2 months.',
    action: 'View Milestone &rarr;',
  },
];

const actionItems = [
  {
    task: 'Authorize Segregated Tax Transfer',
    why: 'Prevents overdraft risk prior to scheduled IRS debit on June 15.',
    context: '$14,500 transfer from Treasury to Operating Checking',
    impact: 'High Priority',
  },
  {
    task: 'Audit AWS Staging Container Auto-Scaling',
    why: 'Staging cluster maintained 8 idle pods over the weekend, contributing $680 in preventable compute burn.',
    context: 'AWS CloudWatch Metrics &middot; us-east-1',
    impact: 'Medium Priority',
  },
  {
    task: 'Confirm Q3 Hiring Start Date with Recruiting',
    why: 'Staggering senior engineer onboarding to August 1st preserves $13,000 in upfront Q2 cash reserves.',
    context: 'Forecast Model: Base Trajectory',
    impact: 'Strategic Decision',
  },
];

export function AICFOReportsActions() {
  return (
    <section className="py-20 sm:py-28 border-b border-border/50 bg-background">
      <Container size="default">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              09 &middot; REPORTING &amp; ACTION TRIAGE CENTER
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Turn passive financial analytics into proactive work.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Analytics platforms present graphs and leave you to figure out what needs fixing. AI CFO pairs auditable accounting reports with a severity-rated Action Center that turns financial variance into prioritized engineering and executive tasks.
            </TextLead>
          </div>

          {/* Reporting Suite Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <H3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                Audited Financial Reports
              </H3>
              <span className="text-xs font-mono text-muted-foreground">Export Formats: PDF &middot; CSV &middot; JSON</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sampleReports.map((rep, ri) => (
                <div key={ri} className="p-5 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/60 hover:border-emerald-500/40 transition-colors flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-foreground border border-border/50 text-[10px]">
                        {rep.type}
                      </span>
                      <span className="text-muted-foreground">{rep.period}</span>
                    </div>
                    <div className="text-sm font-semibold text-foreground pt-1">{rep.title}</div>
                    <span className="text-[11px] font-mono text-muted-foreground block">Cadence: {rep.generated}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/40 text-xs font-mono">
                    <div className="flex gap-1.5">
                      {rep.formats.map((fmt) => (
                        <span key={fmt} className="px-2 py-0.5 rounded bg-background border border-border/60 text-[10px] text-muted-foreground">
                          {fmt}
                        </span>
                      ))}
                    </div>
                    <span className="text-emerald-400 font-semibold cursor-pointer hover:underline flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Export
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Alerts & Action Center */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Financial Alerts */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <H3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Bell className="w-4 h-4 text-amber-400" />
                  Financial Monitoring Alerts
                </H3>
                <span className="text-xs font-mono text-muted-foreground">Automated Variance Scans</span>
              </div>

              <div className="space-y-3">
                {sampleAlerts.map((alert, ai) => (
                  <div key={ai} className="p-4 rounded-2xl bg-surface-100/60 dark:bg-surface-900/40 border border-border/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${alert.badgeClass}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs font-mono text-accent font-semibold cursor-pointer hover:underline">
                        {alert.action}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-foreground">{alert.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{alert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Action Center */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <H3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  The Action Center
                </H3>
                <span className="text-xs font-mono text-emerald-400 font-semibold">3 Strategic Tasks</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-100/80 dark:bg-surface-900/70 border border-border/70 space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Financial insights are converted into structured decisions with contextual evidence and impact analysis.
                </p>

                <div className="space-y-3">
                  {actionItems.map((item, ii) => (
                    <div key={ii} className="p-3.5 rounded-xl bg-background/90 border border-border/60 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-foreground">{item.task}</span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-200 dark:bg-surface-800 text-[10px] text-accent">
                          {item.impact}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.why}</p>
                      <span className="text-[10px] font-mono text-muted-foreground/80 block pt-0.5">
                        Context: {item.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
