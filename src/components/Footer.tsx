"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sitemap = [
  { name: "Home", href: "/" },
  { name: "Our Agency", href: "/agency" },
  { name: "Portfolio", href: "/work" }, // Assuming a /work page exists or will act as an archive
  { name: "Contact Us", href: "/contact" },
];

const socials = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "Dribbble", href: "https://dribbble.com" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the huge text
      gsap.to(titleRef.current, {
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="bg-black text-white pt-24 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="mb-8">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    GNKD®.
                </Link>
            </div>
            <div className="text-zinc-500 text-sm max-w-xs">
              <p>Crafting digital experiences that merge art, technology, and human interaction.</p>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Sitemap</h3>
            <ul className="space-y-4">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-lg md:text-xl font-medium text-white hover:text-zinc-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
             <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Socials</h3>
             <ul className="space-y-4">
              {socials.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} target="_blank" className="text-lg md:text-xl font-medium text-white hover:text-zinc-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Massive Text */}
        <div className="relative border-t border-zinc-900 pt-8 flex flex-col items-center">
             <div className="w-full flex justify-between items-center text-xs text-zinc-600 mb-4 uppercase tracking-widest">
                <span>© {new Date().getFullYear()} Genikode</span>
                <span>All Rights Reserved</span>
             </div>
             
             <h1 
                ref={titleRef}
                className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-white select-none whitespace-nowrap translate-y-20"
             >
                GENIKODE
             </h1>
        </div>

      </div>
    </footer>
  );
}
