import { motion } from "motion/react";
import { ShieldCheck, Zap, Layers, Lock, Cpu, Headset } from "lucide-react";

const reasons = [
  {
    title: "Enterprise-grade architecture",
    description: "Systems built for scale, massive data volumes, and mission-critical reliability.",
    icon: Layers,
    color: "text-blue-400"
  },
  {
    title: "Automation-first mindset",
    description: "We don't just build software; we engineer efficiency and eliminate manual overhead.",
    icon: Zap,
    color: "text-cyan-400"
  },
  {
    title: "Scalable systems",
    description: "Cloud-native infrastructures that grow seamlessly with your business demands.",
    icon: Cpu,
    color: "text-indigo-400"
  },
  {
    title: "Security-focused development",
    description: "Security is baked into every line of code, ensuring your enterprise data remains protected.",
    icon: Lock,
    color: "text-emerald-400"
  },
  {
    title: "Experienced QA process",
    description: "Rigorous quality gates that ensure zero-day stability for complex deployments.",
    icon: ShieldCheck,
    color: "text-blue-500"
  },
  {
    title: "Long-term maintenance",
    description: "Reliable support and proactive monitoring to ensure 24/7 operational continuity.",
    icon: Headset,
    color: "text-violet-400"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Why Betonamusoft</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Engineered for Resilience and Efficiency
            </h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              We understand the complexities of modern enterprise software. Our approach combines rigorous engineering standards with forward-thinking automation strategies.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-transparent border-l-2 border-blue-500">
                <div className="font-bold text-white mb-2">99.9% System Uptime</div>
                <div className="text-sm text-slate-500 font-light">Guaranteed for all enterprise-scale deployments with 24/7 monitoring.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-600/10 to-transparent border-l-2 border-cyan-500">
                <div className="font-bold text-white mb-2">35% Reduction in Opex</div>
                <div className="text-sm text-slate-500 font-light">Average operational expense reduction through smart process automation.</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card hover:bg-white/10 p-8"
              >
                <div className={`${reason.color} mb-4`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
