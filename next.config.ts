import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Try to skip problematic pages during static generation
    skipNotFoundPages: true,
  },
  // Disable static generation for not-found page
  async redirects() {
    return [];
  },
};

export default nextConfig;
