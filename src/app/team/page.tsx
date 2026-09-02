import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const baseUrl = "https://genikode.com";

const team = [
  {
    id: "ghayas",
    schemaId: `${baseUrl}/#founder`,
    name: "Ghayas Ali",
    role: "Founder & CEO",
    image: "/images/team/ghayas.png",
    bio: "Ghayas leads Genikode hands-on, staying close to both the code and the client. A full-stack engineer at heart, he works across the modern web and mobile stack — Next.js, React, React Native, and Node.js — and cares as much about performance and search visibility as he does about design.",
    knowsAbout: ["Web Development", "Mobile App Development", "Next.js", "Node.js", "UI/UX Design"],
    link: "/founder",
  },
  {
    id: "kisa",
    schemaId: `${baseUrl}/#cofounder`,
    name: "Kisa Ghayas",
    role: "Co-Founder & CTO",
    image: "/images/team/kisa.png",
    bio: "Kisa works across the technical side of the business, moving projects from direction to delivery. She partners with the creative and engineering teams on platforms where precision, judgment, and reliability matter, keeping quality high as work ships.",
    knowsAbout: ["Software Engineering", "Technical Architecture", "Product Delivery"],
    link: null as string | null,
  },
];

export const metadata: Metadata = {
  title: "About the Team",
  description:
    "Meet the people behind Genikode — a Karachi-based digital agency led by founder Ghayas Ali and co-founder Kisa Ghayas, building websites and mobile apps for clients worldwide.",
  alternates: { canonical: `${baseUrl}/team` },
  openGraph: {
    title: "About the Team | Genikode",
    description: "Meet the people behind Genikode, a Karachi-based digital agency.",
    url: `${baseUrl}/team`,
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": team.map((m) => ({
    "@type": "Person",
    "@id": m.schemaId,
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    image: `${baseUrl}${m.image}`,
    url: m.link ? `${baseUrl}${m.link}` : `${baseUrl}/team`,
    worksFor: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Genikode", url: baseUrl },
    knowsAbout: m.knowsAbout,
  })),
};

export default function TeamPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 md:px-8 pt-36 md:pt-44 pb-16 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Team</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          The people behind Genikode.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
          A small, senior team in Karachi building web and mobile products for founders and businesses worldwide.
          Real people you talk to directly, not a faceless agency.
        </p>
      </section>

      {/* Team */}
      <section className="px-6 md:px-8 pb-24 max-w-5xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          {team.map((m) => (
            <article key={m.id} className="flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-800">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.role} at Genikode`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold tracking-tight">{m.name}</h2>
                <p className="mt-1 text-sm font-mono uppercase tracking-widest text-zinc-400">{m.role}</p>
                <p className="mt-4 text-base text-zinc-400 leading-relaxed">{m.bio}</p>
                {m.link && (
                  <Link
                    href={m.link}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white hover:gap-2.5 transition-all"
                  >
                    Read full bio <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-24 border-t border-zinc-800 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
          Want to work with us directly?
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
          You&apos;ll talk to the founders, not a sales layer. Tell us about your project and get a clear, fixed quote.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          Start a project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
    </main>
  );
}
