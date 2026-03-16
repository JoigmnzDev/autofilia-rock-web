import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — AUTOFILIA',
  description: 'Privacy policy for the official Autofilia website.',
}

const sections = [
  {
    number: '01',
    title: 'INFORMATION WE COLLECT',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    number: '02',
    title: 'HOW WE USE YOUR DATA',
    body: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.`,
  },
  {
    number: '03',
    title: 'COOKIES & TRACKING',
    body: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
  },
  {
    number: '04',
    title: 'THIRD-PARTY SERVICES',
    body: `Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    number: '05',
    title: 'YOUR RIGHTS',
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
  },
  {
    number: '06',
    title: 'CONTACT & UPDATES',
    body: `Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.`,
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero header */}
      <section className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden" aria-label="Privacy header">
        {/* Decorative red line top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#880808]" aria-hidden="true" />

        {/* Background noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #f0ece4 0px, #f0ece4 1px, transparent 1px, transparent 4px)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto">
          <p
            className="text-[#880808] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            LEGAL
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#f0ece4] leading-none tracking-tight text-balance"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            PRIVACY
            <br />
            <span className="text-[#880808]">POLICY</span>
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div className="h-px bg-[#2a2a2a] flex-1 max-w-xs" aria-hidden="true" />
            <p className="text-[#888480] text-xs tracking-widest">LAST UPDATED — 2026</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 pb-16" aria-label="Privacy intro">
        <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] pt-12">
          <p className="text-[#888480] text-base leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 md:px-10 pb-24" aria-label="Privacy sections">
        <div className="max-w-5xl mx-auto flex flex-col gap-0">
          {sections.map((section) => (
            <article
              key={section.number}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 border-t border-[#2a2a2a] py-12 hover:border-[#880808] transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                <span
                  className="text-[#880808] text-xs tracking-[0.3em] font-bold"
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  {section.number}
                </span>
                <div className="h-px w-8 bg-[#2a2a2a] group-hover:bg-[#880808] transition-colors duration-300 md:hidden" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#f0ece4] tracking-wide text-balance"
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.body.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-[#888480] text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* Bottom border */}
          <div className="border-t border-[#2a2a2a]" aria-hidden="true" />
        </div>
      </section>

      {/* CTA contact band */}
      <section
        className="px-6 md:px-10 py-16 border-t border-[#2a2a2a] bg-[#0a0808]"
        aria-label="Privacy contact"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#880808] text-xs tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              QUESTIONS?
            </p>
            <p
              className="text-[#f0ece4] text-xl md:text-2xl font-bold"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              GET IN TOUCH WITH US
            </p>
            <p className="text-[#888480] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] text-xs tracking-[0.2em] px-6 py-3 transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            CONTACT US
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
