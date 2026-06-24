/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import React, { useEffect } from 'react';

export default function SandboxPage() {
  useEffect(() => {
    // Attempt screen lock to landscape natively on user click gesture if supported
    const screenOrientation = typeof window !== 'undefined' ? window.screen?.orientation as any : null;
    if (screenOrientation && typeof screenOrientation.lock === 'function') {
      const tryLock = () => {
        try {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().then(() => {
              screenOrientation.lock('landscape').catch(() => {});
            }).catch(() => {});
          }
        } catch (e) {}
      };
      window.addEventListener('click', tryLock, { once: true });
      return () => window.removeEventListener('click', tryLock);
    }
  }, []);

  return (
    <div className="w-full h-screen bg-nw-offwhite text-nw-ink flex flex-col overflow-hidden select-none">
      {/* Editorial Navigation Header */}
      <div className="rotated-sandbox-header py-5 px-6 md:px-8 border-b border-neutral-200/50 flex justify-between items-center shrink-0 bg-nw-offwhite z-10">
        <span className="font-mono text-[9px] tracking-[0.25em] text-nw-gold uppercase">Active Laboratory</span>
        <h1 className="font-serif text-lg tracking-[0.3em] font-bold text-neutral-800">NGUOWAY</h1>
        <a href="/" className="font-mono text-[9px] tracking-[0.2em] text-neutral-500 hover:text-black uppercase">Return to Main</a>
      </div>

      {/* High-Fidelity Responsive Game Viewport */}
      <div className="sandbox-page-content grow w-full p-2 sm:p-4 md:p-6 relative bg-nw-offwhite">
        <div className="sandbox-viewport-container bg-[#E4E8E9] border border-neutral-200/60 shadow-lg rounded-sm overflow-hidden">
          <iframe 
            src="/game/index.html" 
            className="w-full h-full border-0 absolute inset-0"
            title="Nguoway Interactive Sandbox"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      {/* Minimal Status Footer */}
      <div className="rotated-sandbox-footer py-4 px-6 md:px-8 border-t border-neutral-100 flex justify-between items-center text-[9px] font-mono tracking-widest text-nw-charcoal/60 bg-nw-offwhite shrink-0 z-10">
        <span>ENGINE STATUS: ACTIVE</span>
        <span>© 2026 NGUOWAY</span>
      </div>
    </div>
  );
}
