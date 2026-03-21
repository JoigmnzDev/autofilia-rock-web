"use client";

import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const sections = [
  {
    number: "01",
    title: "PROPIEDAD INTELECTUAL",
    body: `Todo el contenido presente en este sitio web, incluyendo de manera enunciativa más no limitativa: audios, letras de canciones, composiciones musicales, artes visuales, logotipos, fotografías y vídeos, es propiedad exclusiva de Autofilia o cuenta con las licencias correspondientes para su uso.

Queda estrictamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier elemento de esta web con fines comerciales sin la autorización previa y por escrito de la banda. El uso no autorizado de estos materiales constituirá una violación de las leyes de propiedad intelectual.`,
  },
  {
    number: "02",
    title: "EXENCIÓN DE RESPONSABILIDAD",
    body: `Los materiales en este sitio web se proporcionan 'tal cual'. Autofilia no otorga garantías, expresas o implícitas, y por la presente desclama y niega todas las demás garantías, incluyendo, sin limitación, las garantías implícitas de comercialización o idoneidad para un propósito particular.

Asimismo, no garantizamos que el acceso al sitio sea ininterrumpido o libre de errores, ni nos hacemos responsables de los posibles daños derivados del uso de plataformas de terceros enlazadas desde este dominio.`,
  },
  {
    number: "03",
    title: "LIMITACIONES",
    body: `En ningún caso Autofilia o sus proveedores serán responsables de cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio oficial.

Esto incluye fallos técnicos en la redirección a ticketeras externas o plataformas de preventa, donde la responsabilidad recae exclusivamente en el proveedor final del servicio.`,
  },
  {
    number: "04",
    title: "EXACTITUD DE LA INFORMACIÓN",
    body: `Los materiales que aparecen en el sitio web podrían incluir errores técnicos, tipográficos o fotográficos. Autofilia no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual.

Nos reservamos el derecho de realizar cambios en los materiales contenidos en el sitio web en cualquier momento, especialmente en lo referente a fechas de giras y lanzamientos. No obstante, nos comprometemos a comunicar cualquier modificación con la mayor brevedad posible a través de nuestras redes sociales oficiales y nuestra newsletter para minimizar cualquier inconveniente a nuestra comunidad.`,
  },
  {
    number: "05",
    title: "MODIFICACIONES DE TÉRMINOS",
    body: `Autofilia puede revisar estos términos de servicio para su sitio web en cualquier momento y sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos términos y condiciones.

Le recomendamos revisar esta sección periódicamente para estar al tanto de cualquier cambio en las condiciones de uso de nuestra plataforma oficial.`,
  },
  {
    number: "06",
    title: "LEY APLICABLE",
    body: `Estos términos y condiciones se rigen y sustituyen de acuerdo con las leyes vigentes en España y el territorio de Canarias. Cualquier disputa relacionada con este sitio web se someterá a la jurisdicción exclusiva de los tribunales correspondientes a dicha ubicación.

El uso de esta web implica la aceptación de estas normativas legales por parte del usuario.`,
  },
];

export default function TermsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero header */}
      <section
        className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden"
        aria-label="Terms header"
      >
        {/* Decorative red line top */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-[#880808]"
          aria-hidden="true"
        />

        {/* Background noise texture overlay */}
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
            INFORMACIÓN LEGAL
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#f0ece4] leading-none tracking-tight text-balance"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            AVISO
            <br />
            <span className="text-[#880808]">LEGAL</span>
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

      {/* Intro */}
      <section className="px-6 md:px-10 pb-16" aria-label="Terms intro">
        <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] pt-12">
          <p className="text-[#888480] text-base leading-relaxed max-w-2xl">
            Al acceder y utilizar el sitio oficial de Autofilia, aceptas cumplir
            con los siguientes términos y condiciones. Este documento protege
            tanto el estruendo creativo de la banda como tu experiencia como
            usuario dentro de nuestra comunidad.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 md:px-10 pb-24" aria-label="Terms sections">
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

              {/* Content */}
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

          {/* Bottom border */}
          <div className="border-t border-[#2a2a2a]" aria-hidden="true" />
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="px-6 md:px-10 py-16 border-t border-[#2a2a2a] bg-[#0a0808]"
        aria-label="Terms contact"
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
              Escríbenos directamente para cualquier gestión sobre propiedad
              intelectual o términos de servicio.
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#880808] hover:bg-[#b00a0a] text-[#f0ece4] p-3 rounded-full transition-all duration-300 z-50 shadow-2xl"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </main>
  );
}
