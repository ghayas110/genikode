"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const team = [
  {
    id: "ghayas",
    name: "Ghayas Ali",
    role: "Founder and CEO",
    description: "Ghayas Ali orchestrates creative strategy and production for high-growth organizations and enterprise partners. He bridges the gap between ambitious visual concepts and operational reality, driving projects from direction to delivery. Trusted to execute in high-stakes environments, he brings the structure required to turn digital initiatives into commercial impact.",
    image: "/images/team/ghayas.png",
    socials: { email: "#", linkedin: "#" }
  },
  {
    id: "kisa",
    name: "Kisa Ghayas",
    role: "Co-Founder and CTO",
    description: "Kisa operates across major technical markets, contributing to work built for global visibility and commercial impact. She works alongside creative and engineering teams to move projects from direction to delivery, supporting technical platforms where precision, judgment, and reliability matter.",
    image: "/images/team/kisa.png",
    socials: { email: "#", linkedin: "#" }
  }
];


export default function AgencyTeam() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="w-full bg-black text-white py-32 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <Fragment key={member.id}>
              {/* Image Card */}
              <motion.div variants={cardVariants} className="group relative rounded-[20px] overflow-hidden bg-zinc-900 border border-white/5 h-[400px] md:h-[600px]">
                 {/* Studio Image tinted with Sunset Gradient */}
                 <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={
                      `object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 ${
                        member.id === 'kisa' ? 'object-top' : ''
                      }`
                    }
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-red-900/40 to-orange-500/50 mix-blend-color transition-opacity duration-500 group-hover:opacity-80"></div>
                 
                 {/* Dark gradient for text readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 
                 <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                   <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1 drop-shadow-md">{member.name}</h3>
                   <p className="text-xs md:text-sm font-medium text-zinc-400">{member.role}</p>
                 </div>
              </motion.div>

              {/* Text Card */}
              <motion.div variants={cardVariants} className="rounded-[20px] bg-[#171717] border border-white/5 p-6 md:p-8 flex flex-col min-h-[400px] md:h-[600px] hover:border-white/10 transition-colors">
                 <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-8 md:mb-16">{member.name}</h3>
                 <p className="text-sm leading-[1.8] text-zinc-400 font-light mt-auto mb-8 md:mb-12 relative z-10 selection:bg-white selection:text-black">
                   {member.description}
                 </p>
                 <div className="flex items-center gap-6 mt-auto md:mt-0">
                    <a href={member.socials.email} className="text-zinc-400 hover:text-white transition-colors duration-300">
                        <Mail className="w-5 h-5 stroke-[1.5]" />
                    </a>
                    <a href={member.socials.linkedin} className="text-zinc-400 hover:text-white transition-colors duration-300">
                        <Linkedin className="w-5 h-5 stroke-[1.5]" />
                    </a>
                 </div>
              </motion.div>
            </Fragment>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
