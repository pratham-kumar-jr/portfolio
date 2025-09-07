
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
      title: "Software Engineer",
      date: "May 2023 - Present",
      highlight: true,
      points: [
        "Architected a vacation rental property management system with multi-channel integrations (e.g., Airbnb, Vrbo, BookingPal, etc), inventory sync, pricing automation, and tenant access.",
        "Containerized applications using Docker and orchestrated deployments across environments, reducing setup time by 70%.",
        "Enhanced API performance testing using K6, identifying bottlenecks and improving throughput by 52%.",
        "Developed microservices with Spring Boot for specific modules, ensuring scalability and maintainability.",
        "Built a multi-tenant AWS infrastructure supporting 1M+ monthly transactions, onboarding 3 clients with 99.9% uptime.",
        "Designed event-driven ingestion pipeline (Node.js + Redis Streams + BullMQ), reducing data sync from 4 days to 3 hours.",
        "Developed a high-performance Elasticsearch engine, improving retrieval by 80% and accuracy by 30%.",
        "Designed dynamic line item billing system with custom formulas in multiple booking channels.",
        "Worked and led teams between time zones using Slack + Jira; managed end-to-end feature delivery in line with stakeholders.",
        "Mentored 5 junior engineers, improving team productivity by 50% through clean code reviews.",
      ],
    },
    {
      company: "Devslane",
      title: "SDE Intern",
      date: "Aug 2021 - May 2023",
      highlight: true,
      points: [
        "Developed scalable REST APIs using Adonis.js and Redis, increasing system throughput by 75–80%.",
        "Integrated Stripe to process $1M+ monthly transactions with secure billing flows.",
        "Optimized front-end performance using React SSR, reducing load time by 40% and improving SEO.",
        "Utilized Lucid ORM for structured database migrations and consistency of the model.",
      ],
    },
    {
      company: "Lesgo",
      title: "Founder & Tech Lead",
      date: "Jan 2024 - Dec 2024",
      points: [
        "Founded and led development of a loyalty SaaS platform used by 25+ restaurants and 1,000+ users.",
        "Built backend with TypeScript, AdonisJS, and AWS (Lambda, S3, API Gateway) with 99.8% uptime.",
        "Optimized infra and cut AWS costs by 25% via Serverless framework.",
        "Participated in VC pitch meetings and led hiring and onboarding of developers.",
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
