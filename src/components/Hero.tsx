
import { personalInfo, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowDown, Github, Linkedin, Facebook } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background design elements */}
      <div className="absolute top-24 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-24 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center text-center md:text-left">
          <div className="order-2 lg:order-1 flex flex-col items-center justify-center md:items-start md:justify-start">
            <div className="space-y-6 w-full flex flex-col items-center md:items-start">
              <div className="inline-block w-full">
                <AnimatedText
                  text="Hello, I'm"
                  className="text-muted-foreground text-lg mb-2"
                  animation="fade-in-right"
                />
                <AnimatedText
                  text={personalInfo.name}
                  className="text-4xl md:text-6xl font-bold tracking-tighter text-balance"
                  animation="fade-in-right"
                  delay={100}
                />
                <AnimatedText
                  text={personalInfo.title}
                  className="text-2xl md:text-3xl font-medium text-muted-foreground mt-2"
                  animation="fade-in-right"
                  delay={200}
                />
              </div>


              <div className="flex space-x-5 pt-2 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <AnimatedText
                    key={social.platform}
                    text=""
                    className="inline-block"
                    animation="scale-in"
                    delay={400 + index * 100}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-transition inline-flex items-center justify-center rounded-full w-10 h-10 bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground"
                      aria-label={social.platform}
                    >
                      {social.icon === "github" && <Github size={18} />}
                      {social.icon === "linkedin" && <Linkedin size={18} />}
                      {social.icon === "facebook" && <Facebook size={18} />}
                    </a>
                  </AnimatedText>
                ))}
              </div>

              <div className="pt-4 flex justify-center md:justify-start">
                <AnimatedText
                  text=""
                  className="inline-block"
                  animation="fade-in"
                  delay={700}
                >
                  <a
                    href="#about"
                    className="button-transition inline-flex items-center text-sm font-medium px-6 py-3 rounded-full bg-primary text-white hover:bg-accent"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("about")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    More about me
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </AnimatedText>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-white shadow-glass animate-float">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-accent/10 rounded-full blur-2xl transform scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60">
        <span className="text-xs text-muted-foreground mb-2">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-float" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
