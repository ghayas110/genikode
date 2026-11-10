import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CalendarCheck,
  FileText,
  Globe,
  Smartphone,
  Tag,
} from "lucide-react";
import CouponCard from "./CouponCard";
import { COUPON, OFFER_END_ISO, OFFER_PATH, OFFER_START, isOfferActive } from "./offer-config";

// Same appointment calendar the /offer page books into — bookings don't depend
// on the email API.
const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0hcu4p_LLATLlT5yM1Q3eSxMNjJGa1prIZn_shDrxOfNtoCCOhugrMgRnFDFwTh0AXJFTGMvNJ";

const PAGE_URL = `https://genikode.com${OFFER_PATH}`;

// Re-render hourly so the page flips to "offer ended" soon after the deadline.
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "10% Off Your First Website or App Project",
    description:
      "Start a new website, app or custom software project with Genikode by October 31 and get 10% off. Use code GENIKODE10.",
    alternates: { canonical: PAGE_URL },
    // Once the promotion has ended, keep the page reachable but out of the index.
    ...(isOfferActive() ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title: "10% Off Your First Website or App Project | Genikode",
      description:
        "Confirm your website, mobile app or custom software project before October 31 and get 10% off your first project.",
      url: PAGE_URL,
    },
  };
}

const services = [
  {
    icon: Globe,
    title: "Websites",
    body: "Fast, modern websites built with Next.js.",
    href: "/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    body: "iOS and Android apps built with React Native.",
    href: "/mobile-app-development",
  },
  {
    icon: Boxes,
    title: "Custom software",
    body: "ERP, POS and business management systems.",
    href: "/work",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book a free consultation",
    body: "Pick a time that suits you. We talk through what you want to build.",
  },
  {
    icon: FileText,
    title: "Get your scope and a clear quote",
    body: "We scope the project with you and send a clear quote.",
  },
  {
    icon: Tag,
    title: "Confirm by October 31 with GENIKODE10",
    body: "Confirm your project before the deadline and 10% comes off your first project.",
  },
];

export default function FirstProjectOfferPage() {
  const active = isOfferActive();

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${PAGE_URL}#offer`,
    name: "10% off your first website or app project",
    description:
      "10% off the first website, mobile app or custom software project for new clients who confirm between September 25 and October 31, 2026.",
    url: PAGE_URL,
    validFrom: OFFER_START,
    validThrough: OFFER_END_ISO,
    eligibleCustomerType: "New customer",
    seller: { "@id": "https://genikode.com/#organization" },
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {active && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Hero */}
        <section className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
            <span
              className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500 animate-pulse" : "bg-zinc-500"}`}
            />
            <span className="text-xs font-semibold tracking-widest uppercase">
              {active ? "Limited-time offer · Ends October 31" : "This offer has ended"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
            10% Off Your First
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              Website or App Project
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Planning a new website, mobile app or custom software system?
            {active
              ? " Confirm your project with Genikode before October 31 and get 10% off your first project."
              : " This promotion closed on October 31, 2026 — but we'd still love to hear about your project."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Book a free consultation <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full border border-zinc-700 text-white hover:border-zinc-400 transition-colors"
            >
              Send project details
            </Link>
          </div>
        </section>

        {/* Coupon */}
        {active && (
          <section className="mb-20 md:mb-24">
            <CouponCard code={COUPON} endIso={OFFER_END_ISO} />
          </section>
        )}

        {/* What qualifies */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            What you can build
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl">
            We build for clients worldwide. The discount applies to your first project in any of these.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-7 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-zinc-300 group-hover:text-white">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10">How it works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="p-7 rounded-3xl border border-zinc-800">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm font-mono text-zinc-500">0{i + 1}</span>
                  <Icon className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Final CTA */}
        <section className="text-center rounded-[2rem] border border-zinc-800 bg-zinc-900/30 px-6 py-14 mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            Start with a free consultation
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Scope your project and get a clear quote — no commitment.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            Book your consultation <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-6 text-sm text-zinc-500">
            Prefer to look first? <Link href="/work" className="underline hover:text-zinc-300">Browse our work</Link>.
          </p>
        </section>

        {/* Terms */}
        <section className="text-sm text-zinc-500 border-t border-zinc-800 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Offer terms
          </h2>
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Coupon code: {COUPON}</li>
            <li>
              Valid for new clients on projects confirmed between September 25 and October 31, 2026.
            </li>
            <li>Cannot be combined with other offers.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
