"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData, projectCategories } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";

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
            eyebrow="Architectural Showcase"
            title="Software Projects & Solution Blueprints"
            description="Explore our production-grade software architectures, modular system templates, and technical implementations built for modern operational requirements."
            align="center"
          />
        </Container>
      </section>

      {/* Projects Showcase & Filter */}
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
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#03a9f4] transition-all duration-200 overflow-hidden"
              >
                {/* Project Header Spec Strip */}
                <div className="p-6 bg-gradient-to-br from-[#f0f9ff] to-[#b3e5fc]/30 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-[#0288d1] border border-[#b3e5fc]">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 font-semibold">
                      {project.systemType}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#212121] leading-snug">
                    {project.title}
                  </h2>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100 mb-5 text-center">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-xs font-bold text-[#0288d1]">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-gray-500 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-0.5 rounded bg-gray-100 text-gray-700 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-[#0288d1] hover:text-[#03a9f4] inline-flex items-center gap-1.5"
                    >
                      <span>Detailed Architecture Specs</span>
                      <Icon name="arrow-right" className="w-3 h-3" />
                    </Link>
                    <span className="text-[10px] text-gray-400 font-mono">
                      Case Specs
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-base">
                No solution models currently listed under this category.
              </p>
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

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
