import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to engineer your digital future? Reach out to Genikode and let's create something extraordinary together.",
  openGraph: {
    title: "Contact Genikode | Elite Digital Agency",
    description: "Let's chat and build something beautiful. Start a project with Genikode today.",
    url: "https://genikode.com/contact",
  },
  alternates: {
    canonical: "https://genikode.com/contact",
  }
};

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      
     
      {/* Existing Contact Form Component */}
      <Contact />

    </main>
  );
}
