import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StoreCatalog } from "@/components/store-catalog";

// Cambia a `true` cuando el merch oficial esté listo
const IS_STORE_ACTIVE = false;

export default function StorePage() {
  return (
    <>
      <Navbar />

      {IS_STORE_ACTIVE ? (
        <StoreCatalog />
      ) : (
        <main
          className="min-h-screen bg-[#050505] flex flex-col justify-center relative overflow-hidden pt-32 pb-24"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(136, 8, 8, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(136, 8, 8, 0.03) 0%, transparent 50%)",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-10 w-full">
            <p
              className="text-[#880808] text-xs tracking-[0.4em] mb-4"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              MERCHANDISING OFICIAL
            </p>

            <h1
              className="text-6xl md:text-8xl lg:text-[120px] font-black text-[#f0ece4] leading-none mb-4"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              STORE
              <span className="text-[#880808]">.</span>
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-[#880808]" />
              <p
                className="text-[#f0ece4] text-sm md:text-base tracking-[0.3em] font-bold"
                style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
              >
                PRÓXIMAMENTE
              </p>
            </div>

            <p className="text-[#888480] text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Estamos preparando la primera colección oficial de Autofilia.
              Camisetas, ediciones físicas y material exclusivo muy pronto
              disponible.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] text-xs tracking-[0.25em] px-6 py-3.5 transition-all duration-300"
              style={{ fontFamily: "var(--font-oswald), Impact, sans-serif" }}
            >
              <ArrowLeft size={13} />
              VOLVER AL INICIO
            </Link>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}
