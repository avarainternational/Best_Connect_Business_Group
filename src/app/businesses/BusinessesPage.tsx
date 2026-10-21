"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
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
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight"
            >
              Six Businesses.{" "}
              <span className="text-bc-green">Multiple Industries.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-normal text-bc-dark/65 leading-relaxed"
            >
              Our portfolio spans retail, hospitality, healthcare, luxury
              retail, water production, and international trading — each
              business empowered by Best Connect&apos;s centralized management
              and technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Business profiles */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-8">
            {businesses.map((biz, index) => (
              <motion.div
                key={biz.id}
                id={biz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="scroll-mt-24"
              >
                <div className="bg-bc-gray rounded-2xl lg:rounded-3xl overflow-hidden border border-bc-dark/[0.03]">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                      {/* Logo Container with photo backdrop & subtle white blur */}
                      <div className="relative flex-shrink-0 w-full sm:w-[250px] h-36 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] bg-bc-gray/20">
                        {/* Background photo - crisp & vibrant */}
                        {biz.bgImage && (
                          <Image
                            src={biz.bgImage}
                            alt={`${biz.name} backdrop`}
                            fill
                            className="object-cover"
                            sizes="250px"
                          />
                        )}
                        {/* Light frosted white blur overlay */}
                        <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px]" />

                        {/* Soft ambient white glow directly behind logo */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-[85%] h-20 rounded-full bg-white/60 blur-md" />
                        </div>
                        
                        {/* Logo - enlarged and crisp */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center px-3">
                          {biz.logo ? (
                            <Image
                              src={biz.logo}
                              alt={`${biz.name} logo`}
                              width={220}
                              height={90}
                              className="max-h-20 w-auto max-w-[90%] object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                              style={{ width: "auto", height: "auto" }}
                            />
                          ) : (
                            <span className="text-xl font-bold text-bc-dark tracking-tight">
                              {biz.name}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className="inline-block px-3 py-1 text-[12px] font-semibold rounded-full text-white"
                            style={{ backgroundColor: biz.accentColor }}
                          >
                            {biz.industry}
                          </span>
                          <span className="text-[13px] text-bc-dark/40 flex items-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                            </svg>
                            {biz.region}
                          </span>
                        </div>

                        <p className="text-base text-bc-dark/65 leading-relaxed mb-5">
                          {biz.overview}
                        </p>

                        {/* Capabilities */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {biz.capabilities.map((cap) => (
                            <div
                              key={cap}
                              className="flex items-start gap-2"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className="mt-0.5 shrink-0"
                              >
                                <path
                                  d="M4 8L7 11L12 5"
                                  stroke={biz.accentColor}
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="text-sm text-bc-dark/50">
                                {cap}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-4">
            Interested in Working With Us?
          </h2>
          <p className="text-base text-bc-dark/50 mb-8 max-w-md mx-auto">
            Whether you&apos;re a potential partner, customer, or looking for
            career opportunities — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-bc-blue rounded-full hover:bg-bc-blue-dark transition-all duration-200"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-bc-blue bg-white border-2 border-bc-blue/20 rounded-full hover:border-bc-blue/40 transition-all duration-200"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
