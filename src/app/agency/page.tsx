import AgencyHero from "@/components/AgencyHero";
import AgencyTeam from "@/components/AgencyTeam";
import AgencyVision from "@/components/AgencyVision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Genikode – Software Development Company",
  description: "Genikode is a software development company building websites, mobile apps and custom software for clients worldwide. Meet the team and how we work.",
  openGraph: {
    title: "About Genikode | Software Development Company",
    description: "A software development company building websites, mobile apps and custom software for clients worldwide.",
    url: "https://genikode.com/agency",
  },
  alternates: {
    canonical: "https://genikode.com/agency",
  }
};

export default function AgencyPage() {
  return (
    <main>
      <AgencyHero />
      <AgencyTeam />
      <AgencyVision />
    </main>
  );
}
