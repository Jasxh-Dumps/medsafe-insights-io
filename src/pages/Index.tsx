import { FloatingNav } from "@/components/ui/floating-nav";
import { HeroSection } from "@/components/hero-section";
import { ResultsSection } from "@/components/results-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <FloatingNav />
      <HeroSection />
      <ResultsSection />
    </div>
  );
};

export default Index;