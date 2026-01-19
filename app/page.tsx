import PolaroidPhoto from "@/components/PolaroidPhoto";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E7E8E6] px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-12 lg:gap-16">
          {/* Left Column - Photo */}
          <div className="pt-20">
            <PolaroidPhoto />
          </div>
          
          {/* Middle Column - About */}
          <div>
            <AboutSection />
          </div>
          
          {/* Right Column - Work & Education */}
          <div>
            <WorkSection />
            <EducationSection />
          </div>
        </div>
        
        {/* Desktop Bottom Row */}
        <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-12 lg:gap-16 mt-16 pt-8 border-t border-[#1a1a1a]/10">
          {/* Empty first column */}
          <div />
          
          {/* Contact */}
          <div>
            <ContactSection />
          </div>
          
          {/* Quote */}
          <div className="flex items-end">
            <Quote />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-12">
          {/* Photo centered */}
          <div className="flex justify-center pt-8">
            <PolaroidPhoto />
          </div>
          
          {/* About */}
          <AboutSection />
          
          {/* Work */}
          <WorkSection />
          
          {/* Education */}
          <EducationSection />
          
          {/* Contact */}
          <ContactSection />
          
          {/* Quote */}
          <div className="pt-8 border-t border-[#1a1a1a]/10">
            <Quote />
          </div>
        </div>
      </div>
    </main>
  );
}
