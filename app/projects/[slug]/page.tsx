import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/src/config/projects";
import { Container } from "@/src/components/common/Container";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";
import { CtaSection } from "@/src/components/home/CtaSection";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Software Architecture`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="bg-white">
      {/* Project Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f0f9ff]/70 to-white border-b border-gray-100">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#0288d1]">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-[#0288d1]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-[#0288d1]">{project.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b3e5fc]/50 text-[#0288d1] text-xs font-bold uppercase tracking-wider mb-4 border border-[#b3e5fc]">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.systemType}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#212121] tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Specs & Architecture */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-2">
                  The Operational Challenge
                </span>
                <h2 className="text-2xl font-bold text-[#212121] mb-4">
                  Problem Context & System Demands
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Architectural Solution */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1] block mb-2">
                  Technical Implementation
                </span>
                <h2 className="text-2xl font-bold text-[#212121] mb-4">
                  System Architecture & Data Strategy
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-6">
                  Core Architectural Capabilities
                </h2>
                <div className="space-y-3">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 text-sm text-gray-800"
                    >
                      <Icon
                        name="check-circle"
                        className="w-4 h-4 text-[#0288d1] mt-0.5 flex-shrink-0"
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Spec Box */}
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200/90 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-2">
                    System Classification
                  </h3>
                  <div className="p-3 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-gray-800">
                    {project.systemType}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-3">
                    Target Architectural Metrics
                  </h3>
                  <div className="space-y-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 rounded-lg bg-white border border-gray-200 flex items-center justify-between"
                      >
                        <span className="text-xs text-gray-600">{m.label}</span>
                        <span className="text-xs font-bold text-[#0288d1]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0288d1] mb-2.5">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded bg-white text-gray-800 border border-gray-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-5">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<Icon name="arrow-right" className="w-3.5 h-3.5" />}
                  >
                    Inquire About This Blueprint
                  </Button>
                </div>
              </div>

              {/* Prev / Next Navigation */}
              <div className="p-4 rounded-xl border border-gray-200 flex items-center justify-between text-xs font-semibold text-gray-600">
                {prevProject ? (
                  <Link
                    href={`/projects/${prevProject.slug}`}
                    className="hover:text-[#0288d1] flex items-center gap-1"
                  >
                    <Icon name="arrow-left" className="w-3 h-3" />
                    <span>Previous Project</span>
                  </Link>
                ) : (
                  <span />
                )}

                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="hover:text-[#0288d1] flex items-center gap-1"
                  >
                    <span>Next Project</span>
                    <Icon name="arrow-right" className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Corporate CTA */}
      <CtaSection />
    </div>
  );
}
