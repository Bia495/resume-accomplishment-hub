
import { personalInfo } from "@/lib/data";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-sm mt-2 text-muted-foreground max-w-xs">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <nav className="flex flex-wrap justify-center mb-4 gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white button-transition"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <p className="text-xs text-white/60">
              &copy; {year} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
