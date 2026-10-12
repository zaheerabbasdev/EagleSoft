import React from "react";
import { Container } from "@/src/components/common/Container";
import { trustMetricsData } from "@/src/config/home";

interface TrustMetricsProps {
  /** "dark" renders inside a dark brand band without its own section padding */
  variant?: "light" | "dark";
}

function StatsGrid({ dark }: { dark: boolean }) {
  return (
    <div
      className={`reveal grid grid-cols-2 lg:grid-cols-4 rounded-3xl border overflow-hidden ${
        dark ? "border-white/15 bg-white/[0.03]" : "border-[#e7e5ef] bg-white"
      }`}
    >
      {trustMetricsData.map((metric, i) => (
        <div
          key={metric.id}
          className={`px-4 py-8 sm:py-10 text-center ${
            i > 0 ? (dark ? "lg:border-l border-white/15" : "lg:border-l border-[#e7e5ef]") : ""
          } ${i % 2 === 1 ? (dark ? "border-l border-white/15" : "border-l border-[#e7e5ef]") : ""} ${
            i > 1 ? (dark ? "border-t lg:border-t-0 border-white/15" : "border-t lg:border-t-0 border-[#e7e5ef]") : ""
          }`}
        >
          <div className={`font-display text-4xl sm:text-5xl font-bold leading-none ${dark ? "text-gradient-soft" : "text-gradient"}`}>
            {metric.value}
          </div>
          <div className={`mt-3 text-sm font-semibold ${dark ? "text-white/80" : "text-[#475569]"}`}>{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

export function TrustMetrics({ variant = "light" }: TrustMetricsProps) {
  if (variant === "dark") return <StatsGrid dark />;
  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        <StatsGrid dark={false} />
      </Container>
    </section>
  );
}
