import React from "react";
import Link from "next/link";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { friendlyBenefitsData, friendlyServicesData } from "@/src/config/home";
import { siteConfig } from "@/src/config/site";

export function CompanyIntro() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Software House in Pakistan"
              title="Software Shouldn't Be"
              highlight="Complicated"
              align="left"
              className="mb-6"
            />
            <p className="text-[17px] text-[#526072] leading-relaxed">{siteConfig.description}</p>
            <p className="mt-4 text-[17px] text-[#526072] leading-relaxed">
              Every project runs the same way: a clear scope and transparent quote, weekly demos of working
              software, plain-English communication, and full ownership of your code and data at handover.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {friendlyBenefitsData.map((b) => (
                <div key={b.id} className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-xl bg-[#eff8ff] text-[#0288d1] flex items-center justify-center flex-shrink-0">
                    <Icon name={b.icon} className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-bold text-[#0b1220] text-[15px]">{b.title}</p>
                    <p className="text-sm text-[#526072] mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular services box */}
          <aside className="lg:col-span-5 rounded-3xl bg-[#f3f9ff] border border-[#dcebfa] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0288d1] mb-5">Popular Services</p>
            <ul className="space-y-1">
              {friendlyServicesData.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 py-2.5 text-[15px] font-semibold text-[#0b1220] hover:text-[#0288d1] transition-colors"
                  >
                    <span className="w-2 h-2 rotate-45 bg-[#03a9f4] flex-shrink-0" aria-hidden="true" />
                    {s.title}
                    <Icon name="arrow-right" className="ml-auto w-3 h-3 text-[#94a3b8] group-hover:text-[#0288d1] group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 py-2.5 text-[15px] font-semibold text-[#0b1220] hover:text-[#0288d1] transition-colors"
                >
                  <span className="w-2 h-2 rotate-45 bg-[#03a9f4] flex-shrink-0" aria-hidden="true" />
                  Visit our {siteConfig.address.city} office
                  <Icon name="arrow-right" className="ml-auto w-3 h-3 text-[#94a3b8] group-hover:text-[#0288d1]" />
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
