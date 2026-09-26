import React from "react";
import { Container } from "@/src/components/common/Container";
import { Icon } from "@/src/components/common/Icon";
import { trustMetricsData } from "@/src/config/home";

export function TrustMetrics() {
  return (
    <section className="relative py-10 sm:py-12 bg-white border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustMetricsData.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#b3e5fc]/50 text-[#0288d1] flex items-center justify-center flex-shrink-0">
                <Icon name={metric.icon} className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0288d1] leading-none">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
