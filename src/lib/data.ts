
import { Experience, Project, SkillCategory, SocialLink, Education } from "@/types";

// Replace with your information
export const personalInfo = {
  name: "John Anderson",
  title: "Senior Software Engineer",
  email: "johndoe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate software engineer with over 7 years of experience building elegant, user-centered digital experiences. I specialize in React, TypeScript, and modern frontend architecture. I approach each project with a focus on scalability, accessibility, and clean code.",
  avatar: "/placeholder.svg", // Replace with your photo
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "HTML/CSS", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 3 },
    ],
  },
  {
    name: "Tools & Methods",
    skills: [
      { name: "Git", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "Agile", level: 5 },
      { name: "Testing", level: 4 },
    ],
  },
];

export const experience: Experience[] = [
  {
    title: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "Jan 2021 - Present",
    description: "Leading frontend development for a SaaS platform with over 100,000 users.",
    achievements: [
      "Rebuilt the frontend architecture using React and TypeScript, improving load times by 40%",
      "Led a team of 5 engineers, implementing agile methodologies that increased sprint velocity by 30%",
      "Developed a component library that reduced development time for new features by 50%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "InnovateSoft",
    location: "Portland, OR",
    period: "Mar 2018 - Dec 2020",
    description: "Developed frontend solutions for enterprise clients in the finance sector.",
    achievements: [
      "Built responsive web applications with React, Redux, and SCSS",
      "Implemented automated testing that caught 95% of bugs before production",
      "Collaborated with UX team to implement design systems that improved user satisfaction by 25%",
    ],
  },
  {
    title: "Web Developer",
    company: "Digital Solutions Agency",
    location: "Seattle, WA",
    period: "Jun 2016 - Feb 2018",
    description: "Created custom websites and web applications for clients across various industries.",
    achievements: [
      "Developed over 20 client websites using modern frontend technologies",
      "Optimized website performance, achieving 90+ PageSpeed scores",
      "Implemented SEO best practices that increased organic traffic by 45%",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2014 - 2016",
    description: "Specialized in Human-Computer Interaction and Software Engineering",
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Washington",
    location: "Seattle, WA",
    period: "2010 - 2014",
  },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://project-example.com",
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive system for healthcare providers to manage patient data, appointments, and billing.",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "https://project-example.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "An interactive dashboard displaying real-time data visualizations for business intelligence.",
    technologies: ["React", "D3.js", "WebSockets", "Redis"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "https://project-example.com",
  },
];
