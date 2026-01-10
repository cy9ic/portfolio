import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Developer",
    company: "OYO Rooms",
    location: "Gurugram, Haryana",
    period: "August 2025 – Present",
    type: "work",
    highlights: [
      "Worked on migrating DanCenter from a legacy tech stack to a Java Spring Boot–based architecture, implementing new features and migrating critical data via Kafka pipelines across Search and BFF layers.",
      "Optimized search and data-querying components by tuning Elasticsearch queries, redesigning data flows, andenhancing caching strategies, resulting in improved latency and system reliability",
      "Applied strong fundamentals in algorithms, data structures, and object-oriented design to simplify complex codepaths, reduce compute overhead, and enforce SOLID design principles.",
      "Migrated SEO pages for Motel6 and Studio6 from a legacy system to a new template-driven SEO service, enabling scalable generation and maintenance of SEO pages across multiple brands.",
      "Contributed to multiple search-layer optimizations, including improved caching strategies, asynchronous logging,and query tuning, to enhance system performance and stability."
    ],
  },
  {
    title: "Software Developer Intern",
    company: "OYO Rooms",
    location: "Gurugram, Haryana",
    period: "October 2024 – July 2025",
    type: "work",
    highlights: [
      "Contributed to migration of danland.dk from legacy AS400 tech stack to new Java Springboot stack.",
      "Implemented real-time data streaming pipelines using Kafka, ensuring consistent and fault-tolerant data propagation across storage, indexing, and search subsystems.",
      "Migrated SEO services serving 400k+ live pages, to a multi-tenant architecture, enabling seamless multi-brand onboarding while improving scalability and long-term maintainability.",
      "Authored and optimized multiple Drools rules (Kie Sessions) to generate rule based contextual property tags.",
    ],
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    company: "Chitkara University",
    location: "Rajpura, Punjab",
    period: "August 2021 – August 2025",
    type: "education",
    highlights: [
      "GPA: 9.48/10.0",
      "Data Structures & Algorithms, Database Management Systems",
      "Object-Oriented Programming, Software Engineering",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 timeline-line" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 timeline-dot" />

      <div className="card-glass rounded-lg p-6 hover:border-primary/50 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-primary/10">
              {experience.type === "work" ? (
                <Briefcase className="w-4 h-4 text-primary" />
              ) : (
                <GraduationCap className="w-4 h-4 text-primary" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{experience.title}</h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-mono text-muted-foreground">{experience.period}</p>
            <p className="text-sm text-muted-foreground">{experience.location}</p>
          </div>
        </div>

        <ul className="space-y-2">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
              <span className="text-primary mt-1.5">▹</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="section-container">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span>
          Experience & Education
          <div className="hidden sm:block flex-1 h-px bg-border" />
        </h2>
      </motion.div>

      <div className="max-w-3xl">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
