"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Layout, MonitorSmartphone, PenTool, RefreshCw, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";


export default function OfferPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    sections: "",
    domain: "",
    referenceLink: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        websiteType: "",
        sections: "",
        domain: "",
        referenceLink: "",
      });
      // Redirect to Google Calendar
      window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0hcu4p_LLATLlT5yM1Q3eSxMNjJGa1prIZn_shDrxOfNtoCCOhugrMgRnFDFwTh0AXJFTGMvNJ", "_blank");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  const features = [
    { icon: <Layout className="w-8 h-8 text-white" />, title: "Up to 5-7-Page Website" },
    { icon: <RefreshCw className="w-8 h-8 text-white" />, title: "6 Revisions" },
    { icon: <MonitorSmartphone className="w-8 h-8 text-white" />, title: "Mobile Responsive" },
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "100% Satisfaction Guarantee" },
    { icon: <PenTool className="w-8 h-8 text-white" />, title: "Customized Design (Standard)" },
    { icon: <CheckCircle2 className="w-8 h-8 text-white" />, title: "Complete Design & Development" },
    { icon: <Users className="w-8 h-8 text-white" />, title: "Dedicated Project Manager" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black pt-24">

      
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white">Limited-Time Offer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 relative z-10">
            PROFESSIONAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              BUSINESS WEBSITE
            </span>
          </h1>
          
          <div className="relative inline-block mt-4 mb-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-2xl rounded-full z-0" />
            <h2 className="text-7xl md:text-[140px] font-black tracking-tighter text-white relative z-10 leading-none">
              $400
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Secure your digital storefront today. Get a high-converting, professional presence tailored exactly to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Features Column */}
          <div className="lg:col-span-5 space-y-8 relative z-10">
            <h3 className="text-3xl font-bold tracking-tight mb-8">What&apos;s Included</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-zinc-900 rounded-2xl md:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-6 p-6 border border-zinc-800 rounded-2xl md:rounded-[32px] bg-zinc-900/30 backdrop-blur-md group-hover:border-zinc-800 transition-colors duration-500">
                    <div className="w-16 h-16 rounded-full bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-xl font-medium tracking-tight group-hover:text-white text-white transition-colors duration-300">
                      {feature.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-black border border-zinc-800 p-8 md:p-12 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-900 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50" />
              
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Schedule Your Project</h3>
                <p className="text-zinc-400 text-lg font-light">Tell us about your needs and book a time to finalize details.</p>
              </div>

              {status === "success" ? (
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center space-y-4">
                  <div className="w-20 h-20 bg-black border border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Details Received!</h4>
                  <p className="text-zinc-400">Please choose a time on our calendar to finalize your appointment.</p>
                  <a 
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0hcu4p_LLATLlT5yM1Q3eSxMNjJGa1prIZn_shDrxOfNtoCCOhugrMgRnFDFwTh0AXJFTGMvNJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-800 transition-colors"
                  >
                    Continue to Calendar Scheduling
                  </a>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-4 block w-full text-zinc-400 hover:text-white transition-colors underline"
                  >
                    Start a new request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 bg-red-950/50 border border-red-900 rounded-xl text-red-200 text-sm">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold tracking-widest text-zinc-400 uppercase pb-2 border-b border-zinc-800">Your Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <h4 className="text-lg font-semibold tracking-widest text-zinc-400 uppercase pb-2 border-b border-zinc-800">Project Specifics</h4>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">What kind of website do you want?</label>
                      <select
                        required
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleChange}
                        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                      >
                        <option value="" disabled>Select website type...</option>
                        <option value="Corporate / Business">Corporate / Business</option>
                        <option value="E-commerce (Basic)">E-commerce (Basic)</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Agency / Services">Agency / Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Which major sections do you need?</label>
                      <input
                        required
                        type="text"
                        name="sections"
                        value={formData.sections}
                        onChange={handleChange}
                        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                        placeholder="e.g. Home, About Us, Services, Portfolio, Contact"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Target Domain</label>
                        <input
                          required
                          type="text"
                          name="domain"
                          value={formData.domain}
                          onChange={handleChange}
                          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                          placeholder="e.g. mybusiness.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Reference Link (Optional)</label>
                        <input
                          type="url"
                          name="referenceLink"
                          value={formData.referenceLink}
                          onChange={handleChange}
                          className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                          placeholder="Link to a site you like"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-white text-black text-lg font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {status === "loading" ? "Submitting..." : "Submit Details & Continue to Calendar"}
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-zinc-400 text-sm mt-4">
                      By submitting, you agree to our Terms & Conditions. You will be redirected to choose an appointment time.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
