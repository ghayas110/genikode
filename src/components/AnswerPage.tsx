import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Faq from "@/components/Faq";
import type { FaqItem } from "@/components/Faq";

const baseUrl = "https://genikode.com";

export type AnswerPageData = {
  slug: string;
  // H1 answers the full human question, not just the keyword.
  h1: string;
  intro: string;
  // The one-sentence, AI-quotable answer to "what is this".
  definition: { heading: string; lead: string; body: string[] };
  process: { heading: string; intro?: string; steps: { title: string; desc: string }[] };
  cost: { heading: string; lead: string; startingPrice: string; factors: string[]; note?: string };
  // "Why us" block that answers trust / affordability / overseas-clients intent.
  trust: { heading: string; points: { title: string; desc: string }[] };
  faqs: FaqItem[];
  // schema
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
};

export default function AnswerPage({ data }: { data: AnswerPageData }) {
  const url = `${baseUrl}/${data.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: data.serviceType,
    serviceType: data.serviceType,
    description: data.metaDescription,
    url,
    areaServed: [
      { "@type": "Place", name: "Karachi" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Place", name: "Worldwide" },
    ],
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Genikode",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: data.serviceType, item: url },
    ],
  };

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 md:px-8 pt-36 md:pt-44 pb-20 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{data.serviceType}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1] mb-8">
          {data.h1}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
          {data.intro}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform">
            Start your project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/case-studies" className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            See our work
          </Link>
        </div>
      </section>

      {/* Definition */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">Definition</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">{data.definition.heading}</h2>
        <p className="text-xl md:text-2xl font-light leading-relaxed text-white mb-8 max-w-3xl">
          {data.definition.lead}
        </p>
        <div className="space-y-5 max-w-3xl">
          {data.definition.body.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-zinc-400 leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">Process</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">{data.process.heading}</h2>
        {data.process.intro && (
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-12 max-w-3xl">{data.process.intro}</p>
        )}
        <ol className="grid gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden md:grid-cols-2">
          {data.process.steps.map((step, i) => (
            <li key={i} className="bg-black p-8">
              <span className="block text-sm font-mono text-zinc-400 mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Cost */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">Cost</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">{data.cost.heading}</h2>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8 max-w-3xl">{data.cost.lead}</p>
        <div className="glass inline-flex flex-col rounded-2xl p-8 mb-8">
          <span className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-2">Starts from</span>
          <span className="text-4xl md:text-5xl font-bold tracking-tight">{data.cost.startingPrice}</span>
        </div>
        <ul className="space-y-3 max-w-3xl">
          {data.cost.factors.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-base md:text-lg text-white">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        {data.cost.note && (
          <p className="mt-6 text-sm text-zinc-400 max-w-3xl">{data.cost.note}</p>
        )}
      </section>

      {/* Trust / why us — answers the full human question */}
      <section className="px-6 md:px-8 py-16 md:py-20 border-t border-zinc-800 max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">Why Genikode</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-12">{data.trust.heading}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {data.trust.points.map((p, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (emits FAQPage schema) */}
      <Faq items={data.faqs} heading={`${data.serviceType} — FAQs`} eyebrow="Questions" />

      {/* Final CTA */}
      <section className="px-6 md:px-8 py-24 border-t border-zinc-800 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
          Ready to build with a team you can trust?
        </h2>
        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
          Genikode works with founders and businesses in Pakistan and across the world. Tell us about your project and get a clear, fixed quote.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
          Start your project <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
