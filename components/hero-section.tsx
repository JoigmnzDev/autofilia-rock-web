'use client'

import { ChevronDown, Play } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      aria-label="Hero"
    >
      {/* YouTube background video — muted autoplay loop via iframe API */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        {/* YouTube iframe — scaled up to cover, pointer-events none so it never interrupts UX */}
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{ pointerEvents: 'none' }}
        >
          <iframe
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/nVhNCTH8pDs?autoplay=1&mute=1&loop=1&playlist=nVhNCTH8pDs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Background video"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>

        {/* Cinematic vignette + noise overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, #050505 100%), linear-gradient(to bottom, #050505 0%, transparent 15%, transparent 75%, #050505 100%)',
          }}
        />

        {/* Subtle red glow bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{ boxShadow: '0 0 120px 60px rgba(136,8,8,0.15)' }}
          aria-hidden="true"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none">
        {/* Eyebrow */}
        <p
          className="text-[#880808] text-xs tracking-[0.4em] mb-6"
          style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
        >
          NEW ALBUM — SANGRE
        </p>

        {/* Band name */}
        <h1
          className="text-[clamp(4rem,14vw,13rem)] font-bold leading-none text-[#f0ece4] tracking-tight text-balance"
          style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
        >
          AUTOFILIA
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-[#888480] text-sm md:text-base tracking-widest font-light text-balance">
          ROCK · BLOOD · FIRE · NOISE
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#music"
            className="flex items-center gap-2 bg-[#880808] text-[#f0ece4] px-8 py-4 text-xs tracking-[0.25em] hover:bg-[#a00a0a] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            <Play size={14} fill="currentColor" />
            LISTEN NOW
          </a>
          <a
            href="#tour"
            className="border border-[#2a2a2a] text-[#888480] hover:text-[#f0ece4] hover:border-[#f0ece4] px-8 py-4 text-xs tracking-[0.25em] transition-all duration-300"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            TOUR DATES
          </a>
        </div>

        {/* Video play button */}
        <button
          onClick={() => setVideoPlaying(!videoPlaying)}
          className="mt-12 flex flex-col items-center gap-2 text-[#888480] hover:text-[#880808] transition-colors duration-300 group"
          aria-label="Watch latest video"
        >
          <span className="border border-[#2a2a2a] group-hover:border-[#880808] rounded-full p-3 transition-colors duration-300">
            <Play size={16} />
          </span>
          <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}>
            WATCH VIDEO
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <a
        href="#tour"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#888480] hover:text-[#880808] transition-colors duration-300 animate-bounce"
        aria-label="Scroll to tour dates"
      >
        <ChevronDown size={24} />
      </a>

      {/* Thin red bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#880808]/40" />
    </section>
  )
}
