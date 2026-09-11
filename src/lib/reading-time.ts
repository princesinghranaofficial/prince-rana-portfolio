/**
 * Centralized reading time calculator
 * Uses 225 words per minute benchmark for technical articles.
 */
export function calculateReadingTime(content: string, wordsPerMinute = 225): string {
  if (!content) return '1 min read';
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min read`;
}
