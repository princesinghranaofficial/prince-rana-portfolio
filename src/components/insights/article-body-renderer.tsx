'use client';

import * as React from 'react';
import { CodeBlock } from '@/components/insights/code-block';
import { ArticleCallout, CalloutType } from '@/components/insights/article-callout';
import { cn } from '@/lib/utils';

interface ArticleBodyRendererProps {
  content: string;
  className?: string;
}

/**
 * Utility to convert heading text to a clean URL-friendly anchor ID
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Lightweight, robust markdown-to-components parser tailored for technical articles
 */
export function ArticleBodyRenderer({ content, className }: ArticleBodyRendererProps) {
  const elements = React.useMemo(() => {
    const lines = content.trim().split('\n');
    const nodes: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Empty line
      if (!line.trim()) {
        i++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === '---' || line.trim() === '***') {
        nodes.push(<hr key={key++} className="my-10 border-border/60" />);
        i++;
        continue;
      }

      // Code block
      if (line.trim().startsWith('```')) {
        const langMatch = line.trim().match(/^```([a-zA-Z0-9_-]*)/);
        const language = langMatch && langMatch[1] ? langMatch[1] : 'text';
        const codeLines: string[] = [];
        i++;

        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        // skip closing ```
        if (i < lines.length) i++;

        nodes.push(
          <CodeBlock
            key={key++}
            code={codeLines.join('\n')}
            language={language}
          />
        );
        continue;
      }

      // Blockquote / Callout
      if (line.trim().startsWith('>')) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }

        const fullQuote = quoteLines.join('\n');
        // Check if it starts with bold callout type e.g. **NOTE**, **IMPORTANT**, **DECISION**, **TRADE-OFF**
        const calloutMatch = fullQuote.match(/^\*\*(NOTE|IMPORTANT|DECISION|TRADE-OFF)\*\*\s*\n*([\s\S]*)/);

        if (calloutMatch) {
          const type = calloutMatch[1] as CalloutType;
          const body = calloutMatch[2].trim();
          nodes.push(
            <ArticleCallout key={key++} type={type}>
              <p>{body}</p>
            </ArticleCallout>
          );
        } else {
          nodes.push(
            <blockquote
              key={key++}
              className="p-4 my-6 border-l-2 border-accent bg-surface-50/60 dark:bg-surface-900/60 rounded-r-xl italic text-sm text-foreground/90"
            >
              {fullQuote}
            </blockquote>
          );
        }
        continue;
      }

      // Table detection
      if (line.trim().startsWith('|') && line.includes('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }

        if (tableLines.length >= 2) {
          const headerCells = tableLines[0]
            .split('|')
            .map((c) => c.trim())
            .filter(Boolean);

          // Skip separator row (tableLines[1])
          const rowLines = tableLines.slice(2);

          nodes.push(
            <div key={key++} className="overflow-x-auto my-8 rounded-2xl border border-border/80 bg-surface-50/50 dark:bg-surface-900/50">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-surface-100/60 dark:bg-surface-950/60">
                    {headerCells.map((h, hIdx) => (
                      <th key={hIdx} className="p-3.5 font-mono font-bold uppercase tracking-wider text-foreground">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {rowLines.map((rowStr, rIdx) => {
                    const cells = rowStr
                      .split('|')
                      .map((c) => c.trim())
                      .filter(Boolean);
                    return (
                      <tr key={rIdx} className="hover:bg-surface-100/40 transition-colors">
                        {cells.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3.5 text-muted-foreground leading-relaxed">
                            {formatInline(cell)}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      // Headings
      if (line.startsWith('#### ')) {
        const text = line.replace('#### ', '').trim();
        const id = slugify(text);
        nodes.push(
          <h4
            key={key++}
            id={id}
            className="text-base sm:text-lg font-bold text-foreground mt-8 mb-3 tracking-tight scroll-mt-28"
          >
            {text}
          </h4>
        );
        i++;
        continue;
      }

      if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim();
        const id = slugify(text);
        nodes.push(
          <h3
            key={key++}
            id={id}
            className="text-xl sm:text-2xl font-bold text-foreground mt-12 mb-4 tracking-tight scroll-mt-28"
          >
            {text}
          </h3>
        );
        i++;
        continue;
      }

      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        const id = slugify(text);
        nodes.push(
          <h2
            key={key++}
            id={id}
            className="text-2xl sm:text-3xl font-extrabold text-foreground mt-14 mb-6 tracking-tight scroll-mt-28"
          >
            {text}
          </h2>
        );
        i++;
        continue;
      }

      // Unordered list item or Checklist item
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const listItems: { text: string; isTask?: boolean; checked?: boolean }[] = [];
        while (
          i < lines.length &&
          (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))
        ) {
          const raw = lines[i].trim().replace(/^[-*]\s+/, '');
          if (raw.startsWith('[ ] ')) {
            listItems.push({ text: raw.replace(/^\[ \]\s+/, ''), isTask: true, checked: false });
          } else if (raw.startsWith('[x] ') || raw.startsWith('[X] ')) {
            listItems.push({ text: raw.replace(/^\[[xX]\]\s+/, ''), isTask: true, checked: true });
          } else {
            listItems.push({ text: raw });
          }
          i++;
        }

        nodes.push(
          <ul key={key++} className="space-y-2.5 my-4 pl-2 list-none">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                {item.isTask ? (
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-4 h-4 rounded border mt-0.5 shrink-0 select-none text-[10px]',
                      item.checked
                        ? 'border-accent bg-accent text-white font-bold'
                        : 'border-border/80 bg-surface-100/60 dark:bg-surface-800/60 text-muted-foreground'
                    )}
                  >
                    {item.checked ? '✓' : ''}
                  </span>
                ) : (
                  <span className="text-accent font-mono select-none mt-0.5">&bull;</span>
                )}
                <span>{formatInline(item.text)}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Ordered list item
      if (/^\d+\.\s+/.test(line.trim())) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
          i++;
        }

        nodes.push(
          <ol key={key++} className="space-y-2.5 my-4 pl-2 list-none">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="font-mono text-xs text-accent font-bold mt-0.5">
                  {lIdx + 1}.
                </span>
                <span>{formatInline(item)}</span>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Standard Paragraph
      nodes.push(
        <p key={key++} className="text-sm sm:text-base text-muted-foreground leading-relaxed my-4">
          {formatInline(line)}
        </p>
      );
      i++;
    }

    return nodes;
  }, [content]);

  return <div className={cn('article-prose space-y-2', className)}>{elements}</div>;
}

/**
 * Parses inline formatting: `code`, **bold**, *italic*
 */
function formatInline(text: string): React.ReactNode {
  // Regex to split code, bold, italic
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, idx) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-surface-200/80 dark:bg-surface-800/80 text-foreground font-mono text-[12px] border border-border/40 font-medium"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
