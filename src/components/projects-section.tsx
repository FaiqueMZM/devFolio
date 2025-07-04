import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Business intelligence platform that uses machine learning to provide insights and predictions from business data.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Python", "TensorFlow", "FastAPI", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Express.js", "Redis", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#2C394B]/30 border-[#334756]/30 backdrop-blur-sm hover:bg-[#2C394B]/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>

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

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#FF4C29]/30 text-white hover:bg-[#FF4C29]/10 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
