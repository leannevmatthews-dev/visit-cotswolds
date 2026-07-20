"use client";

import { openCookiePreferences } from "@/lib/cookie-consent";

type CookiePreferencesButtonProps = {
  className?: string;
};

export function CookiePreferencesButton({
  className,
}: CookiePreferencesButtonProps) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Cookie preferences
    </button>
  );
}
