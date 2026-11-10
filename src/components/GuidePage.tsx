import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Faq from "@/components/Faq";
import type { FaqItem } from "@/components/Faq";
import { BASE_URL, BOOKING_URL } from "@/data/site";

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { caption?: string; head: string[]; rows: string[][] };
  /** Optional paragraphs rendered after the table/bullets. */
  after?: string[];
};

export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Direct, quotable answer shown at the top (answer engines / AI search). */
  shortAnswer: string;
  published: string; // ISO date
  updated: string; // ISO date
  readMinutes: number;
  sections: GuideSection[];
  faqs: FaqItem[];
  related: { title: string; href: string }[];
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" });

export default function GuidePage({ guide }: { guide: Guide }) {
  const url = `${BASE_URL}/resources/${guide.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.h1,
    description: guide.metaDescription,
    url,
    mainEntityOfPage: url,
    datePublished: guide.published,
    dateModified: guide.updated,
    inLanguage: "en",
    image: `${BASE_URL}/og-image.jpg`,
    author: { "@type": "Person", "@id": `${BASE_URL}/#founder`, name: "Ghayas Ali", url: `${BASE_URL}/founder` },
    publisher: { "@id": `${BASE_URL}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE_URL}/resources` },
      { "@type": "ListItem", position: 3, name: guide.h1, item: url },
    ],
  };

  return (
    <main className="bg-black text-white pt-28">
      <article className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <nav className="text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/resources" className="hover:text-white">Resources</Link>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-balance">{guide.h1}</h1>
        <p className="mt-5 text-sm text-zinc-500">
          By <Link href="/founder" className="underline hover:text-zinc-300">Ghayas Ali</Link>, founder of Genikode ·
          Updated {fmtDate(guide.updated)} · {guide.readMinutes} min read
        </p>
        <p className="mt-8 text-lg md:text-xl text-zinc-300 leading-relaxed">{guide.intro}</p>

        {/* Direct answer — the block AI answer engines and featured snippets quote */}
        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">Short answer</p>
          <p className="text-base md:text-lg leading-relaxed text-white">{guide.shortAnswer}</p>
        </div>

        {/* Table of contents */}
        <nav className="mt-10 rounded-2xl border border-zinc-800 p-6" aria-label="Contents">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">In this guide</p>
          <ol className="space-y-2 list-decimal pl-5 text-zinc-300">
            {guide.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-white underline-offset-4 hover:underline">{s.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        {guide.sections.map((s, i) => (
          <section key={s.id} id={s.id} className="mt-14 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">{s.heading}</h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="text-zinc-300 leading-relaxed mb-4 text-[17px]">{p}</p>
            ))}
            {s.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-[17px] leading-relaxed mb-4">
                {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
            {s.table && (
              <div className="my-6 overflow-x-auto rounded-2xl border border-zinc-800">
                <table className="w-full text-left text-sm md:text-base">
                  {s.table.caption && <caption className="text-left text-sm text-zinc-500 p-4 pb-0">{s.table.caption}</caption>}
                  <thead>
                    <tr className="border-b border-zinc-800">
                      {s.table.head.map((h) => <th key={h} scope="col" className="p-4 font-semibold text-white whitespace-nowrap">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, j) => (
                      <tr key={j} className="border-b border-zinc-900 last:border-0">
                        {r.map((c, k) => <td key={k} className={`p-4 align-top ${k === 0 ? "text-white font-medium" : "text-zinc-300"}`}>{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.after?.map((p, j) => (
              <p key={j} className="text-zinc-300 leading-relaxed mb-4 text-[17px]">{p}</p>
            ))}

            {/* Mid-article call to action */}
            {i === Math.floor(guide.sections.length / 2) && (
              <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                <p className="text-zinc-200">Want an exact number for your project? Get a free scoping call and a fixed USD quote.</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                  Book a free call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </section>
        ))}

        <section className="mt-16 rounded-2xl border border-zinc-800 p-6">
          <h2 className="text-lg font-semibold mb-4">Related</h2>
          <ul className="space-y-2">
            {guide.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="inline-flex items-center gap-1 text-zinc-300 hover:text-white">
                  {r.title} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <Faq items={guide.faqs} heading="Frequently asked questions" eyebrow="FAQ" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
