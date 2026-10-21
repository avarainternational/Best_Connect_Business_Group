"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RibbonBackground from "./RibbonBackground";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mobileEndLimit, setMobileEndLimit] = useState<number | null>(null);

  useEffect(() => {
    function updateLimit() {
      // On screens < 640px (mobile), end the ribbon exactly where the "How We Operate" CTA ends
      if (window.innerWidth >= 640) {
        setMobileEndLimit(null);
        return;
      }
      if (!heroRef.current || !ctaRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      const ctaRect = ctaRef.current.getBoundingClientRect();
      // Distance from top of Hero section to the bottom of "How We Operate" button
      const bottom = ctaRect.bottom - heroRect.top;
      setMobileEndLimit(bottom);
    }

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-start pt-28 pb-8 sm:pt-32 sm:pb-12 lg:min-h-screen lg:pt-40 lg:pb-0 overflow-hidden bg-white"
    >
      {/* Ribbon Background — on mobile, ends cleanly at the bottom baseline of "How We Operate" */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={
          mobileEndLimit
            ? {
                WebkitMaskImage: `linear-gradient(to bottom, black 0px, black ${mobileEndLimit - 12}px, transparent ${mobileEndLimit + 16}px)`,
                maskImage: `linear-gradient(to bottom, black 0px, black ${mobileEndLimit - 12}px, transparent ${mobileEndLimit + 16}px)`,
              }
            : undefined
        }
      >
        <RibbonBackground endY={mobileEndLimit} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl xl:max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-bc-gray-dark mb-5 sm:mb-6"
          >
            A Group of Businesses. A Stronger Tomorrow.
          </motion.p>

          {/* Headline — Plus Jakarta Sans ExtraBold 800, 32-44px on mobile/tablet, 68-72px on laptop/desktop */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(1.95rem,7.8vw,2.75rem)] sm:text-[clamp(2.75rem,5.5vw,4.2rem)] lg:text-[68px] xl:text-[72px] font-extrabold leading-[1.08] tracking-[-0.04em] mb-6 lg:mb-8"
          >
            <span className="text-bc-blue block whitespace-nowrap">Technology Connects.</span>
            <span className="text-bc-dark block whitespace-nowrap">Management Empowers.</span>
            <span className="text-bc-green block whitespace-nowrap">Growth Defines Us.</span>
          </motion.h1>

          {/* Supporting description — Plus Jakarta Sans Regular 400 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-[19px] font-normal text-bc-dark/65 leading-relaxed max-w-lg mb-8 lg:mb-10"
          >
            We manage, empower, and grow a diverse portfolio of businesses
            through centralized operations, innovative technology, and strategic
            leadership.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white bg-bc-blue rounded-full hover:bg-bc-blue-dark transition-all duration-300 hover:shadow-xl hover:shadow-bc-blue/20 hover:-translate-y-[1px]"
            >
              Explore Our Businesses
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/shared-services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold text-bc-blue bg-white border-2 border-bc-blue/20 rounded-full hover:border-bc-blue/40 hover:bg-bc-blue/5 transition-all duration-300 hover:-translate-y-[1px]"
            >
              How We Operate
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
