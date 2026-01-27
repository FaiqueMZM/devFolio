import { Card, CardContent } from "../components/ui/card";
import { Code, Rocket, Users, Zap } from "lucide-react";
import { useScrollAnimation, useStaggerAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

const highlights = [
  {
    icon: Code,
    title: "Clean Architecture",
    description: "Writing modular, scalable code with proven patterns",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Building fast, responsive interfaces with efficient state handling",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Actively contributing in agile teams via code reviews & sprint planning",
  },
  {
    icon: Zap,
    title: "Tech Exploration",
    description:
      "Keeping up with frameworks like Next.js, Prisma & modern dev tools",
  },
];

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, visibleItems } = useStaggerAnimation(highlights.length, 150, { threshold: 0.1 });

  return (
    <section id="about" className="py-20 px-4 relative" aria-label="About me section">
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
            About Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with a love for creating digital
            experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content with animation */}
          <article
            ref={contentRef as React.RefObject<HTMLElement>}
            className={cn(
              "space-y-6 text-center transition-all duration-700 ease-out",
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <p className="text-white/80 text-lg leading-relaxed">
              Dynamic and detail-oriented Full Stack Developer with a BEng
              (Hons) in Software Engineering, now contributing to innovative web
              and mobile solutions at Syntax Erreur. Skilled in Java,
              JavaScript, TypeScript, Node.js, React.js, and AWS, with a strong
              foundation in RESTful APIs, cloud technologies, and agile
              development methodologies.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              I specialize in modern web and mobile technologies and love
              working on projects that challenge me to grow. When I'm not
              coding, you'll find me exploring new technologies, contributing to
              open source, or mentoring aspiring developers.
            </p>
          </article>

          {/* Highlight cards with stagger animation */}
          <div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={cn(
                    "bg-[#2C394B]/30 border-[#FF4C29]/30 backdrop-blur-sm hover:bg-[#2C394B] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#FF4C29]/10",
                    visibleItems[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-[#FF4C29] mx-auto mb-3" aria-hidden="true" />
                    <h3 className="text-white font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

