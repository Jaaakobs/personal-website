export default function AboutSection() {
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
          i like thoughtful design, long runs, building from scratch, good conversations, and finding patterns in chaos.
        </p>
        
        <p className="text-[#4a4a4a]">
          i live in berlin, originally from karlsruhe.
        </p>
      </div>
    </section>
  );
}
