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
};

export default nextConfig;
