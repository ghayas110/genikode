import type { Metadata } from "next";
import AnswerPage from "@/components/AnswerPage";
import { answerPages } from "@/data/answerPages";

const data = answerPages["web-development"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `https://genikode.com/${data.slug}` },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://genikode.com/${data.slug}`,
  },
};

export default function WebDevelopmentPage() {
  return <AnswerPage data={data} />;
}
