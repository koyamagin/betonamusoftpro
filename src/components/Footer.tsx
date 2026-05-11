import { Rocket, Github, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-16 border-t border-slate-800 px-8 flex items-center justify-between text-[10px] text-slate-500 bg-dark-navy z-10">
      <div className="flex gap-6 uppercase tracking-widest font-medium">
        <span>© {new Date().getFullYear()} BETONAMUSOFT.PRO</span>
        <a href="mailto:sondangvan1995@gmail.com" className="hover:text-white transition-colors">Sondangvan1995@gmail.com</a>
        <a href="tel:+84773859046" className="hover:text-white transition-colors">+84 773 859 046</a>
      </div>
      <div className="flex gap-6 items-center">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
          SERVER ONLINE
        </span>
        <div className="flex gap-3 text-blue-400 font-bold tracking-tighter">
          <span className="cursor-pointer hover:text-white">EN</span>
          <span className="text-slate-700">/</span>
          <span className="cursor-pointer hover:text-white">VN</span>
        </div>
      </div>
    </footer>
  );
}
