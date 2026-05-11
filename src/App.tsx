/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from "./components/About";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Process />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-50 bg-dark-navy pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

