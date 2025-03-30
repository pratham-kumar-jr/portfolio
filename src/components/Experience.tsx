
import { useState } from "react";
import { cn } from "@/lib/utils";

type JobType = {
  company: string;
  title: string;
  date: string;
  points: string[];
};

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const jobs: JobType[] = [
    {
      company: "Devslane",
      title: "Senior Software Developer",
      date: "May 2023 - Present",
      points: [
        "Worked with other teams to onboard three new clients, streamlining the integration process and improving client experience.",
        "Architected and implemented a data ingestion pipeline that reduced manual intervention, increased efficiency by 100x, and cut down a 4-day process to just 3-4 hours.",
        "Led a dynamic team of 7 engineers, fostering a collaborative environment and ensuring streamlined communication to achieve project goals.",
        "Actively involved in designing and implementing distributed systems, focusing on scalability, reliability, and fault tolerance.",
        "Built end-to-end AWS infrastructure to support the multi-tenant architecture, ensuring robust and scalable cloud deployment.",
        "Collaborated closely with stakeholders to thoroughly understand their requirements, gathering valuable insights and feedback to inform the development process.",
        "Successfully managed the end-to-end delivery of features, from initial concept to production deployment, ensuring alignment with stakeholder expectations and project timelines.",
        "Developed and executed comprehensive project plans, breaking down complex features into manageable tasks and delegating responsibilities to team members for efficient delivery.",
        "Provided mentorship and guidance to team members, fostering a culture of continuous learning and skill development within the engineering team.",
        "Provided technical guidance to team members throughout the mvp of multi-tenant architecture implementation with a focus on efficient data ingestion strategies.",
        "Developed and implemented a high-performance search engine using Elasticsearch, significantly improving data retrieval speed and search accuracy.",
      ],
    },
    {
      company: "Devslane",
      title: "Software Developer (Intern)",
      date: "August 2021 - May 2023",
      points: [
        "Managed resource-intensive background processes efficiently through the implementation of a robust bull message queue.",
        "Oversaw the maintenance of both production and staging servers, ensuring seamless operations and minimal downtime.",
        "Played a pivotal role in the development workflow by diligently reviewing and merging pull requests (MRs) from team members.",
        "Enhanced website performance and search engine ranking by transitioning the front-end from client-side rendering to optimized server-side rendering.",
        "Successfully integrated Stripe payment solutions, handling monthly transactions totaling in the millions.",
        "Implemented robust multi-factor authentication mechanisms, fortifying the security posture of the system.",
        "Streamlined resource-intensive processes by leveraging serverless lambda functions, optimizing efficiency and scalability.",
        "Engineered high-performance RESTful APIs using Adonisjs and implemented Redis caching, resulting in a substantial performance boost of 75-80 percent.",
        "Created comprehensive API documentation for RESTful services, ensuring clarity and accessibility for development teams.",
        "Utilized Lucid ORM for seamless database management, including migrations and model class creation.",
        "Integrated the front-end application with RESTful APIs and executed extensive code refactoring to enhance overall system coherence.",
      ],
    },
    {
      company: "Lesgo.in",
      title: "Co-founder",
      date: "January 2024 - December 2024",
      points: [
        "Led the technology department, overseeing mobile, web, and backend development.",
        "Participated in VC meetings and prepared comprehensive pitch decks, effectively communicating the product vision and technical strategy.",
        "Spearheaded the recruitment process, successfully hiring and onboarding talented developers to expand the team.",
        "Architected a cost-effective infrastructure, optimizing resource utilization and minimizing operational expenses.",
        "Designed and built the complete first final version of the product with the team.",
        "Guided team members in writing clean and modular code, promoting best practices.",
        "Translated business requirements into technical solutions, ensuring product alignment with company goals.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading numbered-heading mb-12">
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab list */}
          <div className="md:w-32 overflow-x-auto md:overflow-visible">
            <div className="flex md:flex-col">
              {jobs.map((job, i) => (
                <button
                  key={i}
                  className={cn(
                    "px-4 py-3 font-mono text-sm whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2",
                    activeTabIndex === i
                      ? "text-accent border-accent bg-navy-light md:bg-transparent"
                      : "text-slate border-slate-dark hover:text-accent hover:bg-navy-light/30"
                  )}
                  onClick={() => setActiveTabIndex(i)}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="min-h-[300px] md:min-h-[340px] flex-1">
            {jobs.map((job, i) => (
              <div
                key={i}
                className={cn(
                  "h-full transition-opacity",
                  activeTabIndex === i
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                )}
              >
                <h3 className="text-xl text-slate-light mb-1">
                  <span>{job.title}</span>{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate mb-5">{job.date}</p>
                <ul className="space-y-3">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <span className="text-accent mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
