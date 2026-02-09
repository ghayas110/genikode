"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  service: string;
  year: string;
  image: string;
  href: string;
}

const projects: Project[] = [
  {
    id: "ozarke",
    title: "Ozarké®",
    category: "E-Commerce",
    service: "Shopify Website",
    year: "2025",
    image: "/images/work/ozarke.png",
    href: "#",
  },
  {
    id: "integrated-reasoning",
    title: "Integrated Reasoning®",
    category: "Technology",
    service: "Corporate Website",
    year: "2024",
    image: "/images/work/integrated.png",
    href: "#",
  },
  {
    id: "atria-2",
    title: "Atria® 2.0",
    category: "Healthcare",
    service: "Platform Design",
    year: "2025",
    image: "/images/work/atria.png",
    href: "#",
  },
  {
    id: "metadrop",
    title: "MetaDrop®",
    category: "Web3",
    service: "Launchpad UI",
    year: "2023",
    image: "/images/work/metadrop.png",
    href: "#",
  },
  {
    id: "elva",
    title: "Elva®",
    category: "Design Agency",
    service: "Portfolio Website",
    year: "2022",
    image: "/images/work/ozarke.png",
    href: "#",
  },
  {
    id: "donorpal",
    title: "DonorPal®",
    category: "Non-Profit",
    service: "Mobile App",
    year: "2022",
    image: "/images/work/integrated.png",
    href: "#",
  },
];

export default function WorkList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animations for grid items
      const items = gsap.utils.toArray<HTMLElement>(".project-item");
      
      items.forEach((item, i) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 50 },
            {
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                }
            }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen w-full">
      
      {/* Header aligned with grid */}
      <div className="pt-32 pb-8 px-4 md:px-6 max-w-[1920px] mx-auto">
         <div className="flex justify-between items-end border-b border-white/20 pb-4">
             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Work</h1>
             <span className="text-sm font-mono opacity-60 hidden md:block">2022 — 2025</span>
         </div>
      </div>

      {/* Grid Layout - 2 Columns, tight spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-6 pb-24 max-w-[1920px] mx-auto">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={project.href}
            className="project-item group relative aspect-[4/3] overflow-hidden bg-zinc-900 block"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                priority={true}
              />
            </div>

            {/* Hover Overlay/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Reveal - Top Left */}
            <div className="absolute top-0 left-0 p-6 md:p-8 transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
                    {project.title}
                </h2>
                <div className="flex flex-col space-y-1 text-sm md:text-base font-medium text-white/80">
                    <span>{project.service}</span>
                    <span className="opacity-60">{project.year}</span>
                </div>
            </div>

             {/* Mobile: Always visible title at bottom if desired, or keep hidden/reveal on tap */}
             <div className="absolute bottom-6 left-6 md:hidden opacity-100">
                <span className="text-xl font-bold">{project.title}</span>
             </div>

          </Link>
        ))}
      </div>

      {/* Footer / Archive Link styled similarly */}
      <div className="px-4 md:px-6 pb-24 max-w-[1920px] mx-auto text-center">
        <Link href="#" className="inline-block text-xl md:text-2xl font-bold border-b border-white/30 hover:border-white pb-1 transition-colors">
            View Archive
        </Link>
      </div>

    </div>
  );
}
