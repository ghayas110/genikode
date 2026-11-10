import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/data/guides";
import { BASE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Resources – Software Cost & Outsourcing Guides",
  description: "Practical guides on app and website costs, outsourcing software development and hiring developers — with real USD numbers.",
  alternates: { canonical: `${BASE_URL}/resources` },
};

export default function ResourcesIndex() {
  return (
    <main className="bg-black text-white pt-28">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Resources</h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Straight answers to the questions founders ask before building software — what it costs, how long it takes, and how to choose the right team.
        </p>
        <div className="mt-12 grid gap-4">
          {guides.map((g) => (
            <Link key={g.slug} href={`/resources/${g.slug}`} className="group rounded-3xl border border-zinc-800 p-7 hover:border-zinc-600 transition-colors">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">{g.h1}</h2>
              <p className="text-zinc-400 leading-relaxed">{g.metaDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-300 group-hover:text-white">
                Read the guide · {g.readMinutes} min <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
