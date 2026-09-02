"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData } from "@/app/work/[slug]/data";

gsap.registerPlugin(ScrollTrigger);

// Scattered project cards — real work, full colour, framing the headline.
// { slug, left%, top%, width px, rotation deg, aspectRatio }
const layout = [
  { slug: "digitalbank", l: 12, t: 20, w: 216, r: -7, ar: "4 / 3" },
  { slug: "welab", l: 35, t: 13, w: 150, r: 5, ar: "4 / 5" },
  { slug: "xpertva", l: 63, t: 15, w: 208, r: -4, ar: "16 / 10" },
  { slug: "papersdock", l: 87, t: 24, w: 168, r: 6, ar: "4 / 5" },
  { slug: "sarah-palace", l: 11, t: 66, w: 190, r: 5, ar: "4 / 3" },
  { slug: "pos-system", l: 34, t: 80, w: 160, r: -6, ar: "4 / 3" },
  { slug: "restaurant-management-system", l: 62, t: 78, w: 150, r: 7, ar: "4 / 5" },
  { slug: "clinic-management-system", l: 88, t: 66, w: 206, r: -5, ar: "4 / 3" },
];

const cards = layout
  .filter((c) => projectsData[c.slug])
  .map((c) => ({
    ...c,
    title: projectsData[c.slug].title as string,
    category: projectsData[c.slug].category as string,
    image: projectsData[c.slug].image as string,
  }));

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const comp = useRef<HTMLElement>(null);

  // GSAP: entrance + gentle perpetual float for the scattered cards.
  // Motivated: makes the work feel alive and invites clicking through.
  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".float-card");
      els.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          duration: 0.7,
          delay: 0.15 + i * 0.07,
          ease: "power3.out",
        });
        gsap.to(el, {
          y: "-=12",
          duration: 2.6 + (i % 3) * 0.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.6 + i * 0.12,
        });
      });

      // Scroll-driven zoom-out: cards start clustered + small behind the
      // headline, then spread to their full scattered positions as you scroll.
      gsap.fromTo(
        ".cards-layer",
        { scale: 0.42, transformOrigin: "50% 50%" },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: comp.current,
            start: "top top",
            end: "+=90%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-black text-white"
    >
      {/* Scattered project cards — desktop. `cards-layer` is scrubbed by scroll
          (clustered -> spread) for the zoom-out reveal. */}
      <div className="cards-layer absolute inset-0 hidden [will-change:transform] lg:block">
        {cards.map((c) => (
          <div
            key={c.slug}
            className="absolute"
            style={{ left: `${c.l}%`, top: `${c.t}%`, width: c.w, transform: "translate(-50%, -50%)" }}
          >
            <div className="float-card" style={{ transform: `rotate(${c.r}deg)`, willChange: "transform" }}>
              <Link
                href={`/work/${c.slug}`}
                aria-label={`${c.title}, ${c.category} case study`}
                className="group block"
              >
                <div
                  className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-[1.06]"
                  style={{ aspectRatio: c.ar }}
                >
                  <Image
                    src={c.image}
                    alt={`${c.title}, ${c.category}`}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-white/30" />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                  {c.title}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-center justify-center px-6 py-28 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="pointer-events-none"
        >
          <motion.p
            variants={item}
            className="mb-6 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-white/60"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Digital agency, worldwide
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            We design, build and scale digital products.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/60 md:text-lg"
          >
            Websites, mobile apps, and brands for founders worldwide.
          </motion.p>

          <motion.div
            variants={item}
            className="pointer-events-auto mt-9 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95"
            >
              See our work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-black active:scale-95"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile: horizontal scroll strip of the work */}
        <div className="mt-14 w-screen lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cards.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                aria-label={`${c.title}, ${c.category} case study`}
                className="group relative aspect-[4/5] w-40 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 text-left"
              >
                <Image
                  src={c.image}
                  alt={`${c.title}, ${c.category}`}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute inset-x-3 bottom-3">
                  <span className="block text-sm font-semibold text-white">{c.title}</span>
                  <span className="block text-[11px] text-white/60">{c.category}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
