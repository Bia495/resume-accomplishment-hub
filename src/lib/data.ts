
import { Experience, Project, SkillCategory, SocialLink, Education } from "@/types";

// Replace with your information
export const personalInfo = {
  name: "Mico Banzuela",
  title: "Software/Web Backend Developer",
  email: "micobanzuela30@gmail.com",
  phone: "+63 951 125 9018",
  location: "Legazpi City, Albay, Philippines",
  bio: "Passionate web/software developer and Computer Science graduate from Bicol University College of Science with exceptional foundational knowledge in web and system development. I specialize in creating robust, scalable applications using modern technologies and best practices.",
  avatar: "/placeholder.png", // Replace with your photo
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Bia495",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/oh.yeahnoicee",
    icon: "facebook",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 3 },
      { name: "TypeScript", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "PostgreSQL", level: 3 },
      { name: "TypeScript", level: 4 },
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
    title: "(INTERN) Backend Developer - SCRUM Master",
    company: "Quanby Solutions Inc.",
    location: "Legazpi, Albay",
    period: "October 2024 - May 2025",
    description: "Backend developer and also a SCRUM master for the Business Management System project.",
    achievements: [
      "Succesfully built a functional Business Managing System with 7 different user-based role accounts.",
      "Rapid deployment, a 5 member team comprised each with specific roles",
      "100% user-friendly and easy to use software",
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
    degree: "Bachelor of Science in Computer Science",
    institution: "Bicol University College of Science",
    location: "Legazpi City, Albay, Philippines",
    period: "2020 - 2025",
    description: "Graduated with exceptional foundational knowledge in web and system development, software engineering principles, and modern programming methodologies",
  },
];

export const projects: Project[] = [
  {
    title: "Business Management System",
    description: "A centralized platform designed to streamline, digitize, and automate business operations, primarily focused on business permit applications, processing, and compliance monitoring.",
    technologies: ["Angular", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://quanby-bms.web.app/regulatory/dashboard",
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
