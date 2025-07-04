"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard. Perfect for remote teams.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description:
      "Business intelligence platform that uses machine learning to provide insights and predictions from business data. Advanced data visualization included.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Python", "TensorFlow", "FastAPI", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking. Supports all major platforms.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Express.js", "Redis", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Crypto Trading Bot",
    description:
      "Automated cryptocurrency trading bot with advanced algorithms, risk management, and real-time market analysis. Supports multiple exchanges.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "FastAPI", "WebSocket", "Docker", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C29]/5 via-transparent to-[#334756]/5"></div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Main Slider Container */}
        <div
          className="relative bg-[#2C394B]/20 backdrop-blur-sm border border-[#334756]/30 rounded-3xl p-8 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-[#FF4C29]/20 shadow-2xl shadow-[#FF4C29]/10">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082032]/80 via-transparent to-transparent"></div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#FF4C29]/90 text-white border-0 px-3 py-1">
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#FF4C29]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Futuristic corner accents */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[#FF4C29] opacity-60"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-[#FF4C29] opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-[#FF4C29] opacity-60"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[#FF4C29] opacity-60"></div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-[#334756]/30 text-[#334756] border-[#334756]/20 hover:bg-[#334756]/50 hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0 px-6"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-[#FF4C29]/30 text-white hover:bg-[#FF4C29]/10 bg-transparent px-6"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#082032]/80 backdrop-blur-sm border border-[#FF4C29]/30 rounded-full flex items-center justify-center text-white hover:bg-[#FF4C29]/20 hover:border-[#FF4C29] transition-all duration-300 group z-10"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-[#FF4C29]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#082032]/80 backdrop-blur-sm border border-[#FF4C29]/30 rounded-full flex items-center justify-center text-white hover:bg-[#FF4C29]/20 hover:border-[#FF4C29] transition-all duration-300 group z-10"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-[#FF4C29]" />
          </button>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center mt-8 gap-6">
          {/* Dot Indicators */}
          <div className="flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#FF4C29] border-[#FF4C29] scale-125"
                    : "bg-transparent border-[#334756] hover:border-[#FF4C29]/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="w-10 h-10 bg-[#2C394B]/50 backdrop-blur-sm border border-[#334756]/30 rounded-full flex items-center justify-center text-white hover:bg-[#FF4C29]/20 hover:border-[#FF4C29] transition-all duration-300"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full max-w-md mx-auto">
          <div className="h-1 bg-[#334756]/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF4C29] to-[#334756] rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / projects.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-white/60">
            <span>
              {currentIndex + 1} of {projects.length}
            </span>
            <span>Featured Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
