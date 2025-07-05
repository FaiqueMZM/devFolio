import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/hero-image.png";
import cv from "../assets/faiqueinaas.pdf";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF4C29]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#334756]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 md:mt-22">
          <div className="relative w-54 h-54 md:w-60 md:h-60 mx-auto mb-6">
            {/* Futuristic hexagon container */}
            <div className="relative w-full h-full">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C29] via-[#334756] to-[#FF4C29] rounded-full animate-spin-slow opacity-20"></div>

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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4C29]/20 to-[#334756]/20"></div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#FF4C29]"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#FF4C29]"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#FF4C29]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#FF4C29]"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-white/80 font-light">
                Hi I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FF4C29] via-[#334756] to-[#FF4C29] bg-clip-text text-transparent">
                Faique Inaas
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90">
                I am a Full Stack Developer
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-[#FF4C29]/80 font-light">
              Welcome to my DevFolio
            </p>
          </div>

          <p className="text-lg md:hidden text-white/60 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative web experiences with cutting-edge technologies.
            Passionate about creating scalable solutions that push the
            boundaries of what's possible.
          </p>

          <div className=" items-center justify-center gap-4 mt-8">
            <a href={cv} download>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0 px-8 py-3"
              >
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-8">
            <a href="https://github.com/FaiqueMZM" target="_blank">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF4C29] p-2"
              >
                <Github className="w-6 h-6" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/faique-inaas-mzm/"
              target="_blank"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF4C29] p-2"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>
            <a href="mailto:faiqueinaas@gmail.com" target="_blank">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF4C29] p-2"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/40" />
        </div>
      </div>
    </section>
  );
}
