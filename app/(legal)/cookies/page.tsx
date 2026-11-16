import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import ScrollToTop from "@/components/layout/scroll-to-top";

export const metadata: Metadata = {
  title: "Política de Cookies — AUTOFILIA",
  description:
    "Información sobre el uso de cookies en la web oficial de Autofilia. Conoce qué datos se recogen y cómo gestionarlos.",
};

const sections = [
  {
    number: "01",
    title: "¿QUÉ SON LAS COOKIES?",
    body: `Las cookies son pequeños archivos de texto que se almacenan en su dispositivo al visitar nuestro sitio web. Estas herramientas son esenciales para el funcionamiento técnico de la plataforma y para entender cómo interactúan los usuarios con nuestro contenido creativo.

En Autofilia utilizamos estas tecnologías principalmente para mejorar la velocidad de carga del sitio y recordar sus preferencias de navegación sin identificarle personalmente.`,
  },
  {
    number: "02",
    title: "TIPOS DE COOKIES QUE UTILIZAMOS",
    body: `Nuestra plataforma emplea dos categorías principales: cookies propias, gestionadas directamente por nuestra infraestructura para garantizar la estabilidad del sitio; y cookies de terceros, que permiten la integración de servicios externos como reproductores de audio o métricas de tráfico.

Estas tecnologías pueden ser de "sesión" (se eliminan al cerrar el navegador) o "persistentes" (permanecen en su equipo hasta que expiran o son eliminadas manualmente).`,
  },
  {
    number: "03",
    title: "COOKIES TÉCNICAS Y NECESARIAS",
    body: `Son aquellas estrictamente necesarias para la navegación y el correcto funcionamiento de la web. Sin ellas, no podríamos garantizar la seguridad del sitio ni ofrecer funciones básicas como la navegación entre secciones o el acceso a áreas restringidas.

Estas cookies no requieren su consentimiento, ya que son indispensables para que podamos entregarle el servicio que ha solicitado al entrar en nuestro dominio.`,
  },
  {
    number: "04",
    title: "COOKIES DE ANÁLISIS Y MEDICIÓN",
    body: `Utilizamos herramientas de análisis agregada que nos ayudan a entender qué secciones de la web generan más interés entre nuestra comunidad. Estos datos son puramente estadísticos: nos dicen cuántas personas nos visitan, pero nunca quiénes son.

La información recolectada nos permite optimizar el rendimiento de la plataforma y asegurar que el contenido más relevante para los seguidores esté siempre accesible.`,
  },
  {
    number: "05",
    title: "COOKIES DE TERCEROS",
    body: `Al integrar servicios de plataformas como Spotify, YouTube o Instagram para que pueda disfrutar de nuestro ruido, estos terceros pueden instalar sus propias cookies de seguimiento. 

Autofilia no tiene control directo sobre los datos que estas empresas recolectan. Le recomendamos consultar las políticas de cookies de estos proveedores externos para obtener información detallada sobre su tratamiento de datos.`,
  },
  {
    number: "06",
    title: "GESTIÓN Y CONTROL DE COOKIES",
    body: `Usted tiene el derecho de aceptar, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador. Tenga en cuenta que, si decide bloquear las cookies técnicas, la experiencia de navegación podría verse alterada.

Puede encontrar las instrucciones para gestionar estas preferencias en el menú de "Ayuda" o "Privacidad" de navegadores como Chrome, Firefox, Safari o Edge.`,
  },
  {
    number: "07",
    title: "ACTUALIZACIONES DE ESTA POLÍTICA",
    body: `Podemos modificar esta Política de Cookies en función de nuevas exigencias legislativas o con el fin de adaptar dicho documento a las instrucciones dictadas por la Agencia Española de Protección de Datos.

Le aconsejamos que visite esta sección periódicamente. Cualquier cambio significativo será comunicado a través de la web para asegurar que siempre mantenga el control sobre su privacidad.`,
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
            En Autofilia utilizamos cookies y tecnologías similares para que tu
            experiencia en nuestra web sea tan fluida como un buen riff. Estas
            herramientas nos ayudan a entender cómo interactúas con nuestro
            contenido y a mejorar el rendimiento de la plataforma, garantizando
            siempre que tu privacidad esté protegida bajo nuestros estándares de
            seguridad.
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
