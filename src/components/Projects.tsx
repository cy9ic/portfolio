import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Database, Zap, Shield } from "lucide-react";
const projects = [{
  title: "Distributed In-Memory Data Store",
  subtitle: "Redis Clone",
  period: "June 2025 – July 2025",
  description: "A distributed key-value store mimicking Redis internals with support for TTL, pub-sub, non-blocking IO, and in-memory caching.",
  highlights: ["Built custom event loop handling 10K+ concurrent clients with sub-10ms latency", "Implemented AOF persistence and crash recovery with 99% durability", "Deep understanding of concurrency, networking, and async IO"],
  tech: ["Java", "Concurrency", "Non-blocking IO", "Distributed Systems"],
  icon: Database,
  github: "https://github.com/cy9ic"
}];
const ProjectCard = ({
  project,
  index
}: {
  project: typeof projects[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const Icon = project.icon;
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.5,
    delay: index * 0.2
  }} className="group relative">
      <div className="card-glass rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all hover:glow">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex items-center gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-mono text-primary mb-1">{project.period}</p>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>

          <p className="text-muted-foreground">{project.description}</p>

          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">▹</span>
                {highlight}
              </li>)}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tech.map(tech => <span key={tech} className="skill-tag text-xs bg-primary-foreground">
                {tech}
              </span>)}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Zap className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">Sub-10ms latency</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Database className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">10K+  clients</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Shield className="w-4 h-4" />
            </div>
            <p className="text-xs text-muted-foreground">99% durability</p>
          </div>
        </div>
      </div>
    </motion.div>;
};
const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, {
    once: true
  });
  return <section id="projects" className="section-container bg-secondary/30">
      <motion.div ref={headerRef} initial={{
      opacity: 0,
      y: 20
    }} animate={isHeaderInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.5
    }} className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span>
          Featured Projects
          <div className="hidden sm:block flex-1 h-px bg-border" />
        </h2>
      </motion.div>

      <div className="grid gap-6 max-w-3xl">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>;
};
export default Projects;