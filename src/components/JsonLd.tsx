import { servicesData } from "@/app/service/[slug]/data";

const baseUrl = "https://genikode.com";
const EMAIL = "info@genikode.com";
const TELEPHONE = "+92-300-2661456";

// Company social profiles. Also reused as the founder's sameAs (per project decision).
const sameAs = [
  "https://linkedin.com/company/genikode",
  "https://instagram.com/thegenikode",
  "https://x.com/genikode",
];

const contactPoint = {
  "@type": "ContactPoint",
  telephone: TELEPHONE,
  email: EMAIL,
  contactType: "customer service",
  areaServed: "Worldwide",
  availableLanguage: ["English", "Urdu"],
};

const address = {
  "@type": "PostalAddress",
  streetAddress: "A-12, Sector X-8, Gulshan-e-Maymar",
  addressLocality: "Karachi",
  addressRegion: "Sindh",
  postalCode: "75340",
  addressCountry: "PK",
};

const serviceCatalog = {
  "@type": "OfferCatalog",
  name: "Digital Agency Services",
  itemListElement: Object.entries(servicesData).map(([slug, service]) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.subtitle,
      url: `${baseUrl}/service/${slug}`,
    },
  })),
};

const orgId = `${baseUrl}/#organization`;
const founderId = `${baseUrl}/#founder`;

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Genikode",
        legalName: "Genikode",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.jpg`,
        description:
          "Genikode is a premium digital agency specializing in high-performance web development, mobile apps, UI/UX, and brand building.",
        email: EMAIL,
        telephone: TELEPHONE,
        founder: { "@id": founderId },
        address,
        contactPoint,
        sameAs,
        hasOfferCatalog: serviceCatalog,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        name: "Genikode",
        legalName: "Genikode",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.jpg`,
        description:
          "Premium digital agency in Karachi delivering web development, mobile apps, UI/UX, SEO, and brand building worldwide.",
        email: EMAIL,
        telephone: TELEPHONE,
        priceRange: "$$",
        founder: { "@id": founderId },
        address,
        contactPoint,
        sameAs,
        hasOfferCatalog: serviceCatalog,
        parentOrganization: { "@id": orgId },
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: "Ghayas Ali",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": orgId },
        url: baseUrl,
        image: `${baseUrl}/logo.png`,
        knowsAbout: [
          "Web Development",
          "Mobile App Development",
          "React Native",
          "Next.js",
          "Node.js",
          "UI/UX Design",
          "Brand Building",
          "Search Engine Optimization",
        ],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Genikode",
        description:
          "Genikode — digital agency building high-performance websites and mobile apps.",
        publisher: { "@id": orgId },
        inLanguage: "en",
        // NOTE: targets /search which does not exist yet — build that page so the
        // SearchAction resolves, or remove this potentialAction.
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
