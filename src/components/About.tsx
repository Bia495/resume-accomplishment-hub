
import { personalInfo, education } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin, Mail, Phone, Award, FileCheck } from "lucide-react";
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

          <div className="space-y-8">
            {/* Education Section */}
            <div>
              <AnimatedText
                text="Education"
                className="text-xl font-semibold mb-6"
                animation="fade-in"
              />

              <div className="space-y-6">
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

            {/* Qualifications Section */}
            <div>
              <AnimatedText
                text="Professional Qualifications"
                className="text-xl font-semibold mb-6"
                animation="fade-in"
                delay={400}
              />

              <div className="space-y-4">
                <AnimatedText
                  text=""
                  className="neo-card p-6 relative"
                  animation="fade-in"
                  delay={450}
                >
                  <div className="absolute -left-3 -top-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Award size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">CSE Professional Passer</h3>
                    <div className="text-muted-foreground">
                      Civil Service Commission
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      May 2024
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Successfully passed the Career Service Examination - Professional Level, demonstrating competency in public service.
                    </p>
                  </div>
                </AnimatedText>

                <AnimatedText
                  text=""
                  className="neo-card p-6 relative"
                  animation="fade-in"
                  delay={500}
                >
                  <div className="absolute -left-3 -top-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <FileCheck size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">TESDA National Certificate II</h3>
                    <div className="text-muted-foreground">
                      Computer Systems Servicing (CSS)
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Technical Education and Skills Development Authority
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      Certified in computer hardware installation, configuration, and troubleshooting of computer systems and networks.
                    </p>
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
