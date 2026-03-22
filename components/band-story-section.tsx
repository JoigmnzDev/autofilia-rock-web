'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BandStorySection() {
  return (
    <section
      id="historia"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '760px' }}
      aria-label="El Alma de Autofilia — Historia de la banda"
    >

      {/* ─────────────────────────────────────────
          LAYER 0 — Rock collage background image
      ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rock-collage-bg.jpg"
          alt="Collage de conciertos, amplificadores Marshall y memorabilia de Autofilia"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Deep radial black gradient for negative-space contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.93) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hard black vignette on top and bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.9) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ─────────────────────────────────────────
          LAYER 1 — Full-width layout wrapper
      ───────────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-center w-full min-h-[760px] py-24 px-4 md:px-8">

        {/* ── Max-width constraint ── */}
        <div className="relative w-full max-w-4xl">

          {/* ─────────────────────────────────────
              THE OBLIQUE CUT-OUT POLYGON
              Geometry (matching brutalist Metallica-banner style):
                Top-left  → 5% from left, 0% top
                Top-right → 100% from left, 0% top
                Bottom-right → 95% from left, 100% bottom
                Bottom-left → 0% from left, 100% bottom
              Plus the inner top/bottom slants are NON-PARALLEL:
                top-left starts at 8% height (drops inward)
                bottom-right starts at 92% height (rises inward)
              This creates a strong asymmetric parallelogram with
              different angular energies on each corner.
          ─────────────────────────────────────── */}

          {/* Outer blood-red shadow/border slab — offset by a few pixels for depth */}
          <div
            className="absolute inset-0 translate-x-2 translate-y-2"
            style={{
              background: '#880808',
              clipPath:
                'polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)',
            }}
            aria-hidden="true"
          />

          {/* The main white oblique polygon */}
          <div
            className="relative"
            style={{
              background: '#f0ece4',
              clipPath:
                'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)',
            }}
          >
            {/* Inner padding using a non-clipped div so text isn't cropped */}
            <div className="flex flex-col items-center text-center gap-5 px-10 py-16 md:px-20 md:py-20">

              {/* ── Eyebrow label ── */}
              <p
                className="text-[11px] tracking-[0.5em] font-semibold"
                style={{
                  fontFamily: 'var(--font-oswald), Impact, sans-serif',
                  color: '#880808',
                  letterSpacing: '0.48em',
                }}
              >
                DESDE EL VOLCÁN
              </p>

              {/* ── Main heading ── */}
              <h2
                className="font-bold leading-none text-balance"
                style={{
                  fontFamily: 'var(--font-oswald), Impact, sans-serif',
                  color: '#050505',
                  fontSize: 'clamp(2.6rem, 8vw, 6rem)',
                  letterSpacing: '0.03em',
                  lineHeight: '0.95',
                }}
              >
                EL ALMA DE
                <br />
                AUTOFILIA
              </h2>

              {/* ── Ruled separator with angled ends ── */}
              <div className="flex items-center gap-3 w-full max-w-xs" aria-hidden="true">
                <div className="flex-1 h-px" style={{ background: '#880808' }} />
                <div
                  className="w-2 h-2 rotate-45"
                  style={{ background: '#880808' }}
                />
                <div className="flex-1 h-px" style={{ background: '#880808' }} />
              </div>

              {/* ── Biography paragraph 1 ── */}
              <p
                className="text-sm md:text-base leading-relaxed max-w-lg text-balance"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  color: '#1a1a1a',
                  fontWeight: 300,
                }}
              >
                Nacidos del ruido y la rabia, Autofilia construyó su sonido entre
                sótanos con paredes que sangran feedback, amplificadores empujados
                hasta el punto de ruptura y riffs que dejan cicatrices. Noise-rock
                de trinchera, destilado en cada nota al borde del colapso.
              </p>

              {/* ── Biography paragraph 2 ── */}
              <p
                className="text-sm md:text-base leading-relaxed max-w-lg text-balance"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  color: '#444',
                  fontWeight: 300,
                }}
              >
                Más de una década incendiando recintos: cada disco una cicatriz
                nueva en el catálogo, cada concierto un ritual de catarsis
                colectiva. La música no se escucha — se siente en el esternón,
                en el límite donde el volumen se convierte en verdad.
              </p>

              {/* ── CTA button — brutalist outlined ── */}
              <Link
                href="/about"
                className="mt-3 inline-block border-2 px-10 py-3 text-[11px] tracking-[0.35em] font-semibold transition-all duration-200 hover:bg-[#050505] hover:text-[#f0ece4]"
                style={{
                  fontFamily: 'var(--font-oswald), Impact, sans-serif',
                  borderColor: '#050505',
                  color: '#050505',
                  letterSpacing: '0.35em',
                }}
              >
                NUESTRA HISTORIA COMPLETA
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: 'rgba(136,8,8,0.4)' }}
        aria-hidden="true"
      />
    </section>
  )
}
