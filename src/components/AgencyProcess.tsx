"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    number: "01",
    title: "Discovery",
    items: [
      { id: "A", text: "Competitive Analysis" },
      { id: "B", text: "Stakeholder Interviews" },
      { id: "C", text: "Strategy" },
      { id: "D", text: "User Testing" },
      { id: "E", text: "Information Architecture" },
      { id: "F", text: "Interaction Design" },
    ]
  },
  {
    number: "02",
    title: "Design",
    items: [
      { id: "A", text: "Website Design" },
      { id: "B", text: "App Design" },
      { id: "C", text: "Brand Design" },
      { id: "D", text: "UX/UI" },
      { id: "E", text: "Design Prototyping" },
      { id: "F", text: "3D Asset Creation" },
    ]
  },
  {
    number: "03",
    title: "Development",
    items: [
      { id: "A", text: "Full-Stack Development" },
      { id: "B", text: "CMS Implementation" },
      { id: "C", text: "WebGL" },
      { id: "D", text: "iOS / Android Development" },
      { id: "E", text: "Testing & QA" },
      { id: "F", text: "Deployment" },
    ]
  },
];

export default function AgencyProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Process Header Parallax/Reveal
      gsap.from(".process-header", {
        scrollTrigger: {
            trigger: ".process-section",
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        y: 100,
        opacity: 0
      });

      // Staggered reveal for list items
      const rows = gsap.utils.toArray<HTMLElement>(".process-row");
      rows.forEach(row => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top bottom-=50",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="process-section bg-black text-white py-32 font-sans w-full overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        
        {/* Massive Sticky/Fixed Header or just Big Header */}
        <div className="mb-24 md:mb-48 border-b border-white/20 pb-8">
             <h2 className="process-header text-[15vw] leading-none font-medium tracking-tighter text-zinc-100 mix-blend-difference">
                Process
             </h2>
        </div>

        {/* Process Phases */}
        <div className="flex flex-col space-y-32 md:space-y-48">
            {phases.map((phase) => (
                <div key={phase.number} className="flex flex-col md:flex-row gap-8 md:gap-0 relative">
                    
                    {/* Left Column: Sticky Number */}
                    <div className="md:w-[20%] relative">
                        <div className="sticky top-32 text-6xl md:text-[8vw] font-medium leading-none text-zinc-500 font-serif">
                            {phase.number}
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:w-[80%]">
                        {/* Phase Title */}
                        <div className="mb-12 sticky top-32 bg-black/90 backdrop-blur-sm z-10 py-4 border-b border-white">
                            <h3 className="text-5xl md:text-7xl font-light tracking-tight">{phase.title}</h3>
                        </div>

                        {/* List Items */}
                        <div className="flex flex-col">
                            {phase.items.map((item) => (
                                <div 
                                    key={item.text} 
                                    className="process-row flex items-baseline py-6 border-b border-zinc-800 hover:bg-zinc-900/30 transition-colors"
                                >
                                    <div className="w-[10%] md:w-[10%] font-mono text-zinc-500 text-sm md:text-base">
                                        {item.id}
                                    </div>
                                    <div className="w-[90%] md:w-[90%] text-xl md:text-2xl font-light text-zinc-200">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
