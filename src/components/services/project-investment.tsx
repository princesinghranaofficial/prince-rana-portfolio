'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { H2, H3 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { investmentOptions, pricingDisclaimer } from '@/config/pricing';
import { trackEvent } from '@/lib/analytics';

export function ProjectInvestment() {
  const handleOptionClick = (optionId: string, action: string) => {
    trackEvent('investment_option_clicked', {
      engagement_type: optionId,
      action,
      source_page: 'services',
    });
  };

  return (
    <section id="investment" aria-labelledby="investment-heading" className="py-20 md:py-28 border-b border-border/40 scroll-mt-20">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="uppercase tracking-wider font-semibold">Project Investment</span>
          </div>

          <H2 id="investment-heading" className="text-3xl sm:text-5xl tracking-tight leading-[1.15]">
            Clear starting points. Custom scope.
          </H2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every product has different requirements. These ranges provide a starting point for planning — final scope and investment depend on product complexity, design requirements, integrations, AI functionality, timeline, and existing infrastructure.
          </p>
        </div>

        {/* Editorial Investment Rows */}
        <div className="space-y-6">
          {investmentOptions.map((option) => (
            <article
              key={option.id}
              aria-labelledby={`investment-${option.id}-title`}
              className="p-6 sm:p-8 md:p-10 rounded-3xl border border-border/70 bg-surface-50/50 dark:bg-surface-900/40 backdrop-blur-xs transition-all duration-200 hover:border-accent/40 hover:bg-surface-100/50 dark:hover:bg-surface-900/70"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Column 1: Number, Service Title & Proof Badges (3 cols) */}
                <div className="lg:col-span-3 space-y-3">
                  <span className="font-mono text-xs font-bold text-accent tracking-widest block uppercase">
                    {option.number}
                  </span>
                  <H3 id={`investment-${option.id}-title`} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {option.service}
                  </H3>

                  {/* Connected Proof or Service Links */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {option.relevantProof && (
                      <Link
                        href={option.relevantProof.href}
                        onClick={() => handleOptionClick(option.id, 'proof_clicked')}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        <span className="font-semibold">{option.relevantProof.name}</span>
                        <span className="text-[9px] uppercase opacity-80">({option.relevantProof.status})</span>
                      </Link>
                    )}

                    {option.relevantService && (
                      <Link
                        href={option.relevantService.href}
                        onClick={() => {
                          trackEvent('investment_service_clicked', {
                            engagement_type: option.id,
                            service: option.relevantService?.name,
                          });
                        }}
                        className="text-[11px] font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
                      >
                        <span>View Service Scope</span>
                        <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Column 2: Description & Selected Deliverables Scope (6 cols) */}
                <div className="lg:col-span-6 space-y-5 lg:px-4 lg:border-x lg:border-border/50">
                  <div className="space-y-1.5">
                    <p className="text-sm sm:text-base font-medium text-foreground leading-snug">
                      {option.headline}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground/90 font-medium">Best for: </strong>
                      {option.bestFor}
                    </p>
                  </div>

                  {/* Deliverables Scope Grid */}
                  <div className="space-y-2 pt-2 border-t border-border/40">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block">
                      Typical Scope May Include
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground font-mono">
                      {option.typicalScope.map((scopeItem, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-foreground/90 leading-tight">{scopeItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {option.footnote && (
                    <p className="text-[11px] text-muted-foreground/80 italic font-mono pt-1">
                      * {option.footnote}
                    </p>
                  )}
                </div>

                {/* Column 3: Starting Investment & CTA (3 cols) */}
                <div className="lg:col-span-3 flex flex-col justify-between space-y-5 lg:pl-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block">
                      Starting Investment
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
                      {option.startingPriceDisplay}
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground block">
                      Custom scope &middot; Milestones based
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={option.ctaHref}
                      onClick={() => {
                        trackEvent('investment_start_project_clicked', {
                          engagement_type: option.id,
                          starting_price: option.startingPrice,
                        });
                      }}
                      className="block"
                    >
                      <Button variant="primary" size="md" className="w-full justify-center font-semibold group">
                        <span>{option.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing Disclaimer & Low/High Budget Guidance */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-border/70 bg-surface-100/40 dark:bg-surface-950/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span>Investment Transparency</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
              {pricingDisclaimer.primary}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {pricingDisclaimer.secondary}
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/start-project">
              <Button variant="outline" size="md" className="w-full sm:w-auto font-semibold">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
