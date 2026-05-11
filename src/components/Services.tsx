import { motion } from "motion/react";
import { Laptop, Monitor, BarChart, Bug, Settings, Globe } from "lucide-react";

const services = [
  {
    title: "Website Automation Systems",
    description: "Automated business websites, customer portals, workflow integrations, CRM synchronization, and smart operational dashboards.",
    icon: Globe,
    color: "bg-blue-500/10",
    textColor: "text-blue-400"
  },
  {
    title: "Windows Desktop Applications",
    description: "Custom Windows applications using modern technologies for internal operations, data processing, reporting, and enterprise workflows.",
    icon: Monitor,
    color: "bg-cyan-500/10",
    textColor: "text-cyan-400"
  },
  {
    title: "ERP & Business Management",
    description: "Custom ERP systems for inventory, HR, finance, workflow management, operations, and enterprise reporting.",
    icon: BarChart,
    color: "bg-indigo-500/10",
    textColor: "text-indigo-400"
  },
  {
    title: "QA Testing Services",
    description: "Automation testing and manual QA services to ensure software quality, reliability, performance, and stability.",
    icon: Bug,
    color: "bg-emerald-500/10",
    textColor: "text-emerald-400"
  },
  {
    title: "Business Process Automation",
    description: "Reduce repetitive work with intelligent automation solutions, integrations, APIs, and workflow optimization.",
    icon: Settings,
    color: "bg-violet-500/10",
    textColor: "text-violet-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Comprehensive Software Solutions
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card bg-slate-900/40 hover:bg-slate-800/60 hover:border-blue-500/30 border-slate-800 flex flex-col group"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5 border border-white/5 transition-all group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]`}>
                <service.icon className={`w-6 h-6 ${service.textColor}`} />
              </div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Need a Custom Solution?
              </h4>
              <p className="text-white/80 mb-8">
                Our experts are ready to analyze your business needs and design a perfect system.
              </p>
            </div>
            <a href="#contact" className="w-full py-4 bg-white text-dark-navy rounded-xl font-bold text-center hover:bg-slate-100 transition-colors">
              Schedule a Meeting
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
