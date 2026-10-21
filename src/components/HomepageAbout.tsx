"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomepageAbout() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-bc-blue mb-4 block">
              About Best Connect
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight">
              One Group. Six Industries.{" "}
              <span className="text-bc-green">Shared Strength.</span>
            </h2>
            <p className="text-base sm:text-lg font-normal text-bc-dark/65 leading-relaxed mb-6">
              Best Connect Business Group is the centralized management
              organization behind six diverse businesses. We provide the
              technology, leadership, shared resources, and operational
              capabilities that help each company function and grow.
            </p>
            <p className="text-base font-normal text-bc-dark/55 leading-relaxed mb-8">
              From retail and hospitality to healthcare and cross-border
              logistics, our portfolio spans multiple industries across Myanmar
              and Thailand — all connected through unified management and
              innovation.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-bc-blue hover:text-bc-blue-dark transition-colors duration-200 group"
            >
              Learn more about us
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3V25M3 14H25" stroke="#006FB9" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="14" cy="14" r="10" stroke="#006FB9" strokeWidth="1.5" fill="none"/>
                  </svg>
                ),
                title: "Centralized Management",
                desc: "Unified leadership coordinating all business units",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="6" width="22" height="16" rx="2" stroke="#84C425" strokeWidth="1.5" fill="none"/>
                    <path d="M8 14H20M8 18H16" stroke="#84C425" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="8" cy="10" r="1.5" fill="#84C425"/>
                  </svg>
                ),
                title: "Digital Workflows",
                desc: "Technology replacing paper-heavy administration",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M9 21V13M14 21V7M19 21V16" stroke="#006FB9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 25H25" stroke="#006FB9" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Strategic Growth",
                desc: "Data-driven decisions for sustainable expansion",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="10" cy="10" r="4" stroke="#84C425" strokeWidth="1.5" fill="none"/>
                    <circle cx="18" cy="10" r="4" stroke="#84C425" strokeWidth="1.5" fill="none"/>
                    <path d="M6 22C6 18.6863 8.68629 16 12 16H16C19.3137 16 22 18.6863 22 22" stroke="#84C425" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Shared Resources",
                desc: "Talent and capabilities shared across ventures",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-bc-gray rounded-2xl p-5 lg:p-6 hover:bg-bc-blue/[0.03] transition-colors duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-sm font-semibold text-bc-dark mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-bc-dark/45 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
