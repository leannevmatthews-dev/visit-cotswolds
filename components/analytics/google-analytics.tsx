"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/cookie-consent";

type GoogleAnalyticsProps = {
  enabled: boolean;
};

/**
 * Loads gtag only when analytics consent is accepted.
 * Do not place these scripts in app/layout.tsx <head> — that would load GA
 * unconditionally and bypass consent.
 *
 * If the visitor later declines after accepting in the same session, these
 * Script nodes unmount, but GA already initialised in-memory cannot be fully
 * unloaded without a page refresh. That is expected/acceptable; the declined
 * choice is stored and GA will not load on the next visit.
 */
export function GoogleAnalytics({ enabled }: GoogleAnalyticsProps) {
  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
