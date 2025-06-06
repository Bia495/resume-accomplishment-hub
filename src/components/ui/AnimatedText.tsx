
import { FC, useEffect, useRef, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "blur-in" | "scale-in";
  once?: boolean;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  children,
  className,
  delay = 0,
  animation = "fade-in",
  once = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
              entry.target.classList.add(`animate-${animation}`);
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once && !entry.isIntersecting) {
            setIsVisible(false);
            entry.target.classList.remove(`animate-${animation}`);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animation, delay, once, isVisible]);

  return (
    <div
      ref={textRef}
      className={cn("opacity-0 transition-opacity duration-300", className, {
        "opacity-100": isVisible
      })}
    >
      {children || text}
    </div>
  );
};

export default AnimatedText;
