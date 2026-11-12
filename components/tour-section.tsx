import { MapPin, Calendar } from "lucide-react";

interface TourDate {
  date: string;
  month: string;
  year: string;
  city: string;
  venue: string;
  country: string;
}

// Deja el array vacío [] para probar el estado "PRÓXIMAMENTE"
const tourDates: TourDate[] = [
  /*
  {
    date: "04",
    month: "APR",
    year: "2026",
    city: "MADRID",
    venue: "Palacio Vistalegre",
    country: "ES",
  },
  */
];

export default function TourSection() {
  return (
    <section
      id="tour"
      className="relative py-24 md:py-36 px-6 md:px-10 bg-[#050505]"
      aria-label="Tour dates"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#2a2a2a] pb-6">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f0ece4] leading-none"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            TOUR
            <span className="text-[#880808]">.</span>
          </h2>
          <span
            className="text-[#888480] text-xs tracking-[0.3em] mb-2"
            style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
          >
            2026
          </span>
        </div>

        {/* Contenido condicional: Lista de fechas o mensaje de Próximamente */}
        {tourDates.length > 0 ? (
          <>
            {/* Tour rows */}
            <ul className="divide-y divide-[#2a2a2a]" role="list">
              {tourDates.map((show, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-6 md:gap-10 py-6 md:py-8 hover:bg-[#0f0f0f] -mx-4 px-4 transition-colors duration-200 cursor-pointer"
                >
                  {/* Big date */}
                  <div className="flex-shrink-0 w-20 md:w-28 text-right">
                    <span
                      className="block text-5xl md:text-7xl font-bold leading-none text-[#f0ece4] group-hover:text-[#880808] transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                      aria-hidden="true"
                    >
                      {show.date}
                    </span>
                  </div>

                  {/* Month / Year */}
                  <div className="flex-shrink-0 hidden sm:flex flex-col items-start">
                    <span
                      className="text-[#880808] text-sm tracking-widest font-medium"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                    >
                      {show.month}
                    </span>
                    <span className="text-[#888480] text-xs tracking-wider">
                      {show.year}
                    </span>
                  </div>

                  {/* Divider line */}
                  <div
                    className="hidden md:block flex-shrink-0 w-px h-10 bg-[#2a2a2a]"
                    aria-hidden="true"
                  />

                  {/* City + venue */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xl md:text-3xl font-bold text-[#f0ece4] text-balance truncate"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                    >
                      {show.city}
                      <span className="text-[#888480] text-base md:text-lg ml-2">
                        {show.country}
                      </span>
                    </p>
                    <p className="flex items-center gap-1 text-[#888480] text-xs md:text-sm mt-1">
                      <MapPin size={11} />
                      {show.venue}
                    </p>
                  </div>

                  {/* Status indicator */}
                  <div className="flex-shrink-0">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#888480] border border-[#2a2a2a] px-3 md:px-5 py-2"
                      style={{
                        fontFamily: "var(--font-oswald), Impact, sans-serif",
                      }}
                    >
                      <Calendar size={10} />
                      <span className="hidden sm:inline">PRÓXIMAMENTE</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer note */}
            <p className="mt-10 text-[#888480] text-xs tracking-widest text-center">
              FECHAS SUJETAS A CAMBIOS · SÍGUENOS PARA ACTUALIZACIONES
            </p>
          </>
        ) : (
          /* Estado vacío (Sin fechas) */
          <div className="py-16 md:py-24 border-b border-[#2a2a2a] flex flex-col items-center justify-center text-center">
            <p
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#f0ece4] tracking-wide leading-none"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              PRÓXIMAMENTE
              <span className="text-[#880808]">.</span>
            </p>
            <p className="mt-6 text-[#888480] text-xs tracking-[0.25em] uppercase">
              NUEVAS FECHAS POR ANUNCIAR · SÍGUENOS PARA ACTUALIZACIONES
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
