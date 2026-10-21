"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { businesses } from "@/data/businesses";

const inquiryTypes = [
  { id: "general", label: "General Group Inquiry", target: "Best Connect Executive Office" },
  { id: "b2b", label: "B2B Supply & Distribution", target: "Dtwo / AVARA Trading Desk" },
  { id: "hospitality", label: "Resort & Event Bookings", target: "Aldora Hill Hospitality" },
  { id: "healthcare", label: "Patient Care & Hospital Referrals", target: "IHSM Concierge" },
  { id: "water", label: "Water & Wellness Partnerships", target: "Infinity Water Operations" },
  { id: "jewelry", label: "Bespoke Jewelry & Private Viewing", target: "Sein Shwe Pyae Sone Showroom" },
  { id: "investment", label: "Investment & Capital Partnerships", target: "AVARA & Group Leadership" },
  { id: "careers", label: "Talent & Careers", target: "Group People & Culture" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: "general",
    business: "all",
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    channel: "email",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedInquiry = inquiryTypes.find((t) => t.id === formData.inquiryType);
  const selectedBusiness = businesses.find((b) => b.id === formData.business);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      inquiryType: "general",
      business: "all",
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      channel: "email",
      message: "",
    });
  };

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-bc-blue mb-4 block"
            >
              Contact Best Connect
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bc-dark tracking-[-0.035em] mb-6 leading-tight"
            >
              Unified Communication.{" "}
              <span className="text-bc-blue">Targeted Direction.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-normal text-bc-dark/65 leading-relaxed"
            >
              Best Connect operates a centralized inquiry router. Whether your matter concerns parent group governance, B2B wholesale, international healthcare logistics, resort reservations, or commercial partnerships, your request is directed directly to the responsible leadership team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Form & Hub Section */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-bc-gray/70 rounded-3xl p-8 sm:p-10 border border-bc-dark/[0.04]"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-bc-green/10 flex items-center justify-center text-bc-green">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-bc-dark mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-base text-bc-dark/60 max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you, <span className="font-semibold text-bc-dark">{formData.fullName || "valued partner"}</span>. Your inquiry has been routed to the{" "}
                    <span className="font-semibold text-bc-blue">
                      {selectedBusiness ? selectedBusiness.name : selectedInquiry?.target}
                    </span>.
                  </p>
                  <p className="text-xs text-bc-dark/40 max-w-sm mx-auto mb-8">
                    Note: This is a front-end corporate preview interface. Production forms connect directly to Best Connect&apos;s centralized ticketing & CRM engine.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-bc-blue bg-white border border-bc-blue/20 rounded-full hover:bg-bc-blue/5 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-bc-dark mb-1">
                      Smart Inquiry Router
                    </h2>
                    <p className="text-xs text-bc-dark/50 mb-6">
                      Select your topic and venture. Our system assigns your ticket to the specific business lead.
                    </p>
                  </div>

                  {/* Inquiry Type Radio / Pill Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-bc-dark uppercase tracking-wider mb-2.5">
                      1. What is this inquiry regarding?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                          className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                            formData.inquiryType === type.id
                              ? "bg-bc-blue text-white border-bc-blue shadow-sm"
                              : "bg-white text-bc-dark/70 border-bc-dark/[0.08] hover:border-bc-blue/30 hover:text-bc-blue"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specific Venture Option */}
                  <div>
                    <label className="block text-xs font-semibold text-bc-dark uppercase tracking-wider mb-2">
                      2. Target Business / Subsidiary
                    </label>
                    <select
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl text-sm border border-bc-dark/[0.08] text-bc-dark focus:outline-none focus:border-bc-blue focus:ring-1 focus:ring-bc-blue"
                    >
                      <option value="all">Best Connect Business Group (Parent Group)</option>
                      {businesses.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.industry})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Routing feedback badge */}
                  <div className="p-3 bg-bc-blue/[0.06] rounded-xl flex items-center gap-3 border border-bc-blue/15">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="text-bc-blue shrink-0">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 6V11M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <p className="text-xs text-bc-blue">
                      <span className="font-semibold">Routing destination:</span>{" "}
                      {selectedBusiness && formData.business !== "all"
                        ? `${selectedBusiness.name} Executive Operations`
                        : selectedInquiry?.target}
                    </p>
                  </div>

                  {/* Name and Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-bc-dark mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Daw Aye Thida / Mr. Somchai"
                        className="w-full px-4 py-2.5 bg-white rounded-xl text-sm border border-bc-dark/[0.08] focus:outline-none focus:border-bc-blue focus:ring-1 focus:ring-bc-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-bc-dark mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company name (optional)"
                        className="w-full px-4 py-2.5 bg-white rounded-xl text-sm border border-bc-dark/[0.08] focus:outline-none focus:border-bc-blue focus:ring-1 focus:ring-bc-blue"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-bc-dark mb-1.5">
                        Work / Primary Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 bg-white rounded-xl text-sm border border-bc-dark/[0.08] focus:outline-none focus:border-bc-blue focus:ring-1 focus:ring-bc-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-bc-dark mb-1.5">
                        Phone / Viber / Telegram
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+95 9... or +66 8..."
                        className="w-full px-4 py-2.5 bg-white rounded-xl text-sm border border-bc-dark/[0.08] focus:outline-none focus:border-bc-blue focus:ring-1 focus:ring-bc-blue"
                      />
                    </div>
                  </div>

                  {/* Preferred Channel */}
                  <div>
                    <label className="block text-xs font-semibold text-bc-dark mb-1.5">
                      Preferred Contact Channel
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { id: "email", label: "Email" },
                        { id: "viber", label: "Viber" },
                        { id: "telegram", label: "Telegram" },
                        { id: "phone", label: "Phone Call" },
                      ].map((ch) => (
                        <label
                          key={ch.id}
                          className="flex items-center gap-2 text-xs text-bc-dark/80 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-bc-dark/[0.06]"
                        >
                          <input
                            type="radio"
                            name="contactChannel"
                            value={ch.id}
                            checked={formData.channel === ch.id}
                            onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                            className="text-bc-blue focus:ring-bc-blue"
                          />
                          {ch.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-bc-dark mb-1.5">
                      Details / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize your requirement, business background, or operational inquiry..."
                      className="w-full px-4 py-3 bg-white rounded-xl text-sm border border-bc-dark/[0.08] focus:outline-none focus:border-bc-blue focus:ring-1 focus:ring-bc-blue"
                    />
                  </div>

                  {/* Privacy and Data Protection Notice */}
                  <div className="pt-2 text-[11px] text-bc-dark/45 leading-relaxed border-t border-bc-dark/[0.06]">
                    <p>
                      <strong>Data Governance Notice:</strong> Inquiries are held in strict commercial confidence. For healthcare and patient coordination (IHSM), clinical data is handled according to protected health privacy protocols. Job applicant submissions are governed by group talent confidentiality standards.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-bc-blue text-white font-semibold text-sm hover:bg-bc-blue-dark transition-all shadow-md shadow-bc-blue/20 hover:shadow-lg hover:-translate-y-[1px]"
                  >
                    Transmit Inquiry to Responsible Division →
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right Information Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Regional Footprint */}
              <div className="bg-white rounded-3xl p-8 border border-bc-dark/[0.06] shadow-sm">
                <span className="text-xs font-semibold tracking-wider uppercase text-bc-blue mb-2 block">
                  Regional Operations
                </span>
                <h3 className="text-xl font-bold text-bc-dark mb-4">
                  Dual-Market Presence
                </h3>
                <p className="text-sm text-bc-dark/60 leading-relaxed mb-6">
                  Best Connect maintains cross-border operational coordination between Myanmar and Thailand, ensuring seamless management across all six subsidiary lines.
                </p>

                <div className="space-y-4">
                  {/* Myanmar Hub */}
                  <div className="p-4 rounded-2xl bg-bc-gray/60 border border-bc-dark/[0.04]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-bc-blue"></span>
                      <h4 className="text-sm font-bold text-bc-dark">Myanmar Operations</h4>
                    </div>
                    <p className="text-xs text-bc-dark/50 mb-2">
                      Yangon Central Corporate Hub · Shan State (Kalaw) Resort Operations · Regional Retail Outlets
                    </p>
                    <div className="text-xs text-bc-dark/70 space-y-1">
                      <div>Primary Subsidiaries: Dtwo, Infinity Water, Aldora Hill, Sein Shwe Pyae Sone, IHSM Myanmar</div>
                      <div className="font-medium text-bc-blue">Inquiries: myanmar@bestconnectgroup.com</div>
                    </div>
                  </div>

                  {/* Thailand Hub */}
                  <div className="p-4 rounded-2xl bg-bc-gray/60 border border-bc-dark/[0.04]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-bc-green"></span>
                      <h4 className="text-sm font-bold text-bc-dark">Thailand Operations</h4>
                    </div>
                    <p className="text-xs text-bc-dark/50 mb-2">
                      Bangkok Commercial Desk · Cross-Border Trading & Healthcare Concierge Liaison
                    </p>
                    <div className="text-xs text-bc-dark/70 space-y-1">
                      <div>Primary Subsidiaries: AVARA International, IHSM Medical Liaison</div>
                      <div className="font-medium text-bc-green">Inquiries: thailand@bestconnectgroup.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Level & Response */}
              <div className="bg-bc-dark text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-bc-green">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Central Response Protocol</h4>
                    <p className="text-xs text-white/50">Service Level Commitment</p>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  All inquiries submitted through this portal are logged into Best Connect&apos;s central administrative workflow. Standard response time is within 24 to 48 business hours. Urgent patient transfers via IHSM are prioritized through our active medical concierge coordinators.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                  <span>Executive Secretariat</span>
                  <span className="text-bc-green font-medium">Active System</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
