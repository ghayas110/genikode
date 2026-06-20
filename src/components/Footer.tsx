"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sitemap = [
  { name: "Home", href: "/" },
  { name: "Our Agency", href: "/agency" },
  { name: "Founder", href: "/founder" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Web Development", href: "/web-development" },
  { name: "Mobile App Development", href: "/mobile-app-development" },
  { name: "Portfolio", href: "/work" }, // Assuming a /work page exists or will act as an archive
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const socials = [
  { name: "LinkedIn", href: "https://linkedin.com/company/genikode" },
  { name: "Instagram", href: "https://instagram.com/thegenikode" },
  { name: "X", href: "https://x.com/genikode" },

];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const pathname = usePathname();

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

  useEffect(() => {
    // Refresh ScrollTrigger after route changes and DOM updates
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    // Robustly handle height changes from dynamic content (loaded images, etc)
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    
    resizeObserver.observe(document.body);
    
    return () => {
      resizeObserver.disconnect();
    };
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
            <div className="mt-4 max-w-sm">
              <p className="text-zinc-400 text-sm leading-relaxed">We are a premium digital agency specializing in high-performance web development, mobile applications, and custom software solutions designed to scale your business.</p>

              {/* NAP — Name, Address, Phone (feeds LocalBusiness schema + local/"near me" AI answers) */}
              <address className="not-italic mt-8 space-y-2 text-sm text-zinc-400">
                <p className="text-white font-medium">Genikode</p>
                <p>
                  A-12, Sector X-8, Gulshan-e-Maymar,<br />
                  Karachi, Sindh, Pakistan
                </p>
                <p>
                  <a href="tel:+923002661456" className="hover:text-white transition-colors">
                    +92 300 2661456
                  </a>
                </p>
                <p>
                  <a href="mailto:info@genikode.com" className="hover:text-white transition-colors">
                    info@genikode.com
                  </a>
                </p>
              </address>
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
