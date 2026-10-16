import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      <footer className="py-10 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-gray-200">Designed &amp; Built by Harshil K</p>
          <p className="text-sm text-purple-300">Software Development • Data Analytics • Cybersecurity</p>
          <p className="text-sm text-gray-500">© 2026 Harshil K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
