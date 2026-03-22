'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BandStorySection() {
  return (
    <section
      id="historia"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '680px' }}
      aria-label="El Alma de Autofilia"
    >
      {/* ── Full-width collage background ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rock-collage-bg.jpg"
          alt="Autofilia rock collage — conciertos, amplificadores y memorabilia"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Deep dark overlay for drama and contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.45) 50%, rgba(5,5,5,0.72) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Subtle blood-red edge glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px 20px rgba(136,8,8,0.25)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Angled white polygon text container ── */}
      {/*
        The oblique/parallelogram shape is achieved with two CSS techniques:
        1. clip-path on the white panel — a bold skewed parallelogram
        2. An extra decorative red slash accent line
      */}
      <div className="relative z-10 flex items-center justify-center w-full min-h-[680px] py-20 px-6">

        {/* Outer wrapper that holds the slant + decorative lines */}
        <div className="relative w-full max-w-3xl">

          {/* Decorative blood-red slash — left edge accent */}
          <div
            className="absolute -left-3 top-0 bottom-0 w-3 hidden md:block"
            style={{
              background: '#880808',
              clipPath: 'polygon(0 0, 100% 6%, 100% 94%, 0 100%)',
            }}
            aria-hidden="true"
          />

          {/* The bold oblique white panel */}
          <div
            className="relative px-10 py-14 md:px-16 md:py-16"
            style={{
              background: '#f0ece4',
              clipPath:
                'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)',
            }}
          >
            {/* Inner content — dark text on white */}
            <div className="flex flex-col items-center text-center gap-6">

              {/* Eyebrow label */}
              <p
                className="text-[#880808] text-[10px] tracking-[0.45em] font-semibold"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                DESDE LAS CALLES · DESDE EL FONDO
              </p>

              {/* Main heading */}
              <h2
                className="text-[#050505] font-bold leading-none tracking-tight text-balance"
                style={{
                  fontFamily: 'var(--font-oswald), Impact, sans-serif',
                  fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
                  letterSpacing: '0.04em',
                }}
              >
                EL ALMA DE AUTOFILIA
              </h2>

              {/* Red rule separator */}
              <div
                className="w-16 h-0.5 bg-[#880808]"
                aria-hidden="true"
              />

              {/* Biography text */}
              <p
                className="text-[#1a1a1a] text-sm md:text-base leading-relaxed max-w-xl text-balance font-light"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Nacidos del ruido y la rabia de la ciudad, Autofilia forjó su sonido
                entre sótanos iluminados por bombillas rojas y escenarios que temblaban
                con cada riff. Cuatro cuerdas, una batería y una voz que sangra verdad:
                eso es todo lo que necesitamos para derrumbar paredes.
              </p>
              <p
                className="text-[#444] text-sm md:text-base leading-relaxed max-w-xl text-balance font-light"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Más de una década incendiando recintos, cada disco una cicatriz nueva,
                cada concierto un ritual compartido entre la banda y quienes saben
                que la música no se escucha — se siente en el pecho.
              </p>

              {/* CTA button — outlined, dark on white */}
              <Link
                href="/about"
                className="mt-2 inline-block border-2 border-[#050505] text-[#050505] px-10 py-3 text-xs tracking-[0.3em] font-semibold hover:bg-[#050505] hover:text-[#f0ece4] transition-all duration-300"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                NUESTRA HISTORIA
              </Link>

            </div>
          </div>

          {/* Decorative blood-red slash — right edge accent */}
          <div
            className="absolute -right-3 top-0 bottom-0 w-3 hidden md:block"
            style={{
              background: '#880808',
              clipPath: 'polygon(0 6%, 100% 0%, 100% 100%, 0 94%)',
            }}
            aria-hidden="true"
          />

        </div>
      </div>

      {/* Bottom red hairline border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#880808]/50 z-10" aria-hidden="true" />
    </section>
  )
}
