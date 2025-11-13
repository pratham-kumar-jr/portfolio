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
      title: "Backend / Software Engineer II (Distributed Systems)",
      date: "August 2021 - Present",
      highlight: true,
      points: [
        "Architected a distributed ingestion pipeline using Redis Streams (consumer groups, partitioning, horizontal scaling) resulting in 56× improvement (7 days → 3 hours).",
        "Designed multi-tenant AWS infrastructure (Lambda, API Gateway, S3, OpenSearch) handling 1M+ operations/month with high reliability.",
        "Built a rule-based computation engine supporting custom formulas, chained dependencies, and conditional logic.",
        "Implemented a multi-node websocket distribution layer using Redis Streams + Pub/Sub.",
        "Built observability and metrics pipelines using OpenSearch/Grafana.",
        "Enhanced API performance by 2–3× through K6 load testing, SQL query optimization, caching, and logical restructuring.",
        "Improved engineering efficiency with CI/CD upgrades, deployment automation, and dev environment standardization.",
        "Contributed to a RAG-based AI system, building retrieval pipelines, embeddings, and grounded response flows.",
        "Delivered end-to-end technical specifications, integration flows, and solution designs.",
        "Mentored interns, coordinated tasks, participated in architecture discussions, and ran client-facing requirement",
        "Contributed as one of the early backend engineers, owning critical modules and production systems from the start.",
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
            Specialized in{" "}
            <span className="text-accent font-medium">
              property management software
            </span>{" "}
            similar to Airbnb, VRBO and MBP
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
                  {job.highlight && (
                    <Star className="w-3 h-3 text-accent opacity-75" />
                  )}
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
