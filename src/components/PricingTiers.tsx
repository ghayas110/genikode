import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { formatTierPrice, type ServicePricing } from "@/data/pricing";

/** Renders a service's USD price tiers. Server component — fully crawlable. */
export default function PricingTiers({
  pricing,
  heading,
  showLink = false,
}: {
  pricing: ServicePricing;
  heading?: string;
  showLink?: boolean;
}) {
  const cols =
    pricing.tiers.length >= 3 ? "md:grid-cols-3" : pricing.tiers.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-xl";

  return (
    <div>
      {heading && (
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{heading}</h3>
            <p className="text-zinc-400 mt-2 max-w-2xl">{pricing.summary}</p>
          </div>
          {showLink && (
            <Link href={pricing.href} className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      )}
      <div className={`grid grid-cols-1 ${cols} gap-4`}>
        {pricing.tiers.map((t) => (
          <div key={t.name} className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{t.name}</p>
            <p className="mt-3 text-3xl font-bold tracking-tight">{formatTierPrice(t)}</p>
            {t.timeline && <p className="mt-1 text-sm text-zinc-500">Typical timeline: {t.timeline}</p>}
            <p className="mt-4 text-zinc-300 leading-relaxed">{t.bestFor}</p>
            <ul className="mt-5 space-y-2.5 text-zinc-400">
              {t.includes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
