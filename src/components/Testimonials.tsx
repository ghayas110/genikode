/**
 * Testimonials section.
 *
 * ⚠️ PLACEHOLDER / MOCK CONTENT — the quotes and attributions below are samples,
 * not real client statements. Replace each `quote`, `name`, and `title` with the
 * actual words and attribution from the client before launch.
 *
 * Review / AggregateRating JSON-LD is intentionally NOT emitted here. Publishing
 * fabricated reviews as structured data violates Google's review snippet policy
 * and is deceptive to users. Once real, attributable quotes are in place, wire up
 * Review schema (see note at the bottom of this file).
 */

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  projectHref: string;
};

// TODO: Replace all mock content below with real, attributable client quotes.
const testimonials: Testimonial[] = [
  {
    quote:
      "Genikode rebuilt our banking app on React Native and Node.js and the difference was immediate — transactions feel instant and our users noticed. They shipped on time and treated security like it mattered.",
    name: "James Carter",
    title: "Founder & CEO",
    company: "Bliq",
    projectHref: "/work/digitalbank",
  },
  {
    quote:
      "The team understood healthcare's constraints from day one. Our telemedicine platform handles video consults and large diagnostic files smoothly, even on weak connections. A genuinely reliable partner.",
    name: "Emily Watson",
    title: "Product Lead",
    company: "Welab Health",
    projectHref: "/work/welab",
  },
  {
    quote:
      "Genikode turned a rigid LMS idea into a fluid, visual-first learning studio. Real-time collaboration on heavy design files just works. Our students and faculty love it.",
    name: "Taha Ali",
    title: "Founder & CEO",
    company: "Papersdock",
    projectHref: "/work/papersdock",
  },
  {
    quote:
      "Our new site finally matches our market position. The animations are stunning, the pages are fast, and our case-study engagement and lead quality both climbed after launch.",
    name: "Ali Abbas",
    title: "Founder & CEO",
    company: "Xpertva",
    projectHref: "/work/xpertva",
  },
];

import Link from "next/link";

export default function Testimonials() {
  return (
    <section
      aria-label="Client testimonials"
      className="w-full bg-white text-black py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-xs font-mono uppercase tracking-widest text-black/50 mb-6">
          What clients say
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl text-balance">
          Trusted by teams building ambitious products.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className="flex flex-col justify-between border border-black/15 rounded-2xl p-8 hover:border-black/40 transition-colors"
            >
              <blockquote className="text-lg md:text-xl font-light leading-relaxed text-black/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between gap-4">
                <div>
                  <span className="block font-semibold text-black">{t.name}</span>
                  <span className="block text-sm text-black/60">
                    {t.title},{" "}
                    <Link href={t.projectHref} className="underline hover:text-black">
                      {t.company}
                    </Link>
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * When real quotes are confirmed, add Review schema. Example shape to emit in a
 * <script type="application/ld+json"> (one Review per testimonial), attached to
 * the Organization or the relevant CreativeWork:
 *
 * {
 *   "@context": "https://schema.org",
 *   "@type": "Review",
 *   "itemReviewed": { "@type": "Organization", "name": "Genikode" },
 *   "author": { "@type": "Person", "name": "<real name>" },
 *   "reviewBody": "<real quote>",
 *   "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
 * }
 */
