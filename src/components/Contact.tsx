import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-mono text-accent text-base mb-4">
          04. What's Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">
          Get In Touch
        </h3>
        <p className="text-slate mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="mb-10">
          <a
            href="mailto:pratham.kumar.jr@gmail.com"
            className="button-primary text-base py-4 px-8"
          >
            Say Hello
          </a>
        </div>

        <div className="text-slate-light flex flex-col items-center">
          <p className="font-mono text-sm mb-2">You can also reach me at:</p>
          <p className="font-mono text-accent mb-1">
            pratham.kumar.jr@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
