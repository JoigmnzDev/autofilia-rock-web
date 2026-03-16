'use client'

import { ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function TermsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main
      className="min-h-screen bg-[#050505]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(136, 8, 8, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(136, 8, 8, 0.02) 0%, transparent 50%)',
      }}
      onScroll={handleScroll}
    >
      {/* Header Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p
              className="text-[#880808] text-sm tracking-[0.3em] mb-4"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              LEGAL INFORMATION
            </p>
            <h1
              className="text-6xl md:text-7xl font-black text-[#f0ece4] mb-6"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              TERMS &
              <br />
              CONDITIONS
            </h1>
            <p className="text-[#888480] text-lg leading-relaxed max-w-2xl">
              Please read our terms and conditions carefully. By accessing and using our website and services, you accept and
              agree to be bound by the terms and provisions of this agreement.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 01 */}
          <div className="border-l-2 border-[#880808] pl-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="text-[#880808] text-2xl font-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                01
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                USE LICENSE
              </h2>
            </div>
            <p className="text-[#888480] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="text-[#888480] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Section 02 */}
          <div className="border-l-2 border-[#880808] pl-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="text-[#880808] text-2xl font-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                02
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                DISCLAIMER
              </h2>
            </div>
            <p className="text-[#888480] leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-[#888480] leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          {/* Section 03 */}
          <div className="border-l-2 border-[#880808] pl-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="text-[#880808] text-2xl font-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                03
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                LIMITATIONS
              </h2>
            </div>
            <p className="text-[#888480] leading-relaxed mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
              corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <p className="text-[#888480] leading-relaxed">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
              rerum facilis est et expedita distinctio nam libero tempore.
            </p>
          </div>

          {/* Section 04 */}
          <div className="border-l-2 border-[#880808] pl-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="text-[#880808] text-2xl font-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                04
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                ACCURACY OF MATERIALS
              </h2>
            </div>
            <p className="text-[#888480] leading-relaxed mb-4">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
              facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
            <p className="text-[#888480] leading-relaxed">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae itaque earum.
            </p>
          </div>

          {/* Section 05 */}
          <div className="border-l-2 border-[#880808] pl-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="text-[#880808] text-2xl font-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                05
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                MODIFICATIONS
              </h2>
            </div>
            <p className="text-[#888480] leading-relaxed mb-4">
              Rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
              rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores.
            </p>
            <p className="text-[#888480] leading-relaxed">
              Alias quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui
              dolorem ipsum quia dolor sit amet consectetur adipisci velit.
            </p>
          </div>

          {/* Section 06 */}
          <div className="border-l-2 border-[#880808] pl-8">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="text-[#880808] text-2xl font-black flex-shrink-0"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                06
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#f0ece4]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                GOVERNING LAW
              </h2>
            </div>
            <p className="text-[#888480] leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-[#888480] leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which
              the service is provided, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#2a2a2a] bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-[#880808] text-sm tracking-[0.3em] mb-6"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            HAVE QUESTIONS?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-6"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            CONTACT US
          </h2>
          <p className="text-[#888480] text-lg mb-8">
            If you have any questions about these terms and conditions, please contact us at:{' '}
            <a href="mailto:info@autofilia.com" className="text-[#880808] hover:text-[#f0ece4] transition-colors">
              info@autofilia.com
            </a>
          </p>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#880808] hover:bg-[#b00a0a] text-[#f0ece4] p-3 rounded-full transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </main>
  )
}
