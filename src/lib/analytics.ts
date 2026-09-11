/**
 * Centralized Analytics Events Abstraction & GA4 Integration
 * Privacy-friendly, lightweight event tracking with strict zero-PII guarantees.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export type AnalyticsEvent =
  | 'hero_book_call_clicked'
  | 'hero_view_work_clicked'
  | 'nav_book_call_clicked'
  | 'nav_work_clicked'
  | 'nav_item_clicked'
  | 'theme_toggled'
  | 'collectai_case_study_clicked'
  | 'ai_cfo_case_study_clicked'
  | 'product_lab_clicked'
  | 'services_clicked'
  | 'process_engaged'
  | 'insight_clicked'
  | 'final_book_call_clicked'
  | 'start_project_clicked'
  | 'work_project_opened'
  | 'work_filter_selected'
  | 'work_search_used'
  | 'work_clear_filters'
  | 'work_book_call_clicked'
  | 'work_start_project_clicked'
  | 'collectai_case_study_viewed'
  | 'collectai_section_engaged'
  | 'collectai_integration_viewed'
  | 'collectai_architecture_engaged'
  | 'collectai_book_call_clicked'
  | 'collectai_start_project_clicked'
  | 'product_lab_viewed'
  | 'lab_filter_selected'
  | 'lab_search_used'
  | 'lab_project_opened'
  | 'lab_project_viewed'
  | 'lab_screen_engaged'
  | 'lab_related_project_opened'
  | 'lab_book_call_clicked'
  | 'lab_start_project_clicked'
  | 'ai_cfo_case_study_viewed'
  | 'ai_cfo_cashflow_engaged'
  | 'ai_cfo_forecast_engaged'
  | 'ai_cfo_scenario_engaged'
  | 'ai_cfo_copilot_engaged'
  | 'ai_cfo_architecture_engaged'
  | 'ai_cfo_book_call_clicked'
  | 'ai_cfo_start_project_clicked'
  | 'services_viewed'
  | 'service_opened'
  | 'service_work_viewed'
  | 'service_start_project_clicked'
  | 'service_book_call_clicked'
  | 'service_faq_opened'
  | 'about_viewed'
  | 'about_work_clicked'
  | 'about_start_project_clicked'
  | 'about_book_call_clicked'
  | 'process_viewed'
  | 'process_start_project_clicked'
  | 'insights_viewed'
  | 'insight_opened'
  | 'insight_toc_clicked'
  | 'insight_code_copied'
  | 'insight_related_work_clicked'
  | 'insight_related_article_clicked'
  | 'insight_start_project_clicked'
  | 'inquiry_started'
  | 'inquiry_step_completed'
  | 'inquiry_budget_selected'
  | 'inquiry_reviewed'
  | 'inquiry_completed'
  | 'inquiry_failed'
  | 'book_page_viewed'
  | 'booking_started'
  | 'booking_completed'
  | 'booking_failed'
  | 'book_start_project_clicked'
  | 'investment_section_viewed'
  | 'investment_option_clicked'
  | 'investment_start_project_clicked'
  | 'investment_service_clicked';

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

/**
 * PII blacklist: Keys that must never be sent to analytics under any circumstances.
 */
const PII_BLACKLIST = new Set([
  'name',
  'fullname',
  'firstname',
  'lastname',
  'email',
  'useremail',
  'user_email',
  'phone',
  'phonenumber',
  'phone_number',
  'message',
  'description',
  'password',
  'token',
  'secret',
  'auth',
  'authorization',
]);

/**
 * Safely send an event to Google Analytics 4 (gtag.js)
 * Guarantees zero PII and fails silently without interrupting UI execution.
 */
export function sendGAEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  try {
    const cleanParams: Record<string, unknown> = {};

    if (params) {
      for (const [key, val] of Object.entries(params)) {
        if (!PII_BLACKLIST.has(key.toLowerCase()) && val !== undefined) {
          cleanParams[key] = val;
        }
      }
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, cleanParams);
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[GA4 Safe Failure]:', err);
    }
  }
}

/**
 * Central event tracking function
 */
export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${event}`, payload ?? {});
  }

  // Safe window custom event dispatch for in-app listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('app:analytics', {
        detail: { event, payload, timestamp: Date.now() },
      })
    );
  }

  // Map internal actions to GA4 conversion & engagement events
  switch (event) {
    case 'inquiry_started':
      sendGAEvent('contact_form_start');
      break;

    case 'inquiry_completed':
      // Strictly non-PII: projectType and budgetRange
      sendGAEvent('contact_form_submit', {
        project_type: payload?.projectType,
        budget: payload?.budgetRange,
      });
      break;

    case 'booking_started':
      sendGAEvent('contact_click', { cta_location: 'cal_booking', cta_type: 'book_call' });
      break;

    case 'hero_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'hero', cta_type: 'book_call' });
      break;

    case 'nav_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'navbar', cta_type: 'book_call' });
      break;

    case 'final_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'footer_cta', cta_type: 'book_call' });
      break;

    case 'start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'cta_button', cta_type: 'start_project' });
      break;

    case 'about_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'about', cta_type: 'book_call' });
      break;

    case 'about_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'about', cta_type: 'start_project' });
      break;

    case 'service_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'service', cta_type: 'book_call' });
      break;

    case 'service_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'service', cta_type: 'start_project' });
      break;

    case 'work_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'work', cta_type: 'book_call' });
      break;

    case 'work_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'work', cta_type: 'start_project' });
      break;

    case 'collectai_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'collectai', cta_type: 'book_call' });
      break;

    case 'collectai_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'collectai', cta_type: 'start_project' });
      break;

    case 'ai_cfo_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'ai_cfo', cta_type: 'book_call' });
      break;

    case 'ai_cfo_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'ai_cfo', cta_type: 'start_project' });
      break;

    case 'lab_book_call_clicked':
      sendGAEvent('contact_click', { cta_location: 'lab', cta_type: 'book_call' });
      break;

    case 'lab_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'lab', cta_type: 'start_project' });
      break;

    case 'investment_start_project_clicked':
      sendGAEvent('contact_click', { cta_location: 'pricing', cta_type: 'start_project' });
      break;

    default:
      break;
  }
}

// ==============================================================================
// SPECIFIC GA4 PORTFOLIO EVENT HELPERS
// ==============================================================================

export function trackContactClick(location: string, type = 'general') {
  sendGAEvent('contact_click', { cta_location: location, cta_type: type });
}

export function trackContactFormStart() {
  sendGAEvent('contact_form_start');
}

export function trackContactFormSubmit(serviceType?: string) {
  sendGAEvent('contact_form_submit', {
    service_type: serviceType,
  });
}

export function trackEmailClick(location = 'direct') {
  sendGAEvent('email_click', { cta_location: location });
}

export function trackLinkedInClick(location = 'direct') {
  sendGAEvent('linkedin_click', { cta_location: location });
}

export function trackGitHubClick(location = 'direct') {
  sendGAEvent('github_click', { cta_location: location });
}

export function trackProjectView(projectSlug: string, projectName: string) {
  sendGAEvent('project_view', {
    project_slug: projectSlug,
    project_name: projectName,
  });
}

export function trackProjectCtaClick(projectSlug: string, ctaName: string) {
  sendGAEvent('project_cta_click', {
    project_slug: projectSlug,
    cta_name: ctaName,
  });
}

export function trackArticleView(articleSlug: string, articleTitle: string) {
  sendGAEvent('article_view', {
    article_slug: articleSlug,
    article_title: articleTitle,
  });
}

export function trackResumeDownload() {
  sendGAEvent('resume_download');
}
