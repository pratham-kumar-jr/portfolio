import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 pb-32 px-6"
    >
      <div className="container mx-auto animate-fade-in">
        <h1 className="font-mono text-accent mb-5 text-base md:text-lg">
          Hi, my name is
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light mb-4 leading-tight">
          Pratham Kumar.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 leading-tight">
          I build{" "}
          <span className="gradient-text">scalable distributed systems</span>.
        </h3>
        <p className="max-w-xl text-slate text-lg mb-12 leading-relaxed">
          I'm a software engineer with 4+ years of experience building scalable
          distributed systems using{" "}
          <span className="text-accent">TypeScript</span>,{" "}
          <span className="text-accent">Node.js</span>, and{" "}
          <span className="text-accent">AWS</span>. I specialize in vacation
          rental property management systems with expertise in event-driven
          architecture and system design at{" "}
          <a
            href="https://devslane.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Devslane
          </a>
          .
        </p>
        <a
          href="#work"
          className="button-primary inline-flex items-center gap-2 text-base py-3 px-6 group"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("work")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Check out my work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
