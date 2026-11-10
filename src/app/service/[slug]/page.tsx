import { Metadata } from "next";
import ClientDetail from "./ClientDetail";
import { servicesData, activeServiceSlugs } from "./data";
import Faq from "@/components/Faq";
import { getServiceFaqs } from "@/data/faqs";
import PricingTiers from "@/components/PricingTiers";
import { getPricingForServiceSlug, pricingOffers } from "@/data/pricing";
import { BASE_URL, trimDescription } from "@/data/site";

// Pre-render every service page as static HTML at build time so Google can crawl
// them reliably (and fast). Retired slugs 301 to their landing pages instead.
export function generateStaticParams() {
  return activeServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData[slug] || servicesData["web-design"];

  return {
    // Root layout applies the "%s | Genikode" template, so keep the brand out here
    // (otherwise the title doubles: "… | Genikode | Genikode").
    title: `${service.title} Services`,
    description: trimDescription(service.overview),
    openGraph: {
      title: `${service.title} | Genikode Elite Services`,
      description: trimDescription(service.overview),
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
  const price = getPricingForServiceSlug(slug);

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
    ...(price ? { offers: pricingOffers(price, BASE_URL) } : {}),
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
      {price && (
        <section className="bg-black text-white border-t border-white/5 px-4 md:px-12 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">Pricing (USD)</p>
            <PricingTiers pricing={price} heading={`How much does ${price.title} cost?`} />
            <p className="mt-8 text-zinc-400 max-w-3xl">
              Typical ranges for clients worldwide. After a free consultation you get a fixed quote with milestones.{" "}
              <a href="/services" className="underline hover:text-white">See all services &amp; pricing</a>.
            </p>
          </div>
        </section>
      )}
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
