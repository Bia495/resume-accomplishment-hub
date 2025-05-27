
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Clock } from "lucide-react";
import { SimpleThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find the active section
      const sections = navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time and date
  const formatDateTime = (date: Date) => {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };

    const time = date.toLocaleTimeString('en-US', timeOptions);
    const dateStr = date.toLocaleDateString('en-US', dateOptions);

    return { time, date: dateStr };
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-apple",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-subtle border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            M.B.B
          </a>

          {/* Time and Date Display */}
          <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-accent" />
            <div className="flex flex-col">
              <span className="font-medium">{formatDateTime(currentTime).time}</span>
              <span className="text-xs">{formatDateTime(currentTime).date}</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "text-sm font-medium button-transition relative",
                  activeSection === item.href.substring(1)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </a>
            ))}
          </nav>
          <SimpleThemeToggle />
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <SimpleThemeToggle />
          <button
            type="button"
            className="button-transition rounded-md p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-apple",
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
        <nav className="relative flex flex-col mt-16 p-8 space-y-6">
          {/* Mobile Time and Date Display */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
            <Clock size={16} className="text-accent" />
            <div className="text-center">
              <div className="font-medium">{formatDateTime(currentTime).time}</div>
              <div className="text-xs">{formatDateTime(currentTime).date}</div>
            </div>
          </div>

          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "text-lg font-medium button-transition",
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
