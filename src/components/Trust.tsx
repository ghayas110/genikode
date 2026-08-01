"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "ROI Increase", value: 300, suffix: "%" },
  { label: "Faster Load Times", value: 40, suffix: "%" },
  { label: "User Retention", value: 85, suffix: "%" },
  { label: "Global Clients", value: 50, suffix: "+" },
];

export default function Trust() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-value", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
      
      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-6xl md:text-8xl font-bold tracking-tighter mb-2">
                <span className="stat-value">{stat.value}</span>
                <span>{stat.suffix}</span>
              </span>
              <span className="text-lg text-zinc-400 uppercase tracking-wide font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-32 border-t border-gray-200 pt-16 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl font-bold mb-8 md:mb-0">Ready to evolve?</h2>
            <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform duration-300">
                Start Project
            </button>
        </div>
      </div>
    </section>
  );
}
