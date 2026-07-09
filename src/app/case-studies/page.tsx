import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/app/work/[slug]/data";

const baseUrl = "https://genikode.com";

// Curated case-study order for the hub.
const order = [
  "crewlink-world",
  "pos-system",
  "restaurant-management-system",
  "textile-erp",
  "clinic-management-system",
  "digitalbank",
  "welab",
  "papersdock",
  "xpertva",
];
const studies = order
  .filter((slug) => projectsData[slug])
  .map((slug) => ({ slug, ...projectsData[slug] }));

export const metadata: Metadata = {
  title: "Case Studies — Real Products We've Built | Genikode",
  description:
    "Explore Genikode's case studies across fintech, healthcare, education, aviation, and corporate web — real products built for clients in Pakistan and worldwide with Next.js, React Native, and Node.js.",
  alternates: { canonical: `${baseUrl}/case-studies` },
  openGraph: {
    title: "Case Studies | Genikode",
    description: "Real products, real clients, real outcomes — explore Genikode's work.",
    url: `${baseUrl}/case-studies`,
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${baseUrl}/case-studies#collection`,
  name: "Genikode Case Studies",
  description:
    "A collection of digital product case studies built by Genikode for clients in Pakistan and worldwide.",
  url: `${baseUrl}/case-studies`,
  isPartOf: { "@id": `${baseUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: studies.map((study, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${baseUrl}/work/${study.slug}`,
      name: study.title,
    })),
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 md:px-8 pt-36 md:pt-44 pb-16 max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">Case Studies</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          Case studies: real products, real outcomes.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
          A closer look at digital products Genikode has designed and engineered across fintech, healthcare,
          education, aviation, and corporate web — for clients in Pakistan and around the world.
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-8 pb-24 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group flex flex-col rounded-3xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={study.image}
                  alt={`${study.title} — ${study.category}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-600">{study.year}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-3 flex items-center gap-2">
                  {study.title}
                  <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                </h2>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed line-clamp-3">
                  {study.productAbout}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-24 border-t border-zinc-900 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
          Want to be our next case study?
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
          Tell us about your product and get a clear, fixed quote from a team trusted by clients worldwide.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
          Start your project <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
    </main>
  );
}
