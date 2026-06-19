import { Metadata } from "next";
import ClientDetail from "./ClientDetail";
import { servicesData } from "./data";
import Faq from "@/components/Faq";
import { getServiceFaqs } from "@/data/faqs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug] || servicesData["web-design"];

  return {
    title: `${service.title} Services | Genikode`,
    description: service.overview,
    openGraph: {
      title: `${service.title} | Genikode Elite Services`,
      description: service.overview,
      url: `https://genikode.com/service/${slug}`,
      images: [
        {
           url: service.heroImage,
           width: 1200,
           height: 630,
           alt: `${service.title} by Genikode`
        }
      ]
    },
    alternates: {
      canonical: `https://genikode.com/service/${slug}`
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug] || servicesData["web-design"];
  const serviceUrl = `https://genikode.com/service/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.overview,
    url: serviceUrl,
    image: service.heroImage,
    areaServed: { "@type": "Place", name: "Worldwide" },
    provider: {
      "@type": "Organization",
      "@id": "https://genikode.com/#organization",
      name: "Genikode",
      url: "https://genikode.com",
      logo: "https://genikode.com/logo.png",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} offerings`,
      itemListElement: (service.offerings ?? []).map(
        (offering: { title: string; desc: string }) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offering.title,
            description: offering.desc,
          },
        })
      ),
    },
  };

  return (
    <>
      <ClientDetail slug={slug} />
      <Faq
        items={getServiceFaqs(slug)}
        eyebrow="Questions"
        heading={`${service.title} — FAQs`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
