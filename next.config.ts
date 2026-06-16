import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pages/villages/bibury.html",
        destination: "/villages/bibury",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
