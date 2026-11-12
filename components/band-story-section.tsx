"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * BandStorySection — "Visual Manifesto" Edition
 *
 * A disruptive, experimental section channeling Volcanic Noise & Urban Decay.
 * Features:
 * - Jagged asymmetrical "rift" fracture cutting through the dark screen
 * - Mouse-driven parallax with chromatic aberration glitch effect
 * - Brutalist overlapping typography (outlined + filled)
 * - SVG noise/film grain texture overlay
 * - Aggressive geometry that bleeds off edges on desktop
 */

// Jagged rift polygon — asymmetrical fracture points
const RIFT_CLIP_PATH = `polygon(
  0% 18%,
  8% 12%,
  15% 16%,
  25% 8%,
  35% 14%,
  45% 6%,
  55% 10%,
  65% 4%,
  75% 12%,
  85% 6%,
  92% 14%,
  100% 8%,
  100% 78%,
  93% 84%,
  85% 79%,
  75% 88%,
  65% 82%,
  55% 90%,
  45% 85%,
  35% 92%,
  25% 86%,
  15% 94%,
  8% 88%,
  0% 82%
)`;

// Mobile rift — less aggressive angles for readability
const RIFT_CLIP_PATH_MOBILE = `polygon(
  0% 22%,
  12% 18%,
  25% 22%,
  40% 16%,
  55% 20%,
  70% 14%,
  85% 20%,
  100% 15%,
  100% 72%,
  88% 78%,
  75% 74%,
  60% 80%,
  45% 76%,
  30% 82%,
  15% 78%,
  0% 75%
)`;

export default function BandStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Parallax offsets
  const bgOffset = {
    x: mousePos.x * 20,
    y: mousePos.y * 15,
  };
  const glitchOffset = {
    x: mousePos.x * -35,
    y: mousePos.y * -25,
  };

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="relative w-full overflow-hidden select-none"
      style={{ minHeight: "clamp(700px, 100vh, 950px)" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
      aria-label="El Alma de Autofilia — Manifiesto Visual"
    >
      {/* ══════════════════════════════════════════════════════════════════
          LAYER 0: Deep obsidian base with radial volcanic glow
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(136,8,8,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 100% 80% at 30% 70%, rgba(136,8,8,0.05) 0%, transparent 60%),
            linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #050505 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 1: Collage background with parallax + chromatic aberration
      ══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-[1]">
        {/* Main collage layer */}
        <div
          className="absolute inset-[-20px] transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${bgOffset.x}px, ${bgOffset.y}px) scale(1.08)`,
          }}
        >
          <Image
            src="/images/rock-collage-bg.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Chromatic aberration / red channel glitch layer */}
        <div
          className="absolute inset-[-30px] transition-transform duration-75 ease-out mix-blend-multiply pointer-events-none"
          style={{
            transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px) scale(1.1)`,
            opacity: isHovering ? 0.35 : 0,
          }}
        >
          <Image
            src="/images/rock-collage-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            style={{
              filter:
                "grayscale(100%) sepia(100%) hue-rotate(-50deg) saturate(3)",
            }}
            aria-hidden="true"
          />
        </div>

        {/* Heavy dark vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(5,5,5,0.7) 100%),
              linear-gradient(0deg, rgba(5,5,5,0.9) 0%, transparent 25%, transparent 75%, rgba(5,5,5,0.9) 100%)
            `,
          }}
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 2: The RIFT — Jagged bone-white fracture
      ══════════════════════════════════════════════════════════════════ */}
      {/* Desktop rift */}
      <div
        className="absolute inset-x-0 top-0 bottom-0 z-10 hidden md:block"
        style={{
          clipPath: RIFT_CLIP_PATH,
          background: "rgba(240, 236, 228, 0.05)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
      />
      {/* Mobile rift — less aggressive */}
      <div
        className="absolute inset-x-0 top-0 bottom-0 z-10 md:hidden"
        style={{
          clipPath: RIFT_CLIP_PATH_MOBILE,
          background: "rgba(240, 236, 228, 0.05)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
      />

      {/* Rift edge shadow for depth */}
      <div
        className="absolute inset-x-0 top-0 bottom-0 z-[9] hidden md:block"
        style={{
          clipPath: RIFT_CLIP_PATH,
          background: "transparent",
          boxShadow: "inset 0 0 60px 30px rgba(5,5,5,0.15)",
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 3: Brutalist overlapping typography (background text)
      ═════════════════════════════════════════���════════════════════════ */}
      <div
        className="absolute inset-0 z-[8] flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Giant outlined "AUTOFILIA" bleeding off edges */}
        <span
          className="absolute whitespace-nowrap select-none hidden lg:block"
          style={{
            fontFamily: "var(--font-oswald), Impact, sans-serif",
            fontSize: "clamp(180px, 22vw, 320px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "transparent",
            WebkitTextStroke: "2px rgba(5,5,5,0.08)",
            transform: "translateX(-8%) translateY(-5%)",
          }}
        >
          AUTOFILIA
        </span>
        {/* Second layer — rotated accent */}
        <span
          className="absolute whitespace-nowrap select-none hidden xl:block"
          style={{
            fontFamily: "var(--font-oswald), Impact, sans-serif",
            fontSize: "clamp(100px, 12vw, 180px)",
            fontWeight: 900,
            letterSpacing: "0.1em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(136,8,8,0.12)",
            transform: "rotate(-12deg) translateY(120px) translateX(25%)",
          }}
        >
          NOISE·ROCK
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 4: Main content inside the rift
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="relative z-20 flex flex-col items-center justify-center w-full text-center px-6 md:px-12"
        style={{
          minHeight: "clamp(700px, 100vh, 950px)",
          paddingTop: "clamp(100px, 18%, 180px)",
          paddingBottom: "clamp(120px, 22%, 200px)",
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-[#880808] text-[10px] md:text-[11px] tracking-[0.5em] font-bold mb-4"
          style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
        >
          MANIFIESTO SONORO
        </p>

        {/* Main heading — overlapping outlined + filled */}
        <div className="relative mb-8 md:mb-12">
          {/* Capa de contorno (Solo visible y ajustada para Desktop) */}
          <h2
            className="absolute inset-0 select-none pointer-events-none hidden lg:block"
            style={{
              fontFamily: "var(--font-oswald), Impact, sans-serif",
              fontSize: "clamp(2rem, 6vw, 4.5rem)", // Bajamos el máximo en desktop
              fontWeight: 900,
              letterSpacing: "-0.02em", // Letras más juntas en desktop para que se vea más pro
              color: "transparent",
              WebkitTextStroke: "1px rgba(136,8,8,0.2)", // Borde rojo muy fino en lugar de negro
              transform: "translate(6px, -6px)", // Desplazamiento hacia arriba a la derecha (estilo póster)
            }}
            aria-hidden="true"
          >
            EL ALMA DE AUTOFILIA
          </h2>

          {/* Capa sólida principal */}
          <h2
            className="relative text-[#f0ece4] font-black leading-[0.85] tracking-tight text-balance uppercase"
            style={{
              fontFamily: "var(--font-oswald), Impact, sans-serif",
              fontSize: "clamp(2.2rem, 7vw, 4.8rem)",
            }}
          >
            El alma de <br className="md:hidden" />
            <span className="text-[#880808]">Autofilia</span>
          </h2>
        </div>

        {/* Decorative fracture line */}
        <div className="flex items-center gap-4 mb-8" aria-hidden="true">
          <div className="w-12 md:w-20 h-[2px] bg-[#f0ece4]/20" />
          <div
            className="w-3 h-3 rotate-45 border-2 border-[#880808]"
            style={{ background: "transparent" }}
          />
          <div className="w-12 md:w-20 h-[2px] bg-[#f0ece4]/20" />
        </div>

        {/* Manifesto text */}
        <div className="max-w-2xl space-y-5 mb-10">
          <p
            className="text-[#d6d0c8] text-sm md:text-base leading-relaxed text-balance"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            <span className="font-semibold text-[#f0ece4]">
              Desde el volcán.
            </span>{" "}
            Nacidos del ruido atómico y la rabia volcánica de las Islas
            Canarias, Autofilia construyó su sonido entre paredes de feedback y
            amplificadores empujados más allá del límite. Noise-rock de
            trinchera, destilado en cada nota al borde del colapso.
          </p>
        </div>

        {/* Brutalist CTA button */}
        <Link
          href="/about"
          className="inline-block border-2 border-[#f0ece4] text-[#f0ece4] px-10 py-4 text-[10px] md:text-xs tracking-[0.3em] font-black uppercase transition-all duration-300 hover:bg-[#f0ece4] hover:text-[#050505] active:scale-95"
          style={{ fontFamily: "var(--font-oswald), sans-serif" }}
        >
          Nuestra historia completa
        </Link>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 5: Film grain / noise texture overlay
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ mixBlendMode: "overlay", opacity: 0.12 }}
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-grain)" />
        </svg>
      </div>
    </section>
  );
}
