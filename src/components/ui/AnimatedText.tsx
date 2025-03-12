
import { FC, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "blur-in" | "scale-in";
  once?: boolean;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  animation = "fade-in",
  once = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`);
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove(`animate-${animation}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [animation, delay, once]);

  return (
    <div 
      ref={textRef} 
      className={cn("opacity-0", className)}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
