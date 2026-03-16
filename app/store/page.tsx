'use client'

import Image from 'next/image'
import { ShoppingBag, ArrowRight, Filter, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const merchItems = [
  {
    id: 1,
    name: 'SANGRE TEE',
    description: 'Limited Edition',
    price: '€35',
    image: '/merch-tshirt.jpg',
    tag: 'BESTSELLER',
    category: 'APPAREL',
  },
  {
    id: 2,
    name: 'BLACKOUT HOODIE',
    description: 'Heavyweight 380gsm',
    price: '€75',
    image: '/merch-hoodie.jpg',
    tag: 'NEW',
    category: 'APPAREL',
  },
  {
    id: 3,
    name: 'SANGRE VINYL',
    description: 'Ltd. Blood Red 12"',
    price: '€28',
    image: '/merch-vinyl.jpg',
    tag: 'LIMITED',
    category: 'MEDIA',
  },
  {
    id: 4,
    name: 'SABOREANDO SALES VINYL',
    description: 'Black 12" LP',
    price: '€32',
    image: '/merch-vinyl.jpg',
    tag: 'NEW',
    category: 'MEDIA',
  },
  {
    id: 5,
    name: 'NOISE CREW NECK',
    description: 'Heavy cotton',
    price: '€55',
    image: '/merch-hoodie.jpg',
    tag: 'BESTSELLER',
    category: 'APPAREL',
  },
  {
    id: 6,
    name: 'BLOOD BEANIE',
    description: 'Embroidered logo',
    price: '€18',
    image: '/merch-tshirt.jpg',
    tag: null,
    category: 'APPAREL',
  },
  {
    id: 7,
    name: 'AUTOFILIA CAP',
    description: 'Adjustable strap',
    price: '€22',
    image: '/merch-tshirt.jpg',
    tag: 'NEW',
    category: 'ACCESSORIES',
  },
  {
    id: 8,
    name: 'TOUR 2025 TEE',
    description: 'Limited run',
    price: '€40',
    image: '/merch-tshirt.jpg',
    tag: 'LIMITED',
    category: 'APPAREL',
  },
  {
    id: 9,
    name: 'LOGO HOODIE',
    description: 'Black premium',
    price: '€85',
    image: '/merch-hoodie.jpg',
    tag: null,
    category: 'APPAREL',
  },
  {
    id: 10,
    name: 'LIVE SESSION CD',
    description: 'Madrid 2024',
    price: '€15',
    image: '/merch-vinyl.jpg',
    tag: null,
    category: 'MEDIA',
  },
  {
    id: 11,
    name: 'POSTER SET',
    description: 'A2 size / 3 designs',
    price: '€24',
    image: '/merch-tshirt.jpg',
    tag: 'NEW',
    category: 'ACCESSORIES',
  },
  {
    id: 12,
    name: 'SABOREANDO SALES TEE',
    description: 'New album artwork',
    price: '€38',
    image: '/merch-tshirt.jpg',
    tag: 'BESTSELLER',
    category: 'APPAREL',
  },
]

const categories = ['ALL', 'APPAREL', 'MEDIA', 'ACCESSORIES']

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredItems = activeCategory === 'ALL' 
    ? merchItems 
    : merchItems.filter(item => item.category === activeCategory)

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-[#050505]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(136, 8, 8, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(136, 8, 8, 0.02) 0%, transparent 50%)',
        }}
      >
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b border-[#2a2a2a]">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <h1
              className="text-6xl md:text-8xl lg:text-[120px] font-black text-[#f0ece4] leading-none mb-4"
              style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            >
              STORE
            </h1>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-[#880808]" />
              <p className="text-[#888480] text-sm tracking-[0.2em]">
                {filteredItems.length} ITEMS AVAILABLE
              </p>
            </div>
            <p className="text-[#888480] text-lg max-w-2xl leading-relaxed">
              Official merchandise from Autofilia. Limited editions, exclusive releases, and tour apparel. Support the band and grab your gear.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-[80px] z-40 bg-[#050505]/95 backdrop-blur border-b border-[#2a2a2a] py-4">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Filter size={16} className="text-[#888480] flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap text-xs tracking-[0.2em] py-2 px-3 border transition-all duration-300 flex-shrink-0 ${
                    activeCategory === category
                      ? 'bg-[#880808] text-[#f0ece4] border-[#880808]'
                      : 'text-[#888480] border-[#2a2a2a] hover:border-[#880808] hover:text-[#f0ece4]'
                  }`}
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="group relative bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#880808] transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />

                    <div className="absolute inset-0 bg-[#050505]/30 group-hover:bg-[#050505]/10 transition-all duration-500" />

                    {item.tag && (
                      <span
                        className="absolute top-4 left-4 bg-[#880808] text-[#f0ece4] text-[9px] tracking-[0.3em] px-2 py-1"
                        style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                      >
                        {item.tag}
                      </span>
                    )}

                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 p-4">
                      <button
                        className="w-full flex items-center justify-center gap-2 bg-[#880808] text-[#f0ece4] py-3 text-xs tracking-[0.25em] hover:bg-[#a00a0a] transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                      >
                        <ShoppingBag size={13} />
                        ADD TO CART
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 space-y-2">
                    <h3
                      className="text-[#f0ece4] text-sm font-bold tracking-wide group-hover:text-[#880808] transition-colors duration-300 line-clamp-2"
                      style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[#888480] text-[11px] tracking-wider">{item.description}</p>
                    <div className="pt-2 border-t border-[#2a2a2a]">
                      <span
                        className="text-[#f0ece4] text-lg font-bold"
                        style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 border-t border-[#2a2a2a] border-b">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#f0ece4] mb-4"
                style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
              >
                NEW DROPS
              </h2>
              <p className="text-[#888480] mb-8">
                Be first to know about new merch releases, limited editions, and exclusive drops.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] text-[#f0ece4] placeholder:text-[#888480] px-5 py-4 text-sm tracking-wider focus:outline-none focus:border-[#880808] transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-[#880808] text-[#f0ece4] px-8 py-4 text-xs tracking-[0.2em] hover:bg-[#a00a0a] transition-colors duration-200 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  NOTIFY ME
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#880808] hover:bg-[#b00a0a] text-[#f0ece4] p-3 rounded-full transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </main>
      <Footer />
    </>
  )
}
