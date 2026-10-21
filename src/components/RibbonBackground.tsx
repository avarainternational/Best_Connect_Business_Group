"use client";

import { useEffect, useRef, useCallback } from "react";

interface RibbonBackgroundProps {
  endY?: number | null;
}

/**
 * RibbonBackground — Ultra-Dense Stripe-Grade Silk Ribbon Wave
 * Features:
 * - Responsive width scaling (wide sweeping ribbon on mobile)
 * - Controlled vertical end point (terminating cleanly at the "How We Operate" button level)
 * - Zero blur across all viewports for 100% crisp, razor-sharp filament strings
 * - 850+ combed filaments on desktop, and Best Connect brand colors.
 */
export default function RibbonBackground({ endY }: RibbonBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const endYRef = useRef<number | null | undefined>(endY);
  useEffect(() => {
    endYRef.current = endY;
  }, [endY]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    function resizeCanvas() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / width) - 0.5;
      mouse.targetY = ((e.clientY - rect.top) / height) - 0.5;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas!.getBoundingClientRect();
        mouse.targetX = ((e.touches[0].clientX - rect.left) / width) - 0.5;
        mouse.targetY = ((e.touches[0].clientY - rect.top) / height) - 0.5;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    // Rich brand color stops with high chroma & luminous opacity
    const colorStops = [
      { pos: 0.00, r: 0,   g: 111, b: 185, a: 0.35 }, // Cobalt Blue #006FB9
      { pos: 0.15, r: 0,   g: 145, b: 215, a: 0.72 }, // Vivid Azure
      { pos: 0.32, r: 0,   g: 185, b: 240, a: 0.88 }, // Radiant Cyan
      { pos: 0.48, r: 132, g: 196, b: 37,  a: 0.95 }, // Core Lime Green #84C425
      { pos: 0.64, r: 165, g: 232, b: 42,  a: 0.94 }, // Electric Chartreuse
      { pos: 0.78, r: 29,  g: 29,  b: 31,  a: 0.90 }, // Charcoal 3D depth crease #1D1D1F
      { pos: 0.90, r: 0,   g: 85,  b: 155, a: 0.85 }, // Deep Cobalt
      { pos: 1.00, r: 0,   g: 111, b: 185, a: 0.65 }, // Cobalt Blue #006FB9
    ];

    function getStrandColor(s: number, alphaMultiplier = 1) {
      const clamped = Math.max(0, Math.min(1, s));
      for (let i = 0; i < colorStops.length - 1; i++) {
        const curr = colorStops[i];
        const next = colorStops[i + 1];
        if (clamped >= curr.pos && clamped <= next.pos) {
          const localT = (clamped - curr.pos) / (next.pos - curr.pos);
          const r = Math.round(lerp(curr.r, next.r, localT));
          const g = Math.round(lerp(curr.g, next.g, localT));
          const b = Math.round(lerp(curr.b, next.b, localT));
          const a = (lerp(curr.a, next.a, localT) * alphaMultiplier).toFixed(3);
          return `rgba(${r}, ${g}, ${b}, ${a})`;
        }
      }
      return `rgba(0, 111, 185, ${(0.8 * alphaMultiplier).toFixed(3)})`;
    }

    /**
     * Evaluates 3D-projected Bézier control points for strand `s` at `time`.
     * Features dynamic volumetric modulation: swells wide in the crests and cinches tight in folds.
     */
    function getStrandControlPoints(s: number, t: number, harmonicOffset = 0) {
      const isMobile = width < 640;
      const targetHeight = isMobile && endYRef.current ? endYRef.current : height;

      const mx = mouse.x * (isMobile ? 25 : 65);
      const my = mouse.y * (isMobile ? 25 : 55);

      // Slow, serene, floating wave harmonics (~20s gentle cycle)
      const wave1 = Math.sin(t * 0.65 + s * 3.6 + harmonicOffset);
      const wave2 = Math.cos(t * 0.48 - s * 2.8 + harmonicOffset * 0.8);
      const twist = Math.sin(t * 0.38 + s * Math.PI * 1.8);

      // Dynamic 3D Volumetric Modulation (graceful, slow breathing volume difference)
      const volumeSwell = 1 + 0.32 * Math.sin(t * 0.55 + s * Math.PI * 1.3);
      const pinchFactor = 1 - 0.25 * Math.cos(t * 0.60 + s * 3.0);
      const crestBreath = Math.sin(t * 0.62 + s * 2.4);

      // Micro-furrows: gentle, calm ripples without any fast jitter
      const microRipple = Math.sin(s * 36 + t * 0.45) * (isMobile ? 1.0 : 1.8);
      const fineJitter = Math.cos(s * 70 - t * 0.55) * (isMobile ? 0.6 : 1.2);

      // --- Point 0: Top Entry ---
      const p0Start = isMobile ? 0.44 : 0.30;
      const p0End   = isMobile ? 1.36 : 0.98;
      const p0Spread = (p0End - p0Start) * (1 + 0.12 * Math.sin(t * 0.45));
      const p0Center = lerp(p0Start, p0End, 0.5);
      const p0x = width * (p0Center + (Math.pow(s, 0.88) - 0.5) * p0Spread) + wave1 * (isMobile ? 16 : 40) + microRipple;
      const p0y = -60 - s * 35;

      // --- Point 1: Volumetric Upper Swell (billowing crest) ---
      const p1Start = isMobile ? 0.48 : 0.34;
      const p1End   = isMobile ? 1.42 : 1.06;
      const p1Spread = (p1End - p1Start) * volumeSwell;
      const p1Center = lerp(p1Start, p1End, 0.5) + twist * (isMobile ? 0.03 : 0.05);
      const p1x = width * (p1Center + (Math.pow(s, 0.72) - 0.5) * p1Spread) + wave2 * (isMobile ? 32 : 72) + mx * (1 - s * 0.28) + fineJitter;
      const p1y = targetHeight * lerp(isMobile ? 0.44 : 0.50, isMobile ? 0.14 : 0.16, s) + wave1 * (isMobile ? 24 : 50) + crestBreath * (isMobile ? 16 : 32) + my;

      // --- Point 2: Deep 3D Mid Fold & Cinch ---
      const p2Start = isMobile ? 0.62 : 0.66;
      const p2End   = isMobile ? 1.38 : 1.02;
      const p2Spread = (p2End - p2Start) * pinchFactor;
      const p2Center = lerp(p2Start, p2End, 0.5) + wave1 * (isMobile ? 0.03 : 0.06);
      const foldFactor = Math.sin(s * Math.PI);
      const p2x = width * (p2Center + (s - 0.5) * p2Spread) + twist * (isMobile ? 36 : 78) + foldFactor * (isMobile ? 36 : 72) + mx * 0.65;
      const p2y = targetHeight * lerp(isMobile ? 0.70 : 0.74, isMobile ? 0.42 : 0.48, s) + wave2 * (isMobile ? 28 : 54) - crestBreath * (isMobile ? 14 : 26) - my * 0.45;

      // --- Point 3: Bottom Cascade Exit ---
      const p3Start = isMobile ? 1.28 : 0.98;
      const p3End   = isMobile ? 0.96 : 0.84;
      const bottomTwist = Math.sin(s * Math.PI * 1.2 + t * 0.4) * 0.07;
      const p3x = width * (lerp(p3Start, p3End, s) + bottomTwist) + wave1 * (isMobile ? 16 : 30);
      // Ends right at the bottom baseline of "How We Operate"
      const p3y = targetHeight * (isMobile ? 1.00 : 1.08);

      return { p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y };
    }

    /**
     * Interior secondary fold filaments (underneath the main sheet for 3D depth)
     */
    function drawSecondaryFoldStrings(t: number) {
      const isMobile = width < 640;
      const targetHeight = isMobile && endYRef.current ? endYRef.current : height;
      const count = isMobile ? 100 : 160;

      ctx!.save();
      for (let i = 0; i < count; i++) {
        const s = i / (count - 1);
        const wave = Math.sin(t * 0.55 + s * 4.2) * (isMobile ? 22 : 38);

        const p0x = width * lerp(isMobile ? 0.75 : 0.70, isMobile ? 1.30 : 0.97, s);
        const p0y = -35;
        const p1x = width * lerp(isMobile ? 0.94 : 0.94, isMobile ? 1.40 : 1.06, s) + wave + mouse.x * (isMobile ? 16 : 34);
        const p1y = targetHeight * lerp(0.24, 0.42, s) + Math.cos(t * 0.50 + s * 2.8) * (isMobile ? 14 : 24);
        const p2x = width * lerp(isMobile ? 0.88 : 0.85, isMobile ? 1.35 : 0.99, s) - wave * 0.8;
        const p2y = targetHeight * lerp(0.60, 0.78, s);
        const p3x = width * lerp(isMobile ? 0.88 : 0.85, isMobile ? 1.35 : 0.99, 1 - s);
        const p3y = targetHeight * (isMobile ? 1.00 : 1.08);

        ctx!.beginPath();
        ctx!.moveTo(p0x, p0y);
        ctx!.bezierCurveTo(p1x, p1y, p2x, p2y, p3x, p3y);

        const r = Math.round(lerp(0, 132, s));
        const g = Math.round(lerp(111, 196, s));
        const b = Math.round(lerp(185, 37, s));

        ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${isMobile ? 0.24 : 0.30})`;
        ctx!.lineWidth = isMobile ? 1.1 : 0.9;
        ctx!.stroke();
      }
      ctx!.restore();
    }

    /**
     * 3D Fold Rim (the curved cylindrical roll on the far right)
     */
    function drawRimCylinder(t: number) {
      const isMobile = width < 640;
      const targetHeight = isMobile && endYRef.current ? endYRef.current : height;
      ctx!.save();
      const rimCount = isMobile ? 60 : 90;
      for (let i = 0; i < rimCount; i++) {
        const u = i / (rimCount - 1);
        const wave = Math.sin(t * 0.50 + u * 2.6) * (isMobile ? 12 : 22);

        const rx0 = width * lerp(isMobile ? 0.90 : 0.80, isMobile ? 1.30 : 0.91, u);
        const ry0 = -30;
        const rx1 = width * lerp(isMobile ? 0.98 : 0.89, isMobile ? 1.42 : 0.99, u) + wave;
        const ry1 = targetHeight * 0.26;
        const rx2 = width * lerp(isMobile ? 0.96 : 0.90, isMobile ? 1.38 : 0.97, u) - wave * 0.7;
        const ry2 = targetHeight * 0.64;
        const rx3 = width * lerp(isMobile ? 0.92 : 0.86, isMobile ? 1.32 : 0.95, u);
        const ry3 = targetHeight * (isMobile ? 1.00 : 1.08);

        ctx!.beginPath();
        ctx!.moveTo(rx0, ry0);
        ctx!.bezierCurveTo(rx1, ry1, rx2, ry2, rx3, ry3);

        const r = Math.round(lerp(0, 132, u));
        const g = Math.round(lerp(111, 196, u));
        const b = Math.round(lerp(185, 37, u));
        const alpha = (0.42 + 0.38 * Math.sin(u * Math.PI)).toFixed(3);

        ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx!.lineWidth = isMobile ? 1.4 : 1.3;
        ctx!.stroke();
      }
      ctx!.restore();
    }

    function frame() {
      // Serene, majestic floating tempo (~20s gentle wave breathing cycle)
      time += 0.0075;
      const isMobile = width < 640;

      // Smooth mouse interpolation (inertia)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx!.clearRect(0, 0, width, height);

      // 1. Interior cylinder fold filaments (back depth)
      drawSecondaryFoldStrings(time);

      // 3. Ultra-Dense Silk Ribbon Body Mesh (continuous solid satin fabric)
      const bodyStrips = isMobile ? 220 : 300;
      let prevPts = getStrandControlPoints(0, time);

      for (let i = 1; i <= bodyStrips; i++) {
        const s = i / bodyStrips;
        const currPts = getStrandControlPoints(s, time);

        ctx!.beginPath();
        ctx!.moveTo(prevPts.p0x, prevPts.p0y);
        ctx!.bezierCurveTo(prevPts.p1x, prevPts.p1y, prevPts.p2x, prevPts.p2y, prevPts.p3x, prevPts.p3y);
        ctx!.lineTo(currPts.p3x, currPts.p3y);
        ctx!.bezierCurveTo(currPts.p2x, currPts.p2y, currPts.p1x, currPts.p1y, currPts.p0x, currPts.p0y);
        ctx!.closePath();

        // High opacity for continuous silky surface
        ctx!.fillStyle = getStrandColor(s, isMobile ? 0.74 : 0.80);
        ctx!.fill();

        prevPts = currPts;
      }

      // 4. Finely Combed Silk String Filaments
      const totalStrings = isMobile ? 550 : 850;
      for (let i = 0; i < totalStrings; i++) {
        const s = i / (totalStrings - 1);
        const pts = getStrandControlPoints(s, time);

        ctx!.beginPath();
        ctx!.moveTo(pts.p0x, pts.p0y);
        ctx!.bezierCurveTo(pts.p1x, pts.p1y, pts.p2x, pts.p2y, pts.p3x, pts.p3y);

        // Classify strand highlights based on position on the ribbon fold
        const isIlluminatedCrest = (s > 0.42 && s < 0.68);
        const isSpecularHighlight = (i % 7 === 0);
        const isShadowCrease = (s > 0.74 && s < 0.84);

        if (isIlluminatedCrest && i % 3 === 0) {
          // Luminous lime/chartreuse sheen with gentle slow sweep
          const sheenPulse = Math.sin(s * 6.0 - time * 0.7);
          const sheenAlpha = isMobile ? 0.82 + 0.10 * sheenPulse : 0.88 + 0.08 * sheenPulse;
          ctx!.strokeStyle = `rgba(165, 235, 45, ${sheenAlpha.toFixed(3)})`;
          ctx!.lineWidth = isMobile ? 1.25 : 1.15;
        } else if (isSpecularHighlight) {
          // Specular glint across silk threads
          ctx!.strokeStyle = `rgba(235, 252, 255, ${isMobile ? 0.72 : 0.78})`;
          ctx!.lineWidth = isMobile ? 0.95 : 0.85;
        } else if (isShadowCrease) {
          // Charcoal shade lines defining fold geometry
          ctx!.strokeStyle = `rgba(25, 25, 30, ${isMobile ? 0.42 : 0.48})`;
          ctx!.lineWidth = 0.95;
        } else {
          // Standard strand using full color gradient
          ctx!.strokeStyle = getStrandColor(s, isMobile ? 0.82 : 0.88);
          ctx!.lineWidth = isMobile ? 1.0 : 0.88;
        }

        ctx!.stroke();
      }

      // 5. Specular hairline micro-glints on top (gentle floating silk shimmer)
      const glintCount = isMobile ? 80 : 120;
      for (let j = 0; j < glintCount; j++) {
        const s = 0.38 + (j / (glintCount - 1)) * 0.36; // focused along the illuminated fold
        const pts = getStrandControlPoints(s, time, 0.05);

        ctx!.beginPath();
        ctx!.moveTo(pts.p0x, pts.p0y);
        ctx!.bezierCurveTo(pts.p1x, pts.p1y, pts.p2x, pts.p2y, pts.p3x, pts.p3y);

        const glintPulse = Math.sin(j * 0.35 + time * 0.9);
        const alpha = Math.max(0.25, Math.min(0.95, 0.50 + 0.40 * glintPulse));
        ctx!.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx!.lineWidth = isMobile ? 0.8 : 0.75;
        ctx!.stroke();
      }

      // 6. Right-hand 3D Fold Rim Cylinder
      drawRimCylinder(time);

      animationRef.current = requestAnimationFrame(frame);
    }

    animationRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const cleanup = render();
    return cleanup;
  }, [render]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto ribbon-canvas transition-opacity duration-300"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        filter: "none",
        WebkitFilter: "none",
      }}
      aria-hidden="true"
    />
  );
}
