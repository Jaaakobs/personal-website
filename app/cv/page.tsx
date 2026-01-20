"use client";

import { useRef } from "react";
import Image from "next/image";

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!cvRef.current) return;
    
    // Dynamic import for client-side only
    const html2pdf = (await import("html2pdf.js")).default;
    
    const opt = {
      margin: 0,
      filename: "Jakob_Engelhardt_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(cvRef.current).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 print:py-0 print:bg-white">
      {/* Action buttons - hidden when printing */}
      <div className="fixed top-4 right-4 print:hidden flex gap-2 z-50">
        <button
          onClick={downloadPDF}
          className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg hover:bg-[#333] transition-colors text-sm font-medium"
        >
          Download PDF
        </button>
        <a
          href="/"
          className="bg-[#E7E8E6] text-[#1a1a1a] px-4 py-2 rounded-lg hover:bg-[#d4d4d4] transition-colors text-sm font-medium"
        >
          Back to site
        </a>
      </div>

      {/* CV Container */}
      <div 
        ref={cvRef}
        className="w-[210mm] mx-auto bg-white shadow-lg print:shadow-none"
        style={{ minHeight: "297mm" }}
      >
        <div className="flex" style={{ minHeight: "297mm" }}>
          {/* Left Sidebar */}
          <div className="w-[35%] bg-[#f5f5f5] p-6">
            {/* Photo */}
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/profile_picture/Jakob Engelhardt.png"
                  alt="Jakob Engelhardt"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>

            {/* Profile Section */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b-2 border-[#d4a017]">
                Profile
              </h2>
              <p className="text-xs leading-relaxed text-gray-700">
                Product leader with experience building and scaling products from 0 to 1. 
                Proven track record in co-founding startups and leading product teams at 
                high-growth companies. Passionate about the intersection of AI and health, 
                with expertise in data-driven decision-making and full product lifecycles.
              </p>
            </section>

            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b-2 border-[#d4a017]">
                Education
              </h2>
              
              <div className="mb-4">
                <h3 className="text-xs font-bold">MSc Business Analytics</h3>
                <p className="text-xs text-gray-600">ESCP Business School</p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2019 - 2021</span>
                  <span>Paris, France</span>
                </div>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Graduated with distinction (18.54/20)</li>
                  <li>• Ranked #4 in QS World Rankings</li>
                  <li>• Thesis: Brand Authenticity Analysis via Text Mining</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-bold">BBA International Business</h3>
                <p className="text-xs text-gray-600">Rotterdam Business School</p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2015 - 2019</span>
                  <span>Rotterdam, NL</span>
                </div>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Graduated cum laude (8.01/10)</li>
                  <li>• Honours Programme</li>
                  <li>• Thesis: Ethical AI in Business</li>
                </ul>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b-2 border-[#d4a017]">
                Skills
              </h2>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Product Strategy & Roadmapping</li>
                <li>• 0-to-1 Product Development</li>
                <li>• Data Analytics & BI (BigQuery, DBT)</li>
                <li>• Machine Learning & AI Applications</li>
                <li>• User Research & Customer Discovery</li>
                <li>• Team Leadership & Hiring</li>
                <li>• Agile / Scrum Methodologies</li>
                <li>• Figma, SQL, Python</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b-2 border-[#d4a017]">
                Contact
              </h2>
              <div className="text-xs text-gray-700 space-y-1">
                <p>engelhardt.jak@gmail.com</p>
                <p>linkedin.com/in/jakob-engelhardt</p>
                <p>x.com/jaaakobs</p>
                <p>Berlin, Germany</p>
              </div>
            </section>
          </div>

          {/* Right Content */}
          <div className="w-[65%] p-6">
            {/* Header */}
            <header className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                Jakob Engelhardt
              </h1>
              <p className="text-sm text-gray-600 tracking-wider mt-1">
                Product Management & AI Strategy
              </p>
            </header>

            {/* Experience Section */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4 pb-1 border-b-2 border-[#d4a017]">
                Experience
              </h2>

              {/* Buena */}
              <div className="mb-5 relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#d4a017]" />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold">Buena</h3>
                    <p className="text-xs text-gray-600">Head of Product</p>
                  </div>
                  <span className="text-xs text-gray-500">2024 - present</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Berlin, Germany</p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Leading product development at proptech startup redefining home ownership</li>
                  <li>• Contributed to closing $58M Series A from Google Ventures</li>
                  <li>• Building and scaling product team and processes</li>
                </ul>
              </div>

              {/* neonova */}
              <div className="mb-5 relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#d4a017]" />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold">neonova</h3>
                    <p className="text-xs text-gray-600">Co-Founder</p>
                  </div>
                  <span className="text-xs text-gray-500">2022 - 2024</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Berlin, Germany</p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Co-founded AI and data solutions consultancy</li>
                  <li>• Built data infrastructure and ML products for clients (Buena, FORMEL Skin, Purish)</li>
                  <li>• Launched ivie.so, a B2B SaaS for automated user interviews</li>
                  <li>• Discontinued to join Buena full-time</li>
                </ul>
              </div>

              {/* Circle Health */}
              <div className="mb-5 relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#d4a017]" />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold">Circle Health</h3>
                    <p className="text-xs text-gray-600">Founding Team</p>
                  </div>
                  <span className="text-xs text-gray-500">2023</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Berlin, Germany</p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Built MVP for functional medicine clinic from scratch</li>
                  <li>• Set up first practice and patient experience</li>
                  <li>• Company now operates two practices in Berlin and Munich</li>
                </ul>
              </div>

              {/* FORMEL Skin */}
              <div className="mb-5 relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#d4a017]" />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold">FORMEL Skin</h3>
                    <p className="text-xs text-gray-600">Product Lead → Senior Product Analyst → Product Manager</p>
                  </div>
                  <span className="text-xs text-gray-500">2020 - 2022</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Berlin, Germany</p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Joined as first employee pre-seed, built product department from scratch</li>
                  <li>• Contributed to biggest Series A in European healthcare at the time</li>
                  <li>• Scaled from handful of customers to 20,000+ returning patients, €30M+ ARR</li>
                  <li>• Led 5-person product team (PMs, designers, engineers)</li>
                  <li>• Company acquired by MANUAL in December 2025 (2M+ treatments)</li>
                </ul>
              </div>

              {/* Medi-Match */}
              <div className="mb-5 relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#d4a017]" />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold">Medi-Match</h3>
                    <p className="text-xs text-gray-600">Co-Founder</p>
                  </div>
                  <span className="text-xs text-gray-500">2018 - 2023</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Karlsruhe, Germany</p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Built algorithm to predict medical school admission chances</li>
                  <li>• Helped 10,000+ prospective students with admission planning</li>
                  <li>• Acquired by nc-rechner in 2023</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
