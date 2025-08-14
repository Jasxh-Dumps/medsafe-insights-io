import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { UserInfoModal } from "@/components/user-info-modal";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const animatedWords = [
    "Safe",
    "Informed",
    "Protected",
    "Confident",
    "Secure"
  ];

  return (
    <>
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden grain"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--background) / 0.95), hsl(var(--background-secondary) / 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Keep Your Medicine</span>
              <br />
              <AnimatedText 
                words={animatedWords}
                className="bg-gradient-primary bg-clip-text text-transparent"
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Understand your medication's composition, risks, and interactions. 
              Empower yourself with comprehensive medicine safety analysis.
            </p>
            
            <div className="pt-8">
              <Button
                onClick={() => setShowModal(true)}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 
                           transform hover:scale-105 px-8 py-4 text-lg font-semibold
                           rounded-full border border-primary/20"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      <UserInfoModal 
        open={showModal} 
        onOpenChange={setShowModal}
      />
    </>
  );
};