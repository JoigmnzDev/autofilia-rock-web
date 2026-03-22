"use client";

import NewsletterSection from "@/components/newsletter/newsletter-section";
import Link from "next/link";
import { SocialLinks } from "./social-links";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#050505] border-t border-[#2a2a2a]"
      aria-label="Footer"
    >
      {/* Top red line */}
      <div className="h-px bg-[#880808]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 md:py-20">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              AUTOFILIA
            </h2>
            <p className="text-[#888480] text-sm leading-relaxed max-w-xs">
              Banda de rock nacida en Canarias. Rompiendo el silencio desde
              2025. Un sonido crudo nacido entre volcanes y el Atlántico.
            </p>
            <SocialLinks
              className="mt-2"
              iconClassName="text-[#888480] group-hover:text-[#f0ece4] fill-[#888480] group-hover:fill-[#f0ece4]"
            />
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-[#880808] text-xs tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              NAVEGACIÓN
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "TOUR", href: "/#tour" },
                { label: "MÚSICA", href: "/#music" },
                { label: "SOBRE NOSOTROS", href: "/about" },
                { label: "CONTACTO", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#888480] hover:text-[#f0ece4] text-sm tracking-widest transition-colors duration-200 uppercase"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <NewsletterSection />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#888480] text-[11px] tracking-wider">
            © 2026 AUTOFILIA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "PRIVACIDAD", href: "/privacy" },
              { label: "AVISO LEGAL", href: "/legal" },
              { label: "COOKIES", href: "/cookies" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#888480] hover:text-[#f0ece4] text-[11px] tracking-wider transition-colors duration-200"
                style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
