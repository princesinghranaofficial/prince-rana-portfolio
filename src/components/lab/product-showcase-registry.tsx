'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

// Batch A
const AuraAIShowcase = dynamic(
  () => import('./products/aura-ai-showcase').then((mod) => mod.AuraAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Aura AI" /> }
);

const LedgerFlowShowcase = dynamic(
  () => import('./products/ledgerflow-showcase').then((mod) => mod.LedgerFlowShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="LedgerFlow" /> }
);

const CliniqAIShowcase = dynamic(
  () => import('./products/cliniq-ai-showcase').then((mod) => mod.CliniqAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Cliniq AI" /> }
);

// Batch B
const EstateOSShowcase = dynamic(
  () => import('./products/estate-os-showcase').then((mod) => mod.EstateOSShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Estate OS" /> }
);

const NovaCommerceShowcase = dynamic(
  () => import('./products/nova-commerce-showcase').then((mod) => mod.NovaCommerceShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Nova Commerce" /> }
);

const ScaleHQShowcase = dynamic(
  () => import('./products/scalehq-showcase').then((mod) => mod.ScaleHQShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="ScaleHQ" /> }
);

// Batch C
const SentinelShowcase = dynamic(
  () => import('./products/sentinel-showcase').then((mod) => mod.SentinelShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Sentinel" /> }
);

const PulseAnalyticsShowcase = dynamic(
  () => import('./products/pulse-analytics-showcase').then((mod) => mod.PulseAnalyticsShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Pulse Analytics" /> }
);

const PipelineAIShowcase = dynamic(
  () => import('./products/pipeline-ai-showcase').then((mod) => mod.PipelineAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Pipeline AI" /> }
);

// Batch D
const FocusOSShowcase = dynamic(
  () => import('./products/focus-os-showcase').then((mod) => mod.FocusOSShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Focus OS" /> }
);

const MentorAIShowcase = dynamic(
  () => import('./products/mentor-ai-showcase').then((mod) => mod.MentorAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Mentor AI" /> }
);

const SupportAIShowcase = dynamic(
  () => import('./products/support-ai-showcase').then((mod) => mod.SupportAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Support AI" /> }
);

// Batch E
const RecruitAIShowcase = dynamic(
  () => import('./products/recruit-ai-showcase').then((mod) => mod.RecruitAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Recruit AI" /> }
);

const LaunchboardShowcase = dynamic(
  () => import('./products/launchboard-showcase').then((mod) => mod.LaunchboardShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Launchboard" /> }
);

const SignalAIShowcase = dynamic(
  () => import('./products/signal-ai-showcase').then((mod) => mod.SignalAIShowcase),
  { ssr: false, loading: () => <ShowcaseLoadingState title="Signal AI" /> }
);

function ShowcaseLoadingState({ title }: { title: string }) {
  return (
    <div className="h-[520px] rounded-3xl border border-border/60 bg-surface-100/50 dark:bg-surface-900/50 flex flex-col items-center justify-center p-8 text-center animate-pulse">
      <div className="w-12 h-12 rounded-2xl bg-surface-200 dark:bg-surface-800 mb-4" />
      <span className="text-sm font-mono font-medium text-foreground">Loading {title} Interactive Showcase...</span>
      <span className="text-xs text-muted-foreground font-mono mt-1">Initializing sandbox telemetry &amp; UI state</span>
    </div>
  );
}

interface ProductShowcaseProps {
  slug: string;
}

export function ProductShowcase({ slug }: ProductShowcaseProps) {
  switch (slug) {
    // Batch A
    case 'aura-ai':
      return <AuraAIShowcase />;
    case 'ledgerflow':
      return <LedgerFlowShowcase />;
    case 'cliniq-ai':
      return <CliniqAIShowcase />;

    // Batch B
    case 'estate-os':
      return <EstateOSShowcase />;
    case 'nova-commerce':
      return <NovaCommerceShowcase />;
    case 'scalehq':
      return <ScaleHQShowcase />;

    // Batch C
    case 'sentinel':
      return <SentinelShowcase />;
    case 'pulse-analytics':
      return <PulseAnalyticsShowcase />;
    case 'pipeline-ai':
      return <PipelineAIShowcase />;

    // Batch D
    case 'focus-os':
      return <FocusOSShowcase />;
    case 'mentor-ai':
      return <MentorAIShowcase />;
    case 'support-ai':
      return <SupportAIShowcase />;

    // Batch E
    case 'recruit-ai':
      return <RecruitAIShowcase />;
    case 'launchboard':
      return <LaunchboardShowcase />;
    case 'signal-ai':
      return <SignalAIShowcase />;

    default:
      return null;
  }
}
