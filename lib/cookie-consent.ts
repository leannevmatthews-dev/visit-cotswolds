export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_PREFERENCES_EVENT = "cookie-preferences-open";

export type CookieConsentValue = "accepted" | "declined";

export const GA_MEASUREMENT_ID = "G-TYLW0J2B50";

/** GA cookies to expire when analytics consent is withdrawn. */
export const GA_COOKIE_NAMES = [
  "_ga",
  "_ga_TYLW0J2B50",
  "_gid",
] as const;

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function writeCookieConsent(value: CookieConsentValue): void {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
}

/**
 * Expire Google Analytics cookies. Tries host-only and common domain forms
 * so cookies match however gtag originally set them.
 */
export function clearGoogleAnalyticsCookies(): void {
  if (typeof document === "undefined") return;

  const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
  const hostname = window.location.hostname;
  const domainVariants = ["", hostname];

  // e.g. visitcotswolds.uk → .visitcotswolds.uk
  const parts = hostname.split(".").filter(Boolean);
  if (parts.length >= 2) {
    domainVariants.push(`.${parts.slice(-2).join(".")}`);
  }

  for (const name of GA_COOKIE_NAMES) {
    document.cookie = `${name}=; expires=${expires}; path=/;`;
    for (const domain of domainVariants) {
      if (!domain) continue;
      document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain};`;
    }
  }
}

/** Re-open the cookie banner so visitors can change their choice. */
export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
}
