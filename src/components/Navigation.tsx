"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-6 text-white flex justify-between items-center pointer-events-none transition-all duration-500 ${isOpen ? '' : 'md:mix-blend-difference'}`}>
      {/* Logo — transparent-background asset so it reads cleanly over the hero
          video on mobile (the dark box was baked into the old logo.png). */}
      <Link href="/" className="pointer-events-auto relative z-50 w-32 h-10">
        <Image
          src="/logo-transparent.png"
          alt="Genikode Logo"
          fill
          className="object-contain drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]"
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
          <Link key={item.name} href={item.href} className="hover:text-zinc-400 transition-colors">
            {item.name}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link href="/contact" className="hidden md:block pointer-events-auto border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
        Let's Talk
      </Link>

      {/* Mobile Menu Toggle — relative z-50 keeps it ABOVE the overlay so the
          close (X) is always tappable; p-3 gives a 44px+ touch target. */}
      <button
        className="md:hidden pointer-events-auto relative z-50 -mr-3 p-3"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay (z-40 — sits below the logo/toggle which are z-50) */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-4 pointer-events-auto md:hidden"
        >
           {[
            { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
              { name: "Agency", href: "/agency" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
            <Link
                key={item.name}
                href={item.href}
                className="text-4xl font-bold hover:text-zinc-400 transition-colors px-6 py-3"
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
