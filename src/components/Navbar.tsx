"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/businesses";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-2.5 sm:pt-4 pointer-events-none transition-all duration-300">
      {/* Top Bar — Apple Liquid Glass Capsule */}
      <div
        className={`relative z-50 mx-auto max-w-[1380px] pointer-events-auto rounded-2xl sm:rounded-full nav-liquid-capsule liquid-shimmer ${
          isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-2xl border border-bc-dark/10 shadow-xl"
            : isScrolled
            ? "nav-liquid-glass-scrolled"
            : "nav-liquid-glass-initial"
        }`}
      >
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-[62px] sm:h-[68px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative z-50 flex items-center gap-3 shrink-0 py-1"
            >
              <Image
                src="/logos/Best connect logo.png"
                alt="Best Connect Business Group"
                width={40}
                height={40}
                className="w-9 h-9 lg:w-10 lg:h-10 object-contain drop-shadow-sm"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-[14px] lg:text-[15px] font-semibold text-bc-dark leading-tight block">
                  Best Connect
                </span>
                <span className="text-[10px] lg:text-[11px] font-medium text-bc-gray-dark tracking-[0.04em] uppercase leading-tight block">
                  Business Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[14px] font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-bc-blue font-semibold"
                        : "text-bc-dark/80 hover:text-bc-blue hover:bg-white/40"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/75 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95),0_2px_8px_rgba(0,111,185,0.1)] border border-white/60 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Language selector */}
              <button className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium text-bc-dark/75 rounded-full border border-white/60 bg-white/35 hover:bg-white/65 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.8),0_1px_4px_rgba(0,0,0,0.03)] hover:text-bc-blue transition-all duration-200">
                EN
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-white bg-gradient-to-r from-bc-blue via-[#0082d6] to-bc-blue rounded-full border border-white/30 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.6),0_4px_16px_rgba(0,111,185,0.3)] hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.8),0_6px_22px_rgba(0,111,185,0.45)] hover:-translate-y-[0.5px] transition-all duration-200"
              >
                Contact Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="relative z-50 lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 touch-manipulation cursor-pointer transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-5 h-4 pointer-events-none">
                  <span
                    className={`absolute left-0 block w-5 h-[2px] bg-bc-dark transition-all duration-300 ${
                      isMobileMenuOpen ? "top-[7px] rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] block w-5 h-[2px] bg-bc-dark transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block w-5 h-[2px] bg-bc-dark transition-all duration-300 ${
                      isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-[76px] z-40 bg-white/92 backdrop-blur-3xl border border-white/70 rounded-3xl shadow-2xl lg:hidden max-h-[calc(100dvh-92px)] overflow-y-auto pointer-events-auto"
          >
            <div className="flex flex-col p-6 min-h-full">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 text-lg font-medium rounded-2xl transition-all duration-200 ${
                          isActive
                            ? "text-bc-blue bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,111,185,0.08)] border border-white/60 font-semibold"
                            : "text-bc-dark hover:bg-white/60"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-bc-dark/[0.06] space-y-4">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-medium text-bc-gray-dark">Language:</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-bc-dark bg-white/60 border border-white/60 rounded-full shadow-sm">
                    EN
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-bc-blue to-[#0082d6] rounded-2xl shadow-lg shadow-bc-blue/20"
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
