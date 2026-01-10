import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
const TypeWriter = ({
  text,
  delay = 100
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);
  return <span>
      {displayText}
      <span className="animate-blink text-primary">|</span>
    </span>;
};
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" id="home">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }} />

      <div className="section-container relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="space-y-6">
          <p className="text-primary font-mono text-sm tracking-wider">
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <TypeWriter text="Harkaran Singh" delay={80} />
          </h1>
          
          <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.5,
          duration: 0.5
        }} className="text-3xl md:text-5xl font-bold text-muted-foreground">
            I build distributed systems.
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 2,
          duration: 0.5
        }} className="max-w-xl text-muted-foreground text-lg leading-relaxed">
            Associate Software Developer at{" "}
            <span className="text-primary font-medium">OYO Rooms</span>, specializing in 
            Java Spring Boot, microservices architecture, and high-performance backend systems. 
            Currently building scalable solutions that handle millions of requests.
          </motion.p>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 2.3,
          duration: 0.5
        }} className="flex items-center gap-4 pt-4">
            <a href="https://github.com/cy9ic" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary transition-all group bg-primary-foreground">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/harkaran-singh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary transition-all group bg-primary-foreground">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:harkaran0010@gmail.com" className="p-3 rounded-lg border border-border hover:border-primary transition-all group bg-primary-foreground">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 3,
      duration: 0.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>;
};
export default Hero;