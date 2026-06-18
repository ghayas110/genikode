"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const comp = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = titleRef.current?.querySelectorAll(".word");

      if (words) {
        gsap.from(words, {
          y: 60,
          opacity: 0,
          rotateX: -90,
          stagger: 0.08,
          duration: 0.9,
          ease: "back.out(1.7)",
          delay: 0.4,
        });
      }

      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
      });

      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        delay: 1.8,
      });

      gsap.from(".scroll-indicator", {
        y: -10,
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2.5,
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <Fragment key={index}>
        <span className="word inline-block">{word}</span>
        {index < words.length - 1 ? " " : null}
      </Fragment>
    ));
  };

  return (
    <section ref={comp} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>
      
      <div className="z-20 text-center px-4 w-full flex flex-col items-center justify-center h-full">
        {/* Title Container - whitespace-nowrap to keep single line if space allows, responsive text size */}
        <div className="max-w-[1100px] overflow-visible">
            <h1 ref={titleRef} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white text-shadow-lg text-center text-balance">
            {splitText("Genikode is a Karachi-based digital agency building web and mobile apps with Next.js, React Native, and Node.js.")}
            </h1>
        </div>

        <p className="hero-subtitle text-base md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          We help startups, founders, and growing businesses worldwide ship fast, scalable websites, mobile apps, UI/UX, SEO, and brand identities — engineered for performance and built to scale.
        </p>
        
        <div className="hero-cta flex gap-4 justify-center">
             <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300">
            Start Project
            </Link>
             <Link href="/agency" className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
            Our Services
            </Link>
        </div>
      </div>

       {/* Load More Indicator */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80 scroll-indicator cursor-pointer">
            <span className="text-sm uppercase tracking-widest font-mono">Load More</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
       </div>
    </section>
  );
}
