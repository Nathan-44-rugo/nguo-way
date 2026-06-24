import React from 'react';

export default function SandboxPage() {
return (
<div className="w-full min-h-screen bg-[#FAF9F6] text-[#1C1A1B] flex flex-col justify-between">
    
    {/* Editorial Navigation Header */}
    <div className="py-6 px-8 border-b border-neutral-200/50 flex justify-between items-center">
    <span className="font-mono text-[9px] tracking-[0.25em] text-[#965F26] uppercase">Active Laboratory</span>
    <h1 className="font-serif text-lg tracking-[0.3em] font-bold text-[#A38356]">NGUOWAY</h1>
    <a href="/" className="font-mono text-[9px] tracking-[0.2em] text-neutral-500 hover:text-black uppercase">Return to Main</a>
    </div>

    {/* High-Fidelity Responsive Game Viewport */}
    <div className="flex-grow flex items-center justify-center p-4 md:p-8">
    <div className="w-full max-w-5xl aspect-video bg-[#E4E8E9] border border-neutral-200/60 shadow-lg rounded-sm overflow-hidden relative">
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
    <div className="py-4 px-8 border-t border-neutral-100 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#5C6665]/60">
    <span>ENGINE STATUS: STABLE</span>
    <span>© 2026 NGUOWAY</span>
    </div>

</div>
);
}