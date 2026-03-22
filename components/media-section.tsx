'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

// Hero video data
const heroVideo = {
  title: 'EL NUEVO ESTRUENDO',
  subtitle: 'NUEVO VIDEOCLIP',
  year: '2025',
  poster: '/images/media/hero-video-poster.jpg',
  youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
}

// Archive videos (older content with B&W filter)
const archiveVideos = [
  {
    id: 1,
    title: 'LIBERTADES QUE QUEDAN',
    year: '2024',
    thumbnail: '/images/media/archive-video-1.jpg',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
  },
  {
    id: 2,
    title: 'MIS MIEDOS',
    year: '2024',
    thumbnail: '/images/media/archive-video-2.jpg',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
  },
]

// Band photos gallery
const bandPhotos = [
  { id: 1, src: '/images/media/band-photo-1.jpg', alt: 'Autofilia live performance' },
  { id: 2, src: '/images/media/band-photo-2.jpg', alt: 'Autofilia band portrait' },
  { id: 3, src: '/images/media/band-photo-3.jpg', alt: 'Autofilia in the studio' },
  { id: 4, src: '/images/media/band-photo-4.jpg', alt: 'Autofilia concert crowd' },
  { id: 5, src: '/images/media/band-photo-5.jpg', alt: 'Autofilia urban portrait' },
  { id: 6, src: '/images/media/band-photo-6.jpg', alt: 'Guitar detail shot' },
]

export default function MediaSection() {
  const [isHeroPlaying, setIsHeroPlaying] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const handlePlayHero = () => {
    setIsHeroPlaying(true)
  }

  return (
    <section
      id="media"
      className="relative py-24 md:py-36 bg-[#050505]"
      aria-label="Media"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#2a2a2a] pb-6">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f0ece4] leading-none"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            MEDIA
            <span className="text-[#880808]">.</span>
          </h2>
          <span
            className="text-[#888480] text-xs tracking-[0.2em] mb-2"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            VIDEOS & FOTOS
          </span>
        </div>

        {/* Hero Video Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[#880808] text-xs tracking-[0.35em]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              {heroVideo.subtitle}
            </span>
            <span className="text-[#2a2a2a]">|</span>
            <span
              className="text-[#888480] text-xs tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              {heroVideo.year}
            </span>
          </div>

          <div className="relative aspect-video w-full overflow-hidden border border-[#2a2a2a] group">
            {!isHeroPlaying ? (
              <>
                <Image
                  src={heroVideo.poster}
                  alt={heroVideo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <h3
                    className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#f0ece4] leading-none tracking-tight"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    {heroVideo.title}
                  </h3>
                </div>

                {/* Play button */}
                <button
                  onClick={handlePlayHero}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                  aria-label={`Play ${heroVideo.title}`}
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 border-2 border-[#f0ece4] flex items-center justify-center transition-all duration-300 group-hover/play:border-[#880808] group-hover/play:bg-[#880808]">
                    <Play
                      className="w-8 h-8 md:w-12 md:h-12 text-[#f0ece4] ml-1"
                      fill="currentColor"
                    />
                  </div>
                </button>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${heroVideo.youtubeId}?autoplay=1&rel=0`}
                title={heroVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Archive Videos Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#888480]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              ARCHIVE
            </h3>
            <div className="flex-1 h-px bg-[#2a2a2a]" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {archiveVideos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-video overflow-hidden border border-[#2a2a2a] hover:border-[#880808] transition-colors duration-300"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover grayscale contrast-[1.8] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                />
                {/* Archive label */}
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-[#050505]/90 text-[#888480] text-[10px] tracking-[0.3em] px-3 py-1.5 border border-[#2a2a2a]"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    ARCHIVE — {video.year}
                  </span>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                {/* Title and play indicator */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <h4
                    className="text-xl md:text-2xl font-bold text-[#f0ece4] group-hover:text-[#880808] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    {video.title}
                  </h4>
                  <div className="w-10 h-10 border border-[#f0ece4] flex items-center justify-center group-hover:border-[#880808] group-hover:bg-[#880808] transition-all duration-300">
                    <Play className="w-4 h-4 text-[#f0ece4] ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Photos Gallery Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#f0ece4]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              FOTOS
            </h3>
            <div className="flex-1 h-px bg-[#2a2a2a]" />
            <span
              className="text-[#888480] text-xs tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              NUEVA FORMACIÓN 2025
            </span>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {bandPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(index)}
                className={`relative overflow-hidden border border-[#2a2a2a] hover:border-[#880808] transition-all duration-300 cursor-pointer group ${
                  index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
                }`}
                aria-label={`View ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/20 transition-colors duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {bandPhotos.map((photo) => (
                  <CarouselItem key={photo.id} className="pl-4 basis-4/5">
                    <div className="relative aspect-[4/3] overflow-hidden border border-[#2a2a2a]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-6">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 w-10 h-10 border-[#2a2a2a] hover:border-[#880808] hover:bg-[#880808] bg-transparent text-[#f0ece4]" />
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 w-10 h-10 border-[#2a2a2a] hover:border-[#880808] hover:bg-[#880808] bg-transparent text-[#f0ece4]" />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <button
              className="absolute top-6 right-6 text-[#f0ece4] hover:text-[#880808] transition-colors z-10"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#2a2a2a] flex items-center justify-center hover:border-[#880808] hover:bg-[#880808] transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto((prev) => (prev! > 0 ? prev! - 1 : bandPhotos.length - 1))
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 text-[#f0ece4]" />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#2a2a2a] flex items-center justify-center hover:border-[#880808] hover:bg-[#880808] transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto((prev) => (prev! < bandPhotos.length - 1 ? prev! + 1 : 0))
              }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 text-[#f0ece4]" />
            </button>
            <div
              className="relative w-full max-w-5xl aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={bandPhotos[selectedPhoto].src}
                alt={bandPhotos[selectedPhoto].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span
                className="text-[#888480] text-sm tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                {selectedPhoto + 1} / {bandPhotos.length}
              </span>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-[#888480] text-sm tracking-wide"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            MÁS CONTENIDO EN NUESTRAS REDES
          </p>
          <div className="flex gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] border border-[#880808] text-[#880808] hover:bg-[#880808] hover:text-[#f0ece4] px-5 py-3 transition-all duration-300"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              YOUTUBE
              <ExternalLink size={11} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] border border-[#2a2a2a] text-[#f0ece4] hover:border-[#880808] hover:text-[#880808] px-5 py-3 transition-all duration-300"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              INSTAGRAM
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
