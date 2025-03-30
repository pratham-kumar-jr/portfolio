
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Star } from "lucide-react";

type JobType = {
  company: string;
  title: string;
  date: string;
  points: string[];
  highlight?: boolean;
};

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const jobs: JobType[] = [
    {
      company: "Devslane",
      title: "Senior Software Developer",
      date: "May 2023 - Present",
      highlight: true,
      points: [
        "Led development of a property management platform similar to Airbnb and VRBO, focusing on seamless user experience and robust backend systems.",
        "Architected and implemented a data ingestion pipeline for property listings that reduced manual intervention, increased efficiency by 100x, and cut down a 4-day process to just 3-4 hours.",
        "Built end-to-end AWS infrastructure to support multi-tenant architecture for property management software, ensuring each property manager's data remains isolated and secure.",
        "Developed a high-performance search engine using Elasticsearch for property listings, significantly improving search speed and accuracy for users looking for accommodations.",
        "Implemented a dynamic pricing algorithm that automatically adjusts property rates based on demand, season, and local events.",
        "Created a reservation system capable of handling complex booking scenarios, cancellations, and payment processing.",
        "Led a dynamic team of 7 engineers, fostering a collaborative environment while developing property management features.",
        "Collaborated closely with stakeholders to understand specific requirements for vacation rental and property management solutions.",
        "Provided mentorship and guidance to team members on best practices for building scalable property management applications.",
        "Successfully managed end-to-end delivery of features from initial concept to production deployment, ensuring alignment with property management industry standards.",
      ],
    },
    {
      company: "Devslane",
      title: "Software Developer (Intern)",
      date: "August 2021 - May 2023",
      highlight: true,
      points: [
        "Assisted in developing key components for a property management application, including booking calendar optimization and availability tracking.",
        "Managed resource-intensive background processes for property data synchronization through the implementation of a robust bull message queue.",
        "Enhanced website performance and search engine ranking for property listings by transitioning the front-end from client-side rendering to optimized server-side rendering.",
        "Successfully integrated Stripe payment solutions for processing rental payments, handling monthly transactions totaling in the millions.",
        "Implemented robust multi-factor authentication mechanisms for property owners and managers, fortifying the security posture of the system.",
        "Streamlined resource-intensive processes related to property data aggregation by leveraging serverless lambda functions.",
        "Engineered high-performance RESTful APIs using Adonisjs and implemented Redis caching for property data, resulting in a substantial performance boost of 75-80 percent.",
        "Created comprehensive API documentation for property management services, ensuring clarity and accessibility for development teams.",
        "Utilized Lucid ORM for seamless property database management, including migrations and model class creation.",
        "Integrated the front-end application with property management RESTful APIs and executed extensive code refactoring to enhance overall system coherence.",
      ],
    },
    {
      company: "Lesgo.in",
      title: "Co-founder",
      date: "January 2024 - December 2024",
      points: [
        "Led the technology department for a property management startup, overseeing mobile, web, and backend development.",
        "Participated in VC meetings and prepared comprehensive pitch decks, effectively communicating the product vision for our property management solution.",
        "Spearheaded the recruitment process, successfully hiring and onboarding talented developers to expand the property management platform team.",
        "Architected a cost-effective infrastructure for our property management system, optimizing resource utilization and minimizing operational expenses.",
        "Designed and built the complete first version of our property booking and management platform with the team.",
        "Guided team members in writing clean and modular code for developing property management features, promoting best practices.",
        "Translated business requirements into technical solutions for property management, ensuring product alignment with company goals.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading numbered-heading mb-12">
          Where I've Worked
        </h2>
        
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-accent" />
          <p className="text-slate-light italic">
            Specialized in <span className="text-accent font-medium">property management software</span> similar to Airbnb, VRBO and MBP
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab list */}
          <div className="md:w-32 overflow-x-auto md:overflow-visible">
            <div className="flex md:flex-col">
              {jobs.map((job, i) => (
                <button
                  key={i}
                  className={cn(
                    "px-4 py-3 font-mono text-sm whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 flex items-center gap-2",
                    activeTabIndex === i
                      ? "text-accent border-accent bg-secondary md:bg-transparent"
                      : "text-slate border-slate-dark hover:text-accent hover:bg-secondary/30"
                  )}
                  onClick={() => setActiveTabIndex(i)}
                >
                  {job.highlight && <Star className="w-3 h-3 text-accent opacity-75" />}
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
