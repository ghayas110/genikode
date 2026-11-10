// Genikode pricing — SINGLE SOURCE OF TRUTH (USD).
//
// Every price shown on the site (Services page, service pages, landing pages,
// FAQs, chatbot, guides and their structured data) reads from this file, so a
// change here updates everything at once.
//
// Ranges are "starting-from / typical" project prices, benchmarked against
// offshore-agency market rates for 2026. Entry points match the confirmed
// anchors from 2026-06-19 (websites from $600, mobile apps from $2,000).
// Review these against your own margins — they are business decisions.

export type PriceUnit = "project" | "month" | "hour";

export type PriceTier = {
  name: string;
  /** Lowest typical price in USD (used for display and schema minPrice). */
  min: number;
  /** Highest typical price in USD; omit for open-ended ("and up"). */
  max?: number;
  unit?: PriceUnit;
  bestFor: string;
  includes: string[];
  timeline?: string;
};

export type ServicePricing = {
  id: string;
  title: string;
  /** Canonical page for this service. */
  href: string;
  summary: string;
  tiers: PriceTier[];
};

export const WEBSITE_STARTING_PRICE = "$600";
export const APP_STARTING_PRICE = "$2,000";
export const HOURLY_RATE_RANGE = "$25–$45 per hour";

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

export function formatTierPrice(t: PriceTier): string {
  const suffix = t.unit === "month" ? " / month" : t.unit === "hour" ? " / hour" : "";
  if (t.max === undefined) return `${fmt(t.min)}+${suffix}`;
  return `${fmt(t.min)} – ${fmt(t.max)}${suffix}`;
}

export const pricing: ServicePricing[] = [
  {
    id: "website-development",
    title: "Website Development",
    href: "/web-development",
    summary: "Fast, search-friendly websites and web apps built with Next.js and Node.js.",
    tiers: [
      {
        name: "Starter Website",
        min: 600,
        max: 1500,
        bestFor: "Startups and small businesses that need a professional online presence.",
        includes: ["Up to 5 pages", "Responsive, custom design", "On-page SEO setup", "Contact form & analytics"],
        timeline: "2–3 weeks",
      },
      {
        name: "Business Website",
        min: 1500,
        max: 4000,
        bestFor: "Growing companies that need content management and integrations.",
        includes: ["5–15 pages", "CMS so your team can edit content", "Technical SEO & schema", "CRM / email integrations"],
        timeline: "3–6 weeks",
      },
      {
        name: "Custom Web Application",
        min: 5000,
        max: 25000,
        bestFor: "SaaS products, portals and dashboards with user accounts.",
        includes: ["User accounts & roles", "Dashboards and admin panel", "APIs, payments and third-party integrations", "Cloud deployment"],
        timeline: "6–16 weeks",
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    href: "/mobile-app-development",
    summary: "iOS and Android apps from one React Native codebase, with backend and admin panel.",
    tiers: [
      {
        name: "MVP App",
        min: 2000,
        max: 8000,
        bestFor: "Founders validating an idea with real users.",
        includes: ["iOS + Android (React Native)", "Core feature set", "Basic backend & authentication", "App Store / Play Store submission"],
        timeline: "4–8 weeks",
      },
      {
        name: "Business App",
        min: 8000,
        max: 20000,
        bestFor: "Businesses launching a full product to customers.",
        includes: ["Payments & subscriptions", "Push notifications", "Admin panel", "Analytics & crash reporting"],
        timeline: "8–14 weeks",
      },
      {
        name: "Complex Platform",
        min: 20000,
        bestFor: "Marketplaces, multi-role and real-time platforms.",
        includes: ["Multiple user roles", "Real-time features (chat, tracking)", "Complex integrations", "Scalable cloud architecture"],
        timeline: "3–6 months",
      },
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software (ERP, POS & Management Systems)",
    href: "/industries",
    summary: "Business systems built around your workflow — booking, POS, inventory, ERP and more.",
    tiers: [
      {
        name: "Single-Module System",
        min: 3000,
        max: 10000,
        bestFor: "One core workflow, e.g. bookings, POS or inventory.",
        includes: ["Workflow discovery", "Web-based system + admin", "Reports & exports", "Training and handover"],
        timeline: "4–10 weeks",
      },
      {
        name: "Multi-Module ERP / Platform",
        min: 10000,
        max: 40000,
        bestFor: "Companies replacing spreadsheets and disconnected tools.",
        includes: ["Multiple connected modules", "Role-based permissions", "Integrations with accounting / existing tools", "Data migration"],
        timeline: "3–6 months",
      },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    href: "/service/ui-ux",
    summary: "Research-led interface design for web and mobile products.",
    tiers: [
      { name: "UX Audit", min: 500, max: 1500, bestFor: "Existing products losing users or conversions.", includes: ["Heuristic review", "Prioritised fix list", "Annotated screens"], timeline: "1–2 weeks" },
      { name: "Product UI Design", min: 1500, max: 8000, bestFor: "New products or full redesigns.", includes: ["User flows & wireframes", "High-fidelity UI", "Clickable prototype", "Design system"], timeline: "2–6 weeks" },
    ],
  },
  {
    id: "logo-design",
    title: "Logo Design",
    href: "/service/logo-design",
    summary: "A distinctive, versatile mark for your brand.",
    tiers: [
      { name: "Logo Design", min: 300, max: 1200, bestFor: "New businesses and rebrands.", includes: ["3 initial concepts", "Revisions", "Full file pack (SVG, PNG, PDF)"], timeline: "1–2 weeks" },
    ],
  },
  {
    id: "brand-building",
    title: "Brand Identity",
    href: "/service/brand-building",
    summary: "A complete visual identity system and brand guidelines.",
    tiers: [
      { name: "Brand Identity", min: 1200, max: 5000, bestFor: "Companies building a brand from scratch.", includes: ["Logo & visual identity", "Colour & typography system", "Brand guidelines", "Core templates"], timeline: "3–6 weeks" },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    href: "/service/graphic-design",
    summary: "Marketing collateral and digital assets on brand.",
    tiers: [
      { name: "Design Project", min: 300, max: 1500, bestFor: "Campaigns, decks and marketing collateral.", includes: ["Social & ad creatives", "Presentations", "Print-ready files"], timeline: "1–3 weeks" },
    ],
  },
  {
    id: "video-animation",
    title: "Video Animation",
    href: "/service/video-animation",
    summary: "Explainer videos and motion graphics.",
    tiers: [
      { name: "Explainer Video (60–90s)", min: 800, max: 3000, bestFor: "Product launches and landing pages.", includes: ["Script & storyboard", "Animation", "Voice-over & music"], timeline: "2–4 weeks" },
    ],
  },
  {
    id: "motion",
    title: "Motion & Production",
    href: "/service/motion",
    summary: "High-end video production and motion design.",
    tiers: [
      { name: "Production Project", min: 1500, max: 6000, bestFor: "Brand films and campaign content.", includes: ["Concept & pre-production", "Motion design", "Editing & colour"], timeline: "3–6 weeks" },
    ],
  },
  {
    id: "3d-visualisation",
    title: "3D Visualisation",
    href: "/service/3d-visualisation",
    summary: "Photorealistic product renders and interactive 3D.",
    tiers: [
      { name: "3D Model / Scene", min: 400, max: 2500, bestFor: "Product visuals and interactive web 3D.", includes: ["Modelling & texturing", "Lighting & rendering", "Web-ready (Three.js) export on request"], timeline: "1–3 weeks" },
    ],
  },
  {
    id: "prototyping",
    title: "Rapid Prototyping",
    href: "/service/prototyping",
    summary: "Clickable prototypes to test an idea before full engineering.",
    tiers: [
      { name: "Clickable Prototype", min: 1500, max: 5000, bestFor: "Validating ideas with users and investors.", includes: ["Key user journeys", "Interactive prototype", "User-testing support"], timeline: "2–4 weeks" },
    ],
  },
  {
    id: "strategy",
    title: "Product Strategy",
    href: "/service/strategy",
    summary: "Discovery and roadmapping before you build.",
    tiers: [
      { name: "Discovery Workshop", min: 800, max: 3000, bestFor: "Teams scoping a new product.", includes: ["Requirements & scope", "Technical recommendations", "Roadmap & estimate"], timeline: "1–2 weeks" },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    href: "/service/seo",
    summary: "Technical, on-page and content SEO.",
    tiers: [
      { name: "SEO Retainer", min: 600, max: 2500, unit: "month", bestFor: "Businesses growing organic leads.", includes: ["Technical SEO", "Content & on-page optimisation", "Monthly reporting"], timeline: "Ongoing (3-month minimum recommended)" },
    ],
  },
  {
    id: "smm",
    title: "Social Media Management",
    href: "/service/smm",
    summary: "Content, scheduling and community management.",
    tiers: [
      { name: "SMM Retainer", min: 500, max: 2000, unit: "month", bestFor: "Brands building an audience.", includes: ["Content calendar", "Creative production", "Community management", "Monthly analytics"], timeline: "Ongoing" },
    ],
  },
  {
    id: "dedicated-developers",
    title: "Hire Dedicated Developers",
    href: "/hire-developers",
    summary: "React Native, Next.js and Node.js developers working as part of your team.",
    tiers: [
      { name: "Hourly", min: 25, max: 45, unit: "hour", bestFor: "Smaller tasks, maintenance and ongoing changes.", includes: ["Pay for hours used", "Weekly time reports", "No long-term commitment"] },
      { name: "Dedicated Developer", min: 3000, max: 5500, unit: "month", bestFor: "Ongoing product work needing a full-time engineer.", includes: ["Full-time (160 hrs / month)", "Works in your tools and standups", "Replaceable at no cost"] },
      { name: "Fixed-Price Project", min: 600, bestFor: "Well-defined projects with a clear scope.", includes: ["Agreed scope and milestones", "Fixed quote up front", "Payment by milestone"] },
    ],
  },
];

/** Map from /service/[slug] slugs to their pricing entry. */
const SERVICE_SLUG_TO_PRICING: Record<string, string> = {
  "logo-design": "logo-design",
  "video-animation": "video-animation",
  "graphic-design": "graphic-design",
  "ui-ux": "ui-ux",
  seo: "seo",
  smm: "smm",
  "brand-building": "brand-building",
  strategy: "strategy",
  "3d-visualisation": "3d-visualisation",
  prototyping: "prototyping",
  motion: "motion",
};

export function getPricing(id: string): ServicePricing | undefined {
  return pricing.find((p) => p.id === id);
}

export function getPricingForServiceSlug(slug: string): ServicePricing | undefined {
  const id = SERVICE_SLUG_TO_PRICING[slug];
  return id ? getPricing(id) : undefined;
}

/** schema.org Offer entries for a pricing entry (USD price ranges). */
export function pricingOffers(p: ServicePricing, baseUrl: string) {
  return p.tiers.map((t) => ({
    "@type": "Offer",
    name: `${p.title} — ${t.name}`,
    url: `${baseUrl}${p.href}`,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: t.min,
      ...(t.max !== undefined ? { maxPrice: t.max } : {}),
      ...(t.unit === "month" ? { unitText: "MONTH" } : t.unit === "hour" ? { unitText: "HOUR" } : {}),
    },
  }));
}
