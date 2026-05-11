import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Technologies", href: "#tech" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#portfolio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-16 bg-dark-navy/80 backdrop-blur-md border-b border-slate-800" : "h-20 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white transition-transform duration-300 group-hover:rotate-6">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            BETONAMU<span className="text-blue-500">SOFT</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            GET CONSULTATION
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-navy border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
