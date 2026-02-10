import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "⚡" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "C++", icon: "⚙️" },
  { name: "Python", icon: "🐍" },
  { name: "Linux", icon: "🐧" },
  { name: "NGINX", icon: "🌐" },
  { name: "TypeScript", icon: "📘" },
  { name: "Redis", icon: "🔴" },
];

export const SkillsMarquee = () => {
  return (
    <section
      id="skills"
      className="py-16 border-y border-border overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Gradient Fade Left */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />

        {/* Gradient Fade Right */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 whitespace-nowrap group"
              >
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300">
                  {skill.icon}
                </span>

                <span className="font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
