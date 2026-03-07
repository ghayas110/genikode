"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    companyWebsite: "",
    projectDetails: "",
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Quick validation
    if (!formData.firstName || !formData.companyEmail) {
       alert("Please fill in your first name and company email.");
       setIsSubmitting(false);
       return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Thank you! Your inquiry has been sent to ghayas110@gmail.com.");
        setFormData({
          firstName: "", lastName: "", companyName: "",
          companyEmail: "", companyWebsite: "", projectDetails: "", newsletter: false
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Text Animation
      const tl = gsap.timeline();
      tl.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      })
      .from(".floating-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.8");

      // Floating Images Parallax
      gsap.utils.toArray<HTMLElement>(".floating-image").forEach((img, i) => {
          gsap.to(img, {
            y: (i + 1) * -30, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5
            }
          });
      });
      
      // Form Animation
       gsap.from(".form-element", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black min-h-screen text-white overflow-hidden relative pb-20">
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-40">
          
          {/* Floating Images */}
          <div className="absolute inset-0 pointer-events-none w-full h-full max-w-[1400px] mx-auto hidden lg:block">
              {/* Top Left */}
              <div className="floating-image absolute top-[15%] left-[5%] w-64 h-40 rounded-sm overflow-hidden transform -rotate-6 z-10 border border-zinc-800/50">
                  <Image src="/images/work/atria.png" alt="Featured Work" fill className="object-cover opacity-80" />
              </div>
              {/* Bottom Left */}
              <div className="floating-image absolute bottom-[25%] left-[10%] w-56 h-36 rounded-sm overflow-hidden transform rotate-3 z-10 border border-zinc-800/50 lg:bottom-[30%]">
                   <Image src="/images/work/integrated.png" alt="Featured Work" fill className="object-cover opacity-70" />
              </div>
              {/* Top Right */}
              <div className="floating-image absolute top-[12%] right-[8%] w-72 h-44 rounded-sm overflow-hidden transform rotate-6 z-10 border border-zinc-800/50">
                   <Image src="/images/work/metadrop.png" alt="Featured Work" fill className="object-cover opacity-80" />
              </div>
               {/* Bottom Right */}
               <div className="floating-image absolute bottom-[20%] right-[5%] w-80 h-48 rounded-sm overflow-hidden transform -rotate-2 z-10 border border-zinc-800/50 lg:bottom-[35%]">
                   <Image src="/images/work/ozarke.png" alt="Featured Work" fill className="object-cover opacity-75" />
              </div>
          </div>

          <h1 className="relative z-20 font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight">
            <span className="hero-text-line block">
                Let's chat <span className="inline-block relative top-2 mx-2"><Star className="w-8 h-8 md:w-12 md:h-12 fill-white text-white animate-spin-slow" /></span> and build
            </span>
            <span className="hero-text-line block italic text-zinc-400 font-light">something beautiful.</span>
          </h1>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 text-xs uppercase tracking-[0.2em] animate-bounce">
            Scroll to get in touch
          </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 relative z-20">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-zinc-200 form-element">We would love to hear from you.</h2>
        
        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            <div className="form-element flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">First name*</label>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="Enter your first name"
                    className="bg-zinc-900/30 border border-zinc-800 rounded p-4 text-lg focus:border-white focus:bg-zinc-900 focus:outline-none transition-all text-white placeholder:text-zinc-700"
                    value={formData.firstName} onChange={handleChange}
                />
            </div>

            <div className="form-element flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Last name*</label>
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Enter your last name"
                    className="bg-zinc-900/30 border border-zinc-800 rounded p-4 text-lg focus:border-white focus:bg-zinc-900 focus:outline-none transition-all text-white placeholder:text-zinc-700"
                    value={formData.lastName} onChange={handleChange}
                />
            </div>

            <div className="form-element flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Company name*</label>
                <input 
                    type="text" 
                    name="companyName" 
                    placeholder="Enter company name"
                    className="bg-zinc-900/30 border border-zinc-800 rounded p-4 text-lg focus:border-white focus:bg-zinc-900 focus:outline-none transition-all text-white placeholder:text-zinc-700"
                    value={formData.companyName} onChange={handleChange}
                />
            </div>

             <div className="form-element flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Company email*</label>
                <input 
                    type="email" 
                    name="companyEmail" 
                    placeholder="Enter email address"
                    className="bg-zinc-900/30 border border-zinc-800 rounded p-4 text-lg focus:border-white focus:bg-zinc-900 focus:outline-none transition-all text-white placeholder:text-zinc-700"
                    value={formData.companyEmail} onChange={handleChange}
                />
            </div>
            
            <div className="form-element col-span-1 md:col-span-2 flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Company website url*</label>
                <input 
                    type="text" 
                    name="companyWebsite" 
                    placeholder="https://"
                    className="bg-zinc-900/30 border border-zinc-800 rounded p-4 text-lg focus:border-white focus:bg-zinc-900 focus:outline-none transition-all text-white placeholder:text-zinc-700"
                    value={formData.companyWebsite} onChange={handleChange}
                />
            </div>

            <div className="form-element col-span-1 md:col-span-2 flex flex-col gap-2 mt-4">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Tell us about the project (Scope, Timeline, Budget)*</label>
                <textarea 
                    name="projectDetails" 
                    rows={6}
                    placeholder="Type us a message..."
                    className="bg-zinc-900/30 border border-zinc-800 rounded p-4 text-lg focus:border-white focus:bg-zinc-900 focus:outline-none resize-none transition-all text-white placeholder:text-zinc-700"
                    value={formData.projectDetails} onChange={handleChange}
                />
            </div>
            
            <div className="form-element col-span-1 md:col-span-2 flex items-center gap-3 mt-2">
                 <input 
                    type="checkbox" 
                    name="newsletter"
                    id="newsletter" 
                    className="w-5 h-5 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-0 checked:bg-white checked:text-black cursor-pointer"
                    checked={formData.newsletter} onChange={handleChange}
                 />
                 <label htmlFor="newsletter" className="text-zinc-400 text-sm select-none cursor-pointer hover:text-white transition-colors">Yes, sign me up to newsletter</label>
            </div>

            <div className="form-element col-span-1 md:col-span-2 mt-12 bg-zinc-900/50 p-1 rounded-lg">
                 <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white h-24 rounded flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
                 >
                    <span className="text-sm font-medium uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                      {isSubmitting ? "Sending..." : "Submit Form"}
                    </span>
                    {!isSubmitting && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>}
                 </button>
            </div>

        </form>
      </div>
    </section>
  );
}
