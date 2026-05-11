import { motion } from "motion/react";
import { CheckCircle2, Shield, Zap, TrendingUp, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">About Betonamusoft</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
            Digital Transformation Through <span className="text-blue-500">Expert Automation</span>
          </h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Betonamusoft delivers custom software development and automation solutions for startups, SMEs, and enterprise clients. We specialize in building scalable systems that reduce manual work, improve efficiency, and accelerate digital transformation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Enterprise Automation",
              "ERP Systems",
              "Windows Applications",
              "QA Automation",
              "Custom Web Platforms",
              "Security-First Dev"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 p-8 flex items-center justify-center relative z-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card hover:bg-white/10 flex flex-col items-center justify-center text-center">
                <Users className="w-10 h-10 text-blue-400 mb-4" />
                <span className="text-3xl font-display font-bold">100+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Clients</span>
              </div>
              <div className="glass-card mt-8 hover:bg-white/10 flex flex-col items-center justify-center text-center">
                <TrendingUp className="w-10 h-10 text-cyan-400 mb-4" />
                <span className="text-3xl font-display font-bold">5x</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Growth</span>
              </div>
              <div className="glass-card -mt-8 hover:bg-white/10 flex flex-col items-center justify-center text-center">
                <Zap className="w-10 h-10 text-yellow-400 mb-4" />
                <span className="text-3xl font-display font-bold">40%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Faster</span>
              </div>
              <div className="glass-card hover:bg-white/10 flex flex-col items-center justify-center text-center">
                <Shield className="w-10 h-10 text-green-400 mb-4" />
                <span className="text-3xl font-display font-bold">Secure</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Systems</span>
              </div>
            </div>
          </div>
          {/* Decorative blur */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}
