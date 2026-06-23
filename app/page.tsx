'use client';

import React, { useState, useEffect, useRef } from 'react';
import Hero from "./components/Hero";
import ShopGrid from "./components/ShopGrid";
import FittingRoom from "./components/FittingRoom";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  const [activeCreator, setActiveCreator] = useState<string>("juana");
  
  // Stages: "art" (Stage 0) | "reveal" (Stage 1) | "unlocked" (Stage 2)
  const [stage, setStage] = useState<"art" | "reveal" | "unlocked">("art");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartY = useRef<number | null>(null);

  // Lock body overflow during the intro stages
  useEffect(() => {
    if (stage === "unlocked") {
      document.body.style.overflow = 'unset';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [stage]);

  const triggerReveal = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setStage("reveal");
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Custom high-end scroll easing function approximating cubic-bezier(0.16, 1, 0.3, 1)
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
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      if (stage === "art") {
        e.preventDefault();
        if (e.deltaY > 0) {
          setIsTransitioning(true);
          setStage("reveal");
          setTimeout(() => setIsTransitioning(false), 1000);
        }
      } else if (stage === "reveal") {
        e.preventDefault();
        if (e.deltaY > 0) {
          setIsTransitioning(true);
          setStage("unlocked");
          
          setTimeout(() => {
            const contentElement = document.getElementById("studios-section");
            if (contentElement) {
              const targetY = contentElement.offsetTop;
              // Buttery-smooth easing scroll over 1200ms
              easeScrollTo(targetY, 1200, () => {
                setIsTransitioning(false);
              });
            } else {
              setIsTransitioning(false);
            }
          }, 150);
        } else if (e.deltaY < 0) {
          setIsTransitioning(true);
          setStage("art");
          setTimeout(() => setIsTransitioning(false), 1000);
        }
      }
    };

    const handleNativeScroll = () => {
      if (stage === "unlocked" && window.scrollY === 0) {
        setStage("reveal");
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (stage !== "unlocked") {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning || stage === "unlocked" || touchStartY.current === null) return;
      
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY.current - currentY;

      if (Math.abs(diffY) > 30) {
        if (stage === "art" && diffY > 0) { // Swiped up
          setIsTransitioning(true);
          setStage("reveal");
          setTimeout(() => setIsTransitioning(false), 1000);
        } else if (stage === "reveal") {
          if (diffY > 0) { // Swiped up
            setIsTransitioning(true);
            setStage("unlocked");
            setTimeout(() => {
              const contentElement = document.getElementById("studios-section");
              if (contentElement) {
                const targetY = contentElement.offsetTop;
                easeScrollTo(targetY, 1200, () => {
                  setIsTransitioning(false);
                });
              } else {
                setIsTransitioning(false);
              }
            }, 150);
          } else if (diffY < 0) { // Swiped down
            setIsTransitioning(true);
            setStage("art");
            setTimeout(() => setIsTransitioning(false), 1000);
          }
        }
        touchStartY.current = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleNativeScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleNativeScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [stage, isTransitioning]); // windowHeight completely removed from the dependency array

  const handleSelectCreator = (creatorId: string) => {
    setActiveCreator(creatorId);
    const sandboxElement = document.getElementById("sandbox");
    if (sandboxElement) {
      const targetY = sandboxElement.offsetTop;
      easeScrollTo(targetY, 1100);
    }
  };

  // Inside app/page.tsx - update the Hero component render inside return():

  return (
    <div className={`min-h-screen bg-[#D1DAD9] text-[#1C1A1B] selection:bg-[#BCA374] selection:text-white font-sans antialiased ${
      stage !== "unlocked" ? "h-screen overflow-hidden" : ""
    }`}>
      <main>
        {/* Cinematic Hero loads with the circular indicator removed */}
        <Hero stage={stage} />

        {/* Content Curtain */}
        <div id="studios-section" className="relative z-20 bg-[#FAF9F6] shadow-[-10px_-10px_30px_rgba(0,0,0,0.03)] border-t border-[#BCA374]/20">
          <ShopGrid onSelectCreator={handleSelectCreator} activeCreatorId={activeCreator} />
          <Newsletter />
          <Footer />
        </div>
      </main>
    </div>
  );
}