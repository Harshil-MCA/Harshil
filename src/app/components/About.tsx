import { motion } from "motion/react";
import { highlights, certifications, languages, softSkills } from "../content";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I am an early-career technology professional with an MCA and a B.Sc. in
                  Computer Science, interested in software development, full-stack
                  engineering, data analytics, and cybersecurity.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My practical work includes web and mobile applications, REST API
                  integration, database design, Python-based data processing and EDA,
                  interactive Power BI reporting, computer vision, and AI-assisted features.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 10,
                  z: 50,
                }}
                className="relative group h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity" />
                <div className="relative h-full bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl mb-4 text-white">Certifications</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {certifications.slice(0, 4).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl mb-4 text-white">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl mb-4 text-white">Core Strengths</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
