import { motion } from "motion/react";
import { Laptop, Database, Globe, Shield, Terminal } from "lucide-react";

const projects = [
  {
    title: "ERP Management Platform",
    description: "Enterprise-wide ERP system for manufacturing automation and inventory tracking.",
    tech: [".NET", "SQL Server", "React"],
    icon: Database,
    color: "from-blue-600/20 to-indigo-600/20"
  },
  {
    title: "Automation Dashboard",
    description: "Cloud-based operational hub gathering data from 20+ legacy Windows applications.",
    tech: ["Node.js", "C#", "PostgreSQL"],
    icon: Laptop,
    color: "from-cyan-600/20 to-blue-600/20"
  },
  {
    title: "Windows Enterprise Tool",
    description: "Multi-threaded desktop client for real-time reporting and security audit logs.",
    tech: ["C#", "WPF", "Azure"],
    icon: Terminal,
    color: "from-indigo-600/20 to-violet-600/20"
  },
  {
    title: "QA Automation Framework",
    description: "Internal testing framework reducing regression time by 80% for fintech clients.",
    tech: ["Selenium", "C#", "Docker"],
    icon: Shield,
    color: "from-emerald-600/20 to-cyan-600/20"
  },
  {
    title: "AI Workflow Integration",
    description: "Smart document processing system using machine learning for automated invoicing.",
    tech: ["Node.js", "Python", "React"],
    icon: Globe,
    color: "from-violet-600/20 to-indigo-600/20"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Project Showcase</h3>
          </div>
          <div className="text-slate-500 font-medium">Selected works 2023-2025</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden border-white/5 flex flex-col h-full bg-black/20"
            >
              <div className={`aspect-video w-full bg-gradient-to-br ${project.color} flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-110`}>
                <project.icon className="w-20 h-20 text-white/40" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
