import type { NextConfig } from "next";
import { STATIC_PAGE_REDIRECTS } from "./lib/static-page-routes";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
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
