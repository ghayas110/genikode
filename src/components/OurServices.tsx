"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "strategy",
    title: "Digital Strategy",
    description: "We craft data-driven roadmaps that align technology with business goals. From market analysis to competitive positioning, we ensure every digital initiative delivers measurable ROI.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop", 
  },
  {
    id: "design",
    title: "Experience Design",
    description: "Our design philosophy centers on the user. We create intuitive, accessible, and beautiful interfaces that not only look stunning but guide users effortlessly toward conversion.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "development",
    title: "Custom Development",
    description: "We build scalable, high-performance applications using cutting-edge technologies. whether it's a complex web platform or a native mobile app, our code is clean, efficient, and future-proof.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop",
  },
   {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Migrate, optimized, and scale with confidence. Our cloud experts help you leverage the power of AWS, Azure, and Google Cloud to enhance flexibility and reduce infrastructure costs.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
  },
];

export default function OurServices() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Pin the right panel
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightPanelRef.current,
        scrub: true,
      });

      // Animate images based on scroll position of text sections
      services.forEach((service, index) => {
        ScrollTrigger.create({
          trigger: servicesRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => {
             // Update active image class
             const images = rightPanelRef.current?.querySelectorAll(".service-image");
             images?.forEach((img, i) => {
                if (i === index) {
                    img.classList.remove("opacity-0");
                    img.classList.add("opacity-100");
                } else {
                    img.classList.add("opacity-0");
                    img.classList.remove("opacity-100");
                }
             });
          },
          onEnterBack: () => {
             const images = rightPanelRef.current?.querySelectorAll(".service-image");
             images?.forEach((img, i) => {
                if (i === index) {
                    img.classList.remove("opacity-0");
                    img.classList.add("opacity-100");
                } else {
                    img.classList.add("opacity-0");
                    img.classList.remove("opacity-100");
                }
             });
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-black text-white">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Left: Scrollable Text Content */}
        <div className="w-full md:w-1/2 py-12 md:py-32">
          {services.map((service, index) => (
            <div 
                key={service.id} 
                ref={(el) => { if (el) servicesRef.current[index] = el; }}
                className="min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center py-12"
            >
              {/* Mobile Image */}
              <div className="md:hidden w-full h-64 relative mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white/90">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                {service.description}
              </p>
              <button className="mt-8 text-white border-b border-white pb-1 w-max hover:text-gray-300 hover:border-gray-300 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Right: Pinned Image Panel (Desktop Only) */}
        <div ref={rightPanelRef} className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center p-8">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
                {services.map((service, index) => (
                    <div 
                        key={service.id}
                        className={`service-image absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                         {/* Overlay for better text readability if needed, or style consistency */}
                        <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
