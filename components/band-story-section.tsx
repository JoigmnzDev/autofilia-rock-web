'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * BandStorySection — "Volcanic Noise & Urban Decay"
 *
 * A raw, brutalist, experimental section for Autofilia Rock.
 * Features:
 * - Layered CSS shapes with distorted SVG masks
 * - Massive overlapping Oswald typography (outlined + filled + cropped)
 * - Asymmetrical jagged white "shard" cutting across the screen
 * - Mouse-driven glitch/shift effect on background elements
 * - Manifesto-style biography text
 * - Zero rounded corners, zero soft shadows — pure geometry
 */

export default function BandStorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x, y })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => {
      setIsHovering(false)
      setMousePos({ x: 0, y: 0 })
    }

    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseenter', handleMouseEnter)
    section.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseenter', handleMouseEnter)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Glitch offset based on mouse position
  const glitchX = mousePos.x * 20
  const glitchY = mousePos.y * 15

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="relative w-full overflow-hidden bg-[#050505]"
      style={{ minHeight: 'clamp(700px, 100vh, 1000px)' }}
      aria-label="El Alma de Autofilia — Historia de la banda"
    >
      {/* ══════════════════════════════════════════════════════════════════
          LAYER 0: Deep obsidian base with radial lava glow
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 80%, rgba(136,8,8,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(136,8,8,0.1) 0%, transparent 40%),
            radial-gradient(ellipse 100% 100% at 50% 50%, #0a0a0a 0%, #050505 100%)
          `,
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 1: Rock collage with glitch effect
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[1] transition-transform duration-100 ease-out"
        style={{
          transform: isHovering
            ? `translate(${glitchX}px, ${glitchY}px) scale(1.02)`
            : 'translate(0, 0) scale(1)',
        }}
      >
        <Image
          src="/images/rock-collage-bg.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-40 grayscale"
          style={{
            filter: isHovering
              ? `grayscale(0.8) contrast(1.2) brightness(0.7)`
              : 'grayscale(1) contrast(1) brightness(0.5)',
          }}
          priority
          aria-hidden="true"
        />
      </div>

      {/* Glitch duplicate layer (red channel offset) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none transition-all duration-75 ease-out mix-blend-multiply"
        style={{
          opacity: isHovering ? 0.3 : 0,
          transform: `translate(${glitchX * 1.5}px, ${glitchY * 0.5}px)`,
        }}
      >
        <Image
          src="/images/rock-collage-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{
            filter: 'grayscale(0) sepia(1) saturate(5) hue-rotate(-20deg)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 2: Industrial texture overlay (SVG noise mask)
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 3: Geometric lava fractures (CSS shapes)
      ══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-[4] pointer-events-none" aria-hidden="true">
        {/* Diagonal lava crack - top left */}
        <div
          className="absolute top-0 left-0 w-1 h-[40%] bg-[#880808] origin-top-left"
          style={{ transform: 'rotate(25deg) translateX(-50%)', opacity: 0.6 }}
        />
        {/* Diagonal lava crack - bottom right */}
        <div
          className="absolute bottom-0 right-0 w-1 h-[35%] bg-[#880808] origin-bottom-right"
          style={{ transform: 'rotate(-30deg) translateX(50%)', opacity: 0.4 }}
        />
        {/* Horizontal fracture */}
        <div
          className="absolute top-[15%] left-0 w-[30%] h-px bg-gradient-to-r from-[#880808] to-transparent"
          style={{ opacity: 0.5 }}
        />
        {/* Vertical fracture */}
        <div
          className="absolute top-0 right-[20%] w-px h-[25%] bg-gradient-to-b from-[#880808] to-transparent"
          style={{ opacity: 0.4 }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 4: Massive cropped background typography
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Giant outlined "AUTOFILIA" bleeding off edges */}
        <span
          className="absolute font-black uppercase italic"
          style={{
            fontFamily: 'var(--font-oswald), Impact, sans-serif',
            fontSize: 'clamp(180px, 25vw, 400px)',
            lineHeight: 0.8,
            top: '-5%',
            left: '-5%',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(136,8,8,0.15)',
            letterSpacing: '-0.02em',
            transform: `translate(${glitchX * 0.5}px, ${glitchY * 0.3}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          AUTO
        </span>
        <span
          className="absolute font-black uppercase italic"
          style={{
            fontFamily: 'var(--font-oswald), Impact, sans-serif',
            fontSize: 'clamp(160px, 22vw, 350px)',
            lineHeight: 0.8,
            bottom: '-8%',
            right: '-3%',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(240,236,228,0.08)',
            letterSpacing: '-0.02em',
            transform: `translate(${-glitchX * 0.3}px, ${-glitchY * 0.2}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          FILIA
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 5: The Jagged White Shard — Volcanic Rift
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[10]"
        style={{
          clipPath: `polygon(
            0% 25%,
            8% 18%,
            15% 22%,
            25% 12%,
            35% 16%,
            45% 8%,
            55% 14%,
            65% 6%,
            75% 15%,
            85% 10%,
            92% 18%,
            100% 12%,
            100% 78%,
            94% 85%,
            88% 80%,
            78% 88%,
            68% 82%,
            58% 90%,
            48% 84%,
            38% 92%,
            28% 86%,
            18% 90%,
            10% 82%,
            0% 88%
          )`,
          background: '#f0ece4',
        }}
        aria-hidden="true"
      />

      {/* Shard inner shadow for depth */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none"
        style={{
          clipPath: `polygon(
            0% 25%,
            8% 18%,
            15% 22%,
            25% 12%,
            35% 16%,
            45% 8%,
            55% 14%,
            65% 6%,
            75% 15%,
            85% 10%,
            92% 18%,
            100% 12%,
            100% 78%,
            94% 85%,
            88% 80%,
            78% 88%,
            68% 82%,
            58% 90%,
            48% 84%,
            38% 92%,
            28% 86%,
            18% 90%,
            10% 82%,
            0% 88%
          )`,
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.05) 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 6: Content — The Manifesto
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-[20] flex flex-col items-center justify-center min-h-[700px] px-6 py-20 md:py-28">
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-3xl mx-auto text-center">
          {/* Eyebrow label */}
          <p
            className="text-[10px] md:text-[12px] tracking-[0.6em] font-bold text-[#880808] uppercase"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            Desde el volcán
          </p>

          {/* Main heading — overlapping layers */}
          <div className="relative">
            {/* Shadow/outline layer */}
            <h2
              className="absolute inset-0 font-black uppercase text-transparent select-none pointer-events-none"
              style={{
                fontFamily: 'var(--font-oswald), Impact, sans-serif',
                fontSize: 'clamp(2.8rem, 10vw, 7rem)',
                lineHeight: 0.85,
                WebkitTextStroke: '1px rgba(136,8,8,0.3)',
                transform: 'translate(3px, 3px)',
              }}
              aria-hidden="true"
            >
              El alma de
              <br />
              Autofilia
            </h2>
            {/* Main visible heading */}
            <h2
              className="relative font-black uppercase text-[#050505] text-balance"
              style={{
                fontFamily: 'var(--font-oswald), Impact, sans-serif',
                fontSize: 'clamp(2.8rem, 10vw, 7rem)',
                lineHeight: 0.85,
              }}
            >
              El alma de
              <br />
              <span className="text-[#880808]">Autofilia</span>
            </h2>
          </div>

          {/* Brutalist divider */}
          <div className="flex items-center gap-3 w-40 md:w-56" aria-hidden="true">
            <div className="flex-1 h-[2px] bg-[#050505]" />
            <div className="w-3 h-3 rotate-45 bg-[#880808]" />
            <div className="flex-1 h-[2px] bg-[#050505]" />
          </div>

          {/* Manifesto text */}
          <div className="space-y-5 max-w-xl">
            <p
              className="text-sm md:text-base text-[#1a1a1a] leading-relaxed font-medium text-balance"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Nacidos del ruido y la rabia, Autofilia construyó su sonido entre
              sótanos con paredes que sangran feedback, amplificadores empujados
              hasta el punto de ruptura, y riffs que dejan cicatrices. Noise-rock
              de trinchera, destilado en cada nota al borde del colapso.
            </p>
            <p
              className="text-sm md:text-base text-[#333] leading-relaxed text-balance"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Más de una década incendiando recintos: cada disco una cicatriz
              nueva en el catálogo, cada concierto un ritual de catarsis colectiva.
              La música no se escucha — se siente en el esternón, en el límite
              donde el volumen se convierte en verdad.
            </p>
          </div>

          {/* Brutalist CTA */}
          <Link
            href="/about"
            className="mt-4 md:mt-6 inline-block border-[3px] border-[#050505] px-10 py-4 text-[11px] md:text-[13px] tracking-[0.4em] font-black uppercase transition-all duration-200 hover:bg-[#050505] hover:text-[#f0ece4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#880808] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0ece4]"
            style={{
              fontFamily: 'var(--font-oswald), Impact, sans-serif',
              color: '#050505',
            }}
          >
            Nuestra historia completa
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LAYER 7: Edge vignette
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[25] pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px 50px rgba(5,5,5,0.4)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
