'use client';

import * as React from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Sliders, 
  Users, 
  DollarSign, 
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  PieChart
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3, TextLead } from '@/components/ui/typography';
import { trackEvent } from '@/lib/analytics';

type ScenarioMode = 'base' | 'conservative' | 'growth' | 'custom';

interface ScenarioData {
  name: string;
  label: string;
  projectedCash: string;
  runwayMonths: string;
  netBurn: string;
  monthlyRevenueDelta: string;
  hiringImpact: string;
  narrative: string;
}

const scenarioMatrix: Record<ScenarioMode, ScenarioData> = {
  base: {
    name: 'Base Trajectory',
    label: 'Standard',
    projectedCash: '$392,000',
    runwayMonths: '14.2 Months',
    netBurn: '$24,100/mo',
    monthlyRevenueDelta: '+5.5% MoM',
    hiringImpact: '1 Engineer in Q3 (+$12K/mo)',
    narrative: 'Assumes historical ARR expansion (+5.5%) continues steadily with current cloud and headcount overhead.',
  },
  conservative: {
    name: 'Conservative / Downside',
    label: 'Stress Test',
    projectedCash: '$285,400',
    runwayMonths: '9.8 Months',
    netBurn: '$38,500/mo',
    monthlyRevenueDelta: '-15% MoM contraction',
    hiringImpact: 'Hiring freeze instituted immediately',
    narrative: 'Simulates a 15% revenue deceleration and 60-day client payment delays to test survival buffer.',
  },
  growth: {
    name: 'Growth Expansion',
    label: 'Accelerated',
    projectedCash: '$440,500',
    runwayMonths: '12.0 Months',
    netBurn: '$31,800/mo',
    monthlyRevenueDelta: '+12% MoM surge',
    hiringImpact: '2 Senior Engineers + 1 GTM Lead (+$28K/mo)',
    narrative: 'Models an accelerated enterprise sales pipeline absorbing 3 new team members within 90 days.',
  },
  custom: {
    name: 'Custom Parameter Simulation',
    label: 'Interactive Model',
    projectedCash: '$368,200',
    runwayMonths: '13.1 Months',
    netBurn: '$27,400/mo',
    monthlyRevenueDelta: '+7.0% MoM adjusted',
    hiringImpact: '1 Contract Designer (+$6K/mo)',
    narrative: 'Custom adjusted levers balancing modest marketing spend increase with targeted contractor support.',
  },
};

export function AICFOForecastingScenarios() {
  const [activeScenario, setActiveScenario] = React.useState<ScenarioMode>('base');
  const scenario = scenarioMatrix[activeScenario];

  const handleScenarioChange = (mode: ScenarioMode) => {
    setActiveScenario(mode);
    trackEvent('ai_cfo_scenario_engaged', { scenario: mode });
  };

  return (
    <section id="forecasting" className="py-20 sm:py-28 border-b border-border/50 bg-surface-50/40 dark:bg-surface-950/30">
      <Container size="default">
        <div className="space-y-16">
          {/* 19. Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block">
              06 &middot; FORECASTING &amp; SCENARIO PLANNING
            </span>
            <H2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Turn historical data into a forward-looking financial view.
            </H2>
            <TextLead className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Financial visibility is meaningless without forward context. AI CFO projects 6 to 18-month rolling cash runways by uniting actual double-entry transactions with predictive scenario simulation engines.
            </TextLead>
          </div>

          {/* Forecast Horizon Visual (Actuals vs Forecast) */}
          <div className="rounded-3xl border border-border/80 bg-surface-100/80 dark:bg-surface-900/80 p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
              <div className="space-y-1">
                <H3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Rolling 12-Month Liquidity Forecast
                </H3>
                <p className="text-xs text-muted-foreground">
                  Solid Line = Verified Ledger Actuals &middot; Dashed Line = Projected Run-Rate &middot; Shaded Area = 80% Confidence Interval
                </p>
              </div>

              {/* Visual Legend */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-1 bg-emerald-500 rounded-sm" />
                  <span className="text-foreground">Actuals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-0.5 border-t-2 border-dashed border-amber-400" />
                  <span className="text-foreground">Forecast</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-amber-400/20 border border-amber-400/30" />
                  <span className="text-foreground">Confidence Range</span>
                </div>
              </div>
            </div>

            {/* Accessible SVG Multi-Line Chart with Confidence Area */}
            <div className="relative w-full h-56 sm:h-64 pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="confidenceBand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.04" />
                  </linearGradient>
                </defs>

                {/* Horizontal Guide Lines */}
                <line x1="0" y1="40" x2="800" y2="40" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="90" x2="800" y2="90" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="140" x2="800" y2="140" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />

                {/* Forecast Confidence Interval Band (Jul-Dec: x=400 to 800) */}
                <path
                  d="M 400 80 Q 500 50, 600 35 T 800 15 L 800 95 Q 600 115, 500 120 T 400 80 Z"
                  fill="url(#confidenceBand)"
                />

                {/* Actuals Solid Path (Jan to Jun: x=0 to 400) */}
                <path
                  d="M 0 150 Q 100 135, 180 125 T 300 95 T 400 80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Forecast Dashed Line (Jul to Dec: x=400 to 800) */}
                <path
                  d="M 400 80 Q 500 70, 600 55 T 700 45 T 800 38"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />

                {/* Current Month Split Marker */}
                <line x1="400" y1="20" x2="400" y2="185" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="400" cy="80" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />

                {/* Data Points */}
                <circle cx="180" cy="125" r="3.5" fill="#10b981" />
                <circle cx="300" cy="95" r="3.5" fill="#10b981" />
                <circle cx="600" cy="55" r="3.5" fill="#f59e0b" />
                <circle cx="800" cy="38" r="3.5" fill="#f59e0b" />
              </svg>

              {/* Month Markers */}
              <div className="flex justify-between text-[11px] font-mono text-muted-foreground pt-3 border-t border-border/40">
                <span>Jan ($260K)</span>
                <span>Mar ($290K)</span>
                <span>May ($320K)</span>
                <span className="text-emerald-400 font-bold">Jun &middot; Current ($342K)</span>
                <span className="text-amber-400">Aug ($365K)</span>
                <span className="text-amber-400">Oct ($382K)</span>
                <span className="text-amber-400 font-bold">Dec ($392K)</span>
              </div>
            </div>

            {/* Assumptions Drawer */}
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 text-xs font-mono">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-2 font-semibold">
                Underlying Forecast Assumptions (Deterministic Baseline)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-muted-foreground">
                <div>&bull; Monthly ARR Growth: <strong className="text-foreground">5.5%</strong></div>
                <div>&bull; Monthly Churn Rate: <strong className="text-foreground">1.8%</strong></div>
                <div>&bull; Gross Payroll: <strong className="text-foreground">$44.2K/mo</strong></div>
                <div>&bull; COGS / Server Scale: <strong className="text-foreground">12.5% of ARR</strong></div>
              </div>
            </div>
          </div>

          {/* 22. Scenario Planning Matrix & Simulator */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 uppercase tracking-wider font-semibold">
                <PieChart className="w-4 h-4" />
                <span>Multi-Scenario Decision Stress Testing</span>
              </div>
              <H3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Explore financial decisions before making them.
              </H3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Select a scenario model to test how revenue fluctuations, planned engineering hires, or capital expenses alter runway and cash reserves.
              </p>
            </div>

            {/* Scenario Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(['base', 'conservative', 'growth', 'custom'] as const).map((mode) => {
                const sc = scenarioMatrix[mode];
                const isActive = activeScenario === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => handleScenarioChange(mode)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      isActive
                        ? 'border-emerald-500 bg-emerald-500/10 shadow-sm'
                        : 'border-border/70 bg-surface-100/60 dark:bg-surface-900/40 hover:border-border-strong'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isActive ? 'bg-emerald-500 text-white font-bold' : 'bg-surface-200 dark:bg-surface-800 text-muted-foreground'
                      }`}>
                        {sc.label}
                      </span>
                      {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <div className="font-semibold text-sm text-foreground">{sc.name}</div>
                    <div className="text-xs font-mono text-muted-foreground mt-1">{sc.runwayMonths} Runway</div>
                  </button>
                );
              })}
            </div>

            {/* Active Scenario Evaluation Results Card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-surface-100/70 dark:bg-surface-900/60 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/50">
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                    ACTIVE SIMULATION EVALUATION
                  </span>
                  <H3 className="text-lg font-bold text-foreground">{scenario.name}</H3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  Simulated 6-Month Horizon
                </span>
              </div>

              {/* 4 Metric Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">Projected Cash</span>
                  <div className="text-xl font-bold font-mono text-foreground">{scenario.projectedCash}</div>
                  <span className="text-[11px] text-muted-foreground">Ending balance in 6 months</span>
                </div>

                <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">Calculated Runway</span>
                  <div className="text-xl font-bold font-mono text-emerald-400">{scenario.runwayMonths}</div>
                  <span className="text-[11px] text-muted-foreground">Zero-cash date projection</span>
                </div>

                <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">Net Monthly Burn</span>
                  <div className="text-xl font-bold font-mono text-foreground">{scenario.netBurn}</div>
                  <span className="text-[11px] text-muted-foreground">Average operational deficit</span>
                </div>

                <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">Headcount Adjustment</span>
                  <div className="text-xs font-semibold text-foreground pt-1">{scenario.hiringImpact}</div>
                </div>
              </div>

              {/* Strategic Narrative */}
              <div className="p-4 rounded-2xl bg-surface-50 dark:bg-surface-950/60 border border-border/60 text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground block mb-0.5">Scenario Synthesis:</strong>
                {scenario.narrative}
              </div>

              {/* Disclaimer */}
              <div className="text-[11px] font-mono text-muted-foreground/80 flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Simulation disclaimer: Models demonstrate system architecture and interaction UX; not formal investment or statutory accounting advice.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
