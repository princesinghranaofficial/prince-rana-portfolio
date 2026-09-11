'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-lg border border-border bg-surface-50/50', className)} />
    );
  }

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border/70 bg-surface-50/60 dark:bg-surface-50/30 text-foreground hover:bg-surface-100 dark:hover:bg-surface-100/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className
      )}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className="w-4 h-4 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 text-amber-500 dark:absolute" aria-hidden="true" />
      <Moon className="w-4 h-4 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 text-blue-400 absolute dark:relative" aria-hidden="true" />
    </button>
  );
}
