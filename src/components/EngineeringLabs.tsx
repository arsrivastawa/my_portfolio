import { motion } from "framer-motion";
import { Cpu, Camera, Server, Github } from "lucide-react";

const projects = [
  {
    title: "Crypto Matching Engine",
    tech: ["C++", "TCP/IP", "WebSocket"],
    description: "Institutional-grade matching engine designed for high-frequency trading.",
    icon: Cpu,
    stats: [
      { label: "Throughput", value: "714k", unit: "orders/sec" },
      { label: "Median Latency", value: "0.01", unit: "ms" },
      { label: "Thread Safety", value: "100%", unit: "(19 Tests)" },
    ],
  },
  {
    title: "ANPR System",
    tech: ["Python", "YOLOv8", "OpenCV", "React"],
    description: "Real-time computer vision system for vehicle numberplate tracking.",
    icon: Camera,
    stats: [
      { label: "Detection Accuracy", value: "98%", unit: "accuracy" },
      { label: "CRUD Speed", value: "50%", unit: "faster" },
      { label: "Streaming", value: "Live", unit: "WebSocket" },
    ],
  },
  {
    title: "Microservices Social Backend",
    tech: ["Node.js", "Prisma", "PostgreSQL", "MongoDB"],
    description: "Scalable backend architecture decoupling services for speed.",
    icon: Server,
    stats: [
      { label: "Latency Reduction", value: "40%", unit: "faster" },
      { label: "Query Speed", value: "30%", unit: "improved queries" },
      { label: "Architecture", value: "Micro", unit: "services" },
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

export const EngineeringLabs = () => {
  return (
    <section id="engineering" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">// Advanced Systems</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            System Architecture & Research
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            High-complexity projects focusing on performance and algorithms.
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
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <project.icon className="w-5 h-5" />
                </div>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-2">
                {project.stats.map((stat) => (
                  <div title={stat.label} key={stat.label} className="text-center p-2 rounded bg-muted/50">
                    <div className="font-mono text-lg font-bold text-primary glow-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.unit}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
