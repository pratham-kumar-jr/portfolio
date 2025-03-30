
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Work", url: "#work" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-4 bg-navy/90 backdrop-blur shadow-md"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-accent font-mono text-2xl font-bold">
          PK
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ol className="flex items-center gap-5">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="nav-link">
                  <span className="nav-link-number">0{i + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 bg-navy-light w-3/4 shadow-xl p-6 transform transition-transform duration-300 ease-in-out md:hidden z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full justify-center">
          <ol className="flex flex-col items-center gap-6 mb-8">
            {navLinks.map((link, i) => (
              <li key={i} className="text-center">
                <a
                  href={link.url}
                  className="nav-link text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="nav-link-number">0{i + 1}.</div>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-8">
            <a
              href="https://github.com/pratham-kumar-jr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/pratham-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
