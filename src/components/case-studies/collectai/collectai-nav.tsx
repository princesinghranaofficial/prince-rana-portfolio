'use client';

import * as React from 'react';
import { trackEvent } from '@/lib/analytics';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem & Strategy' },
  { id: 'product', label: 'Product Map' },
  { id: 'experience', label: 'Core Experience' },
  { id: 'ai', label: 'AI Collector' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'engineering', label: 'Engineering' },
];

export function CollectAINav() {
  const [activeSection, setActiveSection] = React.useState('overview');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, label: string) => {
    setActiveSection(id);
    trackEvent('collectai_section_engaged', { section_id: id, label });
  };

  return (
    <aside className="sticky top-20 z-30 hidden xl:block w-48 float-right -ml-48 pr-6 pt-12 select-none pointer-events-auto">
      <nav aria-label="Case study sections" className="p-4 rounded-xl border border-border/80 bg-surface/80 backdrop-blur-md space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary font-bold block mb-2">
          Case Study Map
        </span>
        <ul className="space-y-1 text-xs font-mono">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;

            return (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={() => handleNavClick(sec.id, sec.label)}
                  className={`flex items-center gap-2 py-1 px-1.5 rounded transition-colors ${
                    isActive
                      ? 'text-accent font-bold bg-accent-muted'
                      : 'text-text-tertiary hover:text-text-primary'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent' : 'bg-transparent'}`} />
                  <span className="truncate">{sec.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
