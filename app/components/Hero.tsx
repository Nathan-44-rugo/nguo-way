'use client';

import React from 'react';

export interface HeroProps {
stage: "art" | "reveal" | "unlocked";
}

export default function Hero({ stage }: HeroProps) {
const isRevealed = stage === "reveal" || stage === "unlocked";

return (
<section className="relative w-full h-screen bg-[#D1DAD9] overflow-hidden flex flex-col justify-between z-10">
    
    {/* Subtle background technical grid */}
    <div 
    className="absolute inset-0 z-10 pointer-events-none opacity-10"
    style={{
        backgroundImage: 'linear-gradient(to right, #5C6665 1px, transparent 1px), linear-gradient(to bottom, #5C6665 1px, transparent 1px)',
        backgroundSize: '40px 40px',
    }}
    />

    {/* Layer 0: Full-Bleed Background Image (Smooth scale + blur on reveal) */}
    <div className="absolute inset-0 w-full h-full z-0 select-none">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img 
        src="/nguoway-hero.jpg" 
        alt="Nguoway Viewport Backdrop" 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ 
        transform: isRevealed ? 'scale(1.02)' : 'scale(1)',
        filter: isRevealed ? 'blur(6px)' : 'blur(0px)'
        }}
        onError={(e) => {
        e.currentTarget.style.display = 'none';
        const fallback = document.getElementById('full-fallback');
        if (fallback) fallback.style.display = 'flex';
        }}
    />
    <div id="full-fallback" className="hidden absolute inset-0 bg-[#E4E8E9] flex-col items-center justify-center text-center">
        <span className="font-serif text-8xl tracking-widest text-[#A38356] font-light">NW</span>
    </div>
    </div>

    {/* 
    Layer 1: CTA Text Overlay
    Positioned to align vertically over the mannequin bust with clean drop-shadow contrast
    */}
    <div 
    style={{ 
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0)' : 'translateY(30px)',
        pointerEvents: isRevealed ? 'auto' : 'none'
    }}
    className="absolute inset-0 z-30 flex flex-col justify-end items-center px-6 pb-20 md:pb-28 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
    <div className="text-center max-w-xl pointer-events-auto select-none">
        <p className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#A38356] mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        AVATAR STYLE ENGINE
        </p>
        
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#FAF9F6] font-light mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        The Art of <span className="italic text-[#A38356]">Virtual Style</span>
        </h2>
        
        <div className="flex justify-center items-center gap-4">
        <a 
            href="#studios" 
            className="px-10 py-3.5 bg-[#A38356] hover:bg-white hover:text-[#1C1A1B] text-white font-mono text-[10px] tracking-widest uppercase transition-all duration-300 rounded-[1px] shadow-md border border-[#A38356]"
        >
            Shop Studios
        </a>
        <a 
            href="#sandbox" 
            className="px-10 py-3.5 border border-white/30 bg-black/10 backdrop-blur-sm text-white font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-[#1C1A1B] transition-all duration-300 rounded-[1px]"
        >
            Avatar Sandbox
        </a>
        </div>
    </div>
    </div>

</section>
);
}