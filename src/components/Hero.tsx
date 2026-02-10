import { motion } from "framer-motion";
import { ArrowDown, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 grid-pattern overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary mb-4 text-lg"
          >
            &gt; Hello, I am Aditya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight"
          >
            Architecting{" "}
            <span className="text-gradient-primary">Intelligent Systems</span> &
            Scalable Client Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Bridging the gap between product velocity and system performance.
            Specializing in MERN Stack applications, Autonomous AI Agents, and
            Distributed Infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="gap-2 text-base" asChild>
              <a href="#work">
                <Layers className="w-5 h-5" />
                View Solved Problems
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base"
              asChild
            >
              <a href="#engineering">
                <Code2 className="w-5 h-5" />
                View Advanced Systems
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
