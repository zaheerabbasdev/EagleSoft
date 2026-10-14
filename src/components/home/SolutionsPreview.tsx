"use client";

import React, { useState } from "react";
import { interactivePreviewsData } from "@/src/config/home";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

/** Dark rounded feature band with solution tabs (matches the reference "feature" block). */
export function SolutionsPreview() {
  const [activeId, setActiveId] = useState(interactivePreviewsData[0].id);
  const { openQuoteModal } = useQuoteModal();
  const active = interactivePreviewsData.find((p) => p.id === activeId) ?? interactivePreviewsData[0];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <Container>
        <div className="navy-band rounded-[32px] overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
          <div role="tablist" aria-label="Solution categories" className="flex flex-wrap gap-2.5 mb-10">
            {interactivePreviewsData.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="solution-panel"
                  onClick={() => setActiveId(item.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                    selected ? "bg-blue-grad text-white" : "bg-white/[0.07] text-white/75 hover:bg-white/[0.12] border border-white/10"
                  }`}
                >
                  <Icon name={item.icon} className="w-3.5 h-3.5" />
                  {item.tabLabel}
                </button>
              );
            })}
          </div>

          <div
            key={active.id}
            id="solution-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center fade-in"
          >
            <div className="lg:col-span-7">
              <span className="eyebrow-line mb-4">{active.badgeText}</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mt-1">{active.headline}</h2>
              <p className="mt-4 text-base sm:text-[17px] leading-relaxed">{active.summary}</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {active.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
                    <Icon name="check" className="w-3.5 h-3.5 text-[#4fc3f7]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="accent" onClick={() => openQuoteModal(active.tabLabel)} icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}>
                  Request a Solution Quote
                </Button>
                <Button href="/solutions" variant="outline-white">
                  View All Solutions
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <div className="font-display text-4xl font-extrabold text-blue-grad">{active.stats.value}</div>
                <div className="mt-1 text-sm text-white/70">{active.stats.label}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <div className="font-display text-4xl font-extrabold text-blue-grad">100%</div>
                <div className="mt-1 text-sm text-white/70">Source code ownership at handover</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <div className="font-display text-4xl font-extrabold text-blue-grad">Weekly</div>
                <div className="mt-1 text-sm text-white/70">Working demos during development</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
