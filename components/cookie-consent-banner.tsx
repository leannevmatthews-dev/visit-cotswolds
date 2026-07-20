"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import {
  COOKIE_PREFERENCES_EVENT,
  type CookieConsentValue,
  clearGoogleAnalyticsCookies,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookie-consent";

export function CookieConsentBanner() {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = readCookieConsent();
    setConsent(stored);
    setShowBanner(stored === null);
    setReady(true);

    const onOpenPreferences = () => setShowBanner(true);
    window.addEventListener(COOKIE_PREFERENCES_EVENT, onOpenPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, onOpenPreferences);
    };
  }, []);

  function accept() {
    writeCookieConsent("accepted");
    setConsent("accepted");
    setShowBanner(false);
  }

  function decline() {
    // Same path for the initial banner and "Cookie preferences" reopen.
    // Clear GA cookies then reload so gtag.js / dataLayer leave memory —
    // unmounting <GoogleAnalytics> alone is not enough after a prior accept.
    writeCookieConsent("declined");
    clearGoogleAnalyticsCookies();
    window.location.reload();
  }

  const gaEnabled = ready && consent === "accepted";

  return (
    <>
      <GoogleAnalytics enabled={gaEnabled} />

      {ready && showBanner ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[200] p-4 md:p-6 pointer-events-none"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-message"
        >
          <div className="pointer-events-auto mx-auto flex max-w-3xl flex-col gap-4 border border-outline-variant/20 bg-surface-container-low/95 px-5 py-4 shadow-lg backdrop-blur-md md:flex-row md:items-center md:gap-6 md:px-6 md:py-5">
            <div className="min-w-0 flex-1 space-y-1">
              <p
                id="cookie-consent-title"
                className="font-label-caps text-[10px] tracking-widest text-limestone uppercase"
              >
                Cookies
              </p>
              <p
                id="cookie-consent-message"
                className="font-body-sm leading-relaxed text-on-surface-variant"
              >
                We use cookies to understand how visitors use this site. See our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-limestone underline underline-offset-2 transition-colors hover:text-on-surface"
                >
                  Cookie Policy
                </Link>{" "}
                for details.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={decline}
                className="px-4 py-2.5 font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors hover:text-on-surface"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={accept}
                className="bg-limestone px-5 py-2.5 font-label-caps text-[10px] tracking-widest text-primary-container uppercase transition-colors hover:bg-on-background"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
