"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  description: string;
  mobileDescription: string;
  color: string;
}

const stats: StatItem[] = [
  {
    number: "1",
    label: "Business Group",
    description: "Centralized management and shared resources",
    mobileDescription: "Centralized resources",
    color: "#006FB9",
  },
  {
    number: "6",
    label: "Diverse Businesses",
    description: "Across multiple industries with specialized expertise",
    mobileDescription: "6 industries",
    color: "#006FB9",
  },
  {
    number: "60+",
    label: "Total Staff",
    description: "Dedicated professionals driving value every day",
    mobileDescription: "Cross-border team",
    color: "#84C425",
  },
];

function AnimatedNumber({ value, color }: { value: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/\d/g, "");

    let animId: number;
    if (isNaN(numericPart)) {
      animId = requestAnimationFrame(() => {
        setDisplayed(value);
      });
      return () => cancelAnimationFrame(animId);
    }

    let startTime: number;
    const duration = 1200;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericPart * eased);
      setDisplayed(`${current}${suffix}`);
      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      style={{ color }}
      className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums block"
    >
      {displayed}
    </span>
  );
}

export default function GroupStatistics() {
  return (
    <section className="py-6 sm:py-10 lg:py-14 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Apple Liquid Glass Summary Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FAFAFC] to-[#F5F6F9] border border-bc-dark/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_30px_-4px_rgba(0,111,185,0.04),0_2px_8px_rgba(0,0,0,0.02)] px-3 sm:px-8 py-5 sm:py-8 lg:py-10">
          <div className="grid grid-cols-3 items-center divide-x divide-bc-dark/[0.08]">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-1.5 sm:px-4 lg:px-8"
              >
                <AnimatedNumber value={stat.number} color={stat.color} />
                <p className="text-[11px] sm:text-[15px] lg:text-base font-bold text-bc-dark mt-1 sm:mt-2 leading-tight">
                  {stat.label}
                </p>
                <p className="hidden sm:block text-xs sm:text-sm text-bc-dark/45 mt-1.5 max-w-[220px] mx-auto leading-relaxed">
                  {stat.description}
                </p>
                <p className="block sm:hidden text-[10px] text-bc-dark/40 mt-0.5 leading-tight truncate">
                  {stat.mobileDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

