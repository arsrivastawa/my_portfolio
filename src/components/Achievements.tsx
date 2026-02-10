import { motion } from "framer-motion";
import { Trophy, Code, Award, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Finalist",
    description: "Level SuperMind Hackathon (Top 1000)",
  },
  {
    icon: Award,
    title: "Semi-Finalist",
    description: "EUREKA'24 (IIT Bombay)",
  },
  {
    icon: Target,
    title: "Top 5",
    description: "HackFest (IIT ISM-Dhanbad)",
  },
  {
    icon: Code,
    title: "500+ Problems",
    description: "Across Coding Platforms",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const Achievements = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">// Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & Hackathons
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="glass-card glass-card-hover p-6 rounded-lg text-center group"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
