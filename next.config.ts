import type { NextConfig } from "next";
import { STATIC_PAGE_REDIRECTS } from "./lib/static-page-routes";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "pwwpxxeploahbcpubhnx.supabase.co",
      },
    ],
  },
  async redirects() {
    return [
      ...STATIC_PAGE_REDIRECTS.map(({ source, destination, permanent }) => ({
        source,
        destination,
        permanent,
      })),
      {
        source: "/villages/bibury-static",
        destination: "/villages/bibury",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
