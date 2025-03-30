
import React from "react";
import { Building, Code } from "lucide-react";

const About = () => {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "C++",
    "React",
    "Redux",
    "Redux-Saga",
    "Mobx",
    "AdonisJs",
    "Bull MQ",
    "Tailwind",
    "NextJS",
    "React Native",
    "AWS-Infra",
    "Open-search",
    "Redis",
    "Lambdas",
    "Serverless",
    "Unity"
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
                <h3 className="text-slate-light font-mono text-lg">Property Management Specialist</h3>
              </div>
              
              <p>
                Hello! My name is Pratham and I specialize in building robust property management 
                software solutions similar to platforms like <span className="text-accent">Airbnb</span>,{" "}
                <span className="text-accent">VRBO</span>, and <span className="text-accent">MBP</span>.
              </p>
              
              <p>
                My expertise lies in developing comprehensive property management systems that handle 
                complex booking processes, dynamic pricing, payment processing, and owner/guest 
                communication platforms. I'm passionate about creating efficient, user-friendly 
                interfaces that make property management simpler and more profitable.
              </p>
              
              <p>
                Currently, I work at{" "}
                <a href="https://devslane.com" className="text-primary hover:underline">
                  Devslane
                </a>{" "}
                where I lead development for property management solutions that serve multiple clients 
                in the vacation rental and property management space.
              </p>
              
              <p>
                I also recently co-founded{" "}
                <a href="https://lesgo.in" className="text-primary hover:underline">
                  lesgo.in
                </a>{" "}
                as a side project, where I've applied my property management expertise in a startup environment.
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
