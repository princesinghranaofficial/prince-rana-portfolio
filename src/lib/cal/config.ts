/**
 * Cal.com Centralized Configuration
 * Secure management for Cal API keys, baseline URLs, and event type slugs.
 */

export const calConfig = {
  baseUrl: 'https://api.cal.com/v2',
  apiVersion: '2024-08-13',
  username: process.env.NEXT_PUBLIC_CAL_USERNAME || 'prince-singh-rana-official-hfjdrh',
  defaultEventTypeSlug: '30min',
  get calLink(): string {
    return (
      process.env.NEXT_PUBLIC_CAL_LINK ||
      `https://cal.com/${this.username}/${this.defaultEventTypeSlug}`
    );
  },
  get apiKey(): string | undefined {
    return process.env.CAL_API_KEY;
  },
} as const;
