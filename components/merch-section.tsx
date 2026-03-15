import Image from 'next/image'
import { ShoppingBag, ArrowRight } from 'lucide-react'

const merch = [
  {
    id: 1,
    name: 'SANGRE TEE',
    description: 'Limited Edition',
    price: '€35',
    image: '/merch-tshirt.jpg',
    tag: 'BESTSELLER',
  },
  {
    id: 2,
    name: 'BLACKOUT HOODIE',
    description: 'Heavyweight 380gsm',
    price: '€75',
    image: '/merch-hoodie.jpg',
    tag: 'NEW',
  },
  {
    id: 3,
    name: 'SANGRE VINYL',
    description: 'Ltd. Blood Red 12"',
    price: '€28',
    image: '/merch-vinyl.jpg',
    tag: 'LIMITED',
  },
]

export default function MerchSection() {
  return (
    <section
      id="merch"
      className="relative py-24 md:py-36 bg-[#050505]"
      aria-label="Merchandise"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#2a2a2a] pb-6">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f0ece4] leading-none"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            MERCH
            <span className="text-[#880808]">.</span>
          </h2>
          <a
            href="#"
            className="flex items-center gap-2 text-[#888480] hover:text-[#f0ece4] text-xs tracking-[0.2em] mb-2 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
            aria-label="View all merchandise"
          >
            ALL ITEMS
            <ArrowRight size={12} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {merch.map((item) => (
            <article
              key={item.id}
              className="group relative bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#880808] transition-all duration-500 overflow-hidden cursor-pointer"
              aria-label={item.name}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#050505]/30 group-hover:bg-[#050505]/10 transition-all duration-500" />

                {/* Tag badge */}
                <span
                  className="absolute top-4 left-4 bg-[#880808] text-[#f0ece4] text-[9px] tracking-[0.3em] px-2 py-1"
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  {item.tag}
                </span>

                {/* Add to cart overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 p-4">
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-[#880808] text-[#f0ece4] py-3 text-xs tracking-[0.25em] hover:bg-[#a00a0a] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <ShoppingBag size={13} />
                    ADD TO CART
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3
                    className="text-[#f0ece4] text-lg font-bold tracking-wide group-hover:text-[#880808] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#888480] text-xs mt-0.5 tracking-wider">{item.description}</p>
                </div>
                <span
                  className="text-[#f0ece4] text-xl font-bold"
                  style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
                >
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-[#2a2a2a] hover:border-[#880808] text-[#888480] hover:text-[#f0ece4] px-10 py-4 text-xs tracking-[0.3em] transition-all duration-300"
            style={{ fontFamily: 'var(--font-oswald), Impact, sans-serif' }}
          >
            <ShoppingBag size={14} />
            VISIT FULL STORE
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
