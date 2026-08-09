"use client";

import type { ComponentPropsWithoutRef } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

interface TrackedLinkProps extends ComponentPropsWithoutRef<"a"> {
  analyticsEvents: readonly AnalyticsEvent[];
}

export function TrackedLink({ analyticsEvents, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        analyticsEvents.forEach(trackEvent);
        onClick?.(event);
      }}
    />
  );
}
