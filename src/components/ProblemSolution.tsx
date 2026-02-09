"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-100vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="scroll-section-outer overflow-hidden">
      <div ref={sectionRef} className="scroll-section-inner h-screen w-[200vw] flex flex-row relative">
        
        {/* Panel 1: Problem (Wireframe) */}
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-900 border-r border-zinc-800 p-8">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Complex <br/> <span className="text-zinc-500">Problems.</span>
              </h2>
              <p className="text-xl text-zinc-400">
                Spaghetti code, slow performance, and outdated design systems can slow down your growth.
              </p>
            </div>
            <div className="relative w-full aspect-video border-2 border-dashed border-zinc-700 rounded-lg p-4 bg-zinc-950/50">
               {/* Wireframe representation */}
               <div className="w-full h-4 bg-zinc-800 mb-4 rounded"></div>
               <div className="w-2/3 h-4 bg-zinc-800 mb-8 rounded"></div>
               <div className="grid grid-cols-3 gap-4">
                 <div className="h-24 bg-zinc-800 rounded"></div>
                 <div className="h-24 bg-zinc-800 rounded"></div>
                 <div className="h-24 bg-zinc-800 rounded"></div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-zinc-600 uppercase tracking-widest bg-zinc-950 px-2">Wireframe Mode</span>
               </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Solution (High Fidelity) */}
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-white text-black p-8">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full bg-slate-900 rounded-lg p-4 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    {/* High Fi UI */}
                    <div className="w-full h-full flex items-center justify-center">
                         <div className="text-center">
                             <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 animate-pulse"></div>
                             <div className="h-2 w-32 bg-slate-700 rounded mx-auto mb-2"></div>
                             <div className="h-2 w-24 bg-slate-700 rounded mx-auto"></div>
                         </div>
                    </div>
                </div>
             </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Simple <br/> <span className="text-blue-600">Solutions.</span>
              </h2>
              <p className="text-xl text-gray-600">
                We transform chaotic requirements into elegant, high-performance digital experiences.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
