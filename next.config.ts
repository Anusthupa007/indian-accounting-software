import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Force all pages to be dynamic to avoid prerendering issues
  experimental: {
    // Disable static generation entirely
  },
  // Disable static generation for all pages
  async redirects() {
    return [];
  },
};

export default nextConfig;
