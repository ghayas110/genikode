"use client";

import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "strategy",
    title: "Brand Strategy",
    description: "Defining the core DNA of your business to build a lasting legacy.",
    tags: ["Positioning", "Identity", "Voice"],
    image: "/images/agency/strategy.png"
  },
  {
    id: "design",
    title: "Product Design",
    description: "Crafting intuitive and beautiful digital products that users love.",
    tags: ["UI/UX", "Prototyping", "Design Systems"],
    image: "/images/agency/design.png"
  },
  {
    id: "development",
    title: "Web Development",
    description: "Robust, scalable, and pixel-perfect engineering solutions.",
    tags: ["Next.js", "WebGL", "Creative Coding"],
    image: "/images/agency/development.png"
  },
  {
    id: "motion",
    title: "Motion Design",
    description: "Bringing static interfaces to life with fluid and meaningful movement.",
    tags: ["2D/3D", "Interaction", "Storytelling"],
    image: "/images/agency/motion.png"
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Compelling narratives and visuals that resonate with your audience.",
    tags: ["Copywriting", "Photography", "Art Direction"],
    image: "/images/agency/content.png"
  },
];

export default function AgencyServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string>(services[0].image);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        
      // 1. Hero Text Reveal
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.1
      });

      // 2. Focal List Animation
      const items = gsap.utils.toArray<HTMLElement>(".service-item");
      
      items.forEach((item, index) => {
        // Initial state: blurred and dimmed
        gsap.set(item, { opacity: 0.3, filter: "blur(4px)", scale: 0.95 });

        ScrollTrigger.create({
            trigger: item,
            start: "top 60%", // When top of item hits 60% of viewport
            end: "bottom 40%", // When bottom of item hits 40% of viewport
            onEnter: () => {
                animateActive(item);
                setActiveImage(services[index].image);
            },
            onLeave: () => animateInactive(item),
            onEnterBack: () => {
                animateActive(item);
                setActiveImage(services[index].image);
            },
            onLeaveBack: () => animateInactive(item),
        });
      });

      function animateActive(item: HTMLElement) {
        gsap.to(item, {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
      }

      function animateInactive(item: HTMLElement) {
        gsap.to(item, {
            opacity: 0.3,
            filter: "blur(4px)",
            scale: 0.95,
            duration: 0.5,
            ease: "power2.out"
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen w-full font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 relative z-10">
          {/* Hero Background Texture - Kept subtle or remove? User said "no background". I will remove this too to be safe/clean. */}
           {/* <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen">
               <Image src="/images/agency/hero-bg.png" alt="Texture" fill className="object-cover" priority />
           </div> */ }

          <div className="text-center z-10">
              <h1 className="hero-text text-[12vw] md:text-[14vw] leading-[0.8] font-serif font-light tracking-tight mix-blend-difference">
                  AGENCY
              </h1>
              <h1 className="hero-text text-[12vw] md:text-[14vw] leading-[0.8] font-serif font-light tracking-tight italic mix-blend-difference">
                  CAPABILITIES
              </h1>
          </div>
          
          <div className="absolute bottom-12 animate-bounce">
              <ArrowDown className="w-6 h-6 opacity-50" />
          </div>
      </section>

      {/* Focal Services List */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col space-y-24 md:space-y-48">
              {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="service-item flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 py-8"
                  >
                      {/* Left: Number & Skills */}
                      <div className="flex flex-col md:w-1/3">
                          <span className="text-sm font-mono text-zinc-400 mb-4">0{index + 1}</span>
                          <div className="flex flex-wrap gap-2">
                              {service.tags.map(tag => (
                                  <span key={tag} className="text-xs uppercase tracking-wider border border-zinc-800 px-2 py-1 rounded-full text-zinc-400 bg-black/50 backdrop-blur-sm">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                      </div>

                      {/* Right: Title & Description */}
                      <div className="md:w-2/3">
                          <h2 className="text-5xl md:text-8xl font-serif font-light mb-6 tracking-tight drop-shadow-lg">
                              {service.title}
                          </h2>
                          <p className="text-lg md:text-2xl text-white max-w-xl leading-relaxed font-light">
                              {service.description}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* CTA / Next Steps */}
      <section className="h-[50vh] flex items-center justify-center border-t border-zinc-800 mt-24 relative z-10 bg-black">
          <div className="text-center">
              <p className="text-zinc-400 mb-4 uppercase tracking-widest text-sm">Ready to start?</p>
              <a href="#contact" className="text-4xl md:text-7xl font-bold hover:text-blue-500 transition-colors">
                  Let's Talk.
              </a>
          </div>
      </section>

    </div>
  );
}
