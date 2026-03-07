import { Metadata } from "next";
import ClientDetail, { projectsData } from "./ClientDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
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

export default function WorkPage() {
  return <ClientDetail />;
}
