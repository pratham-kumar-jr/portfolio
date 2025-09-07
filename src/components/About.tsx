
import React from "react";
import { Building, Code } from "lucide-react";

const About = () => {
  const skills = [
    "TypeScript",
    "JavaScript", 
    "Node.js",
    "PostgreSQL",
    "C++",
    "Java",
    "AdonisJS",
    "React",
    "Redux",
    "Redux-Saga",
    "MobX",
    "BullMQ",
    "Tailwind CSS",
    "Next.js",
    "React Native",
    "Spring Boot",
    "AWS Infrastructure",
    "Serverless Framework",
    "GitHub Actions",
    "Lambda",
    "OpenSearch",
    "Redis",
    "Redis Streams",
    "Stripe",
    "Unity",
    "Kafka",
    "K6",
    "gRPC"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading numbered-heading mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="space-y-4 text-slate">
              <div className="flex items-center gap-2 mb-4">
                <Building className="text-accent h-5 w-5" />
                <h3 className="text-slate-light font-mono text-lg">Software Engineer</h3>
              </div>
              
              <p>
                Hello! I'm Pratham, a software engineer with 4 years of experience (2 years full-time + 2 years internship) building scalable distributed systems using{" "}
                <span className="text-accent">TypeScript</span>, <span className="text-accent">Node.js</span>, <span className="text-accent">PostgreSQL</span>, and <span className="text-accent">AWS</span>.
              </p>
              
              <p>
                I've delivered SaaS platforms in production environments and collaborated with remote teams to launch features that reduced processing time by 90% and onboarding costs by 30%. My expertise includes developer tooling, event-driven architecture, and system design.
              </p>
              
              <p>
                Currently, I work at{" "}
                <a href="https://devslane.com" className="text-primary hover:underline">
                  Devslane
                </a>{" "}
                where I architect vacation rental property management systems with multi-channel integrations, supporting 1M+ monthly transactions with 99.9% uptime.
              </p>
              
              <p>
                I also founded{" "}
                <a href="https://lesgo.in" className="text-primary hover:underline">
                  Lesgo
                </a>{" "}
                , a loyalty SaaS platform used by 25+ restaurants and 1,000+ users, where I built the backend with 99.8% uptime and optimized infrastructure to cut AWS costs by 25%.
              </p>
              
              <div className="flex items-center gap-2 mt-8 mb-4">
                <Code className="text-accent h-5 w-5" />
                <h3 className="text-slate-light font-mono text-lg">Technical Skills</h3>
              </div>
              
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-3">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-sm">
                    <span className="text-accent">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-primary/10 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
              <div className="w-full h-full bg-gray-300">
                {/* This is where a profile photo would go */}
                <div className="aspect-square flex items-center justify-center glass-card text-slate-light">
                  <span className="text-center font-mono">Profile Photo</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-accent to-primary opacity-75 group-hover:opacity-100 blur transition-all duration-300 -z-10 group-hover:inset-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
