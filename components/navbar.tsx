'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'TOUR', href: '/#tour' },
  { label: 'MUSIC', href: '/#music' },
  { label: 'MERCH', href: '/#merch' },
  { label: 'CONTACT', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-sm border-b border-[#2a2a2a]' : 'bg-transparent'
        }`}
    >
      <nav
        className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="text-[#f0ece4] text-xl md:text-2xl tracking-[0.2em] font-bold"
          style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          aria-label="Autofilia home"
        >
          AUTOFILIA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#888480] hover:text-[#f0ece4] text-xs tracking-[0.25em] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#tour"
          className="hidden md:inline-flex items-center border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] text-xs tracking-[0.2em] px-5 py-2.5 transition-all duration-300"
          style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
        >
          GET TICKETS
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f0ece4] p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#050505]/98 border-t border-[#2a2a2a]">
          <ul className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#f0ece4] text-2xl tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
