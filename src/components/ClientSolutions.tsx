import { motion } from "framer-motion";
import { Shield, Smartphone, LineChart, CheckCircle2 } from "lucide-react";

const projects = [
  {
    tag: "SaaS / Healthcare",
    title: "Elder Care Management Platform",
    role: "Full Stack Developer (CESO Pvt. Ltd.)",
    icon: Shield,
    metrics: [
      "Implemented Role-Based Access Control (RBAC) for 3 user tiers.",
      "Built custom REST APIs for daily vital tracking.",
      "Secured 99.9% uptime via AWS/Linux optimization.",
    ],
  },
  {
    tag: "Mobile / E-Commerce",
    title: "Hyper-Local Food Marketplace",
    role: "Freelance Android Developer",
    icon: Smartphone,
    metrics: [
      "Developed React Native .apk for P2P food sales.",
      "Engineered offline-first architecture using SQLite.",
      "Optimized transaction history for low-latency retrieval.",
    ],
  },
  {
    tag: "Fintech / Frontend",
    title: "QuantBrain Fintech Interface",
    role: "Frontend Developer",
    icon: LineChart,
    metrics: [
      "Pixel-perfect Figma to React implementation.",
      "Complex client-side routing with React Router V6.",
      "Responsive implementation using Tailwind CSS.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ClientSolutions = () => {
  return (
    <section id="work" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">// Client Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Delivered Solutions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Commercial projects and freelance contracts executed for clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card glass-card-hover p-6 rounded-lg group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <project.icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  {project.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{project.role}</p>

              <ul className="space-y-3">
                {project.metrics.map((metric, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
