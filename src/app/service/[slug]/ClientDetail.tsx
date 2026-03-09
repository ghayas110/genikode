"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

import { servicesData } from "./data";

export default function ClientDetail({ slug }: { slug: string }) {
  // Fallback to web-design if slug is not found
  const service = servicesData[slug] || servicesData["web-design"]; 

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Animations
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main ref={containerRef} className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* Back Button */}
      <Link href="/#services" className="fixed top-24 lg:top-32 left-4 lg:left-12 z-50 flex items-center gap-2 group mix-blend-difference overflow-hidden">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
        <span className="text-sm font-mono tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Back</span>
      </Link>

      {/* Hero Banner Section */}
      <section className="relative w-full h-[80vh] md:h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          style={{ y: yImage, opacity: opacityHero }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image 
            src={service.heroImage} 
            alt={service.title} 
            fill 
            className="object-cover grayscale contrast-[1.2] opacity-30 mix-blend-luminosity" 
            priority
          />
          {/* Vignette & Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 text-center"
        >
          <motion.div variants={fadeUpVariant} className="mb-6">
            <span className="text-zinc-500 font-mono tracking-[0.4em] uppercase text-xs md:text-sm py-2 px-6 border border-zinc-800 rounded-full backdrop-blur-sm">
               Service Division
            </span>
          </motion.div>
          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-[6rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tighter uppercase mb-6">
            {service.title}
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="text-xl md:text-3xl font-light text-zinc-400 italic font-serif">
            {service.subtitle}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-zinc-800 overflow-hidden relative">
               <motion.div 
                 animate={{ y: ["-100%", "100%"] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                 className="absolute inset-0 bg-white"
               />
            </div>
        </motion.div>
      </section>

      {/* Overview & The Genikode Approach */}
      <section className="py-24 md:py-48 px-4 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start"
        >
            <div>
               <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
                 {service.overview}
               </motion.h2>
               <motion.div variants={fadeUpVariant} className="w-24 h-[1px] bg-white mb-8" />
            </div>

            <div className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-700" />
               <motion.h3 variants={fadeUpVariant} className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500 mb-8 flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                 The Genikode Approach
               </motion.h3>
               <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed relative z-10">
                 {service.approach}
               </motion.p>
            </div>
        </motion.div>
      </section>

      {/* What We Offer / Capabilities Grid */}
      <section className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 text-center md:text-left"
          >
            <motion.h2 variants={fadeUpVariant} className="text-sm font-mono tracking-[0.3em] text-zinc-500 uppercase mb-4">
              Core Capabilities
            </motion.h2>
            <motion.h3 variants={fadeUpVariant} className="text-5xl md:text-7xl font-serif italic tracking-tighter">
              What we offer.
            </motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
            {service.offerings.map((item: any, idx: number) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className="group"
               >
                  <div className="flex items-start gap-6">
                     <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors duration-500" />
                     </div>
                     <div>
                        <h4 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-zinc-200 group-hover:text-white transition-colors duration-500">
                           {item.title}
                        </h4>
                        <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                           {item.desc}
                        </p>
                     </div>
                  </div>
                  <div className="w-full h-[1px] bg-zinc-900 mt-12 group-hover:bg-zinc-700 transition-colors duration-500" />
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="h-[60vh] flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer border-t border-white/5">
        <div className="absolute inset-0 z-0">
           <Image 
             src={service.heroImage} 
             alt={`${service.title} Contact`} 
             fill 
             className="object-cover opacity-10 group-hover:opacity-20 grayscale scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
           />
           <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <Link href="/contact" className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-400 mb-6 group-hover:text-white transition-colors"
            >
              Start a Project
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter text-zinc-600 transition-all duration-700 group-hover:text-white"
            >
              Let's Talk.
            </motion.h2>
        </Link>
      </section>
    </main>
  );
}
