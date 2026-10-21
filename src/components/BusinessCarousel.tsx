"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { businesses, type Business } from "@/data/businesses";

function BusinessCard({ biz }: { biz: Business }) {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 select-none">
      <Link
        href={biz.href}
        className="block group/card h-full select-none"
        draggable={false}
      >
        <div className="relative h-full bg-white rounded-2xl border border-bc-dark/[0.06] overflow-hidden transition-all duration-300 hover:border-bc-blue/25 hover:shadow-xl hover:shadow-bc-blue/[0.08] hover:-translate-y-1">
          {/* Color accent bar */}
          <div
            className="h-1 w-full transition-all duration-300 group-hover/card:h-1.5"
            style={{ backgroundColor: biz.accentColor }}
          />

          {/* Logo area with corresponding photo & soft white blur */}
          <div className="relative h-36 sm:h-40 w-full overflow-hidden flex items-center justify-center bg-bc-gray/20 pointer-events-none">
            {/* Corresponding Photo Backdrop - crisp & vibrant */}
            {biz.bgImage && (
              <Image
                src={biz.bgImage}
                alt={`${biz.name} backdrop`}
                fill
                draggable={false}
                className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-108 pointer-events-none select-none"
                sizes="(max-width: 640px) 280px, 340px"
              />
            )}

            {/* Light frosted white blur overlay - keeps photo clearly visible */}
            <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px] transition-colors duration-300 group-hover/card:bg-white/10" />

            {/* Soft ambient white glow directly behind logo for supreme legibility */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[82%] h-20 rounded-full bg-white/60 blur-md transition-opacity duration-300 group-hover/card:bg-white/50" />
            </div>

            {/* Gentle bottom edge fade to blend smoothly into white card body */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/40 to-transparent" />

            {/* Foreground Logo - substantially enlarged and crisp */}
            <div className="relative z-10 w-full px-4 flex items-center justify-center pointer-events-none select-none">
              {biz.logo ? (
                <Image
                  src={biz.logo}
                  alt={`${biz.name} logo`}
                  width={220}
                  height={90}
                  draggable={false}
                  className="max-h-18 sm:max-h-22 w-auto max-w-[85%] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover/card:scale-105 select-none pointer-events-none"
                  style={{ width: "auto", height: "auto" }}
                />
              ) : (
                <div className="flex items-center justify-center">
                  <span className="text-xl font-bold text-bc-dark/85 tracking-tight">
                    {biz.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Card content */}
          <div className="p-5 sm:p-6 pt-3 sm:pt-4">
            {/* Divider */}
            <div className="h-px bg-bc-dark/[0.06] mb-4" />

            {/* Industry */}
            <p className="text-[13px] font-medium text-bc-dark/50 mb-1">
              {biz.industry}
            </p>

            {/* Region */}
            <p className="text-[12px] text-bc-dark/35 mb-4">{biz.region}</p>

            {/* Arrow link */}
            <div className="flex items-center gap-1.5 text-bc-blue text-[13px] font-medium opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-x-0 group-hover/card:translate-x-1">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BusinessCarousel() {
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const firstTrackRef = useRef<HTMLDivElement>(null);

  // Position & measurement refs
  const xRef = useRef(0);
  const singleSetWidthRef = useRef(0);

  // Drag / swipe gesture state refs
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragCurrentXRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Velocity tracking for flick/momentum
  const lastTimeRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);

  // Animation and 1.5s resume timer refs
  const isWaitingResumeRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoRafRef = useRef<number | null>(null);
  const momentumRafRef = useRef<number | null>(null);

  // Measure track width
  useEffect(() => {
    const updateDimensions = () => {
      if (firstTrackRef.current) {
        // Track width + gap-6 (24px)
        singleSetWidthRef.current = firstTrackRef.current.offsetWidth + 24;
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Continuous auto-glide loop
  useEffect(() => {
    let prevTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - prevTime) / 1000, 0.1);
      prevTime = now;

      // Auto-move only when not actively dragging, not coasting momentum, and not in the 1.5s post-swipe wait
      if (
        !isDraggingRef.current &&
        !isWaitingResumeRef.current &&
        momentumRafRef.current === null
      ) {
        const W = singleSetWidthRef.current;
        if (W > 0) {
          // Smooth 50px/second continuous glide
          xRef.current -= 50 * dt;

          // Wrap seamlessly
          while (xRef.current <= -W) xRef.current += W;
          while (xRef.current > 0) xRef.current -= W;

          if (trackWrapperRef.current) {
            trackWrapperRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
          }
        }
      }

      autoRafRef.current = requestAnimationFrame(loop);
    };

    autoRafRef.current = requestAnimationFrame(loop);

    const handleVisibilityChange = () => {
      prevTime = performance.now();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (autoRafRef.current) cancelAnimationFrame(autoRafRef.current);
      if (momentumRafRef.current) cancelAnimationFrame(momentumRafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Helper to start the 1.5-second resume countdown after swipe ends
  const startResumeCountdown = () => {
    isWaitingResumeRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      isWaitingResumeRef.current = false;
      resumeTimerRef.current = null;
    }, 1500); // Wait exactly 1.5s before moving again
  };

  // Pointer / Touch down
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;

    // Cancel any active momentum or resume timer immediately
    if (momentumRafRef.current) {
      cancelAnimationFrame(momentumRafRef.current);
      momentumRafRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }

    isDraggingRef.current = true;
    isWaitingResumeRef.current = true;
    dragStartXRef.current = e.clientX;
    dragCurrentXRef.current = xRef.current;
    hasDraggedRef.current = false;

    lastTimeRef.current = performance.now();
    lastXRef.current = e.clientX;
    velocityRef.current = 0;

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  // Pointer / Touch move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      const v = (e.clientX - lastXRef.current) / dt;
      velocityRef.current = velocityRef.current * 0.3 + v * 0.7;
      lastTimeRef.current = now;
      lastXRef.current = e.clientX;
    }

    const delta = e.clientX - dragStartXRef.current;
    if (Math.abs(delta) > 5) {
      hasDraggedRef.current = true;
    }

    const W = singleSetWidthRef.current;
    if (W > 0) {
      let newX = dragCurrentXRef.current + delta;
      while (newX <= -W) newX += W;
      while (newX > 0) newX -= W;
      xRef.current = newX;

      if (trackWrapperRef.current) {
        trackWrapperRef.current.style.transform = `translate3d(${newX}px, 0, 0)`;
      }
    }
  };

  // Pointer / Touch up or cancel
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }

    // If swiped with velocity, coast smoothly with momentum before waiting 1.5s
    const v = velocityRef.current;
    if (hasDraggedRef.current && Math.abs(v) > 0.2) {
      let currentVelocity = Math.max(Math.min(v * 15, 30), -30);
      const W = singleSetWidthRef.current;

      const runMomentum = () => {
        currentVelocity *= 0.90; // Natural deceleration
        xRef.current += currentVelocity;

        if (W > 0) {
          while (xRef.current <= -W) xRef.current += W;
          while (xRef.current > 0) xRef.current -= W;
        }

        if (trackWrapperRef.current) {
          trackWrapperRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
        }

        if (Math.abs(currentVelocity) > 0.5) {
          momentumRafRef.current = requestAnimationFrame(runMomentum);
        } else {
          momentumRafRef.current = null;
          startResumeCountdown();
        }
      };

      momentumRafRef.current = requestAnimationFrame(runMomentum);
    } else {
      // Direct release without flick: pause for exactly 1.5 seconds immediately
      startResumeCountdown();
    }
  };

  // Prevent link navigation if the pointer moved/swiped
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

  return (
    <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-20 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-8 sm:mb-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-bc-dark tracking-[-0.035em]">
            Our Businesses
          </h2>
          <p className="mt-2.5 text-base sm:text-lg font-normal text-bc-dark/65 max-w-xl">
            Six diverse ventures powered by centralized management and technology.
          </p>
        </motion.div>
      </div>

      {/* Infinite Moving Swipable Carousel Track */}
      <div
        className="relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
      >
        {/* Left edge blur fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        {/* Right edge blur fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Tracks wrapper driven by RAF translate3d */}
        <div
          ref={trackWrapperRef}
          className="flex gap-6 will-change-transform"
          role="region"
          aria-label="Infinite moving swipable business carousel"
        >
          {/* 3 identical tracks rendered back-to-back for seamless wrapping */}
          {[0, 1, 2].map((trackIdx) => (
            <div
              key={trackIdx}
              ref={trackIdx === 0 ? firstTrackRef : undefined}
              className="flex shrink-0 gap-6"
              aria-hidden={trackIdx > 0}
            >
              {businesses.map((biz) => (
                <BusinessCard key={`${trackIdx}-${biz.id}`} biz={biz} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
