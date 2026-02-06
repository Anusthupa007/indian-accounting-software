import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable static generation for not-found page
  async redirects() {
    return [];
  },
  // Disable the built-in not-found page handling
  experimental: {
    // This might help with the not-found page issues
  },
  // Try to exclude not-found from static generation
  output: 'standalone',
};

export default nextConfig;
