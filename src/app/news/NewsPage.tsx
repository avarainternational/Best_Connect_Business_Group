"use client";

import { motion } from "framer-motion";

export default function NewsPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-bc-blue mb-4 block"
            >
              News & Updates
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight"
            >
              Latest From{" "}
              <span className="text-bc-blue">Best Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-normal text-bc-dark/65 leading-relaxed"
            >
              Company announcements, business updates, and stories from across
              our portfolio.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Empty state */}
      <section className="py-16 lg:py-24 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center border border-bc-dark/[0.04]">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="3" width="20" height="22" rx="2" stroke="#006FB9" strokeWidth="1.5"/>
                <path d="M9 9H19M9 13H19M9 17H15" stroke="#006FB9" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-bc-dark mb-3">
              News Coming Soon
            </h3>
            <p className="text-sm text-bc-dark/45 leading-relaxed">
              We&apos;re preparing our first company announcements and business
              updates. Check back soon for news from across the Best Connect
              Business Group portfolio.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
