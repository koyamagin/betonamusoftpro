import { motion } from "motion/react";
import { ArrowRight, ChevronRight, BarChart3, Database, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm mb-8"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
            01 / NEXT-GEN AUTOMATION
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 text-white"
        >
          Giải Pháp <span className="text-gradient">Tự Động Hóa</span> <br />
          Phần Mềm Doanh Nghiệp
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 mb-10 leading-relaxed uppercase tracking-wide opacity-80"
        >
          We build intelligent systems, enterprise software, and ERP platforms that help businesses scale faster through an automation-first mindset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary group">
            Get Consultation
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-outline">
            View Services
          </a>
        </motion.div>
      </div>

      {/* Stats / Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <BarChart3 className="text-blue-400 w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-display font-bold text-white">99%</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">Efficiency Gains</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Database className="text-cyan-400 w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-display font-bold text-white">10M+</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">Data Entries</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
            <Code2 className="text-indigo-400 w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-display font-bold text-white">500+</div>
            <div className="text-xs text-slate-500 uppercase tracking-tighter">Custom Tools</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
