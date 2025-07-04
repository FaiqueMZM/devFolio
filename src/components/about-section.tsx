import { Card, CardContent } from "../components/ui/card";
import { Code, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in team environments",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead with latest technologies",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with a love for creating digital
            experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Dynamic and detail-oriented Full Stack Developer with a BEng
              (Hons) in Software Engineering, now contributing to innovative web
              and mobile solutions at Syntax Erreur. Skilled in Java,
              JavaScript, TypeScript, Node.js, React.js, and AWS, with a strong
              foundation in RESTful APIs, cloud technologies, and agile
              development methodologies.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              I specialize in modern web technologies and love working on
              projects that challenge me to grow. When I'm not coding, you'll
              find me exploring new technologies, contributing to open source,
              or mentoring aspiring developers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-[#FF4C29] mx-auto mb-3" />
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
