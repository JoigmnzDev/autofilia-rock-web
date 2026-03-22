'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * BandStorySection
 *
 * Metallica-inspired full-width oblique slash section.
 * The white polygon is a FULL-WIDTH diagonal band (not a centered box),
 * exactly replicating the "Overload" cut-out from metallica.com:
 *
 *   Top edge:    from (0, ~22%) → (100%, ~2%)   — steep left-to-right rise
 *   Bottom edge: from (0, ~82%) → (100%, ~68%)  — same direction, flatter
 *
 * These two non-parallel edges create a thick diagonal slash of white
 * that bleeds off both screen edges and punches hard against the dark collage.
 *
 * Mobile: Angles are adjusted to be less aggressive so the button stays visible.
 */

const CLIP_TOP_LEFT = '22%'   // top-edge start, left side (desktop)
const CLIP_TOP_RIGHT = '2%'    // top-edge end,   right side (desktop)
const CLIP_BOT_LEFT = '83%'   // bottom-edge start, left side (desktop)
const CLIP_BOT_RIGHT = '69%'   // bottom-edge end,   right side (desktop)

// Mobile: More lenient bottom edge to keep button visible
const CLIP_TOP_LEFT_MOBILE = '28%'
const CLIP_TOP_RIGHT_MOBILE = '8%'
const CLIP_BOT_LEFT_MOBILE = '78%'
const CLIP_BOT_RIGHT_MOBILE = '62%'

export default function BandStorySection() {
  return (
    <section
      id="historia"
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'clamp(600px, 100vh, 800px)' }}
      aria-label="El Alma de Autofilia — Historia de la banda"
    >
      {/* ── Layer 0: Rock collage photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rock-collage-bg.jpg"
          alt="Collage de conciertos, amplificadores Marshall y memorabilia de Autofilia"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Deep radial gradient: darkens edges, keeps center readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.92) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Layer 1: Full-width oblique white slash ── */}
      {/*
        The polygon uses viewport-percentage values mapped to the element's
        own bounding box via clip-path. We stretch the element to full width
        and apply the clip so the white band bleeds off both edges exactly
        like the reference. On mobile, we use less aggressive angles.
      */}
      <div
        className="absolute inset-x-0 z-10"
        style={{
          /* Position: the white slash spans from ~2% to ~83% of the section height */
          top: 0,
          bottom: 0,
          clipPath: `polygon(
            0% ${CLIP_TOP_LEFT},
            100% ${CLIP_TOP_RIGHT},
            100% ${CLIP_BOT_RIGHT},
            0% ${CLIP_BOT_LEFT}
          )`,
          background: '#f0ece4',
        }}
        aria-hidden="true"
      />

      {/* Mobile-only overlay with adjusted clip-path */}
      <div
        className="absolute inset-x-0 z-10 md:hidden"
        style={{
          top: 0,
          bottom: 0,
          clipPath: `polygon(
            0% ${CLIP_TOP_LEFT_MOBILE},
            100% ${CLIP_TOP_RIGHT_MOBILE},
            100% ${CLIP_BOT_RIGHT_MOBILE},
            0% ${CLIP_BOT_LEFT_MOBILE}
          )`,
          background: '#f0ece4',
        }}
        aria-hidden="true"
      />

      {/* ── Layer 2: Content pinned inside the white slash ── */}
      {/*
        We recreate the same clip-path on the content wrapper so that the
        text is visually centred inside the diagonal band. The actual flex
        layout centres it between the two angled edges.
        
        Mobile: Uses higher top/bottom padding to keep button visible inside the band.
      */}
      <div
        className="relative z-20 flex flex-col items-center justify-center text-center w-full"
        style={{
          minHeight: 'clamp(600px, 100vh, 800px)',
          /* Mobile: More padding to keep button in the band */
          paddingTop: 'clamp(60px, 12%, 120px)',
          paddingBottom: 'clamp(80px, 20%, 160px)',
        }}
      >
        <div className="flex flex-col items-center gap-5 px-6 max-w-2xl mx-auto">

          {/* Eyebrow */}
          <p
            className="text-[10px] md:text-[11px] tracking-[0.55em] font-semibold"
            style={{
              fontFamily: 'var(--font-oswald), Impact, sans-serif',
              color: '#880808',
            }}
          >
            DESDE EL VOLCÁN
          </p>

          {/* Main heading */}
          <h2
            className="font-bold text-balance leading-none"
            style={{
              fontFamily: 'var(--font-oswald), Impact, sans-serif',
              color: '#050505',
              fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
              letterSpacing: '0.02em',
              lineHeight: '0.92',
            }}
          >
            EL ALMA DE AUTOFILIA
          </h2>

          {/* Divider */}
          <div
            className="flex items-center gap-3 w-48"
            aria-hidden="true"
          >
            <div className="flex-1 h-px bg-[#880808]" />
            <div className="w-[6px] h-[6px] rotate-45 bg-[#880808]" />
            <div className="flex-1 h-px bg-[#880808]" />
          </div>

          {/* Bio paragraph 1 */}
          <p
            className="text-sm md:text-[15px] leading-relaxed max-w-xl text-balance"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              color: '#1c1c1c',
              fontWeight: 300,
            }}
          >
            Nacidos del ruido y la rabia, Autofilia construyó su sonido entre
            sótanos con paredes que sangran feedback, amplificadores empujados
            hasta el punto de ruptura y riffs que dejan cicatrices.
            Noise-rock de trinchera, destilado en cada nota al borde del colapso.
          </p>

          {/* Bio paragraph 2 */}
          <p
            className="text-sm md:text-[15px] leading-relaxed max-w-xl text-balance"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              color: '#444',
              fontWeight: 300,
            }}
          >
            Más de una década incendiando recintos: cada disco una cicatriz nueva
            en el catálogo, cada concierto un ritual de catarsis colectiva.
            La música no se escucha — se siente en el esternón, en el límite
            donde el volumen se convierte en verdad.
          </p>

          {/* Brutalist outlined CTA */}
          <Link
            href="/about"
            className="mt-4 md:mt-2 inline-block border-2 border-[#050505] px-8 md:px-10 py-3 text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.4em] font-semibold transition-all duration-200 hover:bg-[#050505] hover:text-[#f0ece4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#880808] whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-oswald), Impact, sans-serif',
              color: '#050505',
            }}
          >
            NUESTRA HISTORIA COMPLETA
          </Link>

        </div>
      </div>
    </section>
  )
}
