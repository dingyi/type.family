import { HeroSection } from "@/components/HeroSection";
import { FoundryTable } from "@/components/FoundryTable";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <HeroSection />
        <main>
          <FoundryTable />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
