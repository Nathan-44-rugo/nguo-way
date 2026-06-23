import React from 'react';
import Header from './Header';

interface HeroProps {
scrollY: number;
windowHeight: number;
}

export default function Hero({ scrollY, windowHeight }: HeroProps) {
// Calculate relative scroll progress through the pinned container
const trackHeight = windowHeight || 800;
const progress = Math.min(scrollY / (trackHeight * 0.6), 1);

return (
// Pinned container tracks two stages of scrolling
<section className="relative w-full h-[180vh] bg-[#E4E8E9] z-10">
    
    {/* Sticky viewport content */}
    <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
    
    {/* Soft studio design grid */}
    <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
        backgroundImage: 'linear-gradient(to right, rgba(105, 102, 109, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(105, 102, 109, 0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        }}
    />

    {/* Faded Header - Appears over the artwork when scrolling */}
    <div 
        style={{ 
        opacity: progress,
        transform: `translateY(${-10 + (progress * 10)}px)`,
        pointerEvents: progress > 0.1 ? 'auto' : 'none'
        }}
        className="absolute top-0 left-0 w-full z-40 transition-all duration-300 ease-out"
    >
        <Header />
    </div>

    {/* Wide Studio Banner Piece */}
    <div className="absolute inset-0 z-10 flex items-center justify-center px-4 md:px-12">
        <div className="relative w-full max-w-[1300px] h-[75vh] flex items-center justify-center transition-all duration-300 ease-out">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
            src="/nguoway-hero.jpeg" 
            alt="Nguoway Wide Banner" 
            className="h-full w-full object-contain select-none transition-transform duration-300"
            style={{ transform: `scale(${1 - (progress * 0.03)})` }}
            onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.getElementById('hero-fallback');
            if (fallback) fallback.style.display = 'flex';
            }}
        />

        {/* Premium Monogram CSS Fallback */}
        <div id="hero-fallback" className="hidden flex-col items-center justify-center text-center">
            <span className="font-serif text-7xl tracking-widest text-[#BCA374] font-light">NW</span>
            <h1 className="font-serif text-xl tracking-[0.3em] uppercase text-[#BCA374] mt-4">NGUOWAY</h1>
        </div>
        </div>
    </div>

    {/* 
        Locked-reveal CTA
        Fades and floats up directly over the wide banner when scrolling starts
    */}
    <div 
        style={{ 
        opacity: progress,
        transform: `translateY(${20 - (progress * 20)}px)`,
        pointerEvents: progress > 0.1 ? 'auto' : 'none'
        }}
        className="absolute inset-0 z-30 flex flex-col justify-end items-center pb-24 transition-all duration-300 ease-out"
    >
        <div className="text-center max-w-xl px-6 pointer-events-auto">
        <p className="font-mono text-[9px] tracking-[0.45em] uppercase text-[#965F26] mb-3">
            AVATAR STYLE ENGINE
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#1C1A1B] font-light mb-6">
            The Art of <span className="italic text-[#965F26]">Virtual Style</span>
        </h2>
        <div className="flex justify-center items-center gap-4">
            <a 
            href="#studios" 
            className="px-10 py-3.5 bg-[#BCA374] hover:bg-[#965F26] text-white font-mono text-[10px] tracking-widest uppercase transition-colors rounded-[1px] shadow-sm"
            >
            Shop Studios
            </a>
            <a 
            href="#sandbox" 
            className="px-10 py-3.5 border border-neutral-300 bg-white/80 backdrop-blur-sm text-neutral-600 font-mono text-[10px] tracking-widest uppercase hover:bg-neutral-50 transition-colors rounded-[1px]"
            >
            Avatar Sandbox
            </a>
        </div>
        </div>
    </div>

    </div>
</section>
);
}