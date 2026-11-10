import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Faq from "@/components/Faq";
import type { FaqItem } from "@/components/Faq";
import PricingTiers from "@/components/PricingTiers";
import { pricing, pricingOffers, HOURLY_RATE_RANGE, WEBSITE_STARTING_PRICE, APP_STARTING_PRICE } from "@/data/pricing";
import { BASE_URL, BOOKING_URL } from "@/data/site";

const PAGE_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Services & Pricing in USD",
  description: `Transparent USD pricing for websites (from ${WEBSITE_STARTING_PRICE}), mobile apps (from ${APP_STARTING_PRICE}), custom software, design and SEO. Free consultation and fixed quotes.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Services & Pricing | Genikode",
    description: "Transparent USD pricing for websites, mobile apps, custom software, design and SEO.",
    url: PAGE_URL,
  },
};

const groups: { heading: string; ids: string[] }[] = [
  { heading: "Build", ids: ["website-development", "mobile-app-development", "custom-software"] },
  { heading: "Design & brand", ids: ["ui-ux", "logo-design", "brand-building", "graphic-design"] },
  { heading: "Video & 3D", ids: ["video-animation", "motion", "3d-visualisation"] },
  { heading: "Strategy & growth", ids: ["strategy", "prototyping", "seo", "smm"] },
  { heading: "Team extension", ids: ["dedicated-developers"] },
];

const factors = [
  { title: "Scope and features", desc: "The number of screens, user roles and features is the biggest driver of cost." },
  { title: "Design depth", desc: "Template-based layouts cost less than fully custom design systems and animation." },
  { title: "Integrations", desc: "Payments, CRMs, ERPs, maps and third-party APIs each add build and testing time." },
  { title: "Platforms", desc: "Web only, mobile only, or both — React Native lets one codebase serve iOS and Android." },
  { title: "Timeline", desc: "Compressed deadlines need more engineers working in parallel." },
  { title: "Ongoing support", desc: "Hosting, maintenance and new features after launch are quoted separately." },
];

const faqs: FaqItem[] = [
  {
    question: "Why are your prices lower than US or UK agencies?",
    answer:
      "Our team is based in Pakistan, where senior engineering costs less than in North America or Western Europe. You get the same modern stack (Next.js, React Native, Node.js) and a senior team, at offshore rates — and you work directly with the people building your product.",
  },
  {
    question: "Are these prices fixed?",
    answer:
      "They are typical ranges. After a free consultation we scope your project and send a fixed quote with milestones, so you know the total before any work starts.",
  },
  {
    question: "Which currency do you invoice in?",
    answer: "We quote and invoice international clients in US dollars (USD).",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. We work with startups and businesses worldwide, collaborating remotely across time zones with scheduled calls, async updates and shared project tracking.",
  },
  {
    question: "Can I hire a developer by the hour?",
    answer: `Yes. Hourly work is ${HOURLY_RATE_RANGE}, and dedicated full-time developers are available on a monthly basis. See our hire developers page for details.`,
  },
  {
    question: "How do payments work?",
    answer:
      "Fixed-price projects are paid by milestone — typically a deposit to start, then payments as agreed milestones are delivered. Retainers and dedicated developers are billed monthly.",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${PAGE_URL}#catalog`,
    name: "Genikode services and pricing",
    url: PAGE_URL,
    provider: { "@id": `${BASE_URL}/#organization` },
    itemListElement: pricing.flatMap((p) => pricingOffers(p, BASE_URL)),
  };

  return (
    <main className="bg-black text-white pt-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <nav className="text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span>
          <span className="text-white">Services & Pricing</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          Services & pricing, in US dollars
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Websites, mobile apps, custom software, design and growth services for startups and businesses
          worldwide. Every range below is a typical project price — after a free consultation you get a
          fixed quote with clear milestones.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
            Book a free consultation <ArrowRight className="w-4 h-4" />
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center min-h-12 px-7 rounded-full border border-zinc-700 hover:border-zinc-400 transition-colors">
            Request a quote
          </Link>
        </div>

        {/* At a glance */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Websites from", value: WEBSITE_STARTING_PRICE },
            { label: "Mobile apps from", value: APP_STARTING_PRICE },
            { label: "Developers", value: HOURLY_RATE_RANGE.replace(" per hour", "/hr") },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl border border-zinc-800 p-6">
              <p className="text-sm text-zinc-500">{s.label}</p>
              <p className="text-3xl font-bold tracking-tight mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        {groups.map((g) => (
          <section key={g.heading} className="mt-20">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-8">{g.heading}</h2>
            <div className="space-y-16">
              {g.ids.map((id) => {
                const p = pricing.find((x) => x.id === id);
                return p ? <PricingTiers key={id} pricing={p} heading={p.title} showLink /> : null;
              })}
            </div>
          </section>
        ))}

        <section className="mt-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">What affects the price?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {factors.map((f) => (
              <div key={f.title} className="rounded-3xl border border-zinc-800 p-6">
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-zinc-400">
            Want a deeper breakdown? Read our guides to{" "}
            <Link href="/resources/app-development-cost" className="underline hover:text-white">app development cost</Link> and{" "}
            <Link href="/resources/website-development-cost" className="underline hover:text-white">website cost</Link>.
          </p>
        </section>
      </div>

      <Faq items={faqs} heading="Pricing — FAQs" eyebrow="Questions" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
