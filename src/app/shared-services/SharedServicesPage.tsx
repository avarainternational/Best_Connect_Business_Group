"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { sharedServices } from "@/data/businesses";

const iconMap: Record<string, React.ReactNode> = {
  management: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 24C6 19.5817 9.58172 16 14 16C18.4183 16 22 19.5817 22 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  digital: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 25H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 21V25" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  inventory: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10H24" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 10V24" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  hr: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 22C4 18.6863 6.68629 16 10 16H18C21.3137 16 24 18.6863 24 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  hospitality: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 24H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 24V10L14 4L22 10V24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="11" y="16" width="6" height="8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  logistics: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="8" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 12H23L26 16V20H18V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  healthcare: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 6V22M6 14H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  analytics: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 20V14M14 20V8M20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

const businessConnections = [
  {
    capability: "Omnichannel Cloud POS & Inventory",
    businesses: "Dtwo Business Group, Sein Shwe Pyae Sone",
    description:
      "Synchronize stock, orders, and sales across physical stores, online platforms, and jewelry inventory.",
  },
  {
    capability: "Digital Patient Concierge & CRM",
    businesses: "International Hospital Service Myanmar",
    description:
      "Patient intake, secure medical records, consultation scheduling, and hospital booking coordination.",
  },
  {
    capability: "Hospitality Booking & PMS",
    businesses: "Aldora Hill",
    description:
      "Reservation management, room operations, and guest service workflows for boutique hospitality.",
  },
  {
    capability: "IoT Bottling & Wellness Analytics",
    businesses: "Infinity Water",
    description:
      "Production telemetry monitoring and mobile app engagement analytics for the wellness platform.",
  },
  {
    capability: "Cross-Border Logistics & Capital Analytics",
    businesses: "AVARA International",
    description:
      "Shipment tracking, medicine and cargo routing, deal-flow matching, and distribution analytics.",
  },
];

export default function SharedServicesPage() {
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
              How We Operate
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight"
            >
              Centralized Technology.{" "}
              <span className="text-bc-green">Shared Capabilities.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-normal text-bc-dark/65 leading-relaxed"
            >
              Best Connect provides shared management infrastructure and
              technology capabilities that power operations across all six
              business units.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-24 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-12"
          >
            Operational Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {sharedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-bc-dark/[0.04] hover:border-bc-blue/15 hover:shadow-lg hover:shadow-bc-blue/[0.04] transition-all duration-300"
              >
                <div className="text-bc-blue mb-4">
                  {iconMap[service.icon] || iconMap.analytics}
                </div>
                <h3 className="text-[15px] font-semibold text-bc-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-bc-dark/45 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business-specific technology */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-4"
            >
              Business-Specific Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-bc-dark/50 leading-relaxed mb-10"
            >
              Our central technology platform provides specialized capabilities
              tailored to each business unit&apos;s industry requirements.
            </motion.p>

            <div className="bg-bc-blue/[0.02] border border-bc-blue/10 rounded-xl p-4 mb-8">
              <p className="text-xs text-bc-dark/40 flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                  <path d="M7 4V7.5M7 9.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                The capabilities listed below represent the proposed technology
                showcase from the specification. Deployment status should be
                confirmed with each subsidiary before presenting them as live.
              </p>
            </div>

            <div className="space-y-5">
              {businessConnections.map((item, index) => (
                <motion.div
                  key={item.capability}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-bc-gray rounded-xl p-5 lg:p-6"
                >
                  <h3 className="text-[15px] font-semibold text-bc-dark mb-1">
                    {item.capability}
                  </h3>
                  <p className="text-xs text-bc-blue font-medium mb-2">
                    {item.businesses}
                  </p>
                  <p className="text-sm text-bc-dark/45 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-4">
            Want to Learn More?
          </h2>
          <p className="text-base text-bc-dark/50 mb-8 max-w-md mx-auto">
            Explore our business portfolio or get in touch with our team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-bc-blue rounded-full hover:bg-bc-blue-dark transition-all duration-200"
            >
              Our Businesses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-bc-blue bg-white border-2 border-bc-blue/20 rounded-full hover:border-bc-blue/40 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
