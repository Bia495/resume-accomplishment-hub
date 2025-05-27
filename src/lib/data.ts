
import { Experience, Project, SkillCategory, SocialLink, Education } from "@/types";

// Replace with your information
export const personalInfo = {
  name: "Mico Banzuela",
  title: "Software/Web Backend Developer",
  email: "micobanzuela30@gmail.com",
  phone: "+63 951 125 9018",
  location: "Legazpi City, Albay, Philippines",
  bio: "Passionate web/software developer and Computer Science graduate from Bicol University College of Science with exceptional foundational knowledge in web and system development. I specialize in creating robust, scalable applications using modern technologies and best practices.",
  avatar: "/Main_photo.png",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Bia495",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/mico-banzuela-388203368/",
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
    title: "OJT Web-Backend Developer",
    company: "Quanby Solutions Inc.",
    location: "Legazpi, Albay",
    period: "June-July 2024",
    description: "Foundation for web development using angular, typescript, tailwind CSS, and postgreSQL for Database Management.",
    achievements: [
      "Backend and assistant database developer for the lead web appproject entitled “Human Resource Information System",
    ],
  },
  {
    title: "Freelancer",
    company: "Self-employed",
    location: "Albay",
    period: "2023-present",
    description: "Freelance repairman and encoder, AI Backend and other ML projects.",
    achievements: [
      "Specialized in AI Backend and Machine Learning projects.",
      "Freelance projects developing AI models, particularly for classmates' theses.",
      "Project accomplishments: Volcanews NLP-GPT 2 model, Pest detection using AI image processing.",
      "Freelancing in repairing software defects for phones, laptops, and system cleanups.",
      "Handled various encoding tasks such as data encoding.",
      "Worked on thesis commissions as part-time work.",
    ],
  },
  {
    title: "Data annotator",
    company: " Lifewood Data Technology Ltd.",
    location: "Legazpi, Albay",
    period: "2022-2023",
    description: " Part time data encoder",
    achievements: [
      "Encoded and recorded various client requests, including  International events, Genealogy files, and Karaoke song records",
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
    image: "bms-dashboard.png",
    link: "https://quanby-bms.web.app/regulatory/dashboard",
  },
  {
    title: "Talk-twah: your personal AI voice coaching assistant",
    description: "An AI-Natural Language Processing model applied with Deep Reinforcement Learning for speech rate and emotion feedback.",
    technologies: ["Python", "NLP", "Reinforcement Learning", "React"],
    image: "talktwah.jpg",
    link: "https://guthib.com",
  },
  {
    title: "Pestifier",
    description: "An AI-Image processing mobile app for detecting pests in crops.",
    technologies: ["Python", "CNN", "Java", "Agile"],
    image: "/ic_launchers-playstore.png",
    link: "https://r.mtdv.me/videos/yeah",
  },
];
