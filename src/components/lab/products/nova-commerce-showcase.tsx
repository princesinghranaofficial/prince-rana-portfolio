'use client';

import * as React from 'react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Package, 
  Truck, 
  Users, 
  Layers, 
  DollarSign, 
  AlertTriangle, 
  ChevronRight, 
  ArrowUpRight,
  BarChart3,
  Calendar
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const screens = [
  { id: 'nova-overview', title: '01. Commerce Command', type: 'Executive GMV' },
  { id: 'nova-orders', title: '02. Live Order Stream', type: '3PL Fulfillment' },
  { id: 'nova-inventory', title: '03. SKU Velocity & Stock', type: 'Inventory Radar' },
  { id: 'nova-cohorts', title: '04. LTV Cohort Retention', type: 'Customer Heatmap' },
  { id: 'nova-margins', title: '05. Unit Economics Waterfall', type: 'Contribution Margin' },
];

export function NovaCommerceShowcase() {
  const [activeScreen, setActiveScreen] = React.useState<string>('nova-overview');
  const [selectedSKU, setSelectedSKU] = React.useState<string>('SKU-AUR-01');

  const handleScreenChange = (screenId: string) => {
    setActiveScreen(screenId);
    trackEvent('lab_screen_engaged', { slug: 'nova-commerce', screenId });
  };

  return (
    <div className="rounded-3xl border border-orange-500/30 bg-surface-100/90 dark:bg-surface-900/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Product Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 py-4 border-b border-border/60 bg-surface-200/50 dark:bg-surface-950/50 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">Nova Commerce Operations</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Interactive Showcase
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">DTC Brand Analytics &amp; Inventory Orchestration</span>
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
                  ? 'bg-orange-600 text-white font-bold shadow-xs'
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
        {/* SCREEN 1: Commerce Command Center */}
        {activeScreen === 'nova-overview' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Global DTC Operations &middot; Month-to-Date</h4>
                <p className="text-xs text-muted-foreground font-mono">Real-time Shopify Plus &amp; Amazon FBA multi-channel telemetry</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Feed Active &middot; 4 Channels Connected
              </span>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Gross Merchandise Value (GMV)</span>
                <div className="text-2xl font-bold font-mono text-foreground">$1,428,500</div>
                <span className="text-[11px] text-emerald-400 font-mono">+18.2% vs last month</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Marketing Efficiency (MER)</span>
                <div className="text-2xl font-bold font-mono text-foreground">4.12x</div>
                <span className="text-[11px] text-orange-400 font-mono">Target: &gt; 3.50x</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Blended CAC</span>
                <div className="text-2xl font-bold font-mono text-foreground">$38.40</div>
                <span className="text-[11px] text-emerald-400 font-mono">AOV: $118.20 (3.07x buffer)</span>
              </div>
              <div className="p-4 rounded-xl bg-background/80 border border-border/60 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">Repeat Customer Rate</span>
                <div className="text-2xl font-bold font-mono text-foreground">34.6%</div>
                <span className="text-[11px] text-emerald-400 font-mono">+4.1% MoM</span>
              </div>
            </div>

            {/* Ad Channel Attribution */}
            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <span className="text-xs font-mono text-muted-foreground uppercase">Paid Media Attribution &amp; ROAS</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-xs text-foreground">Meta Ads (Advantage+)</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">4.48x ROAS</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">Spend: $184K &middot; GMV: $824K</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-xs text-foreground">Google Performance Max</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">5.12x ROAS</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">Spend: $112K &middot; GMV: $573K</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 border border-border/40 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-xs text-foreground">TikTok Shop DTC</span>
                    <span className="text-xs font-mono text-orange-400 font-bold">2.84x ROAS</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">Spend: $48K &middot; GMV: $136K</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Live Order Stream */}
        {activeScreen === 'nova-orders' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Real-Time Order Dispatch &amp; 3PL Fulfillment</h4>
                <p className="text-xs text-muted-foreground font-mono">Multi-node warehouse routing across Salt Lake, Columbus, and Rotterdam</p>
              </div>
              <span className="text-xs font-mono text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-xl">
                Average Fulfillment SLA: 4.2 Hours
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { order: '#NV-9418', customer: 'Claire Danvers', items: 'Aura Radiance Serum 50ml (x2)', dest: 'New York, NY', hub: 'Columbus 3PL', status: 'DISPATCHED', carrier: 'FedEx Express', time: '4 mins ago' },
                { order: '#NV-9417', customer: 'Liam O’Connor', items: 'Hydra-Barrier Balm + Cleanser', dest: 'London, UK', hub: 'Rotterdam 3PL', status: 'IN_PICKING', carrier: 'DHL Global', time: '12 mins ago' },
                { order: '#NV-9416', customer: 'Mei-Ling Chen', items: 'Total Renewal Kit (Deluxe)', dest: 'San Francisco, CA', hub: 'Salt Lake 3PL', status: 'DISPATCHED', carrier: 'UPS Ground', time: '21 mins ago' },
                { order: '#NV-9415', customer: 'Antoine Dubois', items: 'Daily Defense Peptide SPF50', dest: 'Paris, FR', hub: 'Rotterdam 3PL', status: 'LABEL_PRINTED', carrier: 'Colissimo', time: '35 mins ago' },
              ].map((ord, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-background/80 border border-border/60 hover:border-orange-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-orange-400">{ord.order}</span>
                      <span className="text-sm font-semibold text-foreground">{ord.customer}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">{ord.time}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{ord.items} &middot; Destination: {ord.dest}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="text-muted-foreground">{ord.hub} &middot; {ord.carrier}</span>
                    <span className={`px-2.5 py-1 rounded-xl font-bold ${
                      ord.status === 'DISPATCHED'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      {ord.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 3: SKU Inventory Velocity */}
        {activeScreen === 'nova-inventory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">SKU Velocity &amp; Stockout Risk Radar</h4>
                <p className="text-xs text-muted-foreground font-mono">Automated purchase order recommendations based on 30-day burn rate</p>
              </div>
              <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-xl">
                1 SKU at Critical Stockout Risk (&lt;14 Days)
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="space-y-3 text-xs font-mono">
                {[
                  { sku: 'SKU-AUR-01', name: 'Aura Radiance Serum 50ml', stock: '2,450 units', burn: '210/day', daysLeft: 11, status: 'CRITICAL_REORDER', action: 'PO #402 Pending Supplier Approval' },
                  { sku: 'SKU-HYD-04', name: 'Hydra-Barrier Balm 100ml', stock: '8,900 units', burn: '140/day', daysLeft: 63, status: 'HEALTHY', action: 'Next Batch in 45 Days' },
                  { sku: 'SKU-PEP-09', name: 'Daily Defense Peptide SPF50', stock: '5,120 units', burn: '185/day', daysLeft: 27, status: 'REORDER_SOON', action: 'Reorder Trigger: 21 Days' },
                  { sku: 'SKU-KIT-02', name: 'Total Renewal Deluxe Bundle', stock: '1,400 units', burn: '35/day', daysLeft: 40, status: 'HEALTHY', action: 'Kitting Assembly on Schedule' },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-surface-200/40 dark:bg-surface-800/30 border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400 font-bold">{item.sku}</span>
                        <strong className="text-foreground text-sm font-sans">{item.name}</strong>
                      </div>
                      <span className="text-muted-foreground text-[11px]">Stock: {item.stock} &middot; Burn Rate: {item.burn}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className={`font-bold ${item.daysLeft <= 14 ? 'text-rose-400' : 'text-foreground'}`}>
                          {item.daysLeft} Days of Inventory
                        </span>
                        <span className="text-[10px] text-muted-foreground block">{item.action}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] border ${
                        item.status === 'CRITICAL_REORDER'
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/20 font-bold'
                          : 'bg-surface-200 dark:bg-surface-800 text-muted-foreground border-border'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: LTV Cohort Retention */}
        {activeScreen === 'nova-cohorts' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Monthly Customer Cohort Retention Heatmap</h4>
                <p className="text-xs text-muted-foreground font-mono">Cumulative customer lifetime value by acquisition month</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Month-6 LTV / CAC: 4.8x
              </span>
            </div>

            {/* Retention Matrix Table */}
            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 overflow-x-auto space-y-3">
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="border-b border-border/40 text-muted-foreground">
                    <th className="pb-2">Acquisition Cohort</th>
                    <th className="pb-2">New Customers</th>
                    <th className="pb-2">Month 0</th>
                    <th className="pb-2">Month 1</th>
                    <th className="pb-2">Month 2</th>
                    <th className="pb-2">Month 3</th>
                    <th className="pb-2">Month 4</th>
                    <th className="pb-2">Month 5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {[
                    { cohort: 'Jun 2024', count: '3,840', m0: '$112', m1: '$138', m2: '$156', m3: '$174', m4: '$189', m5: '$204' },
                    { cohort: 'Jul 2024', count: '4,120', m0: '$114', m1: '$141', m2: '$162', m3: '$180', m4: '$198', m5: '-' },
                    { cohort: 'Aug 2024', count: '4,650', m0: '$116', m1: '$145', m2: '$168', m3: '$189', m4: '-', m5: '-' },
                    { cohort: 'Sep 2024', count: '5,020', m0: '$118', m1: '$150', m2: '$174', m3: '-', m4: '-', m5: '-' },
                    { cohort: 'Oct 2024', count: '5,410', m0: '$119', m1: '$154', m2: '-', m3: '-', m4: '-', m5: '-' },
                    { cohort: 'Nov 2024', count: '6,100', m0: '$122', m1: '-', m2: '-', m3: '-', m4: '-', m5: '-' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-surface-200/30">
                      <td className="py-2.5 font-bold text-foreground">{row.cohort}</td>
                      <td className="py-2.5 text-muted-foreground">{row.count}</td>
                      <td className="py-2.5 bg-orange-500/10 text-orange-400 font-bold px-2">{row.m0}</td>
                      <td className="py-2.5 bg-orange-500/15 text-orange-300 font-bold px-2">{row.m1}</td>
                      <td className="py-2.5 bg-orange-500/20 text-orange-300 font-bold px-2">{row.m2}</td>
                      <td className="py-2.5 bg-orange-500/25 text-orange-200 font-bold px-2">{row.m3}</td>
                      <td className="py-2.5 bg-orange-500/30 text-white font-bold px-2">{row.m4}</td>
                      <td className="py-2.5 bg-orange-500/35 text-white font-bold px-2">{row.m5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SCREEN 5: Unit Economics Waterfall */}
        {activeScreen === 'nova-margins' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
              <div>
                <h4 className="text-base font-semibold text-foreground">Unit Economics &amp; Contribution Margin Waterfall</h4>
                <p className="text-xs text-muted-foreground font-mono">True profitability analysis accounting for ad spend, 3PL, and merchant fees</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-xl">
                Net Contribution Margin: 24.2%
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/60 space-y-4">
              <span className="text-xs font-mono text-muted-foreground uppercase">Order Level Waterfall ($118.20 AOV Average)</span>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-surface-200/40 dark:bg-surface-800/40 flex justify-between">
                  <span className="font-bold text-foreground">Gross Revenue (AOV):</span>
                  <span className="font-bold text-emerald-400">$118.20 (100.0%)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/20 dark:bg-surface-800/20 flex justify-between">
                  <span className="text-muted-foreground">(-) COGS &amp; Packaging:</span>
                  <span className="text-rose-400">-$21.40 (18.1%)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/20 dark:bg-surface-800/20 flex justify-between">
                  <span className="text-muted-foreground">(-) Blended Ad Spend (CAC allocated):</span>
                  <span className="text-rose-400">-$38.40 (32.5%)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/20 dark:bg-surface-800/20 flex justify-between">
                  <span className="text-muted-foreground">(-) Pick, Pack &amp; 3PL Shipping:</span>
                  <span className="text-rose-400">-$18.60 (15.7%)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/20 dark:bg-surface-800/20 flex justify-between">
                  <span className="text-muted-foreground">(-) Merchant Processing (Shopify Pay 2.6% + $0.30):</span>
                  <span className="text-rose-400">-$3.37 (2.9%)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/20 dark:bg-surface-800/20 flex justify-between">
                  <span className="text-muted-foreground">(-) Returns &amp; Damaged Claims Reserve (6.5%):</span>
                  <span className="text-rose-400">-$7.68 (6.5%)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/30 flex justify-between font-bold text-sm">
                  <span className="text-orange-400">(=) Net Contribution Margin:</span>
                  <span className="text-emerald-400">+$28.75 (24.3%)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
