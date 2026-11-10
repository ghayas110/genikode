import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnswerPage from "@/components/AnswerPage";
import { getIndustryPage, industryPages } from "@/data/industryPages";
import { BASE_URL } from "@/data/site";

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug.replace("industries/", "") }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getIndustryPage(slug);
  if (!data) return {};
  const url = `${BASE_URL}/${data.slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: data.metaTitle, description: data.metaDescription, url },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getIndustryPage(slug);
  if (!data) notFound();
  return <AnswerPage data={data} />;
}
