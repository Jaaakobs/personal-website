"use client";

import { useState } from "react";
import Image from "next/image";
import Dialog from "./Dialog";

interface WorkItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  location: string;
  type: string;
  description: React.ReactNode;
}

const workHistory: WorkItem[] = [
  {
    company: "Buena",
    role: "Head of Product",
    period: "2024 - present",
    logo: "/logos/buena_logo.jpeg",
    location: "Berlin, Germany",
    type: "Full-time · On-site",
    description: (
      <>
        <p>
          <a
            href="https://www.linkedin.com/in/bisevac/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Din
          </a>{" "}
          convinced me to join Buena and build together with the team. It&apos;s rare to find a company where ambition, speed, and genuine care for the product come together like this.
        </p>
        <p className="mt-3">
          We&apos;re on a mission to make owning real estate simple in Germany — and we just announced our{" "}
          <a
            href="https://www.buena.com/blog/press-release"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Series A of $58M from Google Ventures
          </a>
          .
        </p>
        <p className="mt-3 text-[#4a4a4a]">
          Building with one of the smartest teams I&apos;ve ever worked with — shipping fast, thinking big, and actually having fun doing it.
        </p>
      </>
    ),
  },
  {
    company: "neonova",
    role: "Co-Founder (discontinued)",
    period: "2022 - 2024",
    logo: "/logos/neonova_ai_logo.jpeg",
    location: "Berlin, Germany",
    type: "Full-time · Hybrid",
    description: (
      <>
        <p>
          Co-founded neonova with{" "}
          <a
            href="https://www.linkedin.com/in/florianschaeffner/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Florian Schäffner
          </a>{" "}
          after leaving Circle Health.
        </p>
        <p className="mt-3">
          For 1.5 years, we built custom AI and data solutions for companies including{" "}
          <a
            href="https://www.buena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buena
          </a>
          ,{" "}
          <a
            href="https://www.purish.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Purish
          </a>
          , and{" "}
          <a
            href="https://www.formelskin.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            FORMEL Skin
          </a>
          .
        </p>
        <p className="mt-3">
          We also built our own SaaS startup —{" "}
          <a
            href="https://www.producthunt.com/products/ivie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            ivie
          </a>
          . Found early traction but decided to discontinue to pursue other opportunities.
        </p>
      </>
    ),
  },
  {
    company: "Circle Health",
    role: "Founding Team",
    period: "2023",
    logo: "/logos/circle_health_holistic_logo.jpeg",
    location: "Berlin, Germany",
    type: "Full-time · Hybrid",
    description: (
      <>
        <p>
          Joined the founding team alongside{" "}
          <a
            href="https://www.linkedin.com/in/jannik-tiedemann/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Jannik Tiedemann
          </a>{" "}
          to build a functional medicine and prevention clinic.
        </p>
        <p className="mt-3">
          Completely built the MVP from scratch and helped set up the first practice. Shaped the early product vision and patient experience before moving on to start neonova.
        </p>
        <p className="mt-3 text-[#4a4a4a]">
          Today Circle Health has two practices — one in Berlin and one in Munich.
        </p>
      </>
    ),
  },
  {
    company: "FORMEL Skin",
    role: "Product Lead",
    period: "2020 - 2022",
    logo: "/logos/formelskin_logo.jpeg",
    location: "Berlin, Germany",
    type: "Full-time",
    description: (
      <>
        <p>
          One of the first employees — joined pre-seed when FORMEL Skin was just an idea. Together with co-founder{" "}
          <a
            href="https://www.linkedin.com/in/anton-kononov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Anton Kononov
          </a>
          , I built the product department from scratch.
        </p>
        <p className="mt-3">
          We raised the biggest Series A in healthcare in Europe at the time. Grew from a handful of customers to over 20,000 returning patients, scaled to 100+ people, and reached €30M+ ARR.
        </p>
        <p className="mt-3">
          Started as first Product Manager → Senior Product Analyst → Product Lead, managing a team of PMs, designers, and engineers.
        </p>
        <p className="mt-3 text-[#4a4a4a]">
          Today FORMEL Skin has provided over 2 million treatments and was{" "}
          <a
            href="https://tech.eu/2025/12/04/formel-skin-joins-manual-to-expand-from-skin-health-to-whole-body-care/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            acquired by MANUAL
          </a>
          {" "}in December 2025.
        </p>
      </>
    ),
  },
  {
    company: "Medi-Match",
    role: "Co-Founder (acquired)",
    period: "2018 - 2023",
    logo: "/logos/medimatch logo.png",
    location: "Karlsruhe, Germany",
    type: "Self-employed",
    description: (
      <>
        <p>
          What started as a desperate attempt to help my childhood friend{" "}
          <a
            href="https://www.linkedin.com/in/nils-kienzle-b535011aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Nils Kienzle
          </a>{" "}
          find a spot in medical school turned into a real business.
        </p>
        <p className="mt-3">
          We built an algorithm that predicts admission chances for German medical schools and sold it as a detailed PDF analysis. Helped over 10,000 prospective students reduce their calculation time from hours to minutes.
        </p>
        <p className="mt-3 text-[#4a4a4a]">
          Acquired by nc-rechner in 2023.
        </p>
      </>
    ),
  },
];

export default function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <section id="work">
      <h2 className="font-heading text-lg text-[#4a4a4a] mb-6 tracking-wide">
        Work
      </h2>

      <div className="space-y-2">
        {workHistory.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedWork(item)}
            className="flex items-center gap-4 group w-full text-left p-2 -mx-2 rounded-lg hover:bg-[#1a1a1a]/5 transition-colors cursor-pointer"
          >
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center flex-shrink-0">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 sm:flex-none sm:min-w-[120px]">
              <span className="font-medium text-[15px] whitespace-nowrap">
                {item.company}
              </span>
              <span className="text-sm text-[#4a4a4a] block">{item.role}</span>
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
        isOpen={selectedWork !== null}
        onClose={() => setSelectedWork(null)}
        title={selectedWork?.company || ""}
        subtitle={selectedWork?.role}
        period={`${selectedWork?.period} · ${selectedWork?.type}`}
        logo={selectedWork?.logo}
      >
        <div className="space-y-4">
          <p className="text-[#4a4a4a] text-sm">{selectedWork?.location}</p>
          <div>{selectedWork?.description}</div>
        </div>
      </Dialog>
    </section>
  );
}
