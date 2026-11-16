import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "700"], // Ajusta si necesitas 400 o 600
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"], // Ajusta si necesitas 300
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autofilia.com"), // Cambia por el dominio final de la banda
  title: {
    default: "AUTOFILIA — Sitio Oficial | Banda de Rock",
    template: "%s | AUTOFILIA",
  },
  description:
    "Web oficial de Autofilia. Escucha nuestra música, consulta próximas fechas de gira, noticias y merchandising oficial.",
  keywords: [
    "Autofilia",
    "banda de rock",
    "rock",
    "música",
    "conciertos",
    "gira",
    "merch",
  ],
  authors: [{ name: "Autofilia" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "AUTOFILIA",
    title: "AUTOFILIA — Sitio Oficial",
    description:
      "Música, próximas fechas de gira y merchandising oficial de Autofilia.",
    images: [
      {
        url: "/og-image.jpg", // Añade una imagen 1200x630px en public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Autofilia — Banda de Rock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AUTOFILIA — Sitio Oficial",
    description:
      "Música, próximas fechas de gira y merchandising oficial de Autofilia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-sans antialiased grain bg-[#050505]">
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
