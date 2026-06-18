import { servicesData } from "@/app/service/[slug]/data";

const baseUrl = "https://genikode.com";

const sameAs = [
  "https://linkedin.com/company/genikode",
  "https://instagram.com/thegenikode",
  "https://x.com/genikode",
];

const contactPoint = {
  "@type": "ContactPoint",
  telephone: "+92-300-2661456",
  email: "ghayas110@gmail.com",
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

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Genikode",
        legalName: "Genikode",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.jpg`,
        description:
          "Genikode is a premium digital agency specializing in high-performance web development, mobile apps, UI/UX, and brand building.",
        email: "ghayas110@gmail.com",
        telephone: "+92-300-2661456",
        founder: {
          "@type": "Person",
          name: "Ghayas Ali",
        },
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
        email: "ghayas110@gmail.com",
        telephone: "+92-300-2661456",
        priceRange: "$$",
        founder: {
          "@type": "Person",
          name: "Ghayas Ali",
        },
        address,
        contactPoint,
        sameAs,
        hasOfferCatalog: serviceCatalog,
        parentOrganization: { "@id": `${baseUrl}/#organization` },
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
