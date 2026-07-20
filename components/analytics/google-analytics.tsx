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
 * Withdrawal (Decline) clears GA cookies and reloads the page so gtag is
 * removed from memory; see CookieConsentBanner.decline().
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
