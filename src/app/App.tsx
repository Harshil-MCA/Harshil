import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { profile } from "./content";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            Â© 2026 {profile.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
