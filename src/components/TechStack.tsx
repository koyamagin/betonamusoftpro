import { motion } from "motion/react";

const techs = [
  { name: ".NET", category: "Backend" },
  { name: "C#", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Node.js", category: "Runtime" },
  { name: "SQL Server", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Selenium", category: "QA" },
  { name: "Playwright", category: "QA" },
  { name: "Docker", category: "DevOps" },
  { name: "Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
];

export default function TechStack() {
  return (
    <section id="tech" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4"
          >
            Our Core Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-display font-bold"
          >
            Modern Technologies We Use
          </motion.h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col items-center justify-center min-w-[120px] hover:border-blue-500/30 transition-colors cursor-default group"
            >
              <div className="text-xs font-bold text-blue-300 mb-0.5 group-hover:text-blue-200 transition-colors">
                {tech.name}
              </div>
              <div className="text-[8px] text-slate-600 uppercase tracking-[0.2em]">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
