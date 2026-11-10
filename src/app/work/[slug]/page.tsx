import { Metadata } from "next";
import ClientDetail from "./ClientDetail";
import { projectsData } from "./data";
import { trimDescription } from "@/data/site";

// Pre-render every case study as static HTML (fast, reliably crawlable).
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = projectsData[slug] || projectsData["digitalbank"];

  // Keep the title within ~60 chars once the " | Genikode" template is added:
  // drop "Case Study" when it would overflow.
  const full = `${project.title} – ${project.category} Case Study`;
  const title = full.length <= 49 ? full : `${project.title} – ${project.category}`;
  const description = trimDescription(project.productAbout);

  return {
    title,
    description,
    openGraph: {
      title: `${project.title} - Genikode Case Study`,
      description,
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
