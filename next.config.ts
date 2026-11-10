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
      // Link reclamation: the old WordPress site's URLs are still indexed (and
      // may have backlinks). 301 them to the new equivalents so that link equity
      // isn't lost to 404s. Specific slugs first, then catch-alls.
      // (Old crypto/"free download" posts are intentionally NOT redirected —
      // they stay 404 so no spam signal is passed to real pages.)
      { source: "/portfolio/bliq", destination: "/work/digitalbank", statusCode: 301 },
      { source: "/portfolio/hhh", destination: "/work/welab", statusCode: 301 },
      { source: "/portfolio/:slug*", destination: "/work", statusCode: 301 },
      { source: "/blog/:path*", destination: "/case-studies", statusCode: 301 },
      // Common/old URLs that 404'd (/about is still in Google's index).
      { source: "/about", destination: "/agency", statusCode: 301 },
      { source: "/contact-us", destination: "/contact", statusCode: 301 },
      { source: "/pricing", destination: "/services", statusCode: 301 },
      // Duplicate service pages consolidated into their landing pages so they
      // don't compete for the same searches (see RETIRED_SERVICE_SLUGS).
      { source: "/service/web-design", destination: "/web-development", statusCode: 301 },
      { source: "/service/web-app", destination: "/web-development", statusCode: 301 },
      { source: "/service/mobile-app", destination: "/mobile-app-development", statusCode: 301 },
    ];
  },
};

export default nextConfig;
