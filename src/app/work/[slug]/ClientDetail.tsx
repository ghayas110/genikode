"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

import { projectsData } from "./data";

export default function ClientDetail({ slug }: { slug: string }) {
  const project = projectsData[slug] || projectsData["digitalbank"]; // Fallback

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animations
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
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
      <Link href="/work" className="fixed top-24 lg:top-32 left-4 lg:left-12 z-50 flex items-center gap-2 group mix-blend-difference">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
        <span className="text-sm font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Back</span>
      </Link>

      {/* Hero Banner Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden flex flex-col justify-end pb-20 px-4 md:px-12 border-b border-white/10">
        <motion.div 
          style={{ y: yImage }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover grayscale contrast-[1.1] opacity-40 mix-blend-luminosity" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </motion.div>

        <motion.div 
          style={{ y: yText }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 max-w-7xl mx-auto w-full"
        >
          <p className="text-zinc-500 font-mono tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            [ {project.category} ]
          </p>
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-medium leading-[0.9] tracking-tighter uppercase mb-8">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-8 md:gap-24 border-t border-white/20 pt-8">
            <div>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Year</p>
              <p className="text-lg md:text-xl font-light">{project.year}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Technologies</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 max-w-sm">
                {project.technology.map((tech: string) => (
                  <span key={tech} className="text-lg md:text-xl font-light">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        
        {/* Intro / What it is */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 md:mb-48"
        >
          <motion.h2 variants={fadeUpVariant} className="text-zinc-500 font-serif text-2xl italic mb-8">The Product</motion.h2>
          <motion.p variants={fadeUpVariant} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight">
            {project.productAbout}
          </motion.p>
        </motion.div>

        {/* Metrics / Results (only when a project defines them) */}
        {project.metrics?.length ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32 md:mb-48 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-y border-white/10 py-16"
          >
            {project.metrics.map(
              (metric: { value: string; suffix?: string; label: string }, i: number) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <p className="text-4xl md:text-6xl font-medium tracking-tighter">
                    {metric.value}
                    {metric.suffix ? <span>{metric.suffix}</span> : null}
                  </p>
                  <p className="mt-3 text-xs md:text-sm font-mono uppercase tracking-widest text-zinc-500">
                    {metric.label}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        ) : null}

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Left Column: Narrative */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 flex flex-col gap-24"
          >
            <div>
              <motion.h3 variants={fadeUpVariant} className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 mb-6 flex items-center gap-4">
                <span className="block w-8 h-[1px] bg-zinc-500"></span> How we started
              </motion.h3>
              <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                {project.howWeStarted}
              </motion.p>
            </div>

            <div>
              <motion.h3 variants={fadeUpVariant} className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 mb-6 flex items-center gap-4">
                <span className="block w-8 h-[1px] bg-zinc-500"></span> The Mission
              </motion.h3>
              <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                {project.mission}
              </motion.p>
            </div>

            <div>
              <motion.h3 variants={fadeUpVariant} className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 mb-6 flex items-center gap-4">
                <span className="block w-8 h-[1px] bg-zinc-500"></span> The Client's Problem
              </motion.h3>
              <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                {project.clientProblem}
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column: Execution */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-4 md:col-start-9 flex flex-col gap-24 border-t md:border-t-0 border-zinc-800 pt-16 md:pt-0"
          >
            <div>
              <motion.h3 variants={fadeUpVariant} className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500 mb-6">
                [ The Challenges ]
              </motion.h3>
              <motion.p variants={fadeUpVariant} className="text-base text-zinc-400 font-light leading-relaxed">
                {project.challenges}
              </motion.p>
            </div>
            
            <motion.div variants={fadeUpVariant} className="p-8 bg-zinc-900 border border-white/5 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-white mb-6">
                [ The Solution ]
              </h3>
              <p className="text-base text-zinc-300 font-light leading-relaxed relative z-10">
                {project.solution}
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Gallery (only when a project defines images) */}
        {project.gallery?.length ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {project.gallery.map((src: string, i: number) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className={`relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] ${
                  i === 0 ? "md:col-span-2 md:aspect-[16/7]" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} — interface ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </section>

      {/* Next Project Footer (Mock) */}
      <section className="h-[50vh] flex flex-col items-center justify-center border-t border-white/10 relative overflow-hidden group cursor-pointer">
        <Link href="/work" className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-4 transition-colors group-hover:text-white">Next Project</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-700 transition-colors group-hover:text-white duration-500">View Archive</h2>
        </Link>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700 z-0"></div>
      </section>
    </main>
  );
}
