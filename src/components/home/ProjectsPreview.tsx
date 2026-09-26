import React from "react";
import { projectsData } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";

export function ProjectsPreview() {
  const featured = projectsData.filter((p) => p.status === "Live").slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Live in the Real World"
          title="Projects We've Built & Delivered"
          description="Real websites and mobile apps we've designed, built, and shipped for clients."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#03a9f4] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Project Card Header */}
              <div className="p-6 bg-gradient-to-br from-[#f0f9ff] to-[#b3e5fc]/30 border-b border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#0288d1] border border-[#b3e5fc] shadow-2xs">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    Live
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#0288d1] flex-shrink-0 group-hover:bg-[#0288d1] group-hover:text-white transition-colors">
                    <Icon name={project.icon} className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0288d1] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  {project.url && (
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/projects" variant="secondary" size="md">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
