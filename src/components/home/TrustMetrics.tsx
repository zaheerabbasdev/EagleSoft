import React from "react";
import { Container } from "@/src/components/common/Container";
import { trustMetricsData } from "@/src/config/home";

/** Stats band: large gradient numbers separated by thin dividers. */
export function TrustMetrics() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-[#e6eefa] bg-white shadow-[0_20px_50px_-35px_rgba(2,136,209,0.45)] overflow-hidden">
          {trustMetricsData.map((metric, i) => (
            <div
              key={metric.id}
              className={`px-6 py-8 sm:py-10 text-center ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""} border-[#e6eefa]`}
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-grad">{metric.value}</div>
              <div className="mt-2 text-sm font-semibold text-[#526072]">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
