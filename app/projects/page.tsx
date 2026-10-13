"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, projectCategories } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";
import { CtaSection } from "@/src/components/home/CtaSection";
import { Testimonials } from "@/src/components/home/Testimonials";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/70 to-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Live in the Real World"
            title="Projects We've Built & Delivered"
            description="Real websites and mobile apps we've designed, built, and shipped for clients — plus what's currently in progress."
            align="center"
          />
        </Container>
      </section>

      {/* Projects Grid & Filter */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <Container>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a9f4] ${
                    isActive
                      ? "bg-[#0288d1] text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isComingSoon = project.status === "In Progress";

              return (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`relative p-6 border-b border-slate-100 ${
                      project.featureImage
                        ? "min-h-44 flex flex-col justify-between overflow-hidden bg-white"
                        : "bg-gradient-to-br from-[#f0f9ff] to-[#b3e5fc]/30 group-hover:from-[#e1f5fe] group-hover:to-[#b3e5fc]/50 transition-colors duration-300"
                    }`}
                  >
                    {project.featureImage && (
                      <>
                        <Image
                          src={project.featureImage}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
                      </>
                    )}
                    <div className="relative flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white text-[#0288d1] border border-[#b3e5fc] shadow-2xs group-hover:border-[#0288d1] transition-colors">
                        {project.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isComingSoon
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {isComingSoon ? "In Progress" : "Live"}
                      </span>
                    </div>
                    <div className="relative flex items-center gap-3">
                      {project.appIcon ? (
                        <Image
                          src={project.appIcon}
                          alt={`${project.title} app icon`}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain drop-shadow-lg flex-shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#0288d1] flex-shrink-0 group-hover:bg-[#0288d1] group-hover:text-white transition-colors">
                          <Icon name={project.icon} className="w-5 h-5" />
                        </div>
                      )}
                      <h2 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0288d1] transition-colors">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#0288d1] group-hover:text-[#03a9f4] inline-flex items-center gap-1.5"
                        >
                          <span>Visit {project.category === "Android App" ? "on Play Store" : "Live Site"}</span>
                          <Icon
                            name="arrow-right"
                            className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400">
                          Coming soon — check back for updates
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-base">No projects currently listed under this category.</p>
              <Button
                variant="secondary"
                size="sm"
                className="mt-4"
                onClick={() => setActiveCategory("All")}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      <Testimonials />

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
