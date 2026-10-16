import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "../content";

export function Education() {
  return (
    <section id="education" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  className="w-full md:w-5/12"
                  whileHover={{
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? -5 : 5,
                    rotateX: 5,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div className="flex items-center gap-2 text-purple-400">
                          <Calendar size={16} />
                          <span>{edu.year}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 mb-3">{edu.institution}</p>
                      {edu.description ? <p className="text-gray-400 mb-4">{edu.description}</p> : null}

                      {edu.achievements.length > 0 ? (
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2">
                              <Award size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>

                <div className="hidden md:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-black"
                  />
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
