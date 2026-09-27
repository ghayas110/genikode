"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CouponCard({ code, endIso }: { code: string; endIso: string }) {
  const [copied, setCopied] = useState(false);
  // Computed after mount so server and client HTML match.
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const ms = new Date(endIso).getTime() - Date.now();
    setDaysLeft(Math.max(0, Math.ceil(ms / 86_400_000)));
  }, [endIso]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the code is still visible to copy by hand */
    }
  }

  return (
    <div className="relative mx-auto max-w-2xl rounded-[2rem] border border-dashed border-zinc-700 bg-zinc-900/40 p-8 md:p-10 text-center overflow-hidden">
      <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl -z-10" />
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
        Your coupon code
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="font-mono text-3xl md:text-5xl font-bold tracking-wider select-all">
          {code}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy coupon code ${code}`}
          className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full border border-zinc-700 text-sm hover:border-zinc-400 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <p className="mt-5 text-zinc-400" aria-live="polite">
        10% off your first project
        {daysLeft !== null &&
          (daysLeft === 0
            ? " — last day to confirm"
            : ` — ${daysLeft} day${daysLeft === 1 ? "" : "s"} left to confirm`)}
      </p>
    </div>
  );
}
