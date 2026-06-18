import { Metadata } from "next";
import ClientDetail from "./ClientDetail";
import { projectsData } from "./data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = projectsData[slug] || projectsData["digitalbank"];

  return {
    title: `${project.title} | ${project.category} Case Study`,
    description: project.productAbout,
    openGraph: {
      title: `${project.title} - Genikode Case Study`,
      description: project.productAbout,
      url: `https://genikode.com/work/${slug}`,
      images: [
        {
           url: project.image,
           width: 1200,
           height: 630,
           alt: `${project.title} Case Study`
        }
      ]
    },
    alternates: {
      canonical: `https://genikode.com/work/${slug}`
    }
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = projectsData[slug] || projectsData["digitalbank"];

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} — ${project.category}`,
    abstract: project.productAbout,
    genre: project.category,
    dateCreated: project.year,
    url: `https://genikode.com/work/${slug}`,
    image: `https://genikode.com${project.image}`,
    keywords: project.technology,
    creator: {
      "@type": "Organization",
      name: "Genikode",
      url: "https://genikode.com",
    },
  };

  return (
    <>
      <ClientDetail slug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
    </>
  );
}
