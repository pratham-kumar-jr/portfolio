
import React from "react";
import { ExternalLink, Github, Rocket, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    external?: string;
  };
  image?: string;
  sideProject?: boolean;
};

const Projects = () => {
  const featuredProjects: ProjectType[] = [
    {
      title: "Vacation Rental Management System",
      description:
        "Architected a vacation rental property management system with multi-channel integrations (Airbnb, Vrbo, BookingPal), inventory sync, pricing automation, and tenant access. Built multi-tenant AWS infrastructure supporting 1M+ monthly transactions with 99.9% uptime.",
      tags: ["Node.js", "AWS", "Elasticsearch", "Redis", "Spring Boot"],
      links: {
        external: "#",
      },
      sideProject: false,
    },
    {
      title: "Lesgo (SaaS Platform)",
      description:
        "Founded and led development of a loyalty SaaS platform used by 25+ restaurants and 1,000+ users. Built backend with TypeScript, AdonisJS, and AWS with 99.8% uptime. Optimized infrastructure and cut AWS costs by 25%.",
      tags: ["TypeScript", "AdonisJS", "AWS", "Lambda", "iOS", "Android"],
      links: {
        external: "https://lesgo.in",
      },
      sideProject: true,
    },
    {
      title: "Skribble Game (Open Source)",
      description:
        "Created real-time multiplayer drawing game using WebSocket, Express, and React. Implemented CI/CD using GitHub Actions to streamline deployment.",
      tags: ["WebSocket", "React", "Express", "GitHub Actions"],
      links: {
        github: "https://github.com/pratham-kumar-jr/skribble-game",
      },
      sideProject: true,
    },
  ];

  const otherProjects: ProjectType[] = [
    {
      title: "Vacation Rental Analytics Dashboard",
      description:
        "An analytics dashboard for property managers to track occupancy rates, revenue, and guest satisfaction. Provides insights to optimize pricing and marketing strategies.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      links: {
        github: "#",
        external: "#",
      },
      sideProject: false,
    },
    {
      title: "React-Redux Dashboard",
      description:
        "Created a React-Redux-Tailwind CSS app with integrated RESTful API, featuring a dashboard, login functionality, and a storybook for reusable components.",
      tags: ["React", "Redux", "Tailwind CSS", "Storybook"],
      links: {
        github: "#",
        external: "https://dashboard-demo.prathamkumar.com",
      },
      sideProject: true,
    },
    {
      title: "Instable 2020",
      description:
        "A 2D platformer game themed around the Corona-Pandemic. Published on the PlayStore and developed using Unity game engine.",
      tags: ["Unity", "C#", "Game Development", "Android"],
      links: {
        external: "https://play.google.com/store/apps/details?id=com.pratham.instable",
      },
      sideProject: true,
    },
    {
      title: "Skribble Game",
      description:
        "A multiplayer drawing and guessing game built with web sockets. Players take turns drawing while others guess what's being drawn. Implemented with a clean, modular architecture.",
      tags: ["WebSockets", "React", "Game Development", "Node.js"],
      links: {
        github: "https://github.com/pratham-kumar-jr/skribble-game",
        external: "#",
      },
      sideProject: true,
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading numbered-heading mb-16">Some Things I've Built</h2>

        {/* Legend */}
        <div className="flex justify-end gap-6 mb-12 text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-slate">Main Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-slate">Side Projects</span>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className={cn(
                "relative grid grid-cols-12 items-center gap-4",
                i % 2 === 1 && "md:text-right"
              )}
            >
              {/* Project Image or Placeholder */}
              <div
                className={cn(
                  "col-span-12 md:col-span-7 relative rounded-md overflow-hidden",
                  i % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              >
                <div className="glass-card aspect-video flex items-center justify-center border border-accent/20">
                  <div className="text-center font-mono text-accent/50">
                    Project Screenshot
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={cn(
                  "col-span-12 md:col-span-6 md:col-start-1 md:row-start-1 z-10",
                  i % 2 === 0 ? "md:text-left" : "md:col-start-7 md:text-right"
                )}
              >
                <div className="glass-card p-6 rounded-md shadow-xl">
                  <div className="flex items-center mb-2">
                    <p className="font-mono text-accent text-sm">
                      Featured Project
                    </p>
                    {project.sideProject ? (
                      <Rocket className="w-4 h-4 text-accent ml-2" />
                    ) : (
                      <Star className="w-4 h-4 text-primary ml-2" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <div className="text-slate rounded-md mb-4">
                    {project.description}
                  </div>
                  <ul
                    className={cn(
                      "flex flex-wrap gap-2 text-xs font-mono text-slate-light mb-6",
                      i % 2 === 1 && "md:justify-end"
                    )}
                  >
                    {project.tags.map((tag, j) => (
                      <li key={j} className="bg-secondary px-3 py-1 rounded">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={cn(
                      "flex gap-4",
                      i % 2 === 1 && "md:justify-end"
                    )}
                  >
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-light hover:text-accent"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.external && (
                      <a
                        href={project.links.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-light hover:text-accent"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-semibold text-center mb-12">
          Other Noteworthy Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-md shadow-md hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent">
                  {/* Icon based on project type */}
                  <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                    {project.sideProject ? (
                      <Rocket className="text-accent w-5 h-5" />
                    ) : (
                      <Star className="text-primary w-5 h-5" />
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-accent"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-accent"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-light mb-2">
                {project.title}
              </h3>
              <p className="text-slate text-sm mb-6">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate-light">
                {project.tags.slice(0, 4).map((tag, j) => (
                  <li key={j}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
