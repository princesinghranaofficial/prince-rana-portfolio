/**
 * Centralized Analytics Events Abstraction
 * Privacy-friendly, lightweight event tracking.
 */

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

export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`[Analytics] ${event}`, payload ?? {});
  }

  // Safe window custom event dispatch
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('app:analytics', {
        detail: { event, payload, timestamp: Date.now() },
      })
    );
  }
}
