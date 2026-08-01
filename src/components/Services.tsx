"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Code, Palette, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native performance with React Native. We build apps that feel alive.",
    icon: <Smartphone className="w-12 h-12 mb-4 text-blue-500" />,
    color: "bg-blue-900",
  },
  {
    id: "web",
    title: "Web Platforms",
    description: "Scalable, SEO-optimized, and blazingly fast web applications.",
    icon: <Globe className="w-12 h-12 mb-4 text-purple-500" />,
    color: "bg-purple-900",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Award-winning interfaces that guide users to conversion.",
    icon: <Palette className="w-12 h-12 mb-4 text-pink-500" />,
    color: "bg-pink-900",
  },
  {
    id: "backend",
    title: "System Architecture",
    description: "Robust backends that handle millions of requests without breaking a sweat.",
    icon: <Code className="w-12 h-12 mb-4 text-green-500" />,
    color: "bg-green-900",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: phoneRef.current,
        scrub: true,
      });

      services.forEach((service) => {
        ScrollTrigger.create({
          trigger: `#service-${service.id}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            if (phoneRef.current) {
              const screen = phoneRef.current.querySelector(".phone-screen");
              const content = document.getElementById(`screen-content-${service.id}`);
             
               // Hide all screens
               const allScreens = phoneRef.current.querySelectorAll(".service-screen-content");
               allScreens.forEach((el: any) => el.style.opacity = 0);

               // Show current
               if(content) content.style.opacity = "1";
            }
          },
          onEnterBack: () => {
             if (phoneRef.current) {
               const content = document.getElementById(`screen-content-${service.id}`);
               const allScreens = phoneRef.current.querySelectorAll(".service-screen-content");
               allScreens.forEach((el: any) => el.style.opacity = 0);
               if(content) content.style.opacity = "1";
             }
          }
        });
      });

      // Circular Mask Transition
      gsap.fromTo(containerRef.current, 
        { 
          clipPath: "circle(0% at 50% 0%)",
          webkitClipPath: "circle(0% at 50% 0%)"
        },
        {
          clipPath: "circle(150% at 50% 0%)",
          webkitClipPath: "circle(150% at 50% 0%)",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-black text-white py-24">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        
        {/* Left: Scrollable Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-[50vh] px-8 pb-[50vh] pt-[20vh]">
          {services.map((service) => (
            <div key={service.id} id={`service-${service.id}`} className="min-h-[50vh] flex flex-col justify-center">
              <h3 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h3>
              <p className="text-xl text-zinc-400 max-w-md">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right: Pinned Phone */}
        <div className="hidden md:flex w-1/2 justify-center h-screen items-center sticky top-0" ref={phoneRef} style={{ height: '100vh' }}> {/* Added inline style and ref check */}
           <div ref={phoneRef} className="relative w-[300px] h-[600px] border-8 border-zinc-800 rounded-[3rem] bg-zinc-900 shadow-2xl overflow-hidden flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl z-20"></div>
              
              {/* Screen Content Container */}
              <div className="phone-screen w-full h-full relative bg-black">
                  {services.map((service, index) => (
                      <div 
                        key={service.id} 
                        id={`screen-content-${service.id}`}
                        className={`service-screen-content absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'} ${service.color}`}
                      >
                          <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm mb-6">
                            {service.icon}
                          </div>
                          <h4 className="text-2xl font-bold text-center">{service.title}</h4>
                          <div className="mt-8 w-full space-y-3">
                              <div className="h-2 w-full bg-white/20 rounded"></div>
                              <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                              <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                          </div>
                      </div>
                  ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
