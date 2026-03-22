import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Política de Cookies — AUTOFILIA",
  description:
    "Información sobre el uso de cookies en la web oficial de Autofilia. Conoce qué datos se recogen y cómo gestionarlos.",
};

const sections = [
  {
    number: "01",
    title: "¿QUÉ SON LAS COOKIES?",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    number: "02",
    title: "TIPOS DE COOKIES QUE UTILIZAMOS",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.`,
  },
  {
    number: "03",
    title: "COOKIES TÉCNICAS Y NECESARIAS",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In ut magna vel mauris malesuada dictum. Nulla facilisi. Fusce id mi diam, non ornare orci.

Sed laoreet mi augue, a tincidunt eros. Donec id ligula a lacus euismod eleifend. Proin in nisi porttitor, fermentum nisi a, euismod purus. Integer imperdiet lacus ac lorem condimentum, quis laoreet neque bibendum.`,
  },
  {
    number: "04",
    title: "COOKIES DE ANÁLISIS Y MEDICIÓN",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.

Nunc egestas diam feugiat libero posuere convallis. Quisque accumsan posuere purus. Integer elementum tempor libero. Donec lobortis dui id lectus consequat, sit amet vestibulum tortor iaculis. Maecenas non velit nibh.`,
  },
  {
    number: "05",
    title: "COOKIES DE TERCEROS",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend libero at lobortis mollis.

Nunc rhoncus dui vel sem. Sed arcu lectus, auctor vitae, consectetuer et, pretium quis, arcu. Sed aliquet, neque at rutrum mollis, neque nisi iaculis augue, vel rhoncus nisi nunc vitae arcu. Phasellus sit amet tellus sed ligula.`,
  },
  {
    number: "06",
    title: "GESTIÓN Y CONTROL DE COOKIES",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper.

Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
  },
  {
    number: "07",
    title: "ACTUALIZACIONES DE ESTA POLÍTICA",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum. Nullam varius nulla eu augue. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.

Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Nullam in massa sed ante porta tincidunt. Fusce aliquet purus in magna tincidunt, vel vulputate purus condimentum. Maecenas rutrum velit vitae mauris pellentesque.`,
  },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section
        className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden"
        aria-label="Cookies header"
      >
        <div
          className="absolute top-0 left-0 right-0 h-px bg-[#880808]"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #f0ece4 0px, #f0ece4 1px, transparent 1px, transparent 4px)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto">
          <p
            className="text-[#880808] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            COOKIES
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#f0ece4] leading-none tracking-tight text-balance"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            POLÍTICA DE
            <br />
            <span className="text-[#880808]">COOKIES</span>
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div
              className="h-px bg-[#2a2a2a] flex-1 max-w-xs"
              aria-hidden="true"
            />
            <p className="text-[#888480] text-xs tracking-widest uppercase">
              ÚLTIMA ACTUALIZACIÓN — 2026
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16" aria-label="Cookies intro">
        <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] pt-12">
          <p className="text-[#888480] text-base leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24" aria-label="Cookies sections">
        <div className="max-w-5xl mx-auto flex flex-col gap-0">
          {sections.map((section) => (
            <article
              key={section.number}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 border-t border-[#2a2a2a] py-12 hover:border-[#880808] transition-colors duration-300"
            >
              <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                <span
                  className="text-[#880808] text-xs tracking-[0.3em] font-bold"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {section.number}
                </span>
                <div
                  className="h-px w-8 bg-[#2a2a2a] group-hover:bg-[#880808] transition-colors duration-300 md:hidden"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#f0ece4] tracking-wide text-balance"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.body.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[#888480] text-sm leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="border-t border-[#2a2a2a]" aria-hidden="true" />
        </div>
      </section>

      <section
        className="px-6 md:px-10 py-16 border-t border-[#2a2a2a] bg-[#0a0808]"
        aria-label="Cookies contact"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#880808] text-xs tracking-[0.3em]"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              ¿DUDAS?
            </p>
            <p
              className="text-[#f0ece4] text-xl md:text-2xl font-bold"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              CONTACTA CON NOSOTROS
            </p>
            <p className="text-[#888480] text-sm">
              Escríbenos directamente para cualquier consulta sobre el uso de
              cookies en nuestra web.
            </p>
          </div>
          <a
            href="mailto:info@autofiliarock.com"
            className="inline-flex items-center border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] text-xs tracking-[0.2em] px-6 py-3 transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            INFO@AUTOFILIAROCK.COM
          </a>
        </div>
      </section>

      <Footer />

      <ScrollToTop />
    </main>
  );
}
