"use client";

import { useState } from "react";
import Image from "next/image";
import Dialog from "./Dialog";

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  logo: string;
  location: string;
  grade: string;
  description: React.ReactNode;
}

const education: EducationItem[] = [
  {
    school: "ESCP Business School",
    degree: "MSc Business Analytics",
    period: "2019 - 2021",
    logo: "/logos/escp_business_school_logo.jpeg",
    location: "Paris, France",
    grade: "Graduated with distinction (18.54/20)",
    description: (
      <>
        <p>
          Ranked #4 globally in QS World University Rankings for Masters in Business Analytics (2021). Focused heavily on machine learning, data mining, and applying analytics to real business problems.
        </p>
        <p className="mt-3">
          <span className="text-[#6a6a6a] text-sm">Thesis:</span><br />
          Development of a Framework for the Analysis of Brand Authenticity in Social Media — a Text Mining Approach.
        </p>
        <p className="mt-3 text-[#4a4a4a]">
          Board Member of the Big Data Club. Spent time across Paris and Berlin campuses.
        </p>
      </>
    ),
  },
  {
    school: "Rotterdam Business School",
    degree: "BBA International Business",
    period: "2015 - 2019",
    logo: "/logos/rotterdam_business_school_logo.jpeg",
    location: "Rotterdam, Netherlands",
    grade: "Graduated cum laude (8.01/10)",
    description: (
      <>
        <p>
          Part of the Honours Programme — a selective track for high-performing students with additional projects and challenges.
        </p>
        <p className="mt-3">
          <span className="text-[#6a6a6a] text-sm">Thesis:</span><br />
          Development of a Framework for the Ethical use of Artificial Intelligence in the Business Environment.
        </p>
        <p className="mt-3 text-[#4a4a4a]">
          This is where my interest in AI ethics and its intersection with business really started.
        </p>
      </>
    ),
  },
];

export default function EducationSection() {
  const [selectedEducation, setSelectedEducation] =
    useState<EducationItem | null>(null);

  return (
    <section id="education" className="mt-10">
      <h2 className="font-heading text-lg text-[#4a4a4a] mb-6 tracking-wide">
        Education
      </h2>

      <div className="space-y-2 overflow-hidden">
        {education.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedEducation(item)}
            className="flex items-center gap-4 group w-full text-left p-2 rounded-lg hover:bg-[#1a1a1a]/5 transition-colors cursor-pointer focus:outline-none"
          >
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Image
                src={item.logo}
                alt={`${item.school} logo`}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 sm:flex-none sm:min-w-[120px]">
              <span className="font-medium text-[15px] whitespace-nowrap">
                {item.school}
              </span>
              <span className="text-sm text-[#4a4a4a] block">{item.degree}</span>
            </div>

            {/* Dotted line */}
            <div className="flex-1 border-b border-dotted border-[#1a1a1a]/20 mx-2 hidden sm:block" />

            {/* Period */}
            <div className="text-sm text-[#4a4a4a] whitespace-nowrap text-right">
              {item.period}
            </div>
          </button>
        ))}
      </div>

      {/* Dialog */}
      <Dialog
        isOpen={selectedEducation !== null}
        onClose={() => setSelectedEducation(null)}
        title={selectedEducation?.school || ""}
        subtitle={selectedEducation?.degree}
        period={selectedEducation?.period}
        logo={selectedEducation?.logo}
      >
        <div className="space-y-4">
          <p className="text-[#4a4a4a] text-sm">{selectedEducation?.location}</p>
          <div>{selectedEducation?.description}</div>
          <p className="text-[#4a4a4a] mt-4 pt-4 border-t border-[#1a1a1a]/10">
            {selectedEducation?.grade}
          </p>
        </div>
      </Dialog>
    </section>
  );
}
