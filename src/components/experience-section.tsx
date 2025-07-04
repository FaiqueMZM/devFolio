import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects from conception to deployment. Collaborated with design and product teams to deliver exceptional user experiences.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Docker", "GraphQL"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Developed responsive web applications and landing pages. Optimized performance and implemented modern frontend practices.",
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Jest"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF4C29] via-[#334756] to-[#FF4C29] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
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
                  <Card className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-300 relative">
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
                        <Briefcase className="w-5 h-5 text-[#FF4C29]" />
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
                            <MapPin className="w-4 h-4" />
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
                            className="bg-[#334756]/30 text-[#334756] border-[#334756]/20 hover:bg-[#334756]/50 hover:text-white transition-colors"
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
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period.split(" - ")[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 bottom-0 w-8 h-8 bg-gradient-to-br from-[#FF4C29] to-[#334756] rounded-full border-4 border-[#082032] shadow-lg shadow-[#FF4C29]/30">
            <div className="absolute inset-2 bg-[#082032] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
