"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  period?: string;
  logo?: string;
  children: React.ReactNode;
}

export default function Dialog({
  isOpen,
  onClose,
  title,
  subtitle,
  period,
  logo,
  children,
}: DialogProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1a1a1a]/40 backdrop-blur-sm animate-fade-in" />

      {/* Dialog */}
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
          aria-label="Close dialog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-[#1a1a1a]/10">
          <div className="flex items-start gap-4">
            {logo && (
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#E7E8E6] shadow-sm flex items-center justify-center flex-shrink-0">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex-1 min-w-0 pr-6">
              <h3 className="font-heading text-xl text-[#1a1a1a]">{title}</h3>
              {subtitle && (
                <p className="text-[15px] text-[#4a4a4a] mt-1">{subtitle}</p>
              )}
              {period && (
                <p className="text-sm text-[#6a6a6a] mt-1">{period}</p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-[15px] leading-relaxed text-[#1a1a1a]">
          {children}
        </div>
      </div>
    </div>
  );
}
