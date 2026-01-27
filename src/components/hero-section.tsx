import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/me.png";
import cv from "../assets/faiqueinaas.pdf";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF4C29]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#334756]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Profile Image with entrance animation */}
        <div
          className={cn(
            "mb-8 md:mt-22 transition-all duration-700 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <div className="relative w-54 h-54 md:w-60 md:h-60 mx-auto mb-6">
            {/* Futuristic hexagon container */}
            <div className="relative w-full h-full">
              {/* Outer glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF4C29] via-[#334756] to-[#FF4C29] rounded-full animate-spin-slow opacity-30"></div>

              {/* Hexagon image container */}
              <div
                className="relative w-full h-full overflow-hidden border-4 border-[#FF4C29]/50 shadow-2xl shadow-[#FF4C29]/20"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <img
                  src={heroImage}
                  alt="Faique Inaas - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#FF4C29]"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#FF4C29]"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#FF4C29]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#FF4C29]"></div>
            </div>
          </div>
        </div>

        {/* Text content with stagger animation */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <p
                className={cn(
                  "text-lg md:text-xl text-white/80 font-light transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "100ms" }}
              >
                Hi I'm
              </p>
              <h1
                className={cn(
                  "text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FF4C29] via-[#334756] to-[#FF4C29] bg-clip-text text-transparent transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "200ms" }}
              >
                Faique Inaas
              </h1>
              <h2
                className={cn(
                  "text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90 transition-all duration-700 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                I am a Full Stack Developer
              </h2>
            </div>
            <p
              className={cn(
                "text-xl md:text-2xl text-[#FF4C29]/80 font-light transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              Welcome to my DevFolio
            </p>
          </div>

          <p
            className={cn(
              "text-lg md:hidden text-white/60 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            Crafting innovative web experiences with cutting-edge technologies.
            Passionate about creating scalable solutions that push the
            boundaries of what's possible.
          </p>

          {/* Download CV button with animation */}
          <div
            className={cn(
              "items-center justify-center gap-4 mt-8 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <a href={cv} download aria-label="Download CV">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0 px-8 py-3 hover:scale-105 transition-transform duration-300"
              >
                Download CV
              </Button>
            </a>
          </div>

          {/* Social links with stagger animation */}
          <div
            className={cn(
              "flex items-center justify-center space-x-6 mt-8 transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "700ms" }}
          >
            <a
              href="https://github.com/FaiqueMZM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF4C29] p-2 hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-6 h-6" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/faique-inaas-mzm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF4C29] p-2 hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>
            <a
              href="mailto:faiqueinaas@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Contact"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF4C29] p-2 hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/40" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

