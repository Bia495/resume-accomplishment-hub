
export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images?: ProjectImage[];
  image?: string; // fallback for legacy data
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}
