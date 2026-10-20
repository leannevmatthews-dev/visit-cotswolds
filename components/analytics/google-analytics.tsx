"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID, isAnalyticsOptedOut } from "@/lib/analytics";

/**
 * Loads gtag on every page unless localStorage "vc_analytics_optout" is "1".
 * The script is not injected at all when the visitor has opted out.
 */
export function GoogleAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(!isAnalyticsOptedOut());
  }, []);

  if (!load) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics-init" strategy="lazyOnload">
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
