"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#880808] hover:bg-[#b00a0a] text-[#f0ece4] p-3 rounded-full transition-all duration-300 z-50 shadow-2xl"
      aria-label="Volver arriba"
    >
      <FaChevronUp size={20} />
    </button>
  );
}
