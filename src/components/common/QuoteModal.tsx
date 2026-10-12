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

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Web Development",
  budget: "Let's Discuss",
  description: "",
};

const inputClass =
  "w-full px-3.5 py-2.5 text-sm rounded-xl outline-none transition";
const labelClass = "block text-xs font-bold text-[#334155] mb-1.5";

export function QuoteModal() {
  const { isOpen, selectedService, prefill, openId, closeQuoteModal } = useQuoteModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Apply the requested service and any prefilled fields each time the dialog opens.
  // Adjusting state during render (guarded by openId) avoids an extra effect pass.
  const [appliedOpenId, setAppliedOpenId] = useState(0);
  if (isOpen && openId !== appliedOpenId) {
    setAppliedOpenId(openId);
    setFormData((prev) => {
      const next = { ...prev };
      if (prefill.fullName) next.fullName = prefill.fullName;
      if (prefill.email) next.email = prefill.email;
      if (prefill.description) next.description = prefill.description;
      if (selectedService) {
        const s = selectedService.toLowerCase();
        const matched = projectTypeOptions.find(
          (t) => t.name.toLowerCase().includes(s) || s.includes(t.name.toLowerCase())
        );
        if (matched) next.projectType = matched.name;
      }
      return next;
    });
  }

  // Focus management: remember the opener, focus the first empty field, restore on close
  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      const fields = dialog.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input[required], textarea[required]"
      );
      const firstEmpty = Array.from(fields).find((el) => !el.value.trim());
      (firstEmpty || firstFieldRef.current || dialog).focus();
    }, 30);
    return () => {
      window.clearTimeout(t);
      openerRef.current?.focus?.();
    };
  }, [isOpen]);

  // Escape closes, Tab stays inside the dialog
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeQuoteModal();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
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
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.description.trim()
    ) {
      setErrorMessage("Please complete all required fields: name, email, phone, and project description.");
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
    setFormData(emptyForm);
    closeQuoteModal();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeQuoteModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-2xl my-4 sm:my-6 bg-white rounded-2xl shadow-2xl shadow-black/60 border border-[#e7e5ef] overflow-hidden outline-none"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/70 to-transparent" aria-hidden="true" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-[#efedf5] bg-gradient-to-br from-[#7c3aed]/[0.12] to-[#2563eb]/[0.06]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6d28d9]">
              <Icon name="shield" className="w-3.5 h-3.5" />
              <span>Confidential Project Scoping</span>
            </div>
            <h2 id="quote-modal-title" className="text-lg sm:text-xl font-extrabold text-[#0f172a] mt-1">
              Request a Project Quote
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              We reply within one business day with scope, timeline, and cost.
            </p>
          </div>
          <button
            type="button"
            onClick={closeQuoteModal}
            className="p-2 -mr-1 text-[#475569] hover:text-[#0f172a] rounded-lg hover:bg-[#f1f0f7] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <Icon name="xmark" className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 px-2" role="status">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30 flex items-center justify-center">
                <Icon name="check-circle" className="w-9 h-9 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-black text-[#0f172a] mb-2">Request received</h3>
              <p className="text-[#475569] max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                Thank you, <span className="font-bold text-[#0f172a]">{formData.fullName}</span>. Our team will review your requirements and send a scoping proposal within one business day.
              </p>
              <dl className="p-4 rounded-xl bg-white border border-[#e7e5ef] text-left text-xs sm:text-sm text-[#334155] max-w-md mx-auto mb-7 space-y-2">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#64748b]">Project type</dt>
                  <dd className="font-semibold text-right">{formData.projectType}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#64748b]">Contact email</dt>
                  <dd className="font-semibold text-right break-all">{formData.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#64748b]">Budget range</dt>
                  <dd className="font-semibold text-right">{formData.budget}</dd>
                </div>
              </dl>
              <Button variant="primary" onClick={handleResetAndClose}>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errorMessage && (
                <div role="alert" className="flex items-start gap-2 p-3 text-sm text-red-600 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <Icon name="circle-exclamation" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Project type */}
              <fieldset>
                <legend className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2.5">
                  Project type <span className="text-red-600">*</span>
                </legend>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectTypeOptions.map((type) => {
                    const isSelected = formData.projectType === type.name;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setFormData((prev) => ({ ...prev, projectType: type.name }))}
                        className={`p-3 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#7c3aed]/70 bg-[#7c3aed]/15 text-[#0f172a] shadow-[0_0_0_1px_rgba(124,58,237,0.4)]"
                            : "border-[#e7e5ef] bg-white hover:border-white/20 hover:bg-[#f6f5fb] text-[#334155]"
                        }`}
                      >
                        <Icon name={type.icon} className={`w-4 h-4 ${isSelected ? "text-[#6d28d9]" : "text-[#64748b]"}`} />
                        <span className="text-xs font-semibold leading-tight">{type.name}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name <span className="text-red-600">*</span>
                  </label>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Ahmed"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Work email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company <span className="text-[#64748b] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or business name"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Budget */}
              <fieldset>
                <legend className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-2.5">
                  Estimated budget
                </legend>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetOptions.map((b) => {
                    const isSelected = formData.budget === b.label;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setFormData((prev) => ({ ...prev, budget: b.label }))}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#7c3aed]/70 bg-[#7c3aed]/15 text-[#0f172a]"
                            : "border-[#e7e5ef] bg-white hover:border-white/20 hover:bg-[#f6f5fb] text-[#334155]"
                        }`}
                      >
                        <div className="text-xs font-semibold">{b.label}</div>
                        <div className="text-[11px] text-[#64748b] mt-0.5">{b.sublabel}</div>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Description */}
              <div>
                <label htmlFor="description" className={labelClass}>
                  Project description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your goals, required integrations, user roles, or current bottlenecks..."
                  className={`${inputClass} resize-y min-h-[110px]`}
                />
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#efedf5] text-xs text-[#475569] flex items-center gap-2">
                <Icon name="lock" className="w-3.5 h-3.5 text-[#6d28d9] flex-shrink-0" />
                <span>Everything you share is kept confidential under our NDA terms.</span>
              </div>

              {/* Actions */}
              <div className="pt-1 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-[#475569] hover:text-[#0f172a] rounded-xl hover:bg-[#f6f5fb] transition cursor-pointer"
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full sm:w-auto min-w-[180px]"
                  icon={
                    isSubmitting ? (
                      <span className="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    ) : (
                      <Icon name="send" className="w-3.5 h-3.5" />
                    )
                  }
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
