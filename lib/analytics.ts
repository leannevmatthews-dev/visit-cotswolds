export const GA_MEASUREMENT_ID = "G-TYLW0J2B50";

export const ANALYTICS_OPT_OUT_KEY = "vc_analytics_optout";

export function isAnalyticsOptedOut(): boolean {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY);
    const previous = window.localStorage.getItem("cookie-consent");

    if (stored === null && previous === "declined") {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
      window.localStorage.removeItem("cookie-consent");
      return true;
    }

    if (previous === "accepted") {
      window.localStorage.removeItem("cookie-consent");
    }

    return stored === "1";
  } catch {
    return false;
  }
}

export function setAnalyticsOptOut(): void {
  try {
    window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
  } catch {
    // Storage can be blocked. Cookie clearing and reload still run.
  }
}

type RelatedCardPlacement = "sidebar" | "inline" | "end";

/** GA4 event for a related-guide card. No-op when the visitor has opted out or gtag is unavailable. */
export function trackRelatedCardClick(params: {
  from_slug: string;
  to_slug: string;
  position: number;
  placement: RelatedCardPlacement;
}): void {
  if (typeof window === "undefined" || isAnalyticsOptedOut()) return;

  const gtag = (
    window as Window & { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", "related_card_click", params);
}

export function clearAnalyticsOptOut(): void {
  try {
    window.localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
  } catch {
    // Storage can be blocked. Reload still runs.
  }
}

/** Expire every cookie whose name starts with `_ga`, on this host and its root domain. */
export function clearGoogleAnalyticsCookies(): void {
  if (typeof document === "undefined") return;

  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name.startsWith("_ga"));

  const hostname = window.location.hostname;
  const domains: string[] = [];
  if (hostname) domains.push(hostname);

  const parts = hostname.split(".").filter(Boolean);
  if (parts.length >= 2) {
    domains.push(`.${parts.slice(-2).join(".")}`);
  }

  for (const name of names) {
    document.cookie = `${name}=; expires=${expires}; path=/;`;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain};`;
    }
  }
}
