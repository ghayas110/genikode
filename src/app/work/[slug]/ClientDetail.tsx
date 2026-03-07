"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

// Project Database
export const projectsData: Record<string, any> = {
  digitalbank: {
    title: "Bliq",
    category: "Fintech App",
    image: "/images/bliq.png",
    technology: ["React Native", "Node.js", "AWS", "GraphQL"],
    year: "2025",
    productAbout: "Bliq is a revolutionary digital banking platform designed to provide seamless financial management for the modern user. It integrates advanced analytics with intuitive money tracking, breaking the barriers of traditional banking.",
    howWeStarted: "The journey began with a bold observation: modern users are overwhelmed by their financial data but lack actionable insights. We set out to redefine what a banking app feels like—shifting from a mere utility to a personal financial advisor.",
    mission: "To simplify personal finance and empower individuals to make smarter monetary decisions through real-time data, beautiful interfaces, and uncompromising security.",
    clientProblem: "The client needed a scalable app capable of handling millions of simultaneous transactions while providing a personalized, zero-latency user experience. Existing solutions were clunky and alienating.",
    challenges: "Building a secure backend infrastructure that complied with strict international financial regulations while maintaining a blazing-fast front-end architecture, all within a tight go-to-market timeline.",
    solution: "We engineered a robust microservices architecture using Node.js and AWS, coupled with a highly optimized React Native frontend. We implemented end-to-end encryption protocols and a custom caching layer to ensure immediate data retrieval."
  },
  welab: {
    title: "Welab Health",
    category: "Healthcare App",
    image: "/images/welab.png",
    technology: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    year: "2024",
    productAbout: "Welab Health is a comprehensive telemedicine and diagnostics platform connecting patients with specialist doctors, providing AI-driven preliminary health assessments.",
    howWeStarted: "Healthcare accessibility was a persistent issue in rural areas. Welab approached us to digitize the clinic experience without losing the human touch of medical care.",
    mission: "To democratize healthcare access by leveraging technology to bridge the gap between medical professionals and patients, no matter their geographical location.",
    clientProblem: "Patients experienced long wait times for specialist consultations, and doctors lacked an integrated system to view comprehensive patient histories remotely.",
    challenges: "Integrating HIPAA-compliant video conferencing and securely transmitting large diagnostic files (like MRIs) over varying network conditions without packet loss.",
    solution: "We developed a highly optimized progressive web app and native apps, utilizing WebRTC for secure video pipelines and custom compression algorithms for rapid diagnostic file sharing."
  },
  papersdock: {
    title: "Papersdock",
    category: "LMS Platform",
    image: "/images/papersdock.png",
    technology: ["React", "Firebase", "TailwindCSS"],
    year: "2023",
    productAbout: "Papersdock is an innovative Learning Management System tailored for creative professionals and universities, emphasizing portfolio-based learning and peer reviews.",
    howWeStarted: "Traditional LMS systems were rigid and text-heavy. We wanted to build a visual-first platform where design students could seamlessly upload, annotate, and critique visual work.",
    mission: "To transform digital education from a passive viewing experience into an active, collaborative studio environment.",
    clientProblem: "Educational institutions needed a platform that supported ultra-high-resolution image annotation and real-time collaborative whiteboarding for design critiques.",
    challenges: "Managing state across dozens of concurrent users modifying the same visual canvas, ensuring performance didn't degrade with heavy asset loads.",
    solution: "We implemented an edge-rendered architecture using React and Firebase Realtime Database, with a custom canvas engine optimized for smooth panning and zooming on heavy files."
  },
  xpertva: {
    title: "Xpertva",
    category: "Corporate Website",
    image: "/images/xpertva.png",
    technology: ["Next.js", "Framer Motion", "Sanity CMS"],
    year: "2025",
    productAbout: "Xpertva is a premier corporate web presence for a global consulting agency, designed to project authority, innovation, and trust through enterprise-grade digital aesthetics.",
    howWeStarted: "Xpertva's legacy site was outdated and failed to reflect their market position. They needed a complete digital transformation that served as a powerful lead-generation engine.",
    mission: "To craft a digital headquarters that acts not just as a brochure, but as an interactive testament to the firm's strategic capabilities and modern approach.",
    clientProblem: "The client struggled with low engagement on their case studies and a disjointed user journey that caused high bounce rates on key service pages.",
    challenges: "Balancing high-end, immersive animations with stringent accessibility standards and rapid page load speeds required for global SEO rankings.",
    solution: "We built a statically generated Next.js site powered by a headless Sanity CMS. We used advanced Framer Motion techniques for scroll-jacking and parallax effects without sacrificing performance."
  }
};

export default function ClientDetail() {
  const params = useParams();
  const slug = params?.slug as string;
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
