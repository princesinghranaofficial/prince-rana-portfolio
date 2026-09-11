/**
 * Cal.com API v2 Type Definitions
 * Typed contracts for user identity, booking schedules, availability slots, and API responses.
 */

export interface CalUser {
  id: number;
  email: string;
  name: string;
  avatarUrl: string | null;
  bio: string | null;
  timeFormat: number;
  defaultScheduleId: number;
  weekStart: string;
  timeZone: string;
  username: string;
  locale: string | null;
  organizationId: number | null;
}

export interface CalBooking {
  id: number;
  uid: string;
  title: string;
  description: string | null;
  hosts: Array<{
    id: number;
    name: string;
    email: string;
    username: string;
    timeZone: string;
  }>;
  status: 'ACCEPTED' | 'PENDING' | 'CANCELLED' | 'REJECTED';
  start: string;
  end: string;
  duration: number;
  meetingUrl?: string;
  location?: string;
  createdAt: string;
}

export interface CalSlot {
  time: string;
}

export interface CalSlotsResponse {
  slots: Record<string, CalSlot[]>;
}

export interface CalApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}
