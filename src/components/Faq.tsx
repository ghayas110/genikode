import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  heading?: string;
  /** Optional eyebrow label shown above the heading */
  eyebrow?: string;
};

/**
 * Server component. Uses native <details>/<summary> so every answer is present
 * in the DOM (no JS required) — which is what AI crawlers and AEO need — and
 * emits FAQPage JSON-LD describing the same questions and answers.
 */
export default function Faq({ items, heading = "Frequently Asked Questions", eyebrow }: FaqProps) {
  if (!items?.length) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      aria-label={heading}
      className="w-full bg-black text-white border-t border-zinc-900 py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {eyebrow && (
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-balance">
          {heading}
        </h2>

        <div className="divide-y divide-zinc-800 border-t border-zinc-800">
          {items.map((item, index) => (
            <details key={index} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-lg md:text-xl font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDown className="w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
