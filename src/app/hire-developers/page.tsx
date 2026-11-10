import type { Metadata } from "next";
import AnswerPage from "@/components/AnswerPage";
import { hireDevelopersPage as data } from "@/data/industryPages";
import { BASE_URL } from "@/data/site";

const url = `${BASE_URL}/${data.slug}`;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: data.metaTitle, description: data.metaDescription, url },
};

export default function HireDevelopersPage() {
  return <AnswerPage data={data} />;
}
