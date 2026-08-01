"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { div } from "three/tsl";

const projects = [
  {
    id: "pos-system",
    name: "SwiftPOS",
    category: "Point of Sale System",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "restaurant-management-system",
    name: "ServeOS",
    category: "Restaurant Management System",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "textile-erp",
    name: "LoomERP",
    category: "Textile Industry ERP",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "clinic-management-system",
    name: "MediClinic",
    category: "Clinic Management System",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "digitalbank",
    name: "Bliq",
    category: "Fintech App",
    image: "/images/bliq.png",
  },
  {
    id: "welab",
    name: "Welab Health",
    category: "Healthcare App",
    image: "/images/welab.png",
  },
  {
    id: "papersdock",
    name: "Papersdock",
    category: "LMS Platform",
    image: "/images/papersdock.png",
  },
  {
    id: "xpertva",
    name: "Xpertva",
    category: "Corporate Website",
    image: "/images/xpertva.png",
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if (activeProject !== null && cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    } else if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [activeProject]);

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-black text-white overflow-hidden cursor-none">
       {/* Floating Cursor Image */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-[600px] h-[500px] pointer-events-none z-50 rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-normal"
        style={{ transformOrigin: "center center" }}
      >
        {projects.map((project, index) => (
            <div 
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-300 ${activeProject === index ? 'opacity-100' : 'opacity-0'}`}
            >
                <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-contain"
                />
            </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-xl text-zinc-400 mb-12 uppercase tracking-widest border-b border-zinc-800 pb-4">Selected Works</h2>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex items-center justify-between py-12 border-b border-zinc-800 hover:border-white transition-colors duration-300 z-10 mix-blend-difference"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <h3 className="text-5xl md:text-8xl font-bold text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:translate-x-4">
                {project.name}
              </h3>
              <div className="flex flex-col items-end gap-2 text-right">
                <span className="text-zinc-400 text-lg">{project.category}</span>
                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
