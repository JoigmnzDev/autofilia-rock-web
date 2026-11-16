"use client";

import { ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{ pointerEvents: "none" }}
        >
          <iframe
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/uKqL5RX2ujA?autoplay=1&mute=1&loop=1&playlist=uKqL5RX2ujA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Background video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, #050505 100%), linear-gradient(to bottom, #050505 0%, transparent 15%, transparent 75%, #050505 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{ boxShadow: "0 0 120px 60px rgba(136,8,8,0.15)" }}
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none">
        <p
          className="text-[#880808] text-xs tracking-[0.4em] mb-6"
          style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
        >
          NUEVO ÁLBUM — SABOREANDO SALES
        </p>
        <h1
          className="text-[clamp(4rem,14vw,13rem)] font-bold leading-none text-[#f0ece4] tracking-tight text-balance"
          style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
        >
          AUTOFILIA
        </h1>
        <p className="mt-4 text-[#888480] text-sm md:text-base tracking-widest font-light text-balance">
          ROCK · SANGRE · FUEGO · RUIDO
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#music"
            className="flex items-center gap-2 bg-[#880808] text-[#f0ece4] px-8 py-4 text-xs tracking-[0.25em] hover:bg-[#a00a0a] transition-colors duration-300"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            <Play size={14} fill="currentColor" />
            ESCUCHAR AHORA
          </a>
          <a
            href="#tour"
            className="border border-[#2a2a2a] text-[#888480] hover:text-[#f0ece4] hover:border-[#f0ece4] px-8 py-4 text-xs tracking-[0.25em] transition-all duration-300"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            FECHAS DE TOUR
          </a>
        </div>
      </div>
      <a
        href="#tour"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#888480] hover:text-[#880808] transition-colors duration-300 animate-bounce"
        aria-label="Scroll to FECHAS DE TOUR"
      >
        <ChevronDown size={24} />
      </a>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#880808]/40" />
    </section>
  );
}
