import { Music2, ExternalLink } from 'lucide-react'

const tracks = [
  { title: 'UN LUGAR SEGURO', duration: '3:52', year: '2025' },
  { title: 'EL TIEMPO PASA', duration: '4:15', year: '2025' },
  { title: 'EL GUERRERO SIN ARMAS', duration: '4:08', year: '2025' },
  { title: 'ME CANSÉ', duration: '3:41', year: '2025' },
  { title: 'SER LIBRE', duration: '4:22', year: '2025' },
  { title: 'TODO CONTIGO', duration: '3:58', year: '2025' },
  { title: 'MIS MIEDOS', duration: '4:05', year: '2025' },
  { title: 'LIBERTADES QUE QUEDAN', duration: '4:34', year: '2025' },
]

export default function MusicSection() {
  return (
    <section
      id="music"
      className="relative py-24 md:py-36 bg-[#0f0f0f]"
      aria-label="Music"
    >
      {/* Top border accent */}
      <div className="h-px bg-[#880808]/40 w-full mb-0" aria-hidden="true" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#2a2a2a] pb-6">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f0ece4] leading-none"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            MUSIC
            <span className="text-[#880808]">.</span>
          </h2>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#888480] hover:text-[#1DB954] text-xs tracking-[0.2em] mb-2 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            aria-label="Open Spotify"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            SPOTIFY
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Spotify embed area */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[#880808] text-xs tracking-[0.35em]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              NEW ALBUM
            </p>
            <h3
              className="text-3xl md:text-5xl font-bold text-[#f0ece4]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              SABOREANDO SALES
            </h3>
            <p className="text-[#888480] text-sm leading-relaxed max-w-sm">
              Pure rock, blood and fire. Distilled essence of Autofilia's sonic universe in eight devastating tracks.
            </p>

            {/* Spotify embed placeholder */}
            <div
              className="w-full rounded-none overflow-hidden border border-[#2a2a2a]"
              aria-label="Spotify player embed"
            >
              {/* Replace this iframe src with your actual Spotify album/track URI */}
              <iframe
                title="Autofilia - Saboreando Sales on Spotify"
                src="https://open.spotify.com/embed/album/0AbFFTfM96AJWToU49venu?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block"
              />
            </div>

            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-xs tracking-[0.2em] border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] px-5 py-3 transition-all duration-300"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              OPEN IN SPOTIFY
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Right: Track list */}
          <div className="flex flex-col">
            <p
              className="text-[#888480] text-xs tracking-[0.3em] mb-8 border-b border-[#2a2a2a] pb-4"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              TRACKLIST
            </p>
            <ul className="divide-y divide-[#2a2a2a]" role="list">
              {tracks.map((track, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-5 py-5 hover:bg-[#050505] -mx-4 px-4 transition-colors duration-200 cursor-pointer"
                >
                  <span
                    className="text-[#2a2a2a] group-hover:text-[#880808] text-xs w-5 text-right tabular-nums transition-colors duration-200"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Music2 size={14} className="text-[#880808] flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-lg md:text-2xl font-bold text-[#f0ece4] group-hover:text-[#880808] transition-colors duration-300 truncate"
                      style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                    >
                      {track.title}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[#888480] text-xs tabular-nums">{track.duration}</span>
                    <span className="block text-[#2a2a2a] text-[10px]">{track.year}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Platforms row */}
            <div className="mt-10 pt-8 border-t border-[#2a2a2a]">
              <p
                className="text-[#888480] text-[10px] tracking-[0.3em] mb-5"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                AVAILABLE ON
              </p>
              <div className="flex flex-wrap gap-3">
                {['SPOTIFY', 'APPLE MUSIC', 'YOUTUBE', 'DEEZER'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-[10px] tracking-[0.2em] border border-[#2a2a2a] text-[#888480] hover:border-[#880808] hover:text-[#f0ece4] px-3 py-1.5 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
