import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description: "We deep dive into your business workflows to identify automation opportunities and technical requirements."
  },
  {
    number: "02",
    title: "System Design",
    description: "Designing the architecture, UI/UX, and database structure for a scalable and secure solution."
  },
  {
    number: "03",
    title: "Development",
    description: "Our expert engineers build your system using clean code standards and CI/CD pipelines."
  },
  {
    number: "04",
    title: "QA & Testing",
    description: "Rigorous automated and manual testing to ensure your software is bug-free and performant."
  },
  {
    number: "05",
    title: "Deployment",
    description: "Smooth rollout to production with monitoring and performance optimization."
  },
  {
    number: "06",
    title: "Long-term Support",
    description: "Continuous maintenance, security patches, and feature updates to keep your system ahead."
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">How We Work</h2>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Quy Trình Phát Triển Chuẩn</h2>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="grid gap-12 lg:gap-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="text-6xl font-display font-black text-white/5 mb-4 lg:hidden">{step.number}</div>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-dark-navy border border-cyan-400 flex items-center justify-center z-10">
                    <span className="text-xl font-display font-bold text-cyan-400">{step.number}</span>
                  </div>
                  <div className="absolute w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
                </div>
                
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
