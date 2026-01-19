import Image from "next/image";

export default function PolaroidPhoto() {
  return (
    <div className="relative">
      {/* Tape at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 bg-[#d4d4c4]/80 rotate-2 z-10 shadow-sm" />
      
      {/* Polaroid frame */}
      <div className="relative bg-white px-3 pt-6 pb-10 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
        {/* Film info strip */}
        <div className="absolute top-2 left-3 right-3 flex justify-between text-[8px] text-gray-400 font-mono tracking-wider">
          <span>jaaakobs</span>
          <span>1508F</span>
        </div>
        
        {/* Photo container */}
        <div className="relative w-44 h-44 overflow-hidden bg-gray-100">
          <Image
            src="/profile_picture/Jakob Engelhardt.png"
            alt="Jakob Engelhardt"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
        </div>
      </div>
    </div>
  );
}
