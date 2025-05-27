
import { personalInfo, socialLinks } from "@/lib/data";
import { MapPin, Mail, Phone, Github, Linkedin, Facebook } from "lucide-react";
import AnimatedText from "../ui/AnimatedText";

const ContactInfo = () => {
  return (
    <div>
      <AnimatedText
        text="Contact Information"
        className="text-xl font-semibold mb-6"
        animation="fade-in"
      />

      <div className="space-y-6">
        <AnimatedText
          className="flex items-center"
          animation="fade-in-right"
          delay={100}
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-medium hover:text-accent button-transition"
            >
              {personalInfo.email}
            </a>
          </div>
        </AnimatedText>

        <AnimatedText
          className="flex items-center"
          animation="fade-in-right"
          delay={200}
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="font-medium hover:text-accent button-transition"
            >
              {personalInfo.phone}
            </a>
          </div>
        </AnimatedText>

        <AnimatedText
          className="flex items-center"
          animation="fade-in-right"
          delay={300}
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
            <MapPin className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">{personalInfo.location}</p>
          </div>
        </AnimatedText>
      </div>

      <AnimatedText
        text="Follow Me"
        className="text-xl font-semibold mt-8 mb-4"
        animation="fade-in"
        delay={400}
      />

      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <AnimatedText
            key={social.platform}
            animation="scale-in"
            delay={500 + index * 100}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-transition inline-flex items-center justify-center rounded-full w-12 h-12 bg-card border border-border shadow-subtle text-foreground hover:bg-accent hover:text-accent-foreground"
              aria-label={social.platform}
            >
              {social.icon === "github" && <Github size={20} />}
              {social.icon === "linkedin" && <Linkedin size={20} />}
              {social.icon === "facebook" && <Facebook size={20} />}
            </a>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
