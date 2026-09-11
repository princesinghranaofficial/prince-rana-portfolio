'use client';

import * as React from 'react';
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Layers, 
  PieChart, 
  Sliders, 
  Calendar, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Briefcase
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'estate-portfolio', title: '01. Asset Portfolio', type: 'Executive Overview' },
  { id: 'estate-explorer', title: '02. Property Explorer', type: 'GIS & Inventory' },
  { id: 'estate-rentroll', title: '03. Rent Roll & Leases', type: 'Financial Detail' },
  { id: 'estate-underwrite', title: '04. Acquisition Underwriting', type: 'DCF & Pipeline' },
  { id: 'estate-investor', title: '05. LP Reporting & Waterfall', type: 'Capital Accounts' },
];

export function EstateOSShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('estate-portfolio');
  const [selectedAsset, setSelectedAsset] = React.useState<string>('apex-tower');
  const [capRateSlider, setCapRateSlider] = React.useState<number>(6.2);

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'estate-os', screenId });
  };

  return (
    <div className="rounded-3xl border border-amber-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Estate OS Real Estate Workstation</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">Commercial Asset Intelligence &amp; Underwriting</span>
          </div>
        </div>

        {/* Screen Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface-100 dark:bg-surface-900 border border-border/60">
          {screens.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleScreenChange(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeScreen === s.id
                  ? 'bg-amber-600 text-white font-bold shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Body */}
      <div className="p-6 sm:p-8 min-h-[520px]">
        {/* SCREEN 1: Portfolio Command Center */}
        {activeScreen === 'estate-portfolio' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Vance Capital Real Estate Fund IV</h4>
                <p className="text-xs text-muted-foreground font-mono">18 Assets &middot; 2.4M Net Rentable SqFt &middot; Sunbelt Logistics &amp; Life Science</p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
                AUM: $482.5M &middot; Weighted Avg Lease: 6.8 Yrs
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Net Operating Income (NOI)</span>
                <div className="text-2xl font-bold font-mono text-foreground">$28.4M</div>
                <span className="text-[11px] text-emerald-400 font-mono">+6.4% YoY</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Occupancy Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">94.8%</div>
                <span className="text-[11px] text-muted-foreground font-mono">128,400 sqft vacant</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Blended Cap Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">5.88%</div>
                <span className="text-[11px] text-amber-400 font-mono">Spread: +160 bps vs 10Y</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Debt Service Coverage</span>
                <div className="text-2xl font-bold font-mono text-foreground">1.82x</div>
                <span className="text-[11px] text-emerald-400 font-mono">Covenant: &gt;1.30x</span>
              </div>
            </div>

            {/* Assets Grid */}
            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground uppercase">Top Portfolio Properties</span>
                <span className="text-xs font-mono text-amber-400">Showing Top 3 by Valuation</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'apex-tower', name: 'Apex Logistics Hub', city: 'Austin, TX', type: 'Industrial', sqft: '680,000', occ: '100%', noi: '$6.4M', val: '$98M' },
                  { id: 'summit-point', name: 'Catalyst Bio-Park', city: 'Durham, NC', type: 'Life Science', sqft: '420,000', occ: '92.4%', noi: '$8.1M', val: '$142M' },
                  { id: 'marina-center', name: 'Westlake Commerce Center', city: 'Phoenix, AZ', type: 'Class-A Dist.', sqft: '510,000', occ: '96.0%', noi: '$5.2M', val: '$84M' },
                ].map((asset) => (
                  <div
                    key={asset.id}
                    onClick={() => { setSelectedAsset(asset.id); handleScreenChange('estate-rentroll'); }}
                    className="p-4 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/50 hover:border-amber-500/40 cursor-pointer transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground">{asset.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {asset.type}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {asset.city} &middot; {asset.sqft} sqft
                    </div>
                    <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs font-mono">
                      <span className="text-muted-foreground">NOI: <strong className="text-foreground">{asset.noi}</strong></span>
                      <span className="text-emerald-400 font-semibold">{asset.occ} Occ</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Property Explorer (GIS & Inventory) */}
        {activeScreen === 'estate-explorer' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">GIS Submarket & Asset Spatial Explorer</h4>
                <p className="text-xs text-muted-foreground font-mono">Interactive submarket zoning, traffic density, and asset positioning</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">Asset Class:</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">All Sectors</span>
              </div>
            </div>

            {/* Map Simulator */}
            <div className="relative h-64 rounded-2xl bg-surface-200/60 dark:bg-surface-950/80 border border-border/60 overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Simulated Map Markers */}
              <div className="relative z-10 flex flex-wrap gap-8 items-center justify-center">
                <div className="p-3 rounded-xl bg-surface-100/90 dark:bg-surface-900/90 border border-amber-500/40 shadow-lg space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                    <Building className="w-3.5 h-3.5 text-amber-400" />
                    Apex Logistics (Austin)
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 block">$98M &middot; 5.9% Cap &middot; Fully Leased</span>
                </div>

                <div className="p-3 rounded-xl bg-surface-100/90 dark:bg-surface-900/90 border border-teal-500/40 shadow-lg space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                    <Building className="w-3.5 h-3.5 text-teal-400" />
                    Catalyst Bio (Durham)
                  </div>
                  <span className="text-[11px] font-mono text-teal-400 block">$142M &middot; 5.6% Cap &middot; 92% Leased</span>
                </div>

                <div className="p-3 rounded-xl bg-surface-100/90 dark:bg-surface-900/90 border border-indigo-500/40 shadow-lg space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    Westlake Commerce (Phoenix)
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400 block">$84M &middot; 6.1% Cap &middot; 96% Leased</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-background/80 border border-border/50">
                <span className="text-muted-foreground block">Austin Submarket Vacancy</span>
                <span className="text-sm font-bold text-foreground mt-0.5">4.2% (Tight Supply)</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/50">
                <span className="text-muted-foreground block">RTP Lab Absorption</span>
                <span className="text-sm font-bold text-emerald-400 mt-0.5">+420K sqft / Q3</span>
              </div>
              <div className="p-3 rounded-xl bg-background/80 border border-border/50">
                <span className="text-muted-foreground block">Phoenix Industrial Rent Growth</span>
                <span className="text-sm font-bold text-amber-400 mt-0.5">+7.8% YoY</span>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Rent Roll & Lease Detail */}
        {activeScreen === 'estate-rentroll' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Rent Roll &amp; Lease Expiration Cliff</h4>
                <p className="text-xs text-muted-foreground font-mono">Asset: Apex Logistics Hub &middot; 680,000 SqFt &middot; Triple-Net (NNN) Leases</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                0% Lease Rollover in Next 24 Months
              </span>
            </div>

            {/* Tenant Rent Roll Table */}
            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Current Tenants &amp; Credit Ratings</span>
              
              <div className="space-y-2 text-xs font-mono">
                {[
                  { tenant: 'Amazon Logistics Inc.', suite: 'Bld A (Full)', sqft: '350,000', rent: '$11.80/sqft', exp: '2034', rating: 'AA (Investment Grade)' },
                  { tenant: 'FedEx Ground Delivery', suite: 'Bld B-1', sqft: '210,000', rent: '$12.20/sqft', exp: '2031', rating: 'BBB+' },
                  { tenant: 'Flexport International', suite: 'Bld B-2', sqft: '120,000', rent: '$12.90/sqft', exp: '2029', rating: 'Series E (Venture Backed)' },
                ].map((row, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-foreground text-sm font-sans">{row.tenant}</strong>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">{row.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-[11px]">{row.suite} &middot; {row.sqft} sqft NNN</span>
                    </div>
                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <span className="text-foreground font-bold">{row.rent}</span>
                        <span className="text-[10px] text-muted-foreground block">Annual Escalation: 3.5%</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-surface-200 dark:bg-surface-800 text-muted-foreground text-[11px]">
                        Exp: {row.exp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Acquisition Underwriting */}
        {activeScreen === 'estate-underwrite' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Discounted Cash Flow (DCF) Underwriting Model</h4>
                <p className="text-xs text-muted-foreground font-mono">Target: Southline Logistics Terminal &middot; Asking: $42.0M &middot; 10-Yr Hold</p>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
                Unlevered IRR: 11.2% &middot; Levered IRR: 17.8%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interactive Sliders */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-amber-400" />
                  Exit Sensitivity Variables
                </span>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Exit Cap Rate</span>
                      <span className="text-amber-400 font-bold">{capRateSlider.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min="4.5"
                      max="8.0"
                      step="0.1"
                      value={capRateSlider}
                      onChange={(e) => setCapRateSlider(parseFloat(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-950/40 border border-border/40 text-xs font-mono space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projected Terminal Value:</span>
                      <span className="font-bold text-foreground">
                        ${((2.8 / (capRateSlider / 100))).toFixed(1)}M
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Equity Multiple (MOIC):</span>
                      <span className="font-bold text-emerald-400">
                        {((18.4 * (6.5 / capRateSlider)) / 10).toFixed(2)}x
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Net Profit on Sale:</span>
                      <span className="font-bold text-foreground">
                        ${((2.8 / (capRateSlider / 100)) - 28.5).toFixed(1)}M
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Debt Structure */}
              <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
                <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                  Proposed Capital Stack (65% LTV)
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 flex justify-between">
                    <span className="text-muted-foreground">Senior Bank Debt (SOFR + 210 bps):</span>
                    <span className="font-bold text-foreground">$27.3M</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 flex justify-between">
                    <span className="text-muted-foreground">Sponsor LP Equity (Fund IV):</span>
                    <span className="font-bold text-amber-400">$13.2M</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 flex justify-between">
                    <span className="text-muted-foreground">GP Co-Investment (3.0%):</span>
                    <span className="font-bold text-emerald-400">$1.5M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: LP Reporting & Waterfall */}
        {activeScreen === 'estate-investor' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">LP Capital Accounts &amp; Distribution Waterfall</h4>
                <p className="text-xs text-muted-foreground font-mono">Quarterly Q3 Distributions &middot; American Waterfall Structure</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Preferred Return Hurdle: 8.0% Met
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Total Committed Capital</span>
                <div className="text-2xl font-bold font-mono text-foreground">$150.0M</div>
                <span className="text-[11px] text-muted-foreground font-mono">100% Called</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">DPI (Distributed / Paid-in)</span>
                <div className="text-2xl font-bold font-mono text-foreground">0.74x</div>
                <span className="text-[11px] text-emerald-400 font-mono">Ahead of benchmark</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">TVPI (Total Value / Paid-in)</span>
                <div className="text-2xl font-bold font-mono text-foreground">1.88x</div>
                <span className="text-[11px] text-amber-400 font-mono">Top Quartile Vintage</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Q3 Cash Distribution</span>
                <div className="text-2xl font-bold font-mono text-foreground">$4.2M</div>
                <span className="text-[11px] text-emerald-400 font-mono">Approved by GP</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Institutional LP Roster</span>
              <div className="space-y-2 text-xs font-mono">
                {[
                  { lp: 'Nordic Pension Consortium', commit: '$50.0M', share: '33.3%', q3Dist: '$1,400,000', status: 'PAID' },
                  { lp: 'Texas University Endowment', commit: '$40.0M', share: '26.7%', q3Dist: '$1,120,000', status: 'PAID' },
                  { lp: 'Zurich Reinsurance AG', commit: '$35.0M', share: '23.3%', q3Dist: '$980,000', status: 'PAID' },
                ].map((lp, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 flex items-center justify-between">
                    <div>
                      <strong className="text-foreground">{lp.lp}</strong>
                      <span className="text-muted-foreground ml-2">Commitment: {lp.commit} ({lp.share})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-bold">{lp.q3Dist}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{lp.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
