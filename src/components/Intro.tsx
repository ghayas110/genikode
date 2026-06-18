import Link from "next/link";

export default function Intro() {
  return (
    <section
      aria-label="About Genikode"
      className="w-full bg-black text-white border-t border-zinc-900 py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
          About Genikode
        </p>
        <p className="text-xl md:text-3xl font-light leading-relaxed tracking-tight text-zinc-100">
          <span className="text-white font-medium">Genikode</span> is a digital
          agency based in{" "}
          <span className="text-white font-medium">Karachi, Pakistan</span>,
          founded by{" "}
          <span className="text-white font-medium">Ghayas Ali</span>. We build
          high-performance websites and mobile apps using{" "}
          <span className="text-white font-medium">
            Next.js, React Native, and Node.js
          </span>
          , and partner with startups, founders, and growing businesses
          worldwide.
        </p>
        <p className="mt-8 text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          Our services span web design and development, mobile app development,
          UI/UX design, SEO, branding, and social media management — engineered
          for speed, scalability, and measurable results.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/agency"
            className="text-sm font-medium border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Learn more about us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
