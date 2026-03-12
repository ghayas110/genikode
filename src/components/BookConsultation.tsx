import Link from "next/link";
import React from "react";

export default function BookConsultation() {
  return (
    <section className="w-full bg-zinc-950 text-white relative z-10 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row h-auto md:h-[40vh] border-b border-zinc-800">
        {/* Left: Huge Text */}
        <div className="w-full md:w-3/4 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800">
            <p className="text-sm text-zinc-400 uppercase tracking-widest mb-4">Take the first step</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter text-white/90">
                BOOK FREE <br className="hidden md:block" /> CONSULTATION
            </h2>
        </div>
        
        {/* Right: Action */}
        <Link

          href="https://calendar.app.google/HpyRLVVFM573gGKHA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/4 bg-black p-8 flex flex-col items-center justify-center group hover:bg-white transition-colors duration-500 cursor-pointer"
        >
            <div className="w-20 h-20 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500 mb-6">
                <svg className="w-8 h-8 text-white group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <span className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500 text-center">
                Schedule Now
            </span>
        </Link>
      </div>
    </section>
  );
}
