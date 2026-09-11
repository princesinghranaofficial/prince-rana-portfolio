import { calConfig } from './config';
import type { CalUser, CalBooking, CalApiResponse } from './types';

/**
 * Cal.com API v2 Server Client
 * Handles authenticated communication with Cal.com platform API.
 * Never executes on browser client to prevent exposing API keys.
 */
export class CalClient {
  private apiKey: string;
  private baseUrl: string;
  private apiVersion: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || calConfig.apiKey || '';
    this.baseUrl = calConfig.baseUrl;
    this.apiVersion = calConfig.apiVersion;
  }

  private get headers(): HeadersInit {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      'cal-api-version': this.apiVersion,
      'Content-Type': 'application/json',
    };
  }

  /**
   * Verify credentials and retrieve current user profile
   */
  async getMe(): Promise<CalUser | null> {
    if (!this.apiKey) {
      console.warn('[CalClient]: No CAL_API_KEY provided.');
      return null;
    }

    try {
      const response = await fetch(`${this.baseUrl}/me`, {
        headers: this.headers,
        next: { revalidate: 300 }, // Cache profile for 5 minutes
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[CalClient getMe Error ${response.status}]:`, errorText);
        return null;
      }

      const json = (await response.json()) as CalApiResponse<CalUser>;
      return json.data || null;
    } catch (error) {
      console.error('[CalClient getMe Exception]:', error);
      return null;
    }
  }

  /**
   * Retrieve list of bookings
   */
  async getBookings(status?: 'upcoming' | 'past' | 'cancelled'): Promise<CalBooking[]> {
    if (!this.apiKey) return [];

    try {
      const url = new URL(`${this.baseUrl}/bookings`);
      if (status) {
        url.searchParams.set('status', status);
      }

      const response = await fetch(url.toString(), {
        headers: this.headers,
        cache: 'no-store',
      });

      if (!response.ok) {
        console.error(`[CalClient getBookings Error ${response.status}]`);
        return [];
      }

      const json = (await response.json()) as CalApiResponse<CalBooking[]>;
      return json.data || [];
    } catch (error) {
      console.error('[CalClient getBookings Exception]:', error);
      return [];
    }
  }

  /**
   * Health check to test API key validity
   */
  async checkConnection(): Promise<{ connected: boolean; user?: CalUser; error?: string }> {
    if (!this.apiKey) {
      return { connected: false, error: 'CAL_API_KEY is not defined.' };
    }

    try {
      const user = await this.getMe();
      if (user) {
        return { connected: true, user };
      }
      return { connected: false, error: 'Authentication failed with Cal.com v2 API.' };
    } catch (err) {
      return { connected: false, error: err instanceof Error ? err.message : 'Unknown network error' };
    }
  }
}

// Singleton server-side client instance
export const calClient = new CalClient();
