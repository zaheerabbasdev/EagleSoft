import React from "react";
import { Hero } from "@/src/components/home/Hero";
import { FeatureStrip } from "@/src/components/home/FeatureStrip";
import { CompanyIntro } from "@/src/components/home/CompanyIntro";
import { ServicesPreview } from "@/src/components/home/ServicesPreview";
import { ProjectsPreview } from "@/src/components/home/ProjectsPreview";
import { ProcessSection } from "@/src/components/home/ProcessSection";
import { ImageStrip } from "@/src/components/home/ImageStrip";
import { ProblemsSection } from "@/src/components/home/ProblemsSection";
import { SolutionsPreview } from "@/src/components/home/SolutionsPreview";
import { TechStackShowcase } from "@/src/components/home/TechStackShowcase";
import { WhyEagleSoft } from "@/src/components/home/WhyEagleSoft";
import { Testimonials } from "@/src/components/home/Testimonials";
import { TeamSection } from "@/src/components/home/TeamSection";
import { FaqPreview } from "@/src/components/home/FaqPreview";
import { FollowSection } from "@/src/components/home/FollowSection";
import { CtaSection } from "@/src/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <CompanyIntro />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessSection />
      <ImageStrip />
      <ProblemsSection />
      <SolutionsPreview />
      <TechStackShowcase />
      <WhyEagleSoft />
      <Testimonials />
      <TeamSection />
      <FaqPreview />
      <FollowSection />
      <CtaSection />
    </>
  );
}
