import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "GraphQL", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Supabase", level: 90 },
      { name: "Prisma", level: 87 },
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 82 },
      { name: "Vercel", level: 95 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Technologies
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#FF4C29] mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">
                          {tech.name}
                        </span>
                        <Badge
                          variant="outline"
                          className="border-[#FF4C29]/30 text-[#FF4C29] text-xs"
                        >
                          {tech.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-[#334756]/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#FF4C29] to-[#334756] h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
