'use client';

import React, { useState } from 'react';
import Hero from './components/Hero';
import ShopGrid from './components/ShopGrid';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

export default function Home() {
  const [activeCreator, setActiveCreator] = useState<string>('juana');

  const easeScrollTo = (targetY: number, duration: number, callback?: () => void) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    let startTime: number | null = null;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      window.scrollTo(0, startY + difference * easedProgress);
      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        if (callback) callback();
      }
    };
    window.requestAnimationFrame(step);
  };

  const handleSelectCreator = (creatorId: string) => {
    setActiveCreator(creatorId);
    const el = document.getElementById('studios');
    if (el) easeScrollTo(el.offsetTop, 1100);
  };

  return (
    <div className="min-h-screen bg-nw-offwhite text-nw-ink selection:bg-nw-gold selection:text-white font-serif antialiased">
      <main>
        {/* The scroll progress inside Hero will handle transitions dynamically */}
        <Hero stage="reveal" />
        <div id="studios-section" className="relative z-20 bg-nw-offwhite shadow-[0_-8px_40px_rgba(0,0,0,0.03)] border-t border-nw-gold/15">
          <ShopGrid onSelectCreator={handleSelectCreator} activeCreatorId={activeCreator} />
          <Newsletter />
          <Footer />
        </div>
      </main>
    </div>
  );
}