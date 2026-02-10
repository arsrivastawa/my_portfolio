import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "CESO Pvt. Ltd.",
    period: "Jan 2025 - Mar 2025",
    current: false,
  },
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed (Remote)",
    period: "Nov 2024 - Dec 2024",
    current: false,
  },
  {
    title: "Full Stack Developer",
    company: "EvoSynchTech",
    period: "Jun 2024 - Sep 2024",
    current: false,
  },
  {
    title: "Freelance Frontend Developer",
    company: "QuantBrain",
    period: "Mar 2024 - Apr 2024",
    current: false,
  },
  {
    title: "SDE Intern",
    company: "7Webs",
    period: "Feb 2024 - Mar 2024",
    current: false,
  },
  {
    title: "Web Development Team Lead",
    company: "LiGHT Sindri NGO",
    period: "2023",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">// Career</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-16 pb-10 last:pb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute left-2 md:left-4 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary glow-emerald"
                      : "bg-background border-muted-foreground"
                  }`}
                />

                <div className="glass-card glass-card-hover p-5 rounded-lg">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-primary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
