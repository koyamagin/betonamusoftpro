import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        <div className="lg:w-1/3">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Connect With Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Let's Build Your Next <span className="text-blue-500">Automation System</span>
          </h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
            Ready to scale your business with intelligent software? Our team is standing by to discuss your vision.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                <Mail className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email</div>
                <a href="mailto:sondangvan1995@gmail.com" className="text-white hover:text-cyan-400 transition-colors">sondangvan1995@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                <Phone className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Phone</div>
                <a href="tel:+84773859046" className="text-white hover:text-cyan-400 transition-colors">+84 773859046</a>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-2/3 glass-card p-10 border-white/10 flex flex-col items-center justify-center text-center"
        >
          <div className="max-w-md">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-blue-500 w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Contact Form Temporarily Offline</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              We are currently optimizing our inquiry systems. To get in touch immediately, please use the direct 
              email or phone details provided. Our automation experts are ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sondangvan1995@gmail.com" className="btn-primary">
                Send Email
              </a>
              <a href="tel:+84773859046" className="btn-outline">
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
