import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/company-profile", permanent: true },
      { source: "/industries", destination: "/products", permanent: false },
      { source: "/quality", destination: "/infrastructure", permanent: false },
      { source: "/ready-stock", destination: "/contact", permanent: false },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
