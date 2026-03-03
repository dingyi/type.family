import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <HeroSection />
        <main>
          <p className="text-muted-foreground text-xs">即将推出</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default About;
