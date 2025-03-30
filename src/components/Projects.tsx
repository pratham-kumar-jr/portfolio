import React from "react";
import { ExternalLink, Github } from "lucide-react";
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
};

const Projects = () => {
  const featuredProjects: ProjectType[] = [
    {
      title: "Lesgo.in",
      description:
        "A comprehensive SaaS platform available on iOS and Android that I co-founded and led the technical development for. Built with React Native, NodeJS, and AWS infrastructure.",
      tags: ["React Native", "NodeJS", "AWS", "Mobile Apps", "SaaS"],
      links: {
        external: "https://lesgo.in",
      },
    },
    {
      title: "Author-Writer-Reader Platform",
      description:
        "Currently developing an MVP for a platform connecting authors, writers, and readers. The platform facilitates content creation, sharing, and discovery within a dedicated community.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      links: {
        github: "https://github.com/pratham-kumar-jr/writer-platform",
      },
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
    },
  ];

  const otherProjects: ProjectType[] = [
    {
      title: "React-Redux Dashboard",
      description:
        "Created a React-Redux-Tailwind CSS app with integrated RESTful API, featuring a dashboard, login functionality, and a storybook for reusable components.",
      tags: ["React", "Redux", "Tailwind CSS", "Storybook"],
      links: {
        github: "#",
        external: "https://dashboard-demo.prathamkumar.com",
      },
    },
    {
      title: "Instable 2020",
      description:
        "A 2D platformer game themed around the Corona-Pandemic. Published on the PlayStore and developed using Unity game engine.",
      tags: ["Unity", "C#", "Game Development", "Android"],
      links: {
        external: "https://play.google.com/store/apps/details?id=com.pratham.instable",
      },
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading numbered-heading mb-16">Some Things I've Built</h2>

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
                <div className="bg-accent/10 aspect-video flex items-center justify-center border border-accent/20">
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
                <div className="p-6 rounded-md bg-navy-light shadow-xl">
                  <p className="font-mono text-accent text-sm mb-2">
                    Featured Project
                  </p>
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
                      <li key={j} className="bg-navy-dark px-3 py-1 rounded">
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
              className="bg-navy-light p-6 rounded-md shadow-md hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent">
                  {/* Icon placeholder */}
                  <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
                    <span className="text-xl">🚀</span>
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
