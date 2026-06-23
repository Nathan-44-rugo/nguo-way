'use client';

import React from 'react';

export interface HeroProps {
  stage: "art" | "reveal" | "unlocked";
}

export default function Hero({ stage }: HeroProps) {
  const isRevealed = stage === "reveal" || stage === "unlocked";

  return (
    <section className="relative w-full h-screen bg-nw-slate overflow-hidden flex flex-col justify-between z-10">
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--nw-charcoal) 1px, transparent 1px), linear-gradient(to bottom, var(--nw-charcoal) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute inset-0 w-full h-full z-0 select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nguoway-hero.jpg"
          alt="Nguoway Viewport Backdrop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transition: 'all 1400ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isRevealed ? 'scale(1.03)' : 'scale(1)',
            filter: isRevealed ? 'blur(8px) brightness(0.85)' : 'blur(0px) brightness(1)',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById('full-fallback');
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div
          id="full-fallback"
          className="hidden absolute inset-0 bg-nw-slate flex-col items-center justify-center text-center"
        >
          <span className="font-serif text-9xl tracking-[0.3em] text-nw-gold font-light select-none">
            NW
          </span>
        </div>
      </div>

      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{
          transition: 'opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: isRevealed ? 0.15 : 0.4,
        }}
      >
        <span className="font-serif text-[12rem] md:text-[16rem] tracking-[0.25em] text-white/20 font-light select-none">
          NW
        </span>
      </div>

      <div
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(40px)',
          pointerEvents: isRevealed ? 'auto' : 'none',
          transition: 'all 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute inset-0 z-30 flex flex-col justify-end items-center px-6 pb-24 md:pb-32"
      >
        <div className="text-center max-w-xl pointer-events-auto select-none">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-nw-gold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            AVATAR STYLE ENGINE
          </p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-nw-offwhite font-light mb-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] leading-[1.1]">
            The Art of{' '}
            <span className="italic text-nw-gold">Virtual Style</span>
          </h2>

          <div className="flex justify-center items-center gap-5">
            <a
              href="#studios"
              className="group relative px-12 py-4 bg-nw-gold text-white font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden border border-nw-gold hover:bg-nw-offwhite hover:text-nw-ink hover:border-nw-offwhite"
              style={{ transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Shop Studios
            </a>
            <a
              href="#sandbox"
              className="px-12 py-4 border border-white/25 bg-white/5 backdrop-blur-sm text-white font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-nw-offwhite hover:text-nw-ink hover:border-nw-offwhite"
              style={{ transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Avatar Sandbox
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}