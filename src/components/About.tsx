
import { personalInfo, education } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import AnimatedText from "./ui/AnimatedText";

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and my background"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <AnimatedText
              text="Who am I?"
              className="text-xl font-semibold"
              animation="fade-in"
            />
            
            <AnimatedText
              text={personalInfo.bio}
              className="text-muted-foreground leading-relaxed"
              animation="fade-in"
              delay={100}
            />

            <div className="space-y-3 pt-2">
              <AnimatedText
                text=""
                className="flex items-center text-muted-foreground"
                animation="fade-in-right"
                delay={200}
              >
                <MapPin size={18} className="mr-2 text-accent" />
                {personalInfo.location}
              </AnimatedText>
              
              <AnimatedText
                text=""
                className="flex items-center text-muted-foreground"
                animation="fade-in-right"
                delay={250}
              >
                <Mail size={18} className="mr-2 text-accent" />
                {personalInfo.email}
              </AnimatedText>
              
              <AnimatedText
                text=""
                className="flex items-center text-muted-foreground"
                animation="fade-in-right"
                delay={300}
              >
                <Phone size={18} className="mr-2 text-accent" />
                {personalInfo.phone}
              </AnimatedText>
            </div>
          </div>

          <div>
            <AnimatedText
              text="Education"
              className="text-xl font-semibold mb-6"
              animation="fade-in"
            />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <AnimatedText
                  key={index}
                  text=""
                  className="neo-card p-6 relative"
                  animation="fade-in"
                  delay={150 * (index + 1)}
                >
                  <div className="absolute -left-3 -top-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                    <GraduationCap size={20} />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <div className="text-muted-foreground">
                      {edu.institution}, {edu.location}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {edu.period}
                    </div>
                    {edu.description && (
                      <p className="mt-2 text-muted-foreground">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
