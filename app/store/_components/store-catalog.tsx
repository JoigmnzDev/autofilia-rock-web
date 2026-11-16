"use client";

import { useState, useEffect } from "react";

interface MerchItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string | null;
  category: "APPAREL" | "MEDIA" | "ACCESSORIES";
}

const merchItems: MerchItem[] = [];

const categories = ["ALL", "APPAREL", "MEDIA", "ACCESSORIES"];

export function StoreCatalog() {
  const [activeCategory, setActiveCategory] = useState("ALL");
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

  const filteredItems =
    activeCategory === "ALL"
      ? merchItems
      : merchItems.filter((item) => item.category === activeCategory);

  return (
    <main
      className="min-h-screen bg-[#050505]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(136, 8, 8, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(136, 8, 8, 0.02) 0%, transparent 50%)",
      }}
    >
      {/* ...todo tu JSX de Hero, Filters, Grid, Newsletter y ScrollToTop intacto... */}
    </main>
  );
}
