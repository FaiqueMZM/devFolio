import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useScrollAnimation, useStaggerAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Syntax Erreur",
    location: "Mumbai, India",
    period: "2025 Jul - Present",
    description:
      "Contributing to ongoing web and mobile projects by building robust frontends in React and maintaining scalable backends with Node.js. Collaborating across teams to deliver features end-to-end, improve performance, and ensure code quality through clean architecture and best practices.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "AWS",
      "Docker",
      "REST APIs",
      "Flutter",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Syntax Erreur",
    location: "Mumbai, India",
    period: "2025 Jan - 2025 Jun",
    description:
      "Assisted in full-stack development of multiple client-facing web and mobile applications, contributing to both frontend and backend features. Worked closely with design and product teams to implement responsive UI components and build REST APIs for real-world use cases.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "AWS",
      "Docker",
      "REST APIs",
    ],
  },
];

export function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: timelineRef, visibleItems } = useStaggerAnimation(experiences.length, 200, { threshold: 0.1 });

  return (
    <section id="experience" className="pb-20 px-4 relative" aria-label="Experience section">
      <div className="container mx-auto">
        {/* Section Header with animation */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div ref={timelineRef as React.RefObject<HTMLDivElement>} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF4C29] via-[#334756] to-[#FF4C29] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className={cn(
                  "relative transition-all duration-700 ease-out",
                  visibleItems[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 bg-[#FF4C29] rounded-full border-4 border-[#082032] shadow-lg shadow-[#FF4C29]/50 z-10">
                  <div className="absolute inset-0 bg-[#FF4C29] rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-300 relative hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF4C29]/10">
                    {/* Arrow pointing to timeline */}
                    <div
                      className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                        index % 2 === 0
                          ? "md:right-0 md:border-l-8 md:border-l-[#2C394B] md:translate-x-full hidden md:block"
                          : "md:left-0 md:border-r-8 md:border-r-[#2C394B] md:-translate-x-full hidden md:block"
                      }`}
                    ></div>

                    <CardContent className="p-6">
                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-[#FF4C29]/20 text-[#FF4C29] border-[#FF4C29]/30 text-sm font-semibold">
                          {exp.period}
                        </Badge>
                        <Briefcase className="w-5 h-5 text-[#FF4C29]" aria-hidden="true" />
                      </div>

                      {/* Job Title & Company */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/60">
                          <span className="font-semibold text-[#FF4C29]">
                            {exp.company}
                          </span>
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-[#334756]/30 text-white/70 border-[#334756]/20 hover:bg-[#334756]/50 hover:text-[#FF4C29] cursor-pointer transition-colors "
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Date (Mobile) */}
                <div className="md:hidden absolute left-0 top-0 -translate-x-full pr-4">
                  <div className="flex items-center text-[#FF4C29] text-sm font-semibold">
                    <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                    {exp.period.split(" - ")[0]}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Timeline End */}
          <div className="absolute left-[18px] md:left-1/2 md:transform md:-translate-x-1/2 -bottom-1 w-8 h-8 bg-gradient-to-br from-[#FF4C29] to-[#334756] rounded-full border-4 border-[#082032] shadow-lg shadow-[#FF4C29]/30">
            <div className="absolute inset-2 bg-[#082032] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

