import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — AUTOFILIA",
  description:
    "Consulta la política de privacidad oficial de la web de Autofilia. Gestión de datos, derechos del usuario y seguridad del ruido.",
};

const sections = [
  {
    number: "01",
    title: "INFORMACIÓN QUE RECOPILAMOS",
    body: `Recopilamos únicamente la información mínima necesaria para gestionar nuestra comunidad de seguidores. Esto incluye principalmente su dirección de correo electrónico, proporcionada de manera voluntaria a través de nuestros formularios de suscripción.

Asimismo, nuestros sistemas capturan datos técnicos de navegación de forma automatizada, tales como identificadores de dispositivo, ubicación geográfica aproximada y patrones de interacción con el contenido, con el fin de optimizar el rendimiento de nuestra plataforma.`,
  },
  {
    number: "02",
    title: "USO DE SUS DATOS",
    body: `La información recolectada se utiliza exclusivamente para mantenerle informado sobre la actividad de la banda, incluyendo lanzamientos discográficos, material audiovisual inédito y fechas de giras. 

El servicio de "Acceso Prioritario" se limita a la notificación anticipada de eventos y preventas mediante comunicación electrónica. El registro en nuestra base de datos no garantiza la adquisición de entradas, las cuales quedan sujetas a la disponibilidad de aforo y a las condiciones de las plataformas de boletaje externas.`,
  },
  {
    number: "03",
    title: "COOKIES Y SEGUIMIENTO",
    body: `Utilizamos tecnologías de medición de audiencia que operan de forma agregada y anónima. Estas herramientas nos permiten analizar el flujo de tráfico y la relevancia de nuestras secciones sin identificar personalmente a los usuarios individuales.

Usted puede configurar su navegador para restringir o bloquear estas tecnologías; sin embargo, esto podría limitar ciertas funcionalidades de personalización en su experiencia de navegación dentro de nuestro sitio oficial.`,
  },
  {
    number: "04",
    title: "SERVICIOS DE TERCEROS",
    body: `Para garantizar la seguridad y eficiencia en la entrega de nuestras comunicaciones, delegamos el procesamiento de datos en proveedores de infraestructura tecnológica especializados en gestión de audiencias y almacenamiento en la nube.

Todos nuestros socios tecnológicos cumplen con estándares internacionales de protección de datos, asegurando que su información sea tratada con protocolos de cifrado avanzados y bajo estrictas medidas de confidencialidad.`,
  },
  {
    number: "05",
    title: "PLATAFORMAS EXTERNAS",
    body: `Nuestro sitio web incluye enlaces a plataformas externas y redes sociales (como Instagram, TikTok, Spotify, YouTube, entre otras). Al hacer clic en estos enlaces y salir de nuestro dominio, la gestión de sus datos queda sujeta exclusivamente a las políticas de privacidad de dichas plataformas.

Autofilia no tiene control ni responsabilidad sobre el tratamiento de información, cookies o tecnologías de rastreo que estas empresas terceras puedan aplicar. Le recomendamos consultar las políticas de privacidad de cada servicio externo para entender cómo protegen su identidad fuera de nuestro entorno oficial.`,
  },
  {
    number: "06",
    title: "SUS DERECHOS",
    body: `Usted mantiene el control total sobre su información personal. En cumplimiento con la normativa vigente, tiene derecho a solicitar el acceso, la rectificación o la eliminación definitiva de sus datos de nuestros registros en cualquier momento.

Cada comunicación enviada incluye un mecanismo de revocación de consentimiento (vínculo de desuscripción) que permite el cese inmediato de las notificaciones, procesando su baja de manera automatizada y permanente de nuestra lista de envíos.`,
  },
  {
    number: "07",
    title: "CONTACTO Y ACTUALIZACIONES",
    body: `Para cualquier consulta relacionada con la gestión de su privacidad o para ejercer sus derechos legales, puede contactar con nuestro equipo de administración a través del correo oficial info@autofiliarock.com.

Nos reservamos el derecho de actualizar estos términos para adaptarlos a cambios legislativos o novedades en nuestra actividad artística. La fecha de la última actualización será siempre visible en la parte superior de este documento.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero header */}
      <section
        className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden"
        aria-label="Privacy header"
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
            PRIVACIDAD
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#f0ece4] leading-none tracking-tight text-balance"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            POLÍTICA DE
            <br />
            <span className="text-[#880808]">PRIVACIDAD</span>
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div
              className="h-px bg-[#2a2a2a] flex-1 max-w-xs"
              aria-hidden="true"
            />
            <p className="text-[#888480] text-xs tracking-widest">
              ÚLTIMA ACTUALIZACIÓN — 2026
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 pb-16" aria-label="Privacy intro">
        <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] pt-12">
          <p className="text-[#888480] text-base leading-relaxed max-w-2xl">
            En Autofilia, respetamos tu privacidad tanto como el volumen de
            nuestros amplificadores. Esta política detalla cómo gestionamos tu
            información cuando decides unirte a nuestra comunidad. No vendemos
            tus datos; solo los usamos para mantenerte en el centro del ruido.
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

      {/* CTA contact band */}
      <section
        className="px-6 md:px-10 py-16 border-t border-[#2a2a2a] bg-[#0a0808]"
        aria-label="Privacy contact"
      >
        <section
          className="px-6 md:px-10 py-16 border-t border-[#2a2a2a] bg-[#0a0808]"
          aria-label="Privacy contact"
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
                Escríbenos directamente para cualquier gestión sobre tus datos
                personales.
              </p>
            </div>
            <a
              href="mailto:info@autofiliarock.com" // <--- Cambio aquí
              className="inline-flex items-center border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] text-xs tracking-[0.2em] px-6 py-3 transition-all duration-300 whitespace-nowrap"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              ESCRIBIR A INFO
            </a>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
