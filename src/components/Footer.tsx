export function Footer() {
  return (
    <footer className="relative py-12 mt-16 border-t border-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary/50 animate-pulse" />
            <span className="font-display text-lg uppercase tracking-wider text-muted-foreground">
              Font<span className="text-primary">_</span>Directory
            </span>
          </div>

          {/* Center stats */}
          <div className="flex items-center gap-8 text-xs font-mono text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-display text-primary">30</div>
              <div className="uppercase tracking-wider">厂商</div>
            </div>
            <div className="w-px h-8 bg-muted/50" />
            <div className="text-center">
              <div className="text-2xl font-display text-accent">10+</div>
              <div className="uppercase tracking-wider">国家</div>
            </div>
            <div className="w-px h-8 bg-muted/50" />
            <div className="text-center">
              <div className="text-2xl font-display text-secondary">100+</div>
              <div className="uppercase tracking-wider">年历史</div>
            </div>
          </div>

          {/* Right side */}
          <div className="text-xs font-mono text-muted-foreground/50">
            <span className="text-primary">[ </span>
            SYSTEM ONLINE
            <span className="text-primary"> ]</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-muted/20 text-center">
          <p className="text-xs font-mono text-muted-foreground/30">
            &gt; DESIGNED FOR TYPOGRAPHY ENTHUSIASTS &lt;
          </p>
        </div>
      </div>

      {/* Decorative scan effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
}
