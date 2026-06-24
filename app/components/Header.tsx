'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-nw-offwhite/90 backdrop-blur-md border-b border-nw-charcoal/10 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4.5 sm:py-5 flex items-center justify-between">
          
          {/* Left Side Links — hidden on mobile */}
          <div className="hidden md:flex space-x-6 sm:space-x-8 text-[9px] tracking-[0.25em] font-mono uppercase text-nw-charcoal/70">
            <a href="#studios" className="hover:text-nw-gold transition-colors duration-300">Creators</a>
            <a href="/sandbox" className="hover:text-nw-gold transition-colors duration-300">Sandbox</a>
            <a href="/user-portal" className="hover:text-nw-gold transition-colors duration-300">User Portal</a>
          </div>

          {/* Spaced Wordmark Branding — centered */}
          <div className="text-center">
            <Link href="/" className="font-serif text-sm sm:text-base md:text-lg tracking-[0.3em] font-bold text-nw-ink select-none leading-none block hover:text-nw-gold transition-colors duration-300">
              NGUOWAY
            </Link>
          </div>

          {/* Right Side Links — hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 sm:space-x-8 text-[9px] tracking-[0.25em] font-mono uppercase text-nw-charcoal/70">
            <a href="#newsletter" className="hover:text-nw-gold transition-colors duration-300">Subscribe</a>
            <a href="/sandbox" className="hover:text-nw-gold flex items-center gap-1.5 transition-colors duration-300" aria-label="Enter Sandbox">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-nw-gold animate-pulse" />
              Play
            </a>
          </div>

          {/* Mobile Menu Icon — displayed on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-nw-charcoal hover:text-nw-gold focus:outline-none p-1"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop overlay for mobile menu drawer */}
      <div 
        className={`fixed inset-0 bg-nw-ink/40 backdrop-blur-sm z-50 md:hidden transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-nw-offwhite shadow-2xl border-l border-nw-charcoal/10 z-50 md:hidden flex flex-col justify-between pt-24 pb-16 px-10 transition-transform duration-500 ease-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-nw-charcoal hover:text-nw-gold focus:outline-none p-1.5"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Vertical Links — spaced & typewriter styled */}
        <div className="flex flex-col space-y-8 font-mono text-[10px] tracking-[0.25em] uppercase text-nw-charcoal/80">
          <a 
            href="#studios" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-nw-gold duration-300 block py-1"
          >
            Creators
          </a>
          <a 
            href="/sandbox" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-nw-gold duration-300 block py-1"
          >
            Sandbox
          </a>
          <a 
            href="/user-portal" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-nw-gold duration-300 block py-1"
          >
            User Portal
          </a>
          <a 
            href="#newsletter" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-nw-gold duration-300 block py-1"
          >
            Subscribe
          </a>
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)} 
            className="hover:text-nw-gold duration-300 block py-1"
          >
            Main Site
          </Link>
        </div>

        {/* Bottom Metadata */}
        <div className="font-mono text-[8px] tracking-[0.3em] text-nw-charcoal/30 uppercase">
          <span>NGUOWAY PORTAL // v1.0</span>
        </div>
      </div>
    </>
  );
}