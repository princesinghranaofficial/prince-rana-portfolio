'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Cpu, 
  Activity,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const sections: NavSection[] = [
  { id: 'overview', label: 'Overview', icon: Layers },
  { id: 'command-center', label: 'Command Center', icon: Activity },
  { id: 'cash-flow', label: 'Cash Flow', icon: BarChart3 },
  { id: 'forecasting', label: 'Forecast & Scenarios', icon: TrendingUp },
  { id: 'copilot', label: 'AI Copilot', icon: Sparkles },
  { id: 'modules', label: 'Ledger & Operations', icon: CreditCard },
  { id: 'engineering', label: 'Architecture', icon: Cpu },
];

export function AICFONav() {
  const [activeSection, setActiveSection] = React.useState<string>('overview');
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const handleScroll = () => {
      // Reveal after passing hero section (approx 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-1.5 p-2 rounded-2xl bg-surface-100/85 dark:bg-surface-900/85 backdrop-blur-md border border-border/70 shadow-xl"
      aria-label="Case Study Section Navigation"
    >
      <div className="px-2.5 py-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider border-b border-border/40 mb-1">
        AI CFO Navigator
      </div>

      {sections.map((sec) => {
        const Icon = sec.icon;
        const isActive = activeSection === sec.id;

        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => scrollToSection(sec.id)}
            className={cn(
              'flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-150 text-left group',
              isActive
                ? 'bg-accent text-accent-foreground font-semibold shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-surface-200 dark:hover:bg-surface-800'
            )}
          >
            <Icon className={cn('w-3.5 h-3.5 shrink-0', isActive ? 'text-accent-foreground' : 'text-accent')} />
            <span className="truncate max-w-[130px]">{sec.label}</span>
          </button>
        );
      })}
    </motion.aside>
  );
}
