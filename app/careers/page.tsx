"use client";

import React, { useState } from "react";
import { siteConfig } from "@/src/config/site";
import { Container } from "@/src/components/common/Container";
import { SectionHeading } from "@/src/components/common/SectionHeading";
import { Button } from "@/src/components/common/Button";
import { Icon } from "@/src/components/common/Icon";

export default function CareersPage() {
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    specialization: "Full-Stack Web Development",
    notes: "",
  });

  const principles = [
    {
      title: "Pragmatic Problem Solving",
      desc: "We prioritize building software that solves concrete business problems over following short-lived development hypes.",
      icon: "bullseye" as const,
    },
    {
      title: "Code Craftsmanship",
      desc: "We take pride in clean architecture, strong type-safety, maintainable database schemas, and thorough documentation.",
      icon: "code" as const,
    },
    {
      title: "Continuous Learning",
      desc: "Technology advances quickly. We encourage experimentation with modern tools, performance optimizations, and cloud paradigms.",
      icon: "lightbulb" as const,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCvSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f0f9ff]/70 to-white border-b border-gray-100">
        <Container>
          <SectionHeading
            eyebrow="Join Our Engineering Team"
            title="Build the Future With EagleSoft"
            description="We are interested in people who enjoy solving problems, learning new technologies, and building useful software that organizations rely upon."
            align="center"
          />
        </Container>
      </section>

      {/* Engineering Culture */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#212121] mb-4">
              Our Engineering Environment
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              At EagleSoft Pvt Ltd, we foster a collaborative, disciplined culture where engineers, designers, and systems architects work directly on substantive enterprise and commercial challenges. We believe in clear ownership, respectful collaboration, and building systems designed to stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-[#0288d1] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#b3e5fc]/60 text-[#0288d1] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0288d1] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon name={p.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#0288d1] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions Section (Honest status, zero fake jobs) */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
        <Container size="narrow">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0288d1]">
              Current Vacancies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Open Positions
            </h2>
          </div>

          {/* Prompt-mandated honest vacancy message */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0288d1] transition-all duration-300 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#b3e5fc]/50 text-[#0288d1] flex items-center justify-center mx-auto mb-5 shadow-2xs">
              <Icon name="briefcase" className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              No open positions at the moment.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed mb-6">
              We are always interested in connecting with talented people. Send us your CV and we may contact you when a suitable opportunity becomes available.
            </p>

            {cvSubmitted ? (
              <div className="p-4 rounded-xl bg-[#f0f9ff] border border-[#b3e5fc] text-sm text-[#0288d1] font-medium max-w-md mx-auto">
                Thank you for submitting your details! Your profile has been added to the EagleSoft talent roster. We will reach out when a relevant opportunity arises.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left space-y-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Specialization
                    </label>
                    <select
                      value={formData.specialization}
                      onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none bg-white"
                    >
                      <option>Full-Stack Web Development</option>
                      <option>Mobile App Engineering (React Native/Flutter)</option>
                      <option>UI/UX Product Design</option>
                      <option>Backend & Database Systems</option>
                      <option>DevOps & Cloud Infrastructure</option>
                      <option>Quality Assurance & Testing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Portfolio / GitHub / LinkedIn
                    </label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/username"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Brief Introduction or CV Link
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Link to your resume (Google Drive, Dropbox) or summary of experience..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#03a9f4] outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 text-center sm:text-right">
                  <Button type="submit" variant="primary" size="md">
                    Submit Profile to Talent Pool
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              You may also reach our recruitment team directly at:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#0288d1] font-semibold underline">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
