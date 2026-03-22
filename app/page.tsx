import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import BandStorySection from '@/components/band-story-section'
import TourSection from '@/components/tour-section'
import MusicSection from '@/components/music-section'
import MerchSection from '@/components/merch-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSection />
      <MusicSection />
      <TourSection />
      <BandStorySection />
      <MerchSection />
      <Footer />
    </main>
  )
}
