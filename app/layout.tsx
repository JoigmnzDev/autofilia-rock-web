import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import QueryProvider from "@/providers/query-provider";
import { SITE_CONFIG, MAIN_ALBUM } from "@/config/site";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Sitio Oficial | Banda de Rock`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Autofilia",
    "Autofilia Rock",
    "Saboreando Sales",
    "banda de rock",
    "rock español",
    "música",
    "conciertos",
    "gira",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Sitio Oficial`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Banda de Rock`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Sitio Oficial`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
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

const musicGroupJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  genre: SITE_CONFIG.genre,
  email: SITE_CONFIG.email,
  sameAs: Object.values(SITE_CONFIG.social),
  album: {
    "@type": "MusicAlbum",
    name: MAIN_ALBUM.title,
    datePublished: MAIN_ALBUM.releaseYear,
    numTracks: MAIN_ALBUM.tracks.length,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-sans antialiased grain bg-[#050505]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicGroupJsonLd),
          }}
        />
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
