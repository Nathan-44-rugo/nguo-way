'use client';

import React, { useState, useEffect } from 'react';

export interface HeroProps {
  stage: "art" | "reveal" | "unlocked";
}

export default function Hero({ stage }: HeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const threshold = window.innerHeight * 0.45; // Complete transition over 45% of viewport height
      const progress = Math.min(Math.max(y / threshold, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Backward compatibility check (if stage changes from external sources and window has not scrolled)
  const isRevealed = stage === "reveal" || stage === "unlocked";
  const displayProgress = Math.max(scrollProgress, isRevealed ? 1 : 0);

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col justify-between z-10"
      style={{
        height: '100dvh',
        minHeight: '100vh',
        backgroundColor: 'var(--nw-slate)',
      }}
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--nw-charcoal) 1px, transparent 1px), linear-gradient(to bottom, var(--nw-charcoal) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Layer 0: Full-Bleed Background Image & Gradients */}
      <div className="absolute inset-0 w-full h-full z-0 select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nguoway-hero.jpg"
          alt="Nguoway Viewport Backdrop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `scale(${1 + displayProgress * 0.03})`,
            filter: `blur(${displayProgress * 8}px) brightness(${1 - displayProgress * 0.15})`,
            willChange: 'transform, filter',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById('full-fallback');
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        {/* Technical gradient overlay for premium lighting & readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-nw-ink/20 via-nw-ink/40 to-nw-ink/75 z-10"
          style={{
            opacity: 0.3 + displayProgress * 0.45,
            willChange: 'opacity',
          }}
        />
        <div
          id="full-fallback"
          className="hidden absolute inset-0 bg-nw-slate flex-col items-center justify-center text-center"
        >
          <span className="font-serif text-7xl sm:text-8xl md:text-9xl tracking-[0.3em] text-nw-gold font-light select-none">
            NW
          </span>
        </div>
      </div>

      {/* Floating centered monogram watermark */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{
          opacity: 0.4 - displayProgress * 0.25,
          willChange: 'opacity',
        }}
      >
        <span className="font-serif text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] tracking-[0.25em] text-white/20 font-light select-none">
          NW
        </span>
      </div>

      {/* Layer 1: CTA Text Overlay */}
      <div
        style={{
          opacity: displayProgress,
          transform: `translateY(${(1 - displayProgress) * 30}px)`,
          pointerEvents: displayProgress > 0.1 ? 'auto' : 'none',
          willChange: 'transform, opacity',
          transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute inset-0 z-30 flex flex-col justify-center items-center px-6 md:px-12"
      >
        <div className="text-center max-w-2xl px-4 sm:px-6 py-8 flex flex-col items-center justify-center pointer-events-auto select-none w-full">
          <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-nw-gold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            AVATAR STYLE ENGINE
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight text-nw-offwhite font-light mb-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] leading-[1.15]">
            The Art of{' '}
            <span className="italic font-normal text-nw-gold">Virtual Style</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="#studios"
              className="w-full sm:w-auto px-10 sm:px-12 py-3.5 sm:py-4 bg-nw-gold text-white font-mono text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase border border-nw-gold hover:bg-nw-offwhite hover:text-nw-ink hover:border-nw-offwhite text-center transition-all duration-500 ease-out"
            >
              Shop Studios
            </a>
            <a
              href="#sandbox"
              className="w-full sm:w-auto px-10 sm:px-12 py-3.5 sm:py-4 border border-white/30 bg-white/5 backdrop-blur-md text-white font-mono text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:bg-nw-offwhite hover:text-nw-ink hover:border-nw-offwhite text-center transition-all duration-500 ease-out"
            >
              Avatar Sandbox
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint on mobile (fades out as scroll progress increases) */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer"
        style={{
          transition: 'opacity 300ms ease-out',
          opacity: Math.max(1 - displayProgress * 3, 0),
          pointerEvents: displayProgress > 0.3 ? 'none' : 'auto',
        }}
        onClick={() => {
          // Scroll down to reveal the text
          window.scrollTo({
            top: window.innerHeight * 0.45,
            behavior: 'smooth',
          });
        }}
      >
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/50 mb-2">
          Swipe / Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
          <path d="M8 4L8 18M8 18L14 12M8 18L2 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}