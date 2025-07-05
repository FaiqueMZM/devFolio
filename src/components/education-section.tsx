"use client";

import { Badge } from "../components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

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
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4C29]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#334756]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Education Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building knowledge foundations for innovative solutions
          </p>
        </div>

        {/* Main Education Display */}
        <div className="max-w-6xl mx-auto">
          {/* Current Education */}
          <div className="relative mb-16">
            {education.map((edu, _index) => (
              <div key={edu.id} className="relative">
                {/* Futuristic Diploma Container */}
                <div className="relative bg-gradient-to-br from-[#2C394B]/30 to-[#334756]/20 backdrop-blur-sm border border-[#FF4C29]/20 rounded-3xl p-8 md:p-12 overflow-hidden">
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
                          <GraduationCap className="w-8 h-8 text-white" />
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
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60">
                          <MapPin className="w-4 h-4" />
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
