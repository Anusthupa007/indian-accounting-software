import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable static generation for not-found page
  async redirects() {
    return [];
  },
};

export default nextConfig;
