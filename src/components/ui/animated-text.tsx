import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const AnimatedText = ({ 
  words, 
  className, 
  interval = 3000 
}: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "block transition-all duration-500 ease-bounce",
          isAnimating 
            ? "text-slide-out transform -translate-y-full opacity-0" 
            : "text-slide-animation transform translate-y-0 opacity-100"
        )}
        key={currentIndex}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};