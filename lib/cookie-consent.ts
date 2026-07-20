export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_PREFERENCES_EVENT = "cookie-preferences-open";

export type CookieConsentValue = "accepted" | "declined";

export const GA_MEASUREMENT_ID = "G-TYLW0J2B50";

export function readCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function writeCookieConsent(value: CookieConsentValue): void {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
}

/** Re-open the cookie banner so visitors can change their choice. */
export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
}
