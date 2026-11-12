import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Users, Disc3, Calendar, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "About — AUTOFILIA",
  description:
    "Conoce a Autofilia. Banda de rock y punk alternativo nacida en Lanzarote, Islas Canarias, en 2024.",
};

const bandMembers = [
  {
    name: "DANILLO CIAFREI",
    role: "VOZ / BAJO",
    bio: "Fundador y compositor de Autofilia. Transforma vivencias personales, luces y sombras en melodías potentes y letras profundas que buscan acompañar al oyente.",
  },
  {
    name: "JESÚS IGLESIAS",
    role: "GUITARRA",
    bio: "Aporta la contundencia armónica y el brillo del rock y punk alternativo de los 2000, dando forma al sonido enérgico que define el directo de la banda.",
  },
  {
    name: "SERGIO ZAMBRANO MARTÍN",
    role: "GUITARRA",
    bio: "Combina riffs directos con matices melódicos, construyendo la base sonora sobre la que descansan las historias emocionales de cada canción.",
  },
  {
    name: "LUIS TORREALBA",
    role: "BATERÍA",
    bio: "El motor rítmico detrás de Autofilia. Marca el pulso y la intensidad en cada tema, llevando la energía del estudio directamente al escenario.",
  },
];

const milestones = [
  { year: "2024", event: "FUNDACIÓN EN LANZAROTE, ISLAS CANARIAS" },
  { year: "2025", event: "SABOREANDO SALES — ÁLBUM DEBUT" },
  { year: "2025", event: "VIDEOCLIPS EN LANZAROTE Y BOGOTÁ" },
  { year: "2025", event: "FESTIVAL ROCK SAN GINÉS Y RAGNAROK FEST" },
  { year: "2026", event: "PROYECCIÓN INTERNACIONAL — GRITO ROCK CABO VERDE" },
];

const stats = [
  { icon: Disc3, value: "1", label: "ÁLBUM" },
  { icon: Calendar, value: "2+", label: "AÑOS" },
  { icon: Music, value: "8", label: "CANCIONES" },
  { icon: Users, value: "4", label: "MÚSICOS" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero header */}
      <section
        className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden"
        aria-label="About header"
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
            QUIÉNES SOMOS
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#f0ece4] leading-none tracking-tight text-balance"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            ABOUT
            <br />
            <span className="text-[#880808]">AUTOFILIA</span>
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div
              className="h-px bg-[#2a2a2a] flex-1 max-w-xs"
              aria-hidden="true"
            />
            <p className="text-[#888480] text-xs tracking-widest">
              LANZAROTE — DESDE 2024
            </p>
          </div>
        </div>
      </section>

      {/* Intro / Historia */}
      <section className="px-6 md:px-10 pb-16" aria-label="About intro">
        <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#f0ece4] mb-6"
                style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
              >
                NUESTRA HISTORIA
              </h2>
              <p className="text-[#888480] text-base leading-relaxed mb-4">
                Fundada en 2024 en Lanzarote, Islas Canarias, Autofilia nace en
                un atardecer frente al mar cuando Danillo Ciafrei, guitarra en
                mano, comparte sus primeras melodías y encuentra el impulso
                definitivo para transformar sus composiciones en un proyecto
                musical sólido.
              </p>
              <p className="text-[#888480] text-base leading-relaxed">
                Integrada por músicos experimentados con una profunda conexión
                con la escena local canaria y raíces sudamericanas, la banda
                convierte emociones reales en sonidos potentes y letras
                honestas.
              </p>
            </div>
            <div>
              <p className="text-[#888480] text-base leading-relaxed mb-4">
                Influenciados por referentes del rock, el punk y el pop/punk
                como Three Days Grace, The Offspring, Blink-182 y Sôber, su
                propuesta fusiona la energía del punk americano con voces en
                español cargadas de sentimiento.
              </p>
              <p className="text-[#888480] text-base leading-relaxed">
                Con su álbum debut «Saboreando Sales», Autofilia propone una
                banda sonora para acompañar cada etapa de la vida: desde la
                frustración y las sombras hasta la introspección, la resiliencia
                y el amor propio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="px-6 md:px-10 py-16 border-t border-b border-[#2a2a2a] bg-[#0a0808]"
        aria-label="Stats"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="w-6 h-6 text-[#880808] mx-auto mb-3" />
                <p
                  className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-1"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {value}
                </p>
                <p
                  className="text-[#888480] text-xs tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section className="px-6 md:px-10 py-24" aria-label="Band members">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <p
              className="text-[#880808] text-xs tracking-[0.4em]"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              01
            </p>
            <div className="h-px bg-[#2a2a2a] flex-1" aria-hidden="true" />
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#f0ece4] mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            LA BANDA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bandMembers.map((member, index) => (
              <article
                key={member.name}
                className="group border border-[#2a2a2a] hover:border-[#880808] p-6 md:p-8 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-[#880808] text-xs tracking-[0.2em]"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="h-px bg-[#2a2a2a] group-hover:bg-[#880808] flex-1 mt-2 transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#f0ece4] mb-1"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[#880808] text-xs tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {member.role}
                </p>
                <p className="text-[#888480] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section
        className="px-6 md:px-10 py-24 border-t border-[#2a2a2a]"
        aria-label="Timeline"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <p
              className="text-[#880808] text-xs tracking-[0.4em]"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              02
            </p>
            <div className="h-px bg-[#2a2a2a] flex-1" aria-hidden="true" />
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#f0ece4] mb-12 tracking-tight"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            TRAYECTORIA
          </h2>

          <div className="flex flex-col gap-0">
            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${index}`}
                className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 border-t border-[#2a2a2a] py-8 hover:border-[#880808] transition-colors duration-300"
              >
                <span
                  className="text-[#880808] text-2xl md:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {milestone.year}
                </span>
                <p
                  className="text-[#f0ece4] text-xl md:text-2xl font-bold self-center"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  {milestone.event}
                </p>
              </div>
            ))}
            <div className="border-t border-[#2a2a2a]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Filosofía / Manifiesto */}
      <section
        className="px-6 md:px-10 py-24 border-t border-[#2a2a2a] bg-[#0a0808]"
        aria-label="Manifesto"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <p
              className="text-[#880808] text-xs tracking-[0.4em]"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              03
            </p>
            <div className="h-px bg-[#2a2a2a] flex-1" aria-hidden="true" />
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#f0ece4] mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            NUESTRO MANIFIESTO
          </h2>
          <blockquote className="border-l-2 border-[#880808] pl-6 md:pl-10">
            <p className="text-[#f0ece4] text-xl md:text-2xl leading-relaxed mb-6 italic">
              "Autofilia deriva del griego: Auto (por sí mismo) y Filia (amor).
              Creemos en el amor propio desde un lugar equilibrado: poco amor
              propio es menospreciarte y demasiado amor es egocentrismo. Muchas
              veces la cura está en el agua salada: llorar, transpirar o nadar
              en el mar."
            </p>
            <footer className="text-[#888480] text-sm tracking-widest">
              — AUTOFILIA
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA contact band */}
      <section
        className="px-6 md:px-10 py-16 border-t border-[#2a2a2a]"
        aria-label="About contact"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#880808] text-xs tracking-[0.3em]"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              CONTACTO
            </p>
            <p
              className="text-[#f0ece4] text-xl md:text-2xl font-bold"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              ¿QUIERES SABER MÁS?
            </p>
            <p className="text-[#888480] text-sm">
              Contrataciones, prensa o colaboraciones con Autofilia.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] text-xs tracking-[0.2em] px-6 py-3 transition-all duration-300 whitespace-nowrap"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            CONTÁCTANOS
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
