import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo/site";
import "./globals.css";

const DEFAULT_OG_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/homepage/homepage-hero.jpg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Visit Cotswolds",
    template: "%s | Visit Cotswolds",
  },
  description:
    "The most useful independent guide to the Cotswolds: village guides, places to eat and stay, things to do, and honest advice from real visits.",
  openGraph: {
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${ebGaramond.variable}`}>
      <head>
        <Script
          src="https://scripts.scriptwrapper.com/tags/3268095d-1722-4498-8f1e-54762868b6cd.js"
          strategy="afterInteractive"
          data-noptimize="1"
          data-cfasync="false"
        />
        <Script id="stay22-letmeallez" strategy="afterInteractive">
          {`(function (s, t, a, y, twenty, two) {
    s.Stay22 = s.Stay22 || {};
    s.Stay22.params = { lmaID: '6a98982e10f03364e33fe014' };
    twenty = t.createElement(a);
    two = t.getElementsByTagName(a)[0];
    twenty.async = 1;
    twenty.src = y;
    two.parentNode.insertBefore(twenty, two);
  })(window, document, 'script', 'https://lma.stay22.com/letmeallez.js');`}
        </Script>
      </head>
      <body className="font-body-lg text-on-surface">{children}</body>
    </html>
  );
}
