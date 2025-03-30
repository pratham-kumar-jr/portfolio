
import React from "react";

const Email = () => {
  return (
    <div className="fixed bottom-0 right-6 z-10 hidden xl:block">
      <div className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate">
        <a
          href="mailto:pratham.kumar.jr@gmail.com"
          className="font-mono text-xs tracking-widest text-slate hover:text-accent transition-colors duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          pratham.kumar.jr@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
