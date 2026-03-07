"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: "/images/agency/agency_1.png", alt: "Studio 1" },
  { id: 2, src: "/images/agency/agency_2.png", alt: "Studio 2" },
  { id: 3, src: "/images/agency/agency_3.png", alt: "Studio 3" },
  { id: 4, src: "/images/agency/agency_4.png", alt: "Studio 4" },
  { id: 5, src: "/images/agency/agency_5.png", alt: "Studio 5" },
];

export default function AgencyHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const StarIcon = () => (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="inline-block mx-4 align-middle text-white/40"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );

  return (
    <section className="relative w-full min-h-screen bg-black text-white pt-40 pb-20 overflow-hidden">
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] z-10"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-20">
        {/* Typography Section */}
        <div className="mb-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-[88px] font-serif leading-[1.1] tracking-tight max-w-5xl">
            A people-first 
            <StarIcon />
            digital studio who build with heart.
          </h1>
        </div>

        {/* Dynamic Image Gallery */}
        <div className="flex h-[200px] md:h-[250px] xl:h-[270px] gap-3 w-full">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5"
              initial={false}
              animate={{
                flex: hoveredIndex === index ? 3 : hoveredIndex === null ? 1 : 0.6,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-60"
                }`}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Subtle Overlay on Inactive */}
              <div 
                className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-20"
                }`} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}</style>
    </section>
  );
}
