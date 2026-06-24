'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import ShopGrid from './ShopGrid';
import Newsletter from './NewsLetter';
import Footer from './Footer';

export default function HomePageClient() {
  const [activeCreator, setActiveCreator] = useState<string>('juana');
  const [stage, setStage] = useState<'art' | 'reveal' | 'unlocked'>('art');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (stage === 'unlocked') {
      document.body.style.overflow = 'unset';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [stage]);

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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) { e.preventDefault(); return; }
      if (stage === 'art') {
        if (e.deltaY > 0) {
          e.preventDefault();
          setIsTransitioning(true);
          setStage('reveal');
          setTimeout(() => setIsTransitioning(false), 1000);
        }
      } else if (stage === 'reveal') {
        e.preventDefault();
        if (e.deltaY > 0) {
          setIsTransitioning(true);
          setStage('unlocked');
          setTimeout(() => {
            const el = document.getElementById('studios-section');
            if (el) { easeScrollTo(el.offsetTop, 1200, () => setIsTransitioning(false)); }
            else { setIsTransitioning(false); }
          }, 150);
        } else if (e.deltaY < 0) {
          setIsTransitioning(true);
          setStage('art');
          setTimeout(() => setIsTransitioning(false), 1000);
        }
      }
    };

    const handleNativeScroll = () => {
      if (stage === 'unlocked' && window.scrollY === 0) setStage('reveal');
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (stage !== 'unlocked') touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning || stage === 'unlocked' || touchStartY.current === null) return;
      if (e.cancelable) e.preventDefault();
      const diffY = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(diffY) > 30) {
        if (stage === 'art' && diffY > 0) {
          setIsTransitioning(true); setStage('reveal');
          setTimeout(() => setIsTransitioning(false), 1000);
        } else if (stage === 'reveal') {
          if (diffY > 0) {
            setIsTransitioning(true); setStage('unlocked');
            setTimeout(() => {
              const el = document.getElementById('studios-section');
              if (el) { easeScrollTo(el.offsetTop, 1200, () => setIsTransitioning(false)); }
              else { setIsTransitioning(false); }
            }, 150);
          } else if (diffY < 0) {
            setIsTransitioning(true); setStage('art');
            setTimeout(() => setIsTransitioning(false), 1000);
          }
        }
        touchStartY.current = null;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [stage, isTransitioning]);

  const handleSelectCreator = (creatorId: string) => {
    setActiveCreator(creatorId);
    const el = document.getElementById('studios');
    if (el) easeScrollTo(el.offsetTop, 1100);
  };

  return (
    <div className={`min-h-screen bg-nw-slate text-nw-ink selection:bg-nw-gold selection:text-white font-serif antialiased ${stage !== 'unlocked' ? 'h-screen overflow-hidden' : ''}`}>
      {stage !== 'art' && <Header />}
      <main>
        <Hero stage={stage} />
        <div id="studios-section" className="relative z-20 bg-nw-offwhite shadow-[0_-8px_40px_rgba(0,0,0,0.03)] border-t border-nw-gold/15">
          <ShopGrid onSelectCreator={handleSelectCreator} activeCreatorId={activeCreator} />
          <Newsletter />
          <Footer />
        </div>
      </main>
    </div>
  );
}
