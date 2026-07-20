import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/seo/site";
import "./globals.css";

const DEFAULT_OG_IMAGE =
  "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/village-images/homepage/homepage-hero.jpg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
  style: ["normal", "italic"],
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
      <body className="font-body-lg text-on-surface">{children}</body>
    </html>
  );
}
