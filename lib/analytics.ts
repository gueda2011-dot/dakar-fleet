"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsLocale = "fr" | "en";
export type AnalyticsPageType = "homepage" | "service";
export type AnalyticsServiceContext =
  | "homepage"
  | "airport_transfer"
  | "business_chauffeur"
  | "electric_mobility";
export type AnalyticsCtaLocation =
  | "header"
  | "hero"
  | "services"
  | "partners"
  | "contact_section"
  | "contact_form"
  | "footer"
  | "floating_button";
export type AnalyticsContactMethod = "whatsapp" | "phone" | "email";

export type AnalyticsEventName =
  | "contact_whatsapp_click"
  | "contact_phone_click"
  | "contact_email_click"
  | "contact_form_submit"
  | "booking_cta_click";

export interface AnalyticsContext {
  locale: AnalyticsLocale;
  page_type: AnalyticsPageType;
  service_context: AnalyticsServiceContext;
}

export interface AnalyticsEvent {
  name: AnalyticsEventName;
  params: AnalyticsContext & {
    cta_location: AnalyticsCtaLocation;
    contact_method: AnalyticsContactMethod;
  };
}

export function trackEvent({ name, params }: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  try {
    sendGAEvent("event", name, {
      ...params,
      page_path: window.location.pathname,
    });
  } catch {
    // Analytics is best effort and must never block the user's action.
  }
}
