import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

// List of skills with icons
const skills = [
  { name: 'React', icon: <FaReact className="w-8 h-8" />, color: 'text-blue-400' },
  { name: 'Django', icon: <SiDjango className="w-8 h-8" />, color: 'text-green-400' },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, color: 'text-yellow-400' },
  { name: 'Python', icon: <FaPython className="w-8 h-8" />, color: 'text-purple-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, color: 'text-cyan-400' },

  { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, color: 'text-indigo-400' },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, color: 'text-red-400' },
];

function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ABOUT ME
        </motion.h2>

        {/* About Box */}
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-2xl mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            className="text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            I'm <span className="font-bold text-blue-400">Mihad</span>, a Full Stack Developer passionate about building modern, user-friendly web applications.
            <br /><br />
            I specialize in <span className="font-bold text-purple-400">React</span> for intuitive frontends and <span className="font-bold text-amber-400">Django</span> for scalable backends, ensuring seamless digital experiences.
            <br /><br />
            I love solving real-world problems with clean, efficient, and maintainable code.
            <br /><br />
            Let’s build something amazing together! 🚀
          </motion.p>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-4">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg bg-gray-700 bg-opacity-50 text-center flex flex-col items-center justify-center gap-2 ${skill.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span className="text-sm font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;