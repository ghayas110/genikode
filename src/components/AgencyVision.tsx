"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";

const capabilities = [
  { title: "Experience Strategy & Design", link: "/service/strategy", image: "/images/agency/strategy.png" },
  { title: "3D Visualisation", link: "/service/3d-visualisation", image: "/images/agency/agency_2.png" },
  { title: "Rapid Concept Prototyping", link: "/service/prototyping", image: "/images/agency/development.png" },
  { title: "Motion & Production", link: "/service/motion", image: "/images/agency/motion.png" },
  { title: "Website & App Experience", link: "/service/web-app", image: "/images/agency/agency_1.png" }
];

const values = [
  "Creatively Curious",
  "Freedom to Lead",
  "Design Excellence"
];

// Helper to split text for word-by-word animation
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.03 }
        }
      } as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          } as any}
          className="mr-[0.25em] mb-[0.1em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function AgencyVision() {
  const [activeCapability, setActiveCapability] = useState(0);

  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariant: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full bg-black text-white py-32 md:py-48 px-4 md:px-8 font-sans overflow-hidden border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Hero Vision Statement - Using Animated Text Component */}
        <div className="max-w-5xl mx-auto text-center md:text-left mb-32 md:mb-48">
          <AnimatedText 
            text="Our work is grounded in research and experimentation. We help brands make sense of emerging technologies and turn them into clear, purposeful experiences that stay with people." 
            className="text-3xl md:text-5xl lg:text-[4rem] font-medium leading-[1.1] text-zinc-100 mb-10 tracking-tight"
          />
          <AnimatedText 
            text="Everything we create is built in close collaboration with our clients and agency partners, working together to bring ideas to life with clarity and intention." 
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-[1.5]"
          />
        </div>

        {/* Divider Line */}
        <motion.div 
          className="w-full h-[1px] bg-zinc-800 mb-32 hidden md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          
          {/* Left Column: Mission & Values */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariant}
          >
            <motion.h3 variants={fadeUpVariant} className="text-[4rem] md:text-[6rem] leading-[0.9] font-serif mb-16 md:mb-24 tracking-tighter">
              Our Mission<br />
              <span className="italic text-zinc-500 font-light">& values</span>
            </motion.h3>
            
            <motion.div variants={fadeUpVariant} className="mb-24">
              <span className="italic text-zinc-500 font-serif text-2xl md:text-3xl block mb-8">Why We Create</span>
              <p className="text-zinc-400 leading-[1.8] text-sm md:text-base font-light max-w-md">
                At Genikode, we design to champion the people behind the brands. We focus on solving real challenges so we can build better products and more human experiences. We believe in making a meaningful contribution through collaboration, care and craft, standing alongside our clients as partners and advocates. With a steady, supportive hand, we bring ideas to life, no matter the size, to create work that truly moves people.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <span className="italic text-zinc-500 font-serif text-2xl md:text-3xl block mb-8">Our Values</span>
              <ul className="flex flex-col">
                {values.map((value, index) => (
                  <motion.li 
                    key={value}
                    variants={fadeUpVariant}
                    className="group flex flex-row items-center justify-between text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight py-6 border-b border-zinc-800 text-zinc-400 cursor-default transition-colors duration-500 hover:text-zinc-100"
                  >
                    <span>{value}</span>
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 0, x: -10 }}
                    >
                       {/* Decorative element invisible by default, handled by CSS hover for simplicity but animated conceptually */}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: Capabilities */}
          <motion.div 
            className="lg:pl-16 relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariant}
          >
            {/* Desktop Vertical Line connecting to the top divider */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800 hidden lg:block" />

            <motion.div variants={fadeUpVariant} className="flex justify-between items-end mb-16 lg:ml-8">
               <span className="text-xs lg:text-sm tracking-[0.2em] uppercase font-bold text-zinc-300">Capabilities</span>
            </motion.div>
            
            {/* Click-through Image Box that Changes Based on Hover */}
            <motion.div variants={fadeUpVariant} className="mb-16 lg:ml-8 relative h-[300px] md:h-[400px] w-full overflow-hidden group rounded-lg border border-white/5">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Link href={capabilities[activeCapability].link}>
                    <Image 
                      src={capabilities[activeCapability].image} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105" 
                      alt={capabilities[activeCapability].title} 
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Click-through List */}
            <ul className="flex flex-col lg:ml-8">
              <motion.li variants={fadeUpVariant} className="w-full h-[1px] bg-zinc-800" />
              {capabilities.map((service, index) => (
                <motion.li 
                  key={service.title} 
                  variants={fadeUpVariant}
                  onMouseEnter={() => setActiveCapability(index)}
                  className="group cursor-pointer border-b border-zinc-800 hover:border-zinc-400 transition-colors"
                >
                  <Link href={service.link} className="flex justify-between items-center py-6 md:py-8 w-full h-full">
                    <span 
                      className={`text-xl md:text-3xl transition-colors duration-500 font-light ${
                        activeCapability === index ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span 
                      className={`text-xs md:text-sm font-mono transition-colors duration-500 ${
                        activeCapability === index ? "text-zinc-300" : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      [ 0{index + 1} ]
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
