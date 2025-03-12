
import { FC } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}) => {
  return (
    <div className={cn(
      "mb-12 relative",
      centered && "flex flex-col items-center text-center",
      className
    )}>
      <div className="relative">
        <AnimatedText
          text={title}
          className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight relative z-10",
            titleClassName
          )}
          animation="fade-in"
        />
        <div className="absolute -bottom-3 left-0 right-0 h-3 bg-accent/10 -z-10 transform -skew-x-12" />
      </div>
      
      {subtitle && (
        <AnimatedText
          text={subtitle}
          delay={150}
          className={cn(
            "text-muted-foreground mt-3 max-w-xl",
            subtitleClassName
          )}
          animation="fade-in"
        />
      )}
    </div>
  );
};

export default SectionTitle;
