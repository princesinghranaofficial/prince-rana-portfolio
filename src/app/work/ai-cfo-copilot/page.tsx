import * as React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { AICFONav } from '@/components/case-studies/ai-cfo/ai-cfo-nav';
import { AICFOHero } from '@/components/case-studies/ai-cfo/ai-cfo-hero';
import { AICFOOverview } from '@/components/case-studies/ai-cfo/ai-cfo-overview';
import { AICFOCommandCenter } from '@/components/case-studies/ai-cfo/ai-cfo-command-center';
import { AICFOCashFlow } from '@/components/case-studies/ai-cfo/ai-cfo-cash-flow';
import { AICFOForecastingScenarios } from '@/components/case-studies/ai-cfo/ai-cfo-forecasting-scenarios';
import { AICFOCopilot } from '@/components/case-studies/ai-cfo/ai-cfo-copilot';
import { AICFOFinancialModules } from '@/components/case-studies/ai-cfo/ai-cfo-financial-modules';
import { AICFOReportsActions } from '@/components/case-studies/ai-cfo/ai-cfo-reports-actions';
import { AICFOEngineering } from '@/components/case-studies/ai-cfo/ai-cfo-engineering';
import { AICFOFooterCTA } from '@/components/case-studies/ai-cfo/ai-cfo-footer-cta';
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'AI CFO & Copilot — Financial Intelligence SaaS Case Study',
  description:
    'Complete SaaS case study for AI CFO & Copilot: a financial intelligence platform uniting multi-account cash flow, transaction intelligence, scenario forecasting, and in-context AI decision support.',
  alternates: {
    canonical: '/work/ai-cfo-copilot',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AI CFO & Copilot — Financial Intelligence SaaS Case Study | Prince Singh Rana',
    description:
      'A complete architectural case study of AI CFO & Copilot: multi-account cash flow intelligence, forward scenario forecasting, and in-context LLM decision support.',
    url: '/work/ai-cfo-copilot',
    siteName: 'Prince Singh Rana Portfolio',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'AI CFO & Copilot Financial Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI CFO & Copilot — Financial Intelligence SaaS Case Study | Prince Singh Rana',
    description:
      'A complete architectural breakdown of AI CFO & Copilot: cash flow intelligence, forward scenario forecasting, and in-context AI decision support.',
  },
};

export default function AICFOCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-emerald-500/20 selection:text-emerald-500">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'AI CFO & Copilot', path: '/work/ai-cfo-copilot' },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="AI CFO & Copilot"
        description="AI financial intelligence SaaS platform with cash-flow analytics and scenario forecasting."
        path="/work/ai-cfo-copilot"
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
      />
      {/* Global Sticky Navigation */}
      <Navbar />

      {/* Main Case Study Experience */}
      <main id="main-content" className="flex-1 relative">
        {/* Sticky Desktop Reading Navigation */}
        <AICFONav />

        {/* 01 Project Hero */}
        <AICFOHero />

        {/* 02 Overview, 03 The Financial Problem, 04 Product Strategy */}
        <AICFOOverview />

        {/* 05 Financial Command Center (4-Tier Decision Hierarchy) */}
        <AICFOCommandCenter />

        {/* 06 Cash Flow Intelligence & Cash Bridge Waterfall */}
        <AICFOCashFlow />

        {/* 07 Forecasting & 08 Scenario Planning Matrix */}
        <AICFOForecastingScenarios />

        {/* 09 In-Context AI Financial Copilot */}
        <AICFOCopilot />

        {/* 10-14 Ledger & Operations (Transactions, Accounts, Investments, Loans, Taxes) */}
        <AICFOFinancialModules />

        {/* 15 Reports, 16 Alerts & Action Center */}
        <AICFOReportsActions />

        {/* 17-21 Technical Architecture, Data Pipeline, Security, ADRs & What I Built */}
        <AICFOEngineering />

        {/* 22 Outcome, 23 Previous/Next Navigation, 24 Final Conversion */}
        <AICFOFooterCTA />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}
