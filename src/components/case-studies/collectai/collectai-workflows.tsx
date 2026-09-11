import * as React from 'react';
import { 
  GitFork, 
  Clock, 
  ArrowDown, 
  CheckCircle2, 
  AlertTriangle, 
  Mail, 
  CreditCard, 
  Users, 
  Sparkles 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export function CollectAIWorkflows() {
  return (
    <section className="py-20 md:py-32 border-b border-border/60 bg-background relative" id="workflows">
      <Container size="wide">
        <SectionHeader
          eyebrow="Workflow Automation"
          title="Turn follow-up into a repeatable, systematic process."
          description="Inconsistent collections happen when follow-ups depend on individual memory. CollectAI models collections as deterministic, multi-stage state machines."
          align="left"
        />

        <div className="mt-14 space-y-12">
          {/* Visual Step-by-Step Workflow Execution Node Graph */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10 space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs">
              <span className="font-bold text-accent uppercase tracking-wider">
                Default 30-Day B2B Milestone Escalation Rule
              </span>
              <span className="text-emerald-500 font-semibold">
                ● Live Automated Rule
              </span>
            </div>

            {/* Vertical/Horizontal Flow Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 font-mono text-xs">
              {/* Node 1: Trigger */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase font-bold">
                  <span>Trigger 01</span>
                  <Clock className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">Invoice Overdue</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Triggers 7 days after Net-30 invoice due date without confirmed settlement.
                </p>
              </div>

              {/* Node 2: Condition */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase font-bold">
                  <span>Condition 02</span>
                  <GitFork className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">Check Risk Tier</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Excludes disputed accounts; segments tier by invoice balance &gt; $5,000.
                </p>
              </div>

              {/* Node 3: Action */}
              <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-purple-600 dark:text-purple-300 uppercase font-bold">
                  <span>Action 03</span>
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 text-sm">Draft AI Reminder</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Generates polite contextual reminder with embedded Razorpay payment link.
                </p>
              </div>

              {/* Node 4: Cooldown */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase font-bold">
                  <span>Wait 04</span>
                  <Clock className="w-3.5 h-3.5 text-text-tertiary" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">5-Day Cooldown</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Pauses reminders to prevent spamming while customer processes invoice.
                </p>
              </div>

              {/* Node 5: Follow-Up Escalation */}
              <div className="p-4 rounded-xl border border-border bg-surface-muted/60 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-text-tertiary uppercase font-bold">
                  <span>Escalation 05</span>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <h4 className="font-bold text-text-primary text-sm">Firm Follow-Up</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Escalates copy tone and CCs client VP of Finance or Account Executive.
                </p>
              </div>

              {/* Node 6: Resolution */}
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                  <span>Resolution 06</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300 text-sm">Settlement Auto-Close</h4>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Payment webhook triggers invoice state update; closes active workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
