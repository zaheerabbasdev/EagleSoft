"use client";

import React, { useState } from "react";
import Link from "next/link";
import { interactivePreviewsData } from "@/src/config/home";
import { solutionsData } from "@/src/config/solutions";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

export function SolutionsPreview() {
  const [activeTabId, setActiveTabId] = useState<string>("prev-pos");
  const { openQuoteModal } = useQuoteModal();

  const activePreview =
    interactivePreviewsData.find((p) => p.id === activeTabId) ||
    interactivePreviewsData[0];

  return (
    <section className="py-20 sm:py-28 bg-[#f0f9ff]/50 border-b border-[#b3e5fc]/30">
      <Container>
        <SectionHeading
          eyebrow="Proven Solutions"
          title="See How EagleSoft Powers Different Businesses"
          description="Click through our core solution categories below to see the exact features and business results we deliver."
          align="center"
          className="mb-14"
        />

        {/* Interactive Solution Tab Switcher (Array of objects) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {interactivePreviewsData.map((item) => {
            const isSelected = activeTabId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#0288d1] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon name={item.icon} className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#0288d1]"}`} />
                <span>{item.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Interactive Solution Showcase Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#0288d1]/30 shadow-xl mb-16 fade-in">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b3e5fc]/50 text-[#0288d1] text-xs font-bold uppercase tracking-wider">
                <Icon name="check" className="w-3 h-3" />
                <span>{activePreview.badgeText}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {activePreview.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activePreview.summary}
              </p>

              <div className="pt-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePreview.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#03a9f4]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openQuoteModal(activePreview.tabLabel)}
                >
                  Request a Solution Quote
                </Button>
                <Button href="/solutions" variant="secondary" size="md">
                  View Full Architecture
                </Button>
              </div>
            </div>

            {/* Right Metric Box */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#f0f9ff] to-[#b3e5fc]/30 border border-[#b3e5fc] text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#0288d1] text-white flex items-center justify-center mb-4 shadow-sm">
                <Icon name={activePreview.icon} className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-[#0288d1] mb-1">
                {activePreview.stats.value}
              </div>
              <div className="text-xs font-bold text-slate-600">
                {activePreview.stats.label}
              </div>
              <div className="mt-4 pt-3 border-t border-[#b3e5fc]/80 text-[11px] text-slate-500 font-medium">
                Tested under high daily business volume
              </div>
            </div>
          </div>
        </div>

        {/* Additional Industry Solutions Mini-Grid */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-bold text-slate-900">
            More Industry Verticals We Support
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Custom software engineered for specific commercial operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionsData.slice(2, 6).map((sol) => (
            <Link
              key={sol.id}
              href={`/solutions#${sol.id}`}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#03a9f4] hover:-translate-y-1 transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#b3e5fc]/50 text-[#0288d1] flex items-center justify-center mb-3 group-hover:bg-[#0288d1] group-hover:text-white transition-colors">
                <Icon name={sol.iconName} className="w-4 h-4" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#0288d1] transition-colors">
                {sol.title.replace("Solutions for ", "")}
              </h5>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {sol.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
