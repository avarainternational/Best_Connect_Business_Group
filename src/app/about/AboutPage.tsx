"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    title: "Technology Connects",
    color: "#006FB9",
    description:
      "We connect people, data, workflows, and operations through centralized IT systems and digital infrastructure. Our shared technology platform enables real-time visibility and coordination across all business units.",
    features: [
      "Shared digital systems and dashboards",
      "Real-time operational tracking",
      "Centralized data management",
      "Digital process automation",
    ],
  },
  {
    title: "Management Empowers",
    color: "#1D1D1F",
    description:
      "Our centralized management model equips each subsidiary with governance, standard practices, and operational expertise. We provide the leadership infrastructure that helps individual businesses focus on growth.",
    features: [
      "Unified governance framework",
      "Centralized HR and recruitment",
      "Shared operational best practices",
      "Strategic planning and oversight",
    ],
  },
  {
    title: "Growth Defines Us",
    color: "#84C425",
    description:
      "We orient our entire organization toward sustainable capability-building and long-term growth. Our six-industry portfolio represents our commitment to diversification and creating value across sectors.",
    features: [
      "Six-industry portfolio diversification",
      "Capability building at scale",
      "Cross-border expansion (Myanmar & Thailand)",
      "Continuous operational improvement",
    ],
  },
];

const timeline = [
  {
    title: "Foundation",
    description:
      "Best Connect Business Group was established as a centralized management organization to coordinate and empower diverse business operations.",
  },
  {
    title: "Portfolio Growth",
    description:
      "Expanded the business portfolio to six distinct ventures spanning retail, hospitality, healthcare, luxury retail, water production, and cross-border trading.",
  },
  {
    title: "Technology Integration",
    description:
      "Invested in centralized IT systems, digital workflows, and shared technology platforms to connect and coordinate all business units.",
  },
  {
    title: "Cross-Border Operations",
    description:
      "Extended operations into Thailand through AVARA International and IHSM, establishing a regional business presence bridging Myanmar and Thailand.",
  },
];

export default function AboutPage() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight"
            >
              The Management Foundation Behind{" "}
              <span className="text-bc-blue">Six Growing Businesses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-normal text-bc-dark/65 leading-relaxed"
            >
              Best Connect Business Group manages, empowers, and grows a diverse
              portfolio of businesses through centralized operations, innovative
              technology, and strategic leadership across Myanmar and Thailand.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 lg:py-24 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-12 lg:mb-16"
          >
            Our Three Pillars
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 lg:p-8 border border-bc-dark/[0.04]"
              >
                <div
                  className="w-1 h-10 rounded-full mb-6"
                  style={{ backgroundColor: pillar.color }}
                />
                <h3
                  className="text-xl font-bold mb-3 whitespace-nowrap"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-bc-dark/55 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-2.5">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-0.5 shrink-0"
                      >
                        <path
                          d="M4 8L7 11L12 5"
                          stroke={pillar.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-bc-dark/60">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-12 text-center"
            >
              Our Journey
            </motion.h2>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-bc-dark/[0.08]" />
              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full border-2 border-bc-blue bg-white" />
                    <h3 className="text-lg font-semibold text-bc-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-bc-dark/50 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-4">
            Ready to Connect?
          </h2>
          <p className="text-base text-bc-dark/50 mb-8 max-w-md mx-auto">
            Learn more about our businesses or get in touch for partnership
            opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-bc-blue rounded-full hover:bg-bc-blue-dark transition-all duration-200"
            >
              Explore Our Businesses
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
