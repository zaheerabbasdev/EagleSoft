"use client";

import React, { useState, useEffect, useRef } from "react";
import { useQuoteModal } from "@/src/context/QuoteModalContext";
import { Icon, IconName } from "./Icon";
import { Button } from "./Button";

export interface ProjectTypeOption {
  id: string;
  name: string;
  icon: IconName;
}

export interface BudgetOption {
  id: string;
  label: string;
  sublabel: string;
}

const projectTypeOptions: ProjectTypeOption[] = [
  { id: "web", name: "Web Development", icon: "laptop-code" },
  { id: "mobile", name: "Mobile App", icon: "mobile-screen" },
  { id: "ecommerce", name: "E-Commerce", icon: "cart-shopping" },
  { id: "custom", name: "Custom Software", icon: "gears" },
  { id: "pos", name: "POS & Inventory", icon: "boxes-stacked" },
  { id: "uiux", name: "UI/UX Design", icon: "pen-ruler" },
  { id: "cloud", name: "Cloud & DevOps", icon: "cloud" },
  { id: "other", name: "Other Consultation", icon: "briefcase" },
];

const budgetOptions: BudgetOption[] = [
  { id: "discuss", label: "Let's Discuss", sublabel: "Scope dependent" },
  { id: "tier1", label: "PKR 150k – 300k", sublabel: "$500 – $1,000" },
  { id: "tier2", label: "PKR 300k – 900k", sublabel: "$1,000 – $3,000" },
  { id: "tier3", label: "PKR 900k – 2.5M", sublabel: "$3,000 – $8,000" },
  { id: "tier4", label: "PKR 2.5M+", sublabel: "$8,000+ Enterprise" },
];

export function QuoteModal() {
  const { isOpen, selectedService, closeQuoteModal } = useQuoteModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Web Development",
    budget: "Let's Discuss",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedService) {
      const matchedType = projectTypeOptions.find(
        (t) => t.name.toLowerCase().includes(selectedService.toLowerCase()) ||
               selectedService.toLowerCase().includes(t.name.toLowerCase())
      );
      if (matchedType) {
        setFormData((prev) => ({ ...prev, projectType: matchedType.name }));
      }
    }
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.description.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Project Description).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Configured for endpoint connection:
      // await fetch('/api/quote', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setErrorMessage("Unable to submit quotation request. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "Web Development",
      budget: "Let's Discuss",
      description: "",
    });
    closeQuoteModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl my-6 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden fade-in text-[#212121]"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0288d1] text-white border-b border-[#03a9f4]/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#b3e5fc]">
              <Icon name="shield" className="w-3.5 h-3.5" />
              <span>EagleSoft Pvt Ltd • Confidential Scoping</span>
            </div>
            <h3 id="quote-modal-title" className="text-lg sm:text-xl font-extrabold text-white! mt-0.5">
              Request a Project Quotation & Architecture Review
            </h3>
          </div>
          <button
            onClick={closeQuoteModal}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <Icon name="xmark" className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#b3e5fc]/60 flex items-center justify-center text-[#0288d1]">
                <Icon name="check-circle" className="w-10 h-10 text-[#0288d1]" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">
                Quotation Request Received
              </h4>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our technical architecture team will review your specifications and deliver a formal scoping proposal within 1 business day.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-700 max-w-md mx-auto mb-6 space-y-1.5 font-medium">
                <div>
                  <span className="text-slate-400 font-semibold">Project Type:</span> {formData.projectType}
                </div>
                <div>
                  <span className="text-slate-400 font-semibold">Contact Email:</span> {formData.email}
                </div>
                <div>
                  <span className="text-slate-400 font-semibold">Budget Range:</span> {formData.budget}
                </div>
              </div>
              <Button variant="primary" onClick={handleResetAndClose}>
                Close Window
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs sm:text-sm text-slate-600">
                Select your project type and details below. We provide structured technical scoping, timeline milestones, and transparent cost breakdowns.
              </p>

              {errorMessage && (
                <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Interactive Project Type Selector Pills (Array of objects) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Project Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectTypeOptions.map((type) => {
                    const isSelected = formData.projectType === type.name;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type.name })}
                        className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                          isSelected
                            ? "border-[#0288d1] bg-[#f0f9ff] text-[#0288d1] font-bold shadow-2xs"
                            : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                        }`}
                      >
                        <Icon name={type.icon} className={`w-4 h-4 mb-2 ${isSelected ? "text-[#0288d1]" : "text-slate-400"}`} />
                        <span className="text-xs font-semibold leading-tight">{type.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Ahmed"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Phone & Company Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or Business Name"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Budget Selector Pills (Array of objects) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetOptions.map((b) => {
                    const isSelected = formData.budget === b.label;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b.label })}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          isSelected
                            ? "border-[#0288d1] bg-[#f0f9ff] text-[#0288d1] font-bold"
                            : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                        }`}
                      >
                        <div className="text-xs font-semibold">{b.label}</div>
                        <div className="text-[10px] text-slate-400">{b.sublabel}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-slate-700 mb-1">
                  Project Description & Key Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your operational goals, required integrations, user roles, or existing system bottlenecks..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none transition"
                ></textarea>
              </div>

              {/* Confidentiality notice */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
                <Icon name="lock" className="w-3.5 h-3.5 text-[#0288d1] flex-shrink-0" />
                <span>All submitted specifications are held strictly confidential under EagleSoft NDA terms.</span>
              </div>

              {/* Footer Controls */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[170px]"
                  icon={<Icon name="send" className="w-3.5 h-3.5" />}
                >
                  {isSubmitting ? "Submitting..." : "Submit Proposal Request"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
