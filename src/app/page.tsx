import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import Tagline from "@/components/Tagline";
import Contact from "@/components/Contact";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Trust from "@/components/Trust";
import ContactOld from "@/components/ContactOld";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://genikode.com",
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <Hero />
      <OurServices />
      <Tagline />
   
      <Portfolio />

     <ContactOld/>
    </main>
  );
}
