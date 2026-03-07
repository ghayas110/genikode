import AgencyHero from "@/components/AgencyHero";
import AgencyTeam from "@/components/AgencyTeam";
import AgencyVision from "@/components/AgencyVision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency",
  description: "Meet the great people doing great work. Learn about Genikode's core mission, our vision for a digital future, and the elite team that makes it happen.",
  openGraph: {
    title: "Agency | Genikode",
    description: "Meet the great people doing great work. Learn about Genikode's core mission, our vision for a digital future, and the elite team that makes it happen.",
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
