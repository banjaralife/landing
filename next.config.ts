import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/ingest/static/:path*',
          destination: 'https://eu-assets.i.posthog.com/static/:path*',
        },
        {
          source: '/ingest/:path*',
          destination: 'https://eu.i.posthog.com/:path*',
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/b/companion',
        destination: '/?utm_source=companion-brochure&utm_version=1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
