import WorkList from "@/components/WorkList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio – Websites, Apps & Custom Software",
  description: "Browse websites, mobile apps and custom software Genikode has built for clients worldwide — from fintech and healthcare to retail and education.",
  openGraph: {
    title: "Portfolio | Genikode",
    description: "Websites, mobile apps and custom software built by Genikode.",
    url: "https://genikode.com/work",
  },
  alternates: {
    canonical: "https://genikode.com/work",
  }
};

export default function WorkPage() {
  return (
    <main>
      <WorkList />
    </main>
  );
}
