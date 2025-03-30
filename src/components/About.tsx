
import React from "react";

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
              <p>
                Hello! My name is Pratham and I enjoy creating things that live on the internet.
                My interest in web development started back in college where I began
                exploring the world of software development.
              </p>
              
              <p>
                Fast-forward to today, and I've had the privilege of working at{" "}
                <a href="https://devslane.com" className="text-accent hover:underline">
                  Devslane
                </a>{" "}
                where I've honed my skills in building accessible, inclusive products and 
                digital experiences for a variety of clients.
              </p>
              
              <p>
                I also recently co-founded{" "}
                <a href="https://lesgo.in" className="text-accent hover:underline">
                  lesgo.in
                </a>{" "}
                where I lead the technology department, overseeing mobile, web, and backend development.
              </p>
              
              <p>
                My main focus these days is building robust, scalable applications and mentoring talented 
                developers to write clean, modular code.
              </p>
              
              <p className="font-medium mt-4">
                Here are a few technologies I've been working with recently:
              </p>
              
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
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <div className="w-full h-full bg-gray-300">
                {/* This is where a profile photo would go */}
                <div className="aspect-square flex items-center justify-center bg-navy-light border border-accent/20 text-slate-light">
                  <span className="text-center font-mono">Profile Photo</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-0.5 rounded-md bg-accent/20 opacity-75 group-hover:opacity-100 blur transition-all duration-300 -z-10 group-hover:inset-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
