"use client";

import { useEffect, useState } from "react";
import {
  clearAnalyticsOptOut,
  clearGoogleAnalyticsCookies,
  isAnalyticsOptedOut,
  setAnalyticsOptOut,
} from "@/lib/analytics";

type AnalyticsOptOutProps = {
  className?: string;
};

export function AnalyticsOptOut({ className }: AnalyticsOptOutProps) {
  const [optedOut, setOptedOut] = useState(false);

  useEffect(() => {
    setOptedOut(isAnalyticsOptedOut());
  }, []);

  function toggle() {
    if (optedOut) {
      clearAnalyticsOptOut();
      window.location.reload();
      return;
    }

    setAnalyticsOptOut();
    clearGoogleAnalyticsCookies();
    window.location.reload();
  }

  return (
    <button type="button" onClick={toggle} className={className}>
      {optedOut ? "Analytics off. Turn back on" : "Opt out of analytics"}
    </button>
  );
}
