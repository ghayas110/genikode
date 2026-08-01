import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram } from "lucide-react";

const baseUrl = "https://genikode.com";
const founderId = `${baseUrl}/#founder`;

const sameAs = [
  "https://linkedin.com/company/genikode",
  "https://instagram.com/thegenikode",
  "https://x.com/genikode",
];

const expertise = [
  "Web Development (Next.js, React)",
  "Mobile App Development (React Native)",
  "Back-end Engineering (Node.js)",
  "UI/UX & Product Design",
  "Technical SEO & Performance",
  "Brand Building & Strategy",
];

export const metadata: Metadata = {
  title: "Ghayas Ali — Founder & CEO of Genikode",
  description:
    "Meet Ghayas Ali, founder and CEO of Genikode — a Karachi-based digital agency building high-performance websites and mobile apps for clients worldwide with Next.js, React Native, and Node.js.",
  alternates: { canonical: `${baseUrl}/founder` },
  openGraph: {
    title: "Ghayas Ali — Founder & CEO of Genikode",
    description:
      "Meet Ghayas Ali, founder and CEO of Genikode, building web and mobile products for clients worldwide.",
    url: `${baseUrl}/founder`,
    images: [{ url: "/images/team/ghayas.png", width: 800, height: 800, alt: "Ghayas Ali, Founder of Genikode" }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": founderId,
  name: "Ghayas Ali",
  jobTitle: "Founder & CEO",
  description:
    "Ghayas Ali is the founder and CEO of Genikode, a Karachi-based digital agency building high-performance websites and mobile apps for clients worldwide.",
  url: `${baseUrl}/founder`,
  image: `${baseUrl}/images/team/ghayas.png`,
  worksFor: {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Genikode",
    url: baseUrl,
  },
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "React Native",
    "Next.js",
    "Node.js",
    "UI/UX Design",
    "Brand Building",
    "Search Engine Optimization",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  sameAs,
};

export default function FounderPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 md:px-8 pt-36 md:pt-44 pb-16 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Founder</span>
        </nav>

        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800">
              <Image
                src="/images/team/ghayas.png"
                alt="Ghayas Ali, Founder & CEO of Genikode"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-5">Founder & CEO</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ghayas Ali</h1>
            <p className="text-lg md:text-xl text-white font-light leading-relaxed">
              Ghayas Ali is the founder and CEO of <Link href="/" className="underline hover:text-white">Genikode</Link>,
              a Karachi-based digital agency building high-performance websites and mobile apps for founders and
              businesses around the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://linkedin.com/company/genikode" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://instagram.com/thegenikode" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Work with Ghayas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">About Ghayas</h2>
        <div className="space-y-6 text-base md:text-lg text-zinc-400 leading-relaxed">
          <p>
            Ghayas founded Genikode with a simple conviction: businesses anywhere in the world deserve digital
            products that are genuinely well-engineered — fast, reliable, and beautiful — without paying inflated
            agency prices. He leads the company hands-on, staying close to both the code and the client.
          </p>
          <p>
            His background is in full-stack engineering. He works across the modern web and mobile stack —
            building front-ends in Next.js and React, mobile apps in React Native, and back-ends in Node.js — and
            cares as much about performance, accessibility, and search visibility as he does about design.
          </p>
          <p>
            Under his leadership, Genikode has delivered products across fintech, healthcare, education, aviation,
            and corporate web — partnering with startups and established businesses alike, from Pakistan to clients
            overseas. He believes the best agency relationships are built on clear communication, fixed quotes, and
            shipping work that measurably moves the business.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">Expertise</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">Areas of focus</h2>
        <ul className="grid gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden md:grid-cols-2">
          {expertise.map((item) => (
            <li key={item} className="bg-black p-6 text-base md:text-lg text-white">{item}</li>
          ))}
        </ul>
      </section>

      {/* Proof / work */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Work & track record</h2>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8">
          The clearest measure of any founder is the work. Explore Genikode's case studies — real products,
          real clients, real outcomes — to see what the team builds.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
            View case studies <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/agency" className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            About the agency
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </main>
  );
}
