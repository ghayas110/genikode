"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "web-design",
    title: "Web Design",
    description: "We create stunning, responsive websites that not only capture your brand's essence but are optimized for user engagement and seamless performance.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop", 
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Your logo is the face of your brand. We craft memorable, timeless logos that perfectly encapsulate your identity and resonate with your target audience.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "We build intuitive, high-performance mobile applications for iOS and Android, ensuring your users get a flawless native experience on any device.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "video-animation",
    title: "Video Animation",
    description: "Bring your ideas to life with captivating motion graphics and video animations that tell your story in a dynamic, highly engaging format.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "From marketing collateral to digital assets, our graphic design services ensure your visual communication is consistently sharp and impactful.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Award-winning interfaces that guide users to conversion. We focus on human-centric design, mapping out intuitive journeys across every digital touchpoint.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Climb the search rankings and drive organic traffic. We implement proven technical and content-focused SEO strategies to maximize your digital visibility.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "smm",
    title: "SMM",
    description: "Social Media Management that builds communities. We craft tailored campaigns that consistently engage your audience and build genuine brand loyalty.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "brand-building",
    title: "Brand Building",
    description: "We turn businesses into iconic brands. Through comprehensive strategy and cohesive identity systems, we ensure you stand out in competitive markets.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function OurServices() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
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
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 items-start">
        
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
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg">
                {service.description}
              </p>
              <Link href={`/service/${service.id}`} className="mt-8 text-white border-b border-white pb-1 w-max hover:text-gray-300 hover:border-gray-300 transition-colors uppercase tracking-widest text-sm font-medium">
                Learn More
              </Link>
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
