import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industryPages } from "@/data/industryPages";
import { BASE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries – Custom Software by Sector",
  description: "Custom software for event venues, manufacturers, healthcare and retail — booking systems, ERP, clinic management and POS, built around your workflow.",
  alternates: { canonical: `${BASE_URL}/industries` },
};

export default function IndustriesIndex() {
  return (
    <main className="bg-black text-white pt-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Custom software for your industry</h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          We build business systems around the way your team actually works — backed by real projects in each sector.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {industryPages.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="group rounded-3xl border border-zinc-800 p-7 hover:border-zinc-600 transition-colors">
              <h2 className="text-xl font-semibold mb-2">{p.serviceType}</h2>
              <p className="text-zinc-400 leading-relaxed">{p.metaDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 group-hover:text-white">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
