"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SocialLinks } from "@/components/shared/social-links";
import { SITE_CONFIG } from "@/config/site";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "BOOKING / CONCIERTOS",
    message: "",
  });

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${formData.subject}] Mensaje de ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nMotivo: ${formData.subject}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero header */}
      <section
        className="relative pt-40 pb-20 px-6 md:px-10 overflow-hidden"
        aria-label="Contact header"
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
            HABLEMOS
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#f0ece4] leading-none tracking-tight"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            CONTACTO
            <span className="text-[#880808]">.</span>
          </h1>
          <div className="flex items-center gap-4 mt-8">
            <div
              className="h-px bg-[#2a2a2a] flex-1 max-w-xs"
              aria-hidden="true"
            />
            <p className="text-[#888480] text-xs tracking-widest">
              BOOKING · PRENSA · COLABORACIONES
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="px-6 md:px-10 pb-24"
        aria-label="Contact details and form"
      >
        <div className="max-w-5xl mx-auto border-t border-[#2a2a2a] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Columna izquierda: Datos directos */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-10">
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-[#f0ece4] mb-4"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    CONTRATACIONES Y PRENSA
                  </h2>
                  <p className="text-[#888480] text-sm md:text-base leading-relaxed">
                    Para fechas en directo, festivales, entrevistas o cualquier
                    consulta relacionada con Autofilia, escríbenos directamente
                    o utiliza el formulario.
                  </p>
                </div>

                {/* Caja de correo electrónico con botón de copiar */}
                <div className="border border-[#2a2a2a] p-6 bg-[#0a0808]">
                  <p
                    className="text-[#880808] text-[10px] tracking-[0.3em] mb-2"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    CORREO OFICIAL
                  </p>
                  <a
                    href={SITE_CONFIG.mailto}
                    className="flex items-center gap-2.5 text-[#f0ece4] hover:text-[#880808] text-lg font-medium transition-colors break-all"
                  >
                    <Mail size={16} className="text-[#880808] flex-shrink-0" />
                    {SITE_CONFIG.email}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] border border-[#2a2a2a] hover:border-[#880808] text-[#888480] hover:text-[#f0ece4] px-3 py-2 transition-colors cursor-pointer"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-[#880808]" />
                        COPIADO AL PORTAPAPELES
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        COPIAR CORREO
                      </>
                    )}
                  </button>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-3 text-[#888480] text-sm">
                  <MapPin
                    size={16}
                    className="text-[#880808] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p
                      className="text-[#f0ece4] text-xs tracking-[0.2em] mb-1"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                    >
                      BASE DE OPERACIONES
                    </p>
                    <p>Lanzarote, Islas Canarias — España</p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="border-t border-[#2a2a2a] pt-8">
                <p
                  className="text-[#888480] text-xs tracking-[0.3em] mb-4"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  SÍGUENOS EN REDES
                </p>
                <SocialLinks iconClassName="text-[#888480] group-hover:text-[#f0ece4]" />
              </div>
            </div>

            {/* Columna derecha: Formulario */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="border border-[#2a2a2a] p-6 md:p-10 bg-[#0a0808] space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#888480] text-xs tracking-[0.2em] mb-2"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                    >
                      NOMBRE *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Tu nombre o promotora"
                      className="w-full bg-[#050505] border border-[#2a2a2a] focus:border-[#880808] text-[#f0ece4] placeholder-[#888480]/40 text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#888480] text-xs tracking-[0.2em] mb-2"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                    >
                      EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tu@email.com"
                      className="w-full bg-[#050505] border border-[#2a2a2a] focus:border-[#880808] text-[#f0ece4] placeholder-[#888480]/40 text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#888480] text-xs tracking-[0.2em] mb-2"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    MOTIVO
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-[#050505] border border-[#2a2a2a] focus:border-[#880808] text-[#f0ece4] text-sm px-4 py-3 outline-none transition-colors"
                  >
                    <option value="BOOKING / CONCIERTOS">
                      BOOKING / CONCIERTOS
                    </option>
                    <option value="PRENSA / MEDIOS">PRENSA / MEDIOS</option>
                    <option value="COLABORACIONES">COLABORACIONES</option>
                    <option value="OTRO">OTRO</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#888480] text-xs tracking-[0.2em] mb-2"
                    style={{
                      fontFamily: "var(--font-oswald), Impact, sans-serif",
                    }}
                  >
                    MENSAJE *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Cuéntanos sobre el evento, fecha, propuesta..."
                    className="w-full bg-[#050505] border border-[#2a2a2a] focus:border-[#880808] text-[#f0ece4] placeholder-[#888480]/40 text-sm px-4 py-3 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#880808] bg-[#880808] hover:bg-transparent text-[#f0ece4] hover:text-[#880808] text-xs tracking-[0.25em] px-8 py-4 transition-all duration-300 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-oswald), Impact, sans-serif",
                  }}
                >
                  ENVIAR MENSAJE
                  <Send size={13} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
