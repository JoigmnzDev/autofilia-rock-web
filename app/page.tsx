import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "./_components/hero-section";
import TourSection from "./_components/tour-section";
import MusicSection from "./_components/music-section";
import BandStorySection from "./_components/band-story-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSection />
      <TourSection />
      <MusicSection />
      <BandStorySection />
      <Footer />
    </main>
  );
}
