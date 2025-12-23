import { HeroSection } from "@/components/HeroSection";
import { FoundryTable } from "@/components/FoundryTable";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scanlines">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      {/* Ambient glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <HeroSection />
          <main className="py-8">
            <FoundryTable />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
