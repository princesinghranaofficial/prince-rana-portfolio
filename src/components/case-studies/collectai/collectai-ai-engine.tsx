import * as React from 'react';
import { 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MessageSquare, 
  Send, 
  Edit3, 
  AlertCircle 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export function CollectAIEngine() {
  return (
    <div className="space-y-28 py-20 border-b border-border/60 bg-surface-muted/20" id="ai">
      {/* ========================================================================= */}
      {/* 07 AI COLLECTOR & 21 HUMAN CONTROL */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              eyebrow="AI Collector Engine"
              title="AI assistance built into the collection workflow."
              description="Rather than replacing human oversight with reckless autonomous bots, CollectAI operates as an intelligent execution partner that analyzes account context, drafts tailored follow-ups, and surfaces high-risk invoices."
              align="left"
            />

            <div className="space-y-4 type-body text-text-secondary">
              <p>
                In a typical finance department, writing polite yet escalating payment reminders consumes hours of time. The AI Collector analyzes the invoice size, payment history, and dispute records to propose the most effective reminder tone and schedule.
              </p>
              
              {/* Human in the loop callout */}
              <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
                <div className="flex items-center gap-2 text-text-primary font-bold text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Enterprise Human-in-the-Loop Principle</span>
                </div>
                <p className="text-xs font-mono text-text-secondary leading-relaxed">
                  AI assists prioritization and message drafting while keeping financial teams in total control. No emails or legal notices are sent without explicit workflow authorization or manual one-click approval.
                </p>
              </div>
            </div>
          </div>

          {/* AI Collector Priority Action Card */}
          <div className="lg:col-span-6 rounded-3xl border border-purple-500/30 bg-surface p-6 sm:p-8 space-y-6 shadow-md font-mono text-xs">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-bold">
                <Bot className="w-4 h-4" />
                <span>AI Collector Priority Queue</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                Item 1 of 6 in Queue
              </span>
            </div>

            {/* Target Details */}
            <div className="p-4 rounded-xl bg-surface-muted/80 border border-border space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-text-tertiary uppercase font-bold block">Target Account</span>
                  <span className="text-sm font-bold text-text-primary block">Nexus Tech Global Corp</span>
                </div>
                <span className="text-amber-600 dark:text-amber-400 font-bold text-xs">
                  $9,450.00 (14d Overdue)
                </span>
              </div>
              <div className="pt-2 border-t border-border/60 text-[11px] text-text-secondary">
                <span>Reason: Scheduled Milestone 2 follow-up. Past invoices settled in avg 21 days.</span>
              </div>
            </div>

            {/* Generated AI Draft with Tone Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-text-tertiary font-semibold">Generated Message Draft</span>
                <span className="text-accent text-[10px]">Tone: Polite & Informative</span>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface-muted/40 text-text-primary text-[11px] leading-relaxed italic space-y-2">
                <p>
                  &ldquo;Hi Sarah, hope you&apos;re having a productive week. We noticed that invoice INV-2025-084 ($9,450.00) was due on Jan 15th. We know billing cycles can get busy, so we wanted to provide this direct payment link to make settlement quick and easy.&rdquo;
                </p>
                <div className="p-2 rounded bg-surface border border-border text-[10px] not-italic font-mono text-accent">
                  pay.collectai.io/link/inv_849204_settle
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button 
                type="button"
                className="px-3 py-2 rounded-lg border border-border bg-surface-muted hover:bg-surface text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Copy</span>
              </button>

              <button 
                type="button"
                className="flex-1 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Approve & Dispatch Follow-Up</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 08 AI COPILOT & 23 COPILOT DESIGN */}
      {/* ========================================================================= */}
      <Container size="wide">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 lg:p-14 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase block">
                Conversational Intelligence
              </span>
              <h3 className="type-h2 text-text-primary">
                AI Copilot: Financial context without hunting through screens.
              </h3>
              <p className="type-body text-text-secondary">
                Finance professionals frequently need instant answers to high-context questions during executive reviews. Instead of navigating through four nested tables, the AI Copilot queries the tenant ledger directly.
              </p>
            </div>

            <div className="lg:col-span-6 p-4 rounded-xl border border-border bg-surface-muted/60 text-xs font-mono space-y-2">
              <span className="text-text-tertiary uppercase text-[10px] font-bold block">Supported Natural Queries</span>
              <ul className="space-y-1.5 text-text-secondary">
                <li>• &ldquo;Which accounts represent 80% of our overdue receivables?&rdquo;</li>
                <li>• &ldquo;Draft a dispute summary for Vanguard Media Group.&rdquo;</li>
                <li>• &ldquo;What will cash collections look like over the next 14 days?&rdquo;</li>
              </ul>
            </div>
          </div>

          {/* Copilot Structured Interface Drawer Mockup */}
          <div className="rounded-2xl border border-border bg-background p-5 sm:p-8 space-y-5 font-mono text-xs shadow-product max-w-4xl mx-auto">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-600 border border-purple-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="font-bold text-text-primary">CollectAI Assistant Query Stream</span>
              </div>
              <span className="text-[11px] text-text-tertiary">Context: Live Acronis Ledger</span>
            </div>

            {/* Question */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[10px] font-bold shrink-0">
                PR
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border text-text-primary">
                &ldquo;Which invoices are at high risk of slipping past 60 days this week?&rdquo;
              </div>
            </div>

            {/* Copilot Structured Answer with Citations */}
            <div className="flex items-start gap-3 pl-6">
              <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 p-4 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 text-text-primary space-y-3">
                <p className="text-text-secondary">
                  Based on payment velocity models and current ledger records, <strong>2 invoices ($23,650.00 total)</strong> are predicted to breach 60 days overdue within the next 5 business days:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-surface border border-border space-y-0.5">
                    <span className="font-bold text-text-primary">Vanguard Media Group</span>
                    <div className="flex justify-between text-text-tertiary">
                      <span>INV-2025-079</span>
                      <span className="text-red-500 font-bold">$14,200 (Day 56)</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-surface border border-border space-y-0.5">
                    <span className="font-bold text-text-primary">Nexus Tech Global</span>
                    <div className="flex justify-between text-text-tertiary">
                      <span>INV-2025-084</span>
                      <span className="text-amber-500 font-bold">$9,450 (Day 54)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-purple-500/20 text-[10px] text-purple-700 dark:text-purple-300 flex items-center justify-between">
                  <span>Recommended Action: Trigger Tier-2 Executive Reminder via Email</span>
                  <span className="font-bold underline cursor-pointer">Queue Workflows &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
