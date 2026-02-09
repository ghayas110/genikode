"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactOld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: "",
    isHuman: false
  });

  const filledFieldsCount = Object.values(formData).filter(val => val !== "" && val !== false).length;
  const totalFields = 5;
  const progress = (filledFieldsCount / totalFields) * 100;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".contact-header-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
        
      // Form Fields Animation
       gsap.from(".contact-field", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={containerRef} className="w-full bg-black text-white relative z-10">
      
      {/* Split Header Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[60vh] border-b border-zinc-800">
        {/* Left: Huge Text */}
        <div className="w-full md:w-3/4 bg-black p-8 md:p-16 flex items-center justify-center md:justify-start border-b md:border-b-0 md:border-r border-zinc-800">
             <h2 className="contact-header-text text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter text-white/90">
              LET'S <br/> TALK
             </h2>
        </div>
        
        {/* Right: Info */}
        <div className="w-full md:w-1/4 bg-zinc-950 p-8 flex flex-col justify-center space-y-6">
           <div className="contact-header-text">
               <p className="text-xl md:text-2xl font-medium leading-snug text-zinc-400">
                Ready to engineer your digital future? Reach out and let's create something extraordinary.
               </p>
           </div>
           
           <div className="contact-header-text pt-4">
              <p className="text-sm text-zinc-600 uppercase tracking-widest mb-1">Prefer email?</p>
              <a href="mailto:hello@genikode.com" className="text-lg font-bold underline decoration-zinc-700 decoration-2 underline-offset-4 hover:text-white hover:decoration-white transition-all">
                hello@genikode.com
              </a>
           </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-black text-white p-0">
        <form ref={formRef} className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
           
           {/* Name */}
           <div className={`contact-field group relative border-b border-zinc-800 md:border-r p-8 md:p-12 transition-colors duration-500 ${focusedField === 'name' ? 'bg-zinc-900/50' : 'hover:bg-zinc-900/20'}`}>
              <label htmlFor="name" className={`block text-sm mb-4 transition-colors ${focusedField === 'name' ? 'text-white' : 'text-zinc-500'}`}>01. What's your name? *</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                placeholder="John Doe"
                className="w-full bg-transparent text-2xl md:text-4xl font-light focus:outline-none placeholder-zinc-800 text-white transition-all"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />
           </div>

           {/* Company */}
           <div className={`contact-field group relative border-b border-zinc-800 p-8 md:p-12 transition-colors duration-500 ${focusedField === 'company' ? 'bg-zinc-900/50' : 'hover:bg-zinc-900/20'}`}>
              <label htmlFor="company" className={`block text-sm mb-4 transition-colors ${focusedField === 'company' ? 'text-white' : 'text-zinc-500'}`}>02. What's your company name? (Optional)</label>
              <input 
                type="text" 
                name="company" 
                id="company"
                placeholder="Acme Inc."
                className="w-full bg-transparent text-2xl md:text-4xl font-light focus:outline-none placeholder-zinc-800 text-white transition-all"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
              />
           </div>

           {/* Email */}
           <div className={`contact-field group relative border-b border-zinc-800 md:border-r p-8 md:p-12 transition-colors duration-500 ${focusedField === 'email' ? 'bg-zinc-900/50' : 'hover:bg-zinc-900/20'}`}>
              <label htmlFor="email" className={`block text-sm mb-4 transition-colors ${focusedField === 'email' ? 'text-white' : 'text-zinc-500'}`}>03. What's your email? *</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="john@acme.com"
                className="w-full bg-transparent text-2xl md:text-4xl font-light focus:outline-none placeholder-zinc-800 text-white transition-all"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
           </div>

           {/* Budget */}
           <div className={`contact-field group relative border-b border-zinc-800 p-8 md:p-12 transition-colors duration-500 ${focusedField === 'budget' ? 'bg-zinc-900/50' : 'hover:bg-zinc-900/20'}`}>
              <label htmlFor="budget" className={`block text-sm mb-4 transition-colors ${focusedField === 'budget' ? 'text-white' : 'text-zinc-500'}`}>04. What's your budget range? *</label>
              <select 
                name="budget" 
                id="budget"
                className="w-full bg-transparent text-2xl md:text-4xl font-light focus:outline-none text-white/90 focus:text-white border-none cursor-pointer"
                value={formData.budget}
                onChange={handleChange}
                onFocus={() => setFocusedField('budget')}
                onBlur={() => setFocusedField(null)}
              >
                 <option value="" className="bg-black text-zinc-500">Select a range</option>
                 <option value="<10k" className="bg-zinc-900 text-white">&lt; $10k</option>
                 <option value="10k-50k" className="bg-zinc-900 text-white">$10k - $50k</option>
                 <option value="50k-100k" className="bg-zinc-900 text-white">$50k - $100k</option>
                 <option value=">100k" className="bg-zinc-900 text-white">&gt; $100k</option>
              </select>
           </div>

           {/* Message - Full Width */}
           <div className={`contact-field col-span-1 md:col-span-2 group relative p-8 md:p-12 transition-colors duration-500 ${focusedField === 'message' ? 'bg-zinc-900/50' : 'hover:bg-zinc-900/20'}`}>
              <label htmlFor="message" className={`block text-sm mb-4 transition-colors ${focusedField === 'message' ? 'text-white' : 'text-zinc-500'}`}>05. Tell us about your project *</label>
              <textarea 
                name="message" 
                id="message"
                rows={6}
                placeholder="Describe your goals, timeline, and any other details..."
                className="w-full bg-transparent text-2xl md:text-4xl font-light focus:outline-none placeholder-zinc-800 text-white resize-none transition-all"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
           </div>
        </form>
      </div>

        {/* Sticky/Fixed Progress Bar Footer */}
        <div className="sticky bottom-0 w-full z-50 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row">
                
                {/* Progress Info */}
                <div className="w-full md:w-2/3 bg-black/90 backdrop-blur-md p-4 md:px-8 md:py-8 flex items-center justify-between border-b md:border-b-0 md:border-r border-zinc-800">
                    <div className="flex items-center space-x-6">
                        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Completion</span>
                        <div className="w-48 h-[2px] bg-zinc-800 overflow-hidden">
                             <div 
                                className="h-full bg-white transition-all duration-700 ease-out"
                                style={{ width: `${progress}%` }}
                             ></div>
                        </div>
                        <span className="text-xs font-bold text-white tabular-nums">{Math.round(progress)}%</span>
                    </div>
                     <div 
                        className={`hidden md:flex items-center space-x-3 transition-opacity cursor-pointer ${formData.isHuman ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                        onClick={() => setFormData(prev => ({ ...prev, isHuman: !prev.isHuman }))}
                     >
                        <div className={`w-5 h-5 border rounded-sm flex items-center justify-center transition-colors ${formData.isHuman ? 'bg-white border-white' : 'border-zinc-500'}`}>
                            {formData.isHuman && <Check className="w-4 h-4 text-black" />}
                        </div>
                        <span className={`text-sm font-medium uppercase tracking-widest ${formData.isHuman ? 'text-white' : 'text-zinc-400'}`}>
                            I'm a human
                        </span>
                     </div>
                </div>

                {/* Submit Button */}
                <button 
                    className="w-full md:w-1/3 bg-white text-black hover:bg-zinc-200 p-4 md:px-8 md:py-8 flex items-center justify-center space-x-3 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
                    disabled={filledFieldsCount < 3} // Disable if critical fields missing
                >
                    <span className="text-lg font-bold uppercase tracking-widest">Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

            </div>
        </div>

    </section>
  );
}
