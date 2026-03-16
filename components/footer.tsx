'use client'

import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react'

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

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
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              AUTOFILIA
            </h2>
            <p className="text-[#888480] text-sm leading-relaxed max-w-xs">
              Rock band from Madrid. Playing loud since 2019. Tour the world, break the noise.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[#888480] hover:text-[#880808] transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-[#880808] text-xs tracking-[0.3em] mb-6"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              NAVIGATION
            </h3>
            <ul className="flex flex-col gap-3">
              {['TOUR', 'MUSIC', 'MERCH', 'PRESS', 'ABOUT'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#888480] hover:text-[#f0ece4] text-sm tracking-widest transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-[#880808] text-xs tracking-[0.3em] mb-6"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              JOIN THE CIRCLE
            </h3>
            <p className="text-[#888480] text-sm mb-5 leading-relaxed">
              First access to tickets, exclusive drops, raw content.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] text-[#f0ece4] placeholder:text-[#888480] px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-[#880808] transition-colors duration-200"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-[#880808] text-[#f0ece4] px-5 py-3 text-xs tracking-[0.2em] hover:bg-[#a00a0a] transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#888480] text-[11px] tracking-wider">
            © 2026 AUTOFILIA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'PRIVACY', href: '/privacy' },
              { label: 'TERMS', href: '/terms' },
              { label: 'COOKIES', href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#888480] hover:text-[#f0ece4] text-[11px] tracking-wider transition-colors duration-200"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
