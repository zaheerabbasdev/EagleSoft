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
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 page-hero">
        <Container>
          <SectionHeading
            variant="dark"
            eyebrow="Live in the Real World"
            title="Projects We've Built & Delivered"
            description="Real websites and mobile apps we've designed, built, and shipped for clients — plus what's currently in progress."
            align="center"
          />
        </Container>
      </section>

      {/* Projects Grid & Filter */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] ${
                    isActive
                      ? "bg-[#7c3aed] text-[#0f172a] shadow-xs"
                      : "bg-[#f1f0f7] text-[#334155] hover:bg-[#e9e7f2]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isComingSoon = project.status === "In Progress";

              return (
                <article
                  key={project.id}
                  className="group card card-hover overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#f3effe] to-[#eef2ff]">
                    {project.featureImage ? (
                      <Image
                        src={project.featureImage}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="w-20 h-20 rounded-3xl bg-white text-[#7c3aed] shadow-lg flex items-center justify-center">
                          <Icon name={project.icon} className="text-3xl" />
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-[#0f172a] bg-white shadow">
                        {project.category}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow ${
                          isComingSoon ? "bg-amber-500" : "bg-emerald-500"
                        }`}
                      >
                        {isComingSoon ? "In Progress" : "Live"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {project.appIcon && (
                        <Image
                          src={project.appIcon}
                          alt=""
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain rounded-xl flex-shrink-0"
                        />
                      )}
                      <h2 className="text-xl font-bold text-[#0f172a] leading-snug group-hover:text-[#6d28d9] transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-6 flex-1">{project.description}</p>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#6d28d9] hover:text-[#4c1d95]"
                      >
                        {project.category === "Android App" ? "View on Play Store" : "Visit Live Site"}
                        <Icon name="arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-[#64748b]">Coming soon, check back for updates</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#64748b] text-base">No projects currently listed under this category.</p>
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
