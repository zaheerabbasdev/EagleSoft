import React from "react";
import Link from "next/link";
import { projectsData } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Icon } from "@/src/components/common/Icon";
import { Button } from "@/src/components/common/Button";

export function ProjectsPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Architectural Blueprints"
          title="Featured Software Architectures"
          description="Explore our modular solution blueprints and production architectures engineered for real business demands."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#03a9f4] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Project Card Header Graphic */}
              <div className="p-6 bg-gradient-to-br from-[#f0f9ff] to-[#b3e5fc]/30 border-b border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#0288d1] border border-[#b3e5fc] shadow-2xs">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    {project.systemType}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0288d1] transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.tagline}
                  </p>

                  {/* Architecture Metrics Grid (Array of objects) */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-5 text-center">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xs font-black text-[#0288d1]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="mb-6">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-bold text-[#0288d1] group-hover:text-[#03a9f4] inline-flex items-center gap-1.5"
                  >
                    <span>View Architecture Specs</span>
                    <Icon
                      name="arrow-right"
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Specifications
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/projects" variant="secondary" size="md">
            View All Software Projects & Architecture Blueprints
          </Button>
        </div>
      </Container>
    </section>
  );
}
