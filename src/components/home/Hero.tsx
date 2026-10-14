"use client";

import React, { useState } from "react";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";
import { heroBackgroundSlidesData, techStackData, teamData, trustMetricsData } from "@/src/config/home";

const hero = heroBackgroundSlidesData[0];
const checks = ["100% Code Ownership", "Weekly Working Demos", "Dedicated Post-Launch Support"];

const fieldClass =
  "w-full px-4 py-3.5 text-sm rounded-xl bg-[#f5f9fe] border border-[#e1ecf8] text-[#0b1220] placeholder:text-[#8a97a8] focus:bg-white focus:border-[#03a9f4] focus:ring-4 focus:ring-[#03a9f4]/15 outline-none transition";

export function Hero() {
  const { openQuoteModal } = useQuoteModal();
  const [idea, setIdea] = useState("");
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", description: "" });

  const projects = trustMetricsData.find((m) => m.id === "metric-projects");
  const satisfaction = trustMetricsData.find((m) => m.id === "metric-satisfaction");

  return (
    <section className="hero-soft overflow-hidden" aria-label="EagleSoft software company">
      <Container className="relative pt-14 pb-14 sm:pt-20 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: message */}
          <div className="lg:col-span-7">
            <span className="pill-eyebrow">
              <span className="w-2 h-2 rounded-full bg-[#03a9f4] shadow-[0_0_10px_#03a9f4]" aria-hidden="true" />
              {hero.badge}
            </span>

            <h1 className="mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.1rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#0b1220]">
              Building <span className="underline-swoosh text-blue-grad">Reliable</span> Software.{" "}
              Empowering Your Business.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#526072] leading-relaxed max-w-xl">{hero.description}</p>

            {/* Idea box */}
            <form
              className="mt-8 flex items-center max-w-xl rounded-full bg-white border border-[#e1ecf8] shadow-[0_14px_40px_-22px_rgba(2,136,209,0.55)] pl-6 pr-1.5 py-1.5"
              onSubmit={(e) => {
                e.preventDefault();
                openQuoteModal(undefined, idea.trim() ? { description: idea.trim() } : undefined);
              }}
            >
              <label htmlFor="hero-idea" className="sr-only">
                Describe your project idea
              </label>
              <input
                id="hero-idea"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g. A POS system for my retail store"
                className="flex-1 min-w-0 !border-0 !bg-transparent !shadow-none !ring-0 text-[15px] text-[#0b1220] placeholder:text-[#8a97a8] outline-none py-2.5"
              />
              <button
                type="submit"
                aria-label="Continue with this idea"
                className="w-11 h-11 rounded-full bg-blue-grad text-white flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform cursor-pointer"
              >
                <Icon name="arrow-right" className="w-4 h-4" />
              </button>
            </form>

            {/* Secondary action + trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Button href={hero.secondaryCtaHref} variant="secondary" size="lg" iconPosition="left" icon={<Icon name="laptop-code" className="w-4 h-4 text-[#0288d1]" />}>
                {hero.secondaryCtaText}
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {teamData.slice(0, 4).map((m) => (
                    <span
                      key={m.id}
                      className="w-9 h-9 rounded-full ring-2 ring-white bg-blue-grad text-white text-[11px] font-bold flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {m.initials}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="flex gap-0.5 text-[#03a9f4]" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="w-3 h-3" />
                    ))}
                  </div>
                  <p className="text-[13px] text-[#526072] mt-0.5">
                    <strong className="text-[#0b1220]">{projects?.value} projects</strong> · {satisfaction?.value} satisfaction
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-8 pt-6 border-t border-[#e6eefa] flex flex-wrap gap-x-7 gap-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm font-semibold text-[#1b2433]">
                  <Icon name="check" className="w-3.5 h-3.5 text-[#0288d1]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: strategy call form */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-[#e1ecf8] p-7 sm:p-8 shadow-[0_30px_70px_-30px_rgba(2,136,209,0.45)]">
              <h2 className="text-2xl font-extrabold text-[#0b1220]">Book Your Free Strategy Call</h2>
              <p className="text-sm text-[#526072] mt-1.5">Tell us about your project. We respond within one business day.</p>
              <form
                className="mt-6 space-y-3.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  openQuoteModal(undefined, form);
                }}
              >
                <input aria-label="Full name" autoComplete="name" placeholder="Full Name*" className={fieldClass} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                <input aria-label="Business email" type="email" autoComplete="email" placeholder="Business Email*" className={fieldClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input aria-label="WhatsApp number" type="tel" autoComplete="tel" placeholder="WhatsApp e.g. +92 300 1234567" className={fieldClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <textarea aria-label="What are we building" rows={3} placeholder="What are we building?*" className={`${fieldClass} resize-none`} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-grad text-white font-bold shadow-lg shadow-[#0288d1]/30 hover:-translate-y-0.5 transition-transform cursor-pointer"
                >
                  Book My Strategy Call
                </button>
              </form>
              <p className="mt-4 flex items-start gap-2 text-xs text-[#526072]">
                <Icon name="lock" className="w-3 h-3 mt-0.5 text-[#0288d1]" />
                Your idea stays confidential. NDA available on request.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Technology marquee */}
      <div className="relative border-t border-[#e6eefa] bg-white/60 py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[...techStackData, ...techStackData].map((tech, i) => (
            <span key={`${tech}-${i}`} className="mx-6 flex items-center gap-2.5 text-sm font-semibold text-[#3b4757]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#03a9f4]" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
