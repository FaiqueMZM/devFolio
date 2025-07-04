"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { User, Briefcase, Code, FolderOpen, Mail } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { id: "about", label: "About Me", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "technologies", label: "Technologies", icon: Code },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "technologies",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:flex fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-[#082032]/80 backdrop-blur-md border border-[#FF4C29]/20 rounded-full px-6 py-3">
        <div className="flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300",
                  activeSection === item.id && "text-[#FF4C29] bg-[#FF4C29]/10"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#082032]/80 backdrop-blur-md border border-[#FF4C29]/20 rounded-full px-4 py-2">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "p-3 text-white/70 hover:text-white transition-all duration-300",
                  activeSection === item.id && "text-[#FF4C29] bg-[#FF4C29]/10"
                )}
              >
                <Icon className="w-5 h-5" />
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
