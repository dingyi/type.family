import { useEffect, useState } from "react";

export function HeroSection() {
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative py-16 md:py-24 text-center overflow-hidden">
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 retro-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top label */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-primary/30 text-primary/80">
          <span className="w-2 h-2 bg-primary rounded-full glow-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest">
            全球字体厂商数据库 v2.0
          </span>
        </div>

        {/* Main title */}
        <h1 
          className={`
            font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6
            neon-text-cyan flicker
            ${glitchText ? 'translate-x-[2px] text-secondary' : ''}
            transition-transform duration-75
          `}
        >
          FONT<span className="neon-text-pink">_</span>FOUNDRY
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl neon-text-amber">
            DIRECTORY
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed px-4">
          收录全球 <span className="text-primary">125+</span> 家字体设计公司与工作室
          <br className="hidden sm:block" />
          <span className="text-accent">从经典巨头到新锐独立工作室，一站收录</span>
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-4 text-muted-foreground/50">
          <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <span className="font-mono text-xs">◆</span>
          <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/30" />
    </header>
  );
}
