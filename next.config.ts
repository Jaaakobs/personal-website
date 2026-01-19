import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for maximum performance
  output: "export",
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
