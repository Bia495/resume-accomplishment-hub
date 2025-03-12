
import { experience } from "@/lib/data";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import AnimatedText from "./ui/AnimatedText";

const Experience = () => {
  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and career achievements"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-muted" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-6 rounded-full border-4 border-white bg-accent z-10" />

                <div
                  className={`${
                    index % 2 === 0 ? "md:text-right" : "md:order-1"
                  }`}
                >
                  <AnimatedText
                    text=""
                    animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
                    className="neo-card p-6"
                  >
                    <h3 className="font-semibold text-lg flex items-center md:justify-end gap-2">
                      {index % 2 !== 0 && (
                        <Briefcase size={18} className="text-accent" />
                      )}
                      {job.title}
                      {index % 2 === 0 && (
                        <Briefcase size={18} className="text-accent" />
                      )}
                    </h3>
                    <div className="text-muted-foreground">
                      {job.company}, {job.location}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {job.period}
                    </div>
                  </AnimatedText>
                </div>

                <div
                  className={`${
                    index % 2 === 0 ? "md:order-1" : ""
                  }`}
                >
                  <AnimatedText
                    text=""
                    animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                    className="neo-card p-6"
                    delay={200}
                  >
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 text-accent flex-shrink-0"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
