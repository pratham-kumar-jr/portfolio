
import React from "react";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

const Social = () => {
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
    <div className="fixed bottom-0 left-6 z-10 hidden xl:block">
      <ul className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate">
        {socialLinks.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors duration-200"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
