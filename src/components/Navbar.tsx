import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
            href="/_Pratham_kumar_2025_08_.pdf"
            className="button-primary"
            download={"Pratham_Kumar_Resume"}
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
        ref={menuRef}
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
              href="/_Pratham_kumar_2025_08_.pdf"
              className="button-primary"
              download={"Pratham_Kumar_Resume"}
              onClick={(e) => {
                setIsMenuOpen(false);
              }}
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center gap-5 mt-8">
            <a
              href="/_Pratham_kumar_2025_08_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={"Pratham_Kumar_Resume"}
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
