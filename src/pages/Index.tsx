import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Social from "@/components/Social";
import Email from "@/components/Email";

const Index = () => {
  useEffect(() => {
    document.title = "Pratham Kumar | Software Developer";
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <div className="fixed inset-0 bg-[url('/bg-grid.svg')] bg-repeat opacity-5 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/90 pointer-events-none" />
      <Navbar />
      <main className="relative z-10 pt-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Social />
      <Email />
      <Footer />
    </div>
  );
};

export default Index;
