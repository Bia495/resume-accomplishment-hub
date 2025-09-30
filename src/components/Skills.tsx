
import { skills } from "@/lib/data";
import SectionTitle from "./ui/SectionTitle";
import AnimatedText from "./ui/AnimatedText";
import {
  Code2,
  Server,
  Settings,
  Star,
  Zap,
  Trophy,
  Target,
  Sparkles
} from "lucide-react";

const Skills = () => {
  // Category icons mapping
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'frontend':
        return <Code2 size={24} className="text-accent" />;
      case 'backend':
        return <Server size={24} className="text-accent" />;
      case 'tools & methods':
        return <Settings size={24} className="text-accent" />;
      default:
        return <Target size={24} className="text-accent" />;
    }
  };

  // Get skill level description
  const getSkillDescription = (level: number) => {
    switch (level) {
      case 5:
        return { text: "Expert", icon: <Trophy size={14} />, color: "text-yellow-500" };
      case 4:
        return { text: "Advanced", icon: <Sparkles size={14} />, color: "text-blue-500" };
      case 3:
        return { text: "Intermediate", icon: <Zap size={14} />, color: "text-green-500" };
      case 2:
        return { text: "Beginner+", icon: <Star size={14} />, color: "text-orange-500" };
      case 1:
        return { text: "Beginner", icon: <Target size={14} />, color: "text-gray-500" };
      default:
        return { text: "Learning", icon: <Target size={14} />, color: "text-gray-500" };
    }
  };

  // Generate star rating
  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12}
        className={`${
          index < level
            ? "text-yellow-400 fill-yellow-400"
            : "text-muted-foreground/30"
        } transition-colors duration-300`}
        style={{
          transitionDelay: `${index * 100}ms`
        }}
      />
    ));
  };

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
              className="group neo-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              animation="scale-in"
              delay={categoryIndex * 100}
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-3 p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  {getCategoryIcon(category.name)}
                  <h3 className="text-lg font-semibold">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Skills List - Simplified */}
              <div className="space-y-3">
                {category.skills.map((skill) => {
                  const skillInfo = getSkillDescription(skill.level);
                  return (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-all duration-200"
                    >
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className={`flex items-center gap-1 text-xs font-medium ${skillInfo.color}`}>
                        {skillInfo.icon}
                        {skillInfo.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
