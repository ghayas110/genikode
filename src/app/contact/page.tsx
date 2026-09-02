import Contact from "@/components/Contact";
import LocationMap, { MAPS_LINK } from "@/components/LocationMap";
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

      {/* Location — map + address builds trust and shows we're a real, local team */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid gap-8 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Visit us</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">Find us in Karachi</h2>
            <address className="not-italic text-zinc-400 leading-relaxed space-y-2">
              <p>
                A-12, Sector X-8, Gulshan-e-Maymar,
                <br />
                Karachi, Sindh, Pakistan
              </p>
              <p>
                <a href="tel:+923002661456" className="hover:text-white transition-colors">
                  +92 300 2661456
                </a>
              </p>
              <p>
                <a href="mailto:info@genikode.com" className="hover:text-white transition-colors">
                  info@genikode.com
                </a>
              </p>
            </address>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Get directions
            </a>
          </div>
          <div className="md:col-span-3">
            <LocationMap height={360} />
          </div>
        </div>
      </section>

    </main>
  );
}
