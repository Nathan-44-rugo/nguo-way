/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import ShopGrid from "../components/ShopGrid";
import FittingRoom from "../components/FittingRoom";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
const [activeCreator, setActiveCreator] = useState<string>("juana");
const [scrollY, setScrollY] = useState(0);
const [windowHeight, setWindowHeight] = useState(0);

useEffect(() => {
setWindowHeight(window.innerHeight);
const handleScroll = () => {
    setScrollY(window.scrollY);
};
const handleResize = () => {
    setWindowHeight(window.innerHeight);
};
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleResize);
return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
};
}, []);

const handleSelectCreator = (creatorId: string) => {
setActiveCreator(creatorId);
const sandboxElement = document.getElementById("sandbox");
if (sandboxElement) {
    sandboxElement.scrollIntoView({ behavior: "smooth" });
}
};

return (
<div className="min-h-screen bg-[#E4E8E9] text-[#1C1A1B] selection:bg-[#BCA374] selection:text-white font-sans antialiased overflow-x-hidden">
    
    {/* Global CSS for custom cursive fonts and animations */}
    <style jsx global>{`
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.99) translateY(4px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
        animation: spinSlow 30s linear infinite;
    }
    `}</style>

    <main>
    {/* Immersive Scroll-Locked Cinematic Hero */}
    {/* Cast props to any to accommodate differing Hero prop types */}
    <Hero {...({ scrollY, windowHeight } as any)} />

    {/* Dynamic Boutique Grid & Creative Sandbox */}
    <div className="relative z-20 bg-[#FAF9F6] border-t border-[#BCA374]/15">
        <ShopGrid onSelectCreator={handleSelectCreator} activeCreatorId={activeCreator} />
    </div>
    </main>
</div>
);
}