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
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "bunny-wp-pullzone-dlshqqoicq.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "rootsandseedskitchengarden.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.lionhearth.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.thevillagepub.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.bathurstarms.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.theebringtonarms.co.uk",
      },
      {
        protocol: "https",
        hostname: "thefoxatoddington.com",
      },
      {
        protocol: "https",
        hostname: "thekinghamplough.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.theswanswinbrook.co.uk",
      },
      {
        protocol: "https",
        hostname: "thefeatherednestinn.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.countrycreatures.com",
      },
      {
        protocol: "https",
        hostname: "www.daylesford.com",
      },
      {
        protocol: "https",
        hostname: "www.cotswoldswheatsheaf.com",
      },
      {
        protocol: "https",
        hostname: "hotelcms-production.imgix.net",
      },
      {
        protocol: "https",
        hostname: "dormyhouse.co.uk",
      },
      {
        protocol: "https",
        hostname: "slaughtersmanor.co.uk",
      },
      {
        protocol: "https",
        hostname: "bucklandmanor.co.uk",
      },
      {
        protocol: "https",
        hostname: "foxhillmanor.com",
      },
      {
        protocol: "https",
        hostname: "thefishhotel.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.oldstocksinn.com",
      },
      {
        protocol: "https",
        hostname: "bookings.thewildrabbit.co.uk",
      },
      {
        protocol: "https",
        hostname: "r.profitroom.com",
      },
      {
        protocol: "https",
        hostname: "burleighcourtcotswolds.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.cotswoldhouse.com",
      },
      {
        protocol: "https",
        hostname: "www.cotswold-inns-hotels.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.thepighotel.com",
      },
      {
        protocol: "https",
        hostname: "grosvenorpi-wth.imgix.net",
      },
      {
        protocol: "https",
        hostname: "www.lygonarmshotel.co.uk",
      },
      {
        protocol: "https",
        hostname: "bigfeastival.com",
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
