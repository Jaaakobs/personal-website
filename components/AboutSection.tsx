"use client";

import { useState } from "react";

export default function AboutSection() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="max-w-md">
      <h2 className="font-heading text-lg text-[#4a4a4a] mb-4 tracking-wide">About</h2>
      
      <p className="text-[15px] mb-6">hi, i&apos;m jakob</p>
      
      <div className="space-y-4 text-[15px] leading-relaxed">
        <p>
          i build products. currently leading product at{" "}
          <a 
            href="https://buena.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buena
            <span className="inline-block ml-1 text-xs">↗</span>
          </a>
          , where we just raised{" "}
          <a 
            href="https://www.buena.com/blog/press-release" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            $58M from Google Ventures
            <span className="inline-block ml-1 text-xs">↗</span>
          </a>
          {" "}to make owning real estate simple.
        </p>
        
        <p>
          before this, i was one of the first employees at{" "}
          <a 
            href="https://www.formelskin.de" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            FORMEL Skin
            <span className="inline-block ml-1 text-xs">↗</span>
          </a>
          {" "}— helped build from pre-seed to €30M+ ARR. i&apos;ve also co-founded two companies and been part of founding teams at others.
        </p>
        
        <p>
          deeply curious about the intersection of AI and health. building tools that genuinely improve people&apos;s lives is what drives me.
        </p>
        
        <p>
          i like thoughtful design, building from scratch, good conversations, finding patterns in chaos, and daily breathwork — i&apos;m a{" "}
          <span 
            className="relative inline-block"
            onMouseEnter={() => setShowCertificate(true)}
            onMouseLeave={() => setShowCertificate(false)}
          >
            <a 
              href="/breathwork/Jakob Engelhardt - Breathwork Certification.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="text-blue-600 border-b border-dashed border-blue-600 hover:border-solid">certified</span>
            </a>
            {" "}breathwork facilitator
            
            {/* Hover card with certificate preview */}
            {showCertificate && (
              <span className="absolute left-0 bottom-full mb-2 z-50 pointer-events-none">
                <span className="block bg-white rounded-lg shadow-xl p-2 border border-[#1a1a1a]/10">
                  <span className="block w-48 h-64 bg-[#E7E8E6] rounded overflow-hidden relative">
                    <iframe
                      src="/breathwork/Jakob Engelhardt - Breathwork Certification.pdf#toolbar=0&navpanes=0"
                      className="w-full h-full border-0 scale-[0.5] origin-top-left"
                      style={{ width: '200%', height: '200%' }}
                      title="Breathwork Certificate"
                    />
                  </span>
                </span>
              </span>
            )}
          </span>
          .
        </p>
        
        <p className="text-[#4a4a4a]">
          i live in berlin, originally from karlsruhe.
        </p>
      </div>
    </section>
  );
}
