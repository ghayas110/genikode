"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-6 text-white flex justify-between items-center pointer-events-none transition-all duration-500 ${isOpen ? '' : 'bg-black/20 backdrop-blur-md border-b border-white/5 md:border-none md:bg-none md:backdrop-blur-none md:mix-blend-difference'}`}>
      {/* Logo */}
      <Link href="/" className="pointer-events-auto relative w-32 h-10">
        <Image 
          src="/logo.png" 
          alt="Genikode Logo" 
          fill
          className="object-contain" // mix-blend-difference might be tricky on an image if it has colors, but ok for white/black logos
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 pointer-events-auto">
        {[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: "Agency", href: "/agency" },
          { name: "Contact", href: "/contact" },
        ].map((item) => (
          <Link key={item.name} href={item.href} className="hover:text-gray-400 transition-colors">
            {item.name}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link href="/contact" className="hidden md:block pointer-events-auto border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
        Let's Talk
      </Link>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden">
           {[
            { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
              { name: "Agency", href: "/agency" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
            <Link 
                key={item.name} 
                href={item.href} 
                className="text-4xl font-bold hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
            >
                {item.name}
            </Link>
            ))}
        </div>
      )}
    </nav>
  );
}
