import React from "react";
import Link from "next/link";
import { solutionsData } from "@/src/config/solutions";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";

export function SolutionsPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f5fb]">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Software Built for"
          highlight="Your Industry"
          description="Proven solutions for retail, e-commerce, restaurants, logistics, service businesses and growing enterprises."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.slice(0, 6).map((sol, i) => (
            <article key={sol.id} className={`reveal reveal-delay-${(i % 3) + 1} group card card-hover p-7 flex flex-col`}>
              <span className="icon-tile icon-tile-fill mb-6">
                <Icon name={sol.iconName} className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2.5">{sol.title.replace("Solutions for ", "")}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5">{sol.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-7 flex-1 content-start">
                {sol.keyModules.map((m) => (
                  <span key={m} className="tag-pill">
                    {m}
                  </span>
                ))}
              </div>
              <Link
                href={`/solutions#${sol.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6d28d9] hover:text-[#4c1d95]"
              >
                View Solution
                <Icon name="arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
