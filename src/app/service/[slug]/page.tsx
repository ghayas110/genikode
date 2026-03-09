import { Metadata } from "next";
import ClientDetail, { servicesData } from "./ClientDetail";

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

export default function ServicePage() {
  return <ClientDetail />;
}
