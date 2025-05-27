
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import AnimatedText from "./ui/AnimatedText";

const Portfolio = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          title="My Projects"
          subtitle="A selection of my recent work and personal projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedText
              key={project.title}
              text=""
              className="group relative overflow-hidden rounded-2xl shadow-subtle"
              animation="scale-in"
              delay={index * 100}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-apple"
                />
              </div>

              <div className="p-6 bg-card border-t border-border">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-transition inline-flex items-center text-xs font-medium text-accent hover:text-accent/80"
                  >
                    View Project
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
