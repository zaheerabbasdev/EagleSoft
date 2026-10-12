"use client";

import React from "react";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon, IconName } from "@/src/components/common/Icon";
import { useQuoteModal } from "@/src/context/QuoteModalContext";

const problems: { problem: string; fix: string; icon: IconName }[] = [
  {
    problem: "Rigid templates that don't fit your business",
    fix: "We custom-build around your exact team, workflows and customers.",
    icon: "layers",
  },
  {
    problem: "Confusing jargon and no clear timeline",
    fix: "Plain-English updates, fixed milestones and weekly working demos.",
    icon: "clock",
  },
  {
    problem: "Software that breaks during busy hours",
    fix: "Battle-tested, offline-resilient architecture built for real daily load.",
    icon: "bolt",
  },
  {
    problem: "Vendor lock-in and endless monthly fees",
    fix: "You own 100% of your source code and your database.",
    icon: "lock",
  },
  {
    problem: "Spreadsheets and paperwork slowing your team down",
    fix: "Automated, centralised business software that replaces manual work.",
    icon: "document",
  },
];

export function ProblemsSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Common Problems"
          title="Is Your Business Facing"
          highlight="These Problems?"
          description="Most teams come to us after generic software or agencies let them down. Here is how we fix it."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <button
              key={item.problem}
              type="button"
              onClick={() => openQuoteModal(undefined, { description: `We're dealing with: ${item.problem}.` })}
              className={`reveal group card card-hover p-5 sm:p-6 flex items-center gap-4 sm:gap-5 text-left cursor-pointer ${
                i === problems.length - 1 && problems.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <span className="w-12 h-12 rounded-2xl bg-[#eef2ff] text-[#2563eb] flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-base sm:text-lg font-bold text-[#0f172a]">{item.problem}</span>
                <span className="block mt-1 text-sm text-[#64748b] leading-relaxed">{item.fix}</span>
              </span>
              <Icon name="arrow-right" className="w-4 h-4 text-[#7c3aed] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
