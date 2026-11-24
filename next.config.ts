import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/courses/basic-bookkeeping',
        destination: '/courses/bookkeeping-invoicing',
        permanent: true,
      },
      {
        source: '/careers/basic-bookkeeping',
        destination: '/careers/bookkeeping-invoicing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
