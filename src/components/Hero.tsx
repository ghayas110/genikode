"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const services = [
  { label: "Websites", href: "/service/web-design" },
  { label: "Mobile Apps", href: "/service/mobile-app" },
  { label: "UI/UX", href: "/service/ui-ux" },
  { label: "Branding", href: "/service/brand-building" },
  { label: "SEO", href: "/service/seo" },
];

export default function Hero() {
  const comp = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = titleRef.current?.querySelectorAll(".word");

      if (words) {
        gsap.from(words, {
          y: 60,
          opacity: 0,
          rotateX: -90,
          stagger: 0.08,
          duration: 0.9,
          ease: "back.out(1.7)",
          delay: 0.4,
        });
      }

      gsap.from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.4,
      });

      gsap.from(".hero-service", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.6,
      });

      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 2,
      });

      gsap.from(".scroll-indicator", {
        y: -10,
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <Fragment key={index}>
        <span className="word inline-block">{word}</span>
        {index < words.length - 1 ? " " : null}
      </Fragment>
    ));
  };

  return (
    <section ref={comp} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Video Background — gradient paints instantly; the video fades in only
          once it can actually play, so the hero never sits blank while buffering. */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-zinc-900 via-black to-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover opacity-60"
        >
          {/* Optimized (~1MB, +faststart) with the original as fallback */}
          <source src="/hero-optimized.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="z-20 text-center px-4 w-full flex flex-col items-center justify-center h-full">
        {/* Eyebrow / tagline */}
        <p className="hero-eyebrow flex items-center gap-3 text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-white/70 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Digital Agency · Building for the World
        </p>

        {/* Headline / tagline */}
        <div className="max-w-[1100px] overflow-visible">
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white text-shadow-lg text-center text-balance leading-[1.05]">
            {splitText("We design, build & scale digital products the world loves.")}
          </h1>
        </div>

        {/* Services strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 mb-8 max-w-3xl">
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="hero-service text-sm md:text-base font-medium text-white/90 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm hover:bg-white hover:text-black transition-colors"
            >
              {service.label}
            </Link>
          ))}
        </div>

        <p className="hero-subtitle text-base md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Genikode partners with startups, founders, and growing businesses worldwide — turning bold ideas into fast, scalable websites, mobile apps, and brands, engineered with Next.js, React Native, and Node.js.
        </p>

        <div className="hero-cta flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300">
            Start Your Project
          </Link>
          <Link href="/agency" className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator — hidden on mobile so it doesn't collide with the CTAs */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/80 scroll-indicator cursor-pointer">
        <span className="text-sm uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
}
