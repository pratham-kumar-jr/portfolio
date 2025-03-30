
import React from "react";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/pratham-kumar-jr",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/pratham-kumar",
    },
    {
      name: "YouTube",
      icon: <Youtube size={18} />,
      url: "https://youtube.com/pratham_kumar",
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      url: "mailto:pratham.kumar.jr@gmail.com",
    },
  ];

  return (
    <footer className="py-8 px-6 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <div className="flex gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="font-mono text-xs text-slate">
          <p>Designed & Built by Pratham Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
