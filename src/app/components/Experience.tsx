import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { internships } from "../content";

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Internship Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.article key={internship.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-7 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"><Briefcase size={24} /></div>
                  <div>
                    <h3 className="text-xl text-white">{internship.title}</h3>
                    <p className="text-purple-300">{internship.organization}</p>
                  </div>
                </div>
                <p className="flex items-center gap-2 text-sm text-cyan-300 mb-4"><Calendar size={16} />{internship.dates}</p>
                <p className="text-gray-300 leading-relaxed">{internship.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
