"use client";

import Link from "next/link";
import { HiOutlineEquals, HiXMark } from "react-icons/hi2"; // React Icons (Heroicons 2)
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/components/social-links";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "TOUR", href: "/#tour" },
  { label: "MÚSICA", href: "/#music" },
  { label: "SOBRE NOSOTROS", href: "/about" },
  { label: "CONTACTO", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
          isScrolled || isOpen
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#2a2a2a] h-16"
            : "bg-transparent h-20",
        )}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <nav
          aria-label="Navegación Principal"
          className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-full"
        >
          {/* SEO: El logo es un link al inicio */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-[#f0ece4] text-xl md:text-2xl tracking-[0.3em] font-bold font-oswald uppercase"
          >
            AUTOFILIA
          </Link>

          {/* Menú Escritorio */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#888480] hover:text-[#f0ece4] text-[11px] tracking-[0.3em] font-oswald transition-colors duration-300 uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-[#f0ece4] p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiXMark size={28} /> : <HiOutlineEquals size={28} />}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[150] bg-[#050505] md:hidden transition-all duration-500 ease-in-out flex flex-col",
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#2a2a2a]/50">
          <div className="w-10" />
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-[#f0ece4] text-xl font-bold tracking-[0.3em] font-oswald uppercase"
          >
            AUTOFILIA
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#f0ece4] p-2"
            aria-label="Cerrar Menú"
          >
            <HiXMark size={28} />
          </button>
        </div>

        <nav
          aria-label="Navegación Móvil"
          className="flex-1 overflow-y-auto flex flex-col"
        >
          <ul className="flex flex-col py-12 px-8 gap-8">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="border-b border-[#2a2a2a]/30 pb-4"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#f0ece4] text-3xl font-oswald tracking-[0.2em] uppercase flex items-center justify-between group"
                >
                  {link.label}
                  <span className="text-[#880808] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-10 border-t border-[#2a2a2a]/50 bg-[#080808]">
            <SocialLinks
              className="flex justify-center gap-6"
              iconClassName="text-[#888480] hover:text-[#f0ece4] transition-colors"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
