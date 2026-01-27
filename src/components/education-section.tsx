"use client";

import { Badge } from "../components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Software Engineering",
    institution: "University of Staffordshire",
    location: "Staffordshire, United Kingdom",
    period: "2019 - 2023",
    gpa: "67.03/100",
    status: "Completed",
    description:
      "Successfully completed with Second Class: First Division Honours. Gained a strong foundation in computer science and software engineering principles, including software development life cycles, system design, database management, and modern web technologies. Developed practical skills through individual and group projects focused on real-world applications.",
  },
];

export function EducationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden" aria-label="Education section">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute top-20 left-10 w-32 h-32 bg-[#FF4C29]/10 rounded-full blur-3xl transition-opacity duration-1000",
            contentVisible ? "opacity-100 animate-pulse" : "opacity-0"
          )}
        ></div>
        <div
          className={cn(
            "absolute bottom-20 right-10 w-40 h-40 bg-[#334756]/10 rounded-full blur-3xl transition-opacity duration-1000 delay-500",
            contentVisible ? "opacity-100 animate-pulse" : "opacity-0"
          )}
        ></div>
      </div>

      <div className="container mx-auto relative">
        {/* Section Header with animation */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Education Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building knowledge foundations for innovative solutions
          </p>
        </div>

        {/* Main Education Display */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="max-w-6xl mx-auto"
        >
          {/* Current Education */}
          <div className="relative mb-16">
            {education.map((edu, _index) => (
              <div
                key={edu.id}
                className={cn(
                  "relative transition-all duration-700 ease-out",
                  contentVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                )}
              >
                {/* Futuristic Diploma Container */}
                <div className="relative bg-gradient-to-br from-[#2C394B]/30 to-[#334756]/20 backdrop-blur-sm border border-[#FF4C29]/20 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-[#FF4C29]/40 transition-colors duration-300">
                  {/* Animated background grid */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" className="w-full h-full">
                      <defs>
                        <pattern
                          id="eduGrid"
                          width="50"
                          height="50"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 50 0 L 0 0 0 50"
                            fill="none"
                            stroke="#FF4C29"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#eduGrid)" />
                    </svg>
                  </div>

                  {/* Holographic corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-[#FF4C29] opacity-60"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-[#FF4C29] opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-[#FF4C29] opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-[#FF4C29] opacity-60"></div>

                  {/* Main Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#FF4C29] to-[#334756] rounded-full flex items-center justify-center shadow-lg shadow-[#FF4C29]/20">
                          <GraduationCap className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <Badge className="bg-[#FF4C29]/20 text-[#FF4C29] border-[#FF4C29]/30 mb-2">
                            {edu.status}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {edu.degree}
                          </h3>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-2 text-[#FF4C29] mb-2">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          <span className="font-semibold">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Institution and Description */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-[#FF4C29] mb-2">
                        {edu.institution}
                      </h4>
                      <p className="text-white/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-20 right-20 w-2 h-2 bg-[#FF4C29] rounded-full opacity-60 animate-ping"></div>
                    <div className="absolute bottom-20 left-20 w-3 h-3 bg-[#334756] rounded-full opacity-40 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

