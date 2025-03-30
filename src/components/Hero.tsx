
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 pb-32 px-6"
    >
      <div className="container mx-auto">
        <h1 className="font-mono text-accent mb-5 text-base md:text-lg">
          Hi, my name is
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light mb-4 leading-tight">
          Pratham Kumar.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 leading-tight">
          I build things for the web.
        </h3>
        <p className="max-w-xl text-slate text-lg mb-12 leading-relaxed">
          I'm a senior software developer specializing in building exceptional
          digital experiences. Currently, I'm focused on building accessible,
          human-centered products at{" "}
          <a
            href="https://devslane.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Devslane
          </a>
          .
        </p>
        <a href="#work" className="button-primary inline-block text-base">
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
