import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "harkaran0010@gmail.com",
      href: "mailto:harkaran0010@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9988944141",
      href: "tel:+919988944141",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harkaran-singh",
      href: "https://linkedin.com/in/harkaran-singh",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/cy9ic",
      href: "https://github.com/cy9ic",
    },
  ];

  return (
    <section id="contact" className="section-container bg-secondary/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm currently open to new opportunities and interesting projects. Whether you have a
          question about distributed systems, want to discuss backend architecture, or just want
          to say hello, I'll do my best to get back to you!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group card-glass rounded-lg p-4 flex items-center gap-4 hover:border-primary/50 transition-all hover:glow"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-mono">{link.label}</p>
                  <p className="text-sm text-foreground truncate">{link.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            );
          })}
        </div>

        <motion.a
          href="mailto:harkaran0010@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-mono font-medium hover:glow-strong transition-all hover:scale-105"
        >
          Say Hello
          <Mail className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
