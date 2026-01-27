"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { cn } from "../lib/utils";

const technologies = [
  {
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    x: 20,
    y: 25,
    category: "frontend",
  },
  {
    name: "Redux",
    icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
    x: 35,
    y: 15,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
    x: 50,
    y: 20,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
    x: 65,
    y: 30,
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    x: 80,
    y: 25,
    category: "frontend",
  },

  {
    name: "Node.js",
    icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    x: 15,
    y: 50,
    category: "backend",
  },
  {
    name: "Express",
    icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
    x: 30,
    y: 45,
    category: "backend",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000",
    x: 45,
    y: 55,
    category: "backend",
  },
  {
    name: "REST API",
    icon: "https://img.icons8.com/?size=100&id=21888&format=png&color=000000",
    x: 75,
    y: 50,
    category: "backend",
  },

  {
    name: "PostgreSQL",
    icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    x: 30,
    y: 70,
    category: "database",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    x: 48,
    y: 80,
    category: "database",
  },
  {
    name: "MySQL",
    icon: "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
    x: 65,
    y: 68,
    category: "database",
  },
  {
    name: "SQLite",
    icon: "https://img.icons8.com/?size=100&id=yjSayFwWHyCo&format=png&color=000000",
    x: 85,
    y: 80,
    category: "database",
  },

  {
    name: "Docker",
    icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
    x: 10,
    y: 35,
    category: "devops",
  },
  {
    name: "AWS",
    icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
    x: 85,
    y: 40,
    category: "devops",
  },
  {
    name: "Vercel",
    icon: "https://www.svgrepo.com/show/354513/vercel-icon.svg",
    x: 90,
    y: 60,
    category: "devops",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    x: 10,
    y: 65,
    category: "devops",
  },
];

const connections = [
  // Frontend connections
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 2],
  [1, 3],

  // Backend connections
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [5, 7],
  [6, 8],

  // Database connections
  [10, 11],
  [11, 12],
  [12, 13],
  [10, 12],

  // Cross-category connections
  [0, 5], // React ↔ Node.js
  [2, 7], // TypeScript ↔ Python
  [4, 9], // Tailwind ↔ REST API
  [1, 6], // Redux ↔ Express
  [3, 8], // Bootstrap ↔ REST API
  [5, 10], // Node.js ↔ PostgreSQL
  [7, 11], // Python ↔ MongoDB
  [9, 13], // REST API ↔ SQLite
  [6, 12], // Express ↔ MySQL

  [14, 5], // Docker ↔ Node.js
  [15, 9], // AWS ↔ REST API
  [16, 1], // Vercel ↔ Redux
];

export function TechnologiesSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animatedConnections, setAnimatedConnections] = useState<Set<number>>(
    new Set()
  );
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomConnection = Math.floor(Math.random() * connections.length);
      setAnimatedConnections((prev) => {
        const newSet = new Set(prev);
        newSet.add(randomConnection);
        setTimeout(() => {
          setAnimatedConnections((current) => {
            const updated = new Set(current);
            updated.delete(randomConnection);
            return updated;
          });
        }, 2000);
        return newSet;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technologies" className="py-20 px-4 relative overflow-hidden" aria-label="Technologies section">
      <div className="container mx-auto">
        {/* Section Header with animation */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="pb-1 text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Technologies
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My interconnected ecosystem of development tools and technologies
          </p>
        </div>

        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "relative w-full h-[600px] md:h-[700px] bg-[#2C394B]/20 rounded-2xl border border-[#334756]/30 backdrop-blur-sm overflow-hidden transition-all duration-700 ease-out",
            containerVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#FF4C29"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF4C29" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#334756" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF4C29" stopOpacity="0.3" />
              </linearGradient>

              <linearGradient
                id="activeConnection"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF4C29" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FF4C29" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF4C29" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {connections.map((connection, index) => {
              const [startIdx, endIdx] = connection;
              const start = technologies[startIdx];
              const end = technologies[endIdx];
              const isAnimated = animatedConnections.has(index);
              const isActive = activeNode === startIdx || activeNode === endIdx;

              if (!start || !end) {
                console.warn(`Invalid connection: [${startIdx}, ${endIdx}]`);
                return null;
              }

              return start && end ? (
                <line
                  key={index}
                  x1={`${start.x}%`}
                  y1={`${start.y}%`}
                  x2={`${end.x}%`}
                  y2={`${end.y}%`}
                  stroke={
                    isAnimated || isActive
                      ? "url(#activeConnection)"
                      : "url(#connectionGradient)"
                  }
                  strokeWidth={isAnimated || isActive ? "2" : "1"}
                  className={`transition-all duration-500 ${
                    isAnimated ? "animate-pulse" : ""
                  }`}
                />
              ) : null;
            })}
          </svg>

          {/* Technology nodes */}
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
                zIndex: 2,
              }}
              onMouseEnter={() => setActiveNode(index)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Node glow effect */}
              <div className="absolute inset-0 bg-[#FF4C29]/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Main node */}
              <div
                className={`
                relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 
                bg-gradient-to-br from-[#2C394B] to-[#334756] 
                border-[#FF4C29]/50 shadow-lg shadow-[#FF4C29]/20
                flex items-center justify-center text-2xl md:text-3xl
                transition-all duration-300 group-hover:scale-110 group-hover:border-[#FF4C29]
                ${
                  activeNode === index
                    ? "scale-110 border-[#FF4C29] shadow-[#FF4C29]/40"
                    : ""
                }
              `}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain z-10"
                />

                {/* Pulsing ring */}
                <div
                  className={`
                  absolute inset-0 rounded-full border-2 border-[#FF4C29] 
                  animate-ping opacity-0 group-hover:opacity-30
                  ${activeNode === index ? "opacity-30" : ""}
                `}
                ></div>
              </div>

              {/* Technology name */}
              <div
                className={`
                absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                bg-[#082032]/90 backdrop-blur-sm border border-[#334756]/50 
                rounded-lg px-3 py-1 text-sm font-medium text-white
                opacity-0 group-hover:opacity-100 transition-all duration-300
                whitespace-nowrap pointer-events-none
                ${activeNode === index ? "opacity-100" : ""}
              `}
              >
                {tech.name}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#082032]/90"></div>
              </div>

              {/* Category indicator */}
              <div
                className={`
                absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-[#082032]
                ${
                  tech.category === "frontend"
                    ? "bg-cyan-400"
                    : tech.category === "backend"
                    ? "bg-green-400"
                    : tech.category === "database"
                    ? "bg-purple-400"
                    : "bg-orange-400"
                }
              `}
              ></div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-1 md:bottom-4 left-4 bg-[#082032]/80 backdrop-blur-sm border border-[#334756]/50 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2 text-sm">
              Categories
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <span className="text-white/80">Frontend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-white/80">Backend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-white/80">Database</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span className="text-white/80">DevOps</span>
              </div>
            </div>
          </div>

          {/* Network status indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#082032]/80 backdrop-blur-sm border border-[#334756]/50 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-[#FF4C29] rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">
              Network Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
