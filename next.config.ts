import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Allow first-party SVG posters (e.g. /images/work/crewlink-world.svg) to be
    // served through next/image. Safe here because we only host our own trusted
    // SVGs; the CSP below blocks any scripting inside them.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Canonical domain is https://genikode.com (no www). www served the full site
  // as a duplicate, so 301 it to the apex, keeping the path and query.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.genikode.com" }],
        destination: "https://genikode.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
