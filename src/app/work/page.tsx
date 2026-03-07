import WorkList from "@/components/WorkList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Tracker & Portfolio",
  description: "Explore our portfolio of award-winning digital experiences, high-performance apps, and elegant web platforms engineered by Genikode.",
  openGraph: {
    title: "Portfolio | Genikode Elite Solutions",
    description: "Explore our stunning case studies and projects.",
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
