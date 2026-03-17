'use client'

import { useState, useTransition } from 'react'
import { Instagram, Youtube, Twitter, Facebook, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { subscribeToNewsletter } from '@/app/actions/subscribe'

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
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
              {[
                { label: 'TOUR', href: '/#tour' },
                { label: 'MUSIC', href: '/#music' },
                { label: 'MERCH', href: '/#merch' },
                { label: 'STORE', href: '/store' },
                { label: 'PRESS', href: '/#press' },
                { label: 'ABOUT', href: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#888480] hover:text-[#f0ece4] text-sm tracking-widest transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    {item.label}
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
              onSubmit={(e) => {
                e.preventDefault()
                setResult(null)
                startTransition(async () => {
                  const response = await subscribeToNewsletter(email)
                  setResult(response)
                  if (response.success) {
                    setEmail('')
                  }
                })
              }}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isPending}
                className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] text-[#f0ece4] placeholder:text-[#888480] px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-[#880808] transition-colors duration-200 disabled:opacity-50"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-[#880808] text-[#f0ece4] px-5 py-3 text-xs tracking-[0.2em] hover:bg-[#a00a0a] transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                {isPending ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>ENVIANDO...</span>
                  </>
                ) : (
                  'SUBSCRIBE'
                )}
              </button>
            </form>
            {/* Status message */}
            {result && (
              <div
                className={`mt-3 flex items-center gap-2 text-xs ${
                  result.success ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {result.success ? (
                  <CheckCircle size={14} />
                ) : (
                  <AlertCircle size={14} />
                )}
                <span>{result.message}</span>
              </div>
            )}
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
