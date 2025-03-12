
import { skills } from "@/lib/data";
import SectionTitle from "./ui/SectionTitle";
import AnimatedText from "./ui/AnimatedText";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          title="My Skills"
          subtitle="A comprehensive showcase of my technical expertise and proficiencies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <AnimatedText
              key={category.name}
              text=""
              className="neo-card p-6"
              animation="scale-in"
              delay={categoryIndex * 100}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level * 20}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transform origin-left transition-transform duration-1000 ease-apple"
                        style={{ 
                          transform: `scaleX(${skill.level / 5})`,
                          transitionDelay: `${(categoryIndex * 300) + (skillIndex * 100)}ms` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
