import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useState } from "react";
import { profile } from "../content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const socialLinks = [
    { Icon: Github, href: profile.github, label: "GitHub" },
    { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      onPointerMove={(event) => {
        if (event.pointerType !== "touch") {
          const rect = event.currentTarget.getBoundingClientRect();
          setPointer({ x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 });
        }
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
          style={{ x: pointer.x * 28, y: pointer.y * 18, opacity: 0.7 + Math.abs(pointer.y) * 0.3 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
          style={{ x: pointer.x * -22, y: pointer.y * -14, opacity: 0.65 + Math.abs(pointer.y) * 0.35 }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 inline-block relative z-20"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl pointer-events-none -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl shadow-purple-500/20 bg-black">
                <ImageWithFallback
                  src={profile.avatarUrl}
                  alt={`${profile.name} profile photo`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/15 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-4xl text-gray-300 mb-6 max-w-5xl mx-auto"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ scale: 1.05, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white flex items-center gap-2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-500 rounded-lg text-white hover:bg-purple-500/10 flex items-center gap-2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ scale: 1.2, rotateZ: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/50 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500"
                style={{ transformStyle: "preserve-3d" }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center pointer-events-none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-hidden="true"
          >
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
