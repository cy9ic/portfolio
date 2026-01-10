import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Wrench, Brain, Settings } from "lucide-react";
const skillCategories = [{
  title: "Languages",
  icon: Code2,
  skills: ["Java", "Python", "C/C++", "SQL"]
}, {
  title: "Core CS",
  icon: Brain,
  skills: ["Data Structures", "Algorithms", "OOPs", "Complexity Analysis", "Distributed Systems", "Concurrency"]
}, {
  title: "Backend",
  icon: Settings,
  skills: ["Spring Boot", "JPA", "Maven", "REST APIs", "Microservices"]
}, {
  title: "Databases",
  icon: Database,
  skills: ["Kafka", "Redis", "Elasticsearch", "PostgreSQL", "MySQL", "MongoDB"]
}, {
  title: "DevOps",
  icon: Wrench,
  skills: ["Linux/Unix", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git"]
}, {
  title: "Cloud & Design",
  icon: Cloud,
  skills: ["AWS (EC2, S3, IAM)", "System Design", "Low-Level Design", "Debugging"]
}];
const SkillCategory = ({
  category,
  index
}: {
  category: typeof skillCategories[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const Icon = category.icon;
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 20
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.4,
    delay: index * 0.1
  }} className="card-glass rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map(skill => <span key={skill} className="skill-tag bg-gray-300">
            {skill}
          </span>)}
      </div>
    </motion.div>;
};
const Skills = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, {
    once: true
  });
  return <section id="skills" className="section-container">
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
          <span className="text-primary font-mono text-xl">04.</span>
          Technical Skills
          <div className="hidden sm:block flex-1 h-px bg-border" />
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => <SkillCategory key={category.title} category={category} index={index} />)}
      </div>
    </section>;
};
export default Skills;