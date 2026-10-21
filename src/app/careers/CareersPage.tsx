"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { businesses } from "@/data/businesses";

const businessFilters = [
  { id: "all", label: "All Ventures" },
  ...businesses.map((b) => ({ id: b.id, label: b.shortName })),
  { id: "group-it", label: "Group IT" },
];

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    position: "",
    business: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: No real backend configured. Show notice.
    setFormSubmitted(true);
  };

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
              Careers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight"
            >
              Build Your Career{" "}
              <span className="text-bc-green">Across Six Industries</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-normal text-bc-dark/65 leading-relaxed"
            >
              Join Best Connect Business Group and our family of companies.
              We&apos;re building teams across retail, hospitality, healthcare,
              luxury retail, water production, and international trade.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-8 bg-white border-b border-bc-dark/[0.04]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-wrap gap-2">
            {businessFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-bc-blue text-white"
                    : "bg-bc-gray text-bc-dark/60 hover:bg-bc-dark/[0.06]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Empty state — no real job data */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-bc-gray flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="7" width="20" height="16" rx="2" stroke="#006FB9" strokeWidth="1.5"/>
                <path d="M10 7V5C10 3.89543 10.8954 3 12 3H16C17.1046 3 18 3.89543 18 5V7" stroke="#006FB9" strokeWidth="1.5"/>
                <path d="M4 13H24" stroke="#006FB9" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-bc-dark mb-3">
              No Open Positions Listed Yet
            </h3>
            <p className="text-sm text-bc-dark/45 leading-relaxed mb-2">
              We are currently preparing our recruitment pipeline. Available
              positions will appear here once confirmed by our HR team.
            </p>
            <p className="text-xs text-bc-dark/30">
              In the meantime, submit your application below and we&apos;ll
              reach out when relevant opportunities arise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 lg:py-24 bg-bc-gray">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-bc-dark tracking-tight mb-3"
            >
              Submit Your Application
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-bc-dark/50 mb-8"
            >
              Tell us about yourself and your preferred area. We&apos;ll contact
              you when suitable positions open.
            </motion.p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 border border-bc-dark/[0.04] text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#D97706" strokeWidth="1.5"/>
                    <path d="M12 7V13M12 16V17" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-bc-dark mb-2">
                  Form Submission Not Configured
                </h3>
                <p className="text-sm text-bc-dark/45">
                  A backend submission service has not been configured yet. In a
                  production environment, your application would be securely
                  submitted and routed to the relevant team.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-sm text-bc-blue font-medium hover:underline"
                >
                  Return to form
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-bc-dark/[0.04] space-y-5"
              >
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-bc-dark mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm border border-bc-dark/10 rounded-xl focus:border-bc-blue focus:ring-1 focus:ring-bc-blue/20 outline-none transition-all bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bc-dark mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm border border-bc-dark/10 rounded-xl focus:border-bc-blue focus:ring-1 focus:ring-bc-blue/20 outline-none transition-all bg-white"
                      placeholder="+95 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-bc-dark mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm border border-bc-dark/10 rounded-xl focus:border-bc-blue focus:ring-1 focus:ring-bc-blue/20 outline-none transition-all bg-white"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-bc-dark mb-1.5">
                    Preferred Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm border border-bc-dark/10 rounded-xl focus:border-bc-blue focus:ring-1 focus:ring-bc-blue/20 outline-none transition-all bg-white"
                    placeholder="e.g., Marketing Manager, Software Engineer"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-bc-dark mb-1.5">
                    Preferred Business
                  </label>
                  <select
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm border border-bc-dark/10 rounded-xl focus:border-bc-blue focus:ring-1 focus:ring-bc-blue/20 outline-none transition-all bg-white appearance-none"
                  >
                    <option value="">Any / No preference</option>
                    <option value="best-connect">Best Connect (Group)</option>
                    {businesses.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-bc-dark mb-1.5">
                    CV / Resume
                  </label>
                  <div className="border-2 border-dashed border-bc-dark/10 rounded-xl p-6 text-center hover:border-bc-blue/30 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label htmlFor="cv" className="cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 text-bc-dark/25">
                        <path d="M12 16V4M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm text-bc-dark/40">
                        Click to upload PDF, DOC, or DOCX
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-[15px] font-semibold text-white bg-bc-blue rounded-xl hover:bg-bc-blue-dark transition-all duration-200"
                >
                  Submit Application
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
