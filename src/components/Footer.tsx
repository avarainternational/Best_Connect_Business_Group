"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Businesses", href: "/businesses" },
    { label: "Shared Services", href: "/shared-services" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  businesses: [
    { label: "Dtwo Business Group", href: "/businesses#dtwo" },
    { label: "Infinity Water", href: "/businesses#infinity-water" },
    { label: "Aldora Hill", href: "/businesses#aldora-hill" },
    { label: "Sein Shwe Pyae Sone", href: "/businesses#sein-shwe-pyae-sone" },
    { label: "AVARA International", href: "/businesses#avara" },
    { label: "IHSM", href: "/businesses#ihsm" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bc-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main footer content */}
        <div className="py-14 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logos/Best connect logo.png"
                alt="Best Connect Business Group"
                width={40}
                height={40}
                className="w-9 h-9 object-contain brightness-0 invert"
              />
              <div>
                <span className="text-[15px] font-semibold text-white block leading-tight">
                  Best Connect
                </span>
                <span className="text-[10px] font-medium text-white/40 tracking-[0.05em] uppercase block leading-tight">
                  Business Group
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
              Technology-driven management foundation empowering six diverse
              businesses across Myanmar and Thailand.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 tracking-[0.1em] uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business links */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 tracking-[0.1em] uppercase mb-5">
              Our Businesses
            </h3>
            <ul className="space-y-3">
              {footerLinks.businesses.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 tracking-[0.1em] uppercase mb-5">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-white/55">
                Business inquiries, partnership opportunities, and career
                information.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-bc-blue rounded-full hover:bg-bc-blue-dark transition-all duration-200"
              >
                Contact Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Best Connect Business Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
