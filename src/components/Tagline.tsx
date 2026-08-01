"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Tagline() {
  const containerVariant: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const lineVariant: any = {
    hidden: { opacity: 0, y: 100, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const avatarVariant: any = {
    hidden: { opacity: 0, scale: 0, rotate: -20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1.2, ease: "backOut" } 
    }
  }

  return (
    <section className="relative w-full bg-black text-white py-40 md:py-64 px-4 overflow-hidden border-t border-b border-white/5" style={{ perspective: "1000px" }}>
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center items-center">
        
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 w-full"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Tag marker */}
          <motion.div variants={lineVariant} className="mb-8 md:mb-12">
             <span className="text-zinc-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase py-2 px-6 border border-zinc-800 rounded-full bg-zinc-950/50">
                Our Core Belief
             </span>
          </motion.div>

          {/* First Sentence Block */}
          <div className="overflow-hidden py-2" style={{ perspective: "1000px" }}>
            <motion.h2 
              variants={lineVariant} 
              className="text-4xl md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-none text-white uppercase"
              style={{ transformOrigin: "bottom center" }}
            >
              We exist to <span className="text-transparent inline-block" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>make</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden py-2" style={{ perspective: "1000px" }}>
             <motion.h2 
              variants={lineVariant} 
              className="text-4xl md:text-[6rem] lg:text-[8rem] font-medium tracking-tighter leading-[1.1] md:leading-none text-zinc-400 uppercase"
              style={{ transformOrigin: "bottom center" }}
            >
              great work with
            </motion.h2>
          </div>

          {/* Highlighted "Great People" with Avatars */}
          <div className="relative pt-16 md:pt-24 mt-8 flex px-4 items-center justify-center w-full max-w-5xl mx-auto">
             
             {/* Left Avatar (Ghayas) */}
             <motion.div variants={avatarVariant} className="absolute left-2 md:left-10 lg:-left-10 -top-4 md:-top-20 z-30">
               <div className="w-16 h-16 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden border border-zinc-800 relative grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 shadow-2xl hover:border-zinc-800 group cursor-pointer">
                 <Image src="/images/team/ghayas.png" alt="Ghayas" fill className="object-cover object-top" />
               </div>
             </motion.div>

             {/* Right Avatar (Kisa) */}
             <motion.div variants={avatarVariant} className="absolute right-2 md:right-10 lg:-right-4 bottom-2 md:-bottom-10 z-30">
               <div className="w-14 h-14 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-full overflow-hidden border border-zinc-800 relative grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 shadow-2xl hover:border-zinc-800 group cursor-pointer">
                 <Image src="/images/team/kisa.png" alt="Kisa" fill className="object-cover object-top" />
               </div>
             </motion.div>

            <motion.div 
               variants={{
                 hidden: { opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" },
                 show: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
               } as any}
               className="relative z-20"
            >
                {/* Soft backdrop glow effect */}
                <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full scale-150" />
                
                <h2 className="relative z-10 text-5xl md:text-8xl lg:text-[11rem] italic font-serif tracking-tighter leading-[0.9] text-white my-4 mx-8 drop-shadow-2xl">
                  Great People.
                </h2>
                
                <motion.div 
                  className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mt-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
            </motion.div>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
