"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tagline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal animation for lines
      gsap.from(textRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Animation starts when top of container hits 80% of viewport height
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-black text-white px-4 md:px-8 py-24 md:py-40 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full flex flex-col space-y-2 md:space-y-4 font-sans font-bold uppercase tracking-tighter leading-none">
        
        {/* Line 1: WE EXIST */}
        <div ref={addToRefs} className="text-6xl md:text-8xl lg:text-9xl text-left">
          We Exist
        </div>

        {/* Line 2: TO ... MAKE */}
        <div ref={addToRefs} className="flex justify-between items-end text-6xl md:text-8xl lg:text-9xl">
          <span>To</span>
          <span>Make</span>
        </div>

        {/* Line 3: GREAT (White Box) */}
        <div ref={addToRefs} className="w-full bg-gray-200 text-black text-center py-2 md:py-4 mt-2 mb-2">
            <span className="text-6xl md:text-8xl lg:text-[10rem] block">Great</span>
        </div>

        {/* Line 4: WORK ... WITH */}
        <div ref={addToRefs} className="flex justify-between items-start text-6xl md:text-8xl lg:text-9xl">
          <span>Work</span>
          <span>With</span>
        </div>

        {/* Line 5: GREAT PEOPLE. (Blue Box) */}
         <div ref={addToRefs} className="w-full bg-blue-700 text-white text-center py-2 md:py-4 mt-2">
            <span className="text-6xl md:text-8xl lg:text-[10rem] block">Great People.</span>
        </div>

      </div>
    </section>
  );
}
