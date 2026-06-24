'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nw-offwhite/90 backdrop-blur-md border-b border-nw-charcoal/10 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4.5 sm:py-5 flex items-center justify-between">
        
        {/* Left Side Links */}
        <div className="flex space-x-6 sm:space-x-8 text-[9px] tracking-[0.25em] font-mono uppercase text-nw-charcoal/70">
          <a href="#studios" className="hover:text-nw-gold transition-colors duration-300">Creators</a>
          <a href="/sandbox" className="hover:text-nw-gold transition-colors duration-300">Sandbox</a>
        </div>

        {/* Spaced Wordmark Branding */}
        <div className="text-center">
          <a href="/" className="font-serif text-sm sm:text-base md:text-lg tracking-[0.3em] font-bold text-nw-ink select-none leading-none block hover:text-nw-gold transition-colors duration-300">
            NGUOWAY
          </a>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center space-x-6 sm:space-x-8 text-[9px] tracking-[0.25em] font-mono uppercase text-nw-charcoal/70">
          <a href="#newsletter" className="hover:text-nw-gold transition-colors duration-300">Subscribe</a>
          <a href="/sandbox" className="hover:text-nw-gold flex items-center gap-1.5 transition-colors duration-300" aria-label="Enter Sandbox">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-nw-gold animate-pulse" />
            Play
          </a>
        </div>

      </div>
    </header>
  );
}