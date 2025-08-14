import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FloatingNavProps {
  className?: string;
}

export const FloatingNav = ({ className }: FloatingNavProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-smooth",
        scrolled ? "glass-strong" : "glass",
        "rounded-full px-6 py-3 min-w-[300px]",
        className
      )}
    >
      <div className="flex items-center justify-center space-x-8">
        <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
          MedSafe
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a
            href="#home"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#analysis"
            className="text-text-muted hover:text-primary transition-colors"
          >
            Analysis
          </a>
          <a
            href="#about"
            className="text-text-muted hover:text-primary transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};