import * as React from 'react';
import { 
  CreditCard, 
  Database, 
  Mail, 
  MessageSquare, 
  Zap, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

interface IntegrationItem {
  name: string;
  category: string;
  status: 'LIVE' | 'IN DEVELOPMENT' | 'PLANNED' | 'COMING SOON';
  description: string;
  role: string;
}

const integrationsList: IntegrationItem[] = [
  {
    name: 'Razorpay',
    category: 'Payment Rails',
    status: 'LIVE',
    description: 'Dynamic one-click payment links, instant webhook reconciliation, and ACH/card settlement.',
    role: 'Core Payment Gateway',
  },
  {
    name: 'PostgreSQL / Supabase',
    category: 'Data & Auth Engine',
    status: 'LIVE',
    description: 'Multi-tenant database engine with strict Row Level Security (RLS) and real-time ledger channels.',
    role: 'Persistence Layer',
  },
  {
    name: 'Stripe',
    category: 'Payment Rails',
    status: 'IN DEVELOPMENT',
    description: 'Multi-currency invoice payment links, customer portal session generation, and SEPA/wire rails.',
    role: 'Global Payment Gateway',
  },
  {
    name: 'QuickBooks Online',
    category: 'Accounting Software',
    status: 'IN DEVELOPMENT',
    description: 'Bidirectional sync of unpaid invoice lines, customer ledgers, and credit memo adjustments.',
    role: 'Accounting Ledger Sync',
  },
  {
    name: 'WhatsApp Business API',
    category: 'Communication Channels',
    status: 'PLANNED',
    description: 'Transactional payment reminders with interactive payment buttons for mobile-first clients.',
    role: 'Direct Messaging Channel',
  },
  {
    name: 'Zoho Books',
    category: 'Accounting Software',
    status: 'PLANNED',
    description: 'Scheduled batch import of customer invoice records, payment receipts, and tax lines.',
    role: 'Accounting Sync',
  },
  {
    name: 'HubSpot CRM',
    category: 'CRM & Sales',
    status: 'PLANNED',
    description: 'Sync customer payment risk scores and dispute flags into account executive contact timelines.',
    role: 'CRM Account Context',
  },
  {
    name: 'Slack Alerts',
    category: 'Communication Channels',
    status: 'COMING SOON',
    description: 'Channel notifications for settled high-value invoices, overdue escalations, and payment failures.',
    role: 'Internal Team Alerts',
  },
  {
    name: 'Oracle NetSuite',
    category: 'Enterprise ERP',
    status: 'COMING SOON',
    description: 'Enterprise ERP connector for automated multi-subsidiary invoice ingestion and ledger mapping.',
    role: 'Enterprise Financial Sync',
  },
  {
    name: 'Salesforce CRM',
    category: 'CRM & Sales',
    status: 'COMING SOON',
    description: 'Enrich lead and opportunity objects with past collection timeliness and customer DSO ratings.',
    role: 'Sales Intelligence',
  },
  {
    name: 'Microsoft Outlook 365',
    category: 'Communication Channels',
    status: 'COMING SOON',
    description: 'Direct corporate email dispatch via Microsoft Graph API with verified SPF/DKIM authentication.',
    role: 'Corporate Email Dispatch',
  },
  {
    name: 'Zapier / Webhooks',
    category: 'Automation Platform',
    status: 'COMING SOON',
    description: 'Custom trigger-action pipelines on invoice status change, payment completion, and escalation milestones.',
    role: 'Custom Integrations',
  },
];

export function CollectAIIntegrations() {
  const getStatusBadge = (status: IntegrationItem['status']) => {
    switch (status) {
      case 'LIVE':
        return (
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 text-[10px]">
            ● LIVE
          </span>
        );
      case 'IN DEVELOPMENT':
        return (
          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20 text-[10px]">
            ● IN DEVELOPMENT
          </span>
        );
      case 'PLANNED':
        return (
          <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 text-[10px]">
            ○ PLANNED
          </span>
        );
      case 'COMING SOON':
        return (
          <span className="px-2 py-0.5 rounded-md bg-surface-muted text-text-tertiary font-medium border border-border text-[10px]">
            ○ COMING SOON
          </span>
        );
    }
  };

  return (
    <section className="py-20 md:py-32 border-b border-border/60 bg-surface-muted/30 relative" id="integrations">
      <Container size="wide">
        <SectionHeader
          eyebrow="Integration Ecosystem"
          title="Integrations mapped with explicit transparency."
          description="A credible B2B SaaS architecture connects to the accounting and communication systems finance teams already use. Here is the verified status of CollectAI's ecosystem integrations."
          align="left"
        />

        {/* Status Legend */}
        <div className="pt-8 pb-4 flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary">
          <span className="text-text-tertiary font-bold uppercase text-[10px]">Status Tiers:</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LIVE (Verified Production)
          </span>
          <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> IN DEVELOPMENT (Active Sprint)
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> PLANNED (Roadmap)
          </span>
          <span className="inline-flex items-center gap-1.5 text-text-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-border-strong" /> COMING SOON (Exploratory)
          </span>
        </div>

        {/* Structured Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {integrationsList.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl border border-border bg-surface flex flex-col justify-between space-y-4 hover:border-border-strong transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[10px] uppercase font-bold text-text-tertiary">
                    {item.category}
                  </span>
                  {getStatusBadge(item.status)}
                </div>

                <div>
                  <h4 className="font-bold text-base text-text-primary">
                    {item.name}
                  </h4>
                  <span className="text-[11px] font-mono text-accent block mt-0.5">
                    {item.role}
                  </span>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-tertiary">
                <span>API Protocol</span>
                <span className="text-text-primary font-semibold">Webhooks / REST</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
