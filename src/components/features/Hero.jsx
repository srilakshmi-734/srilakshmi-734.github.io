import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import profileImg from '../../assets/Profession_Lakshmi.png';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Profile Image Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-2 lg:order-1 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Pulsing Ring */}
            <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping opacity-20" />

            {/* Profile Image Container */}
            <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-br from-accent via-accent/50 to-transparent shadow-[0_0_50px_rgba(99,102,241,0.3)] group">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#0B0F19] overflow-hidden flex items-center justify-center border-4 border-white dark:border-[#0B0F19]">
                <img
                  src={profileImg}
                  alt="Elluri Sri Lakshmi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl text-accent font-bold text-sm border-accent/20 border"
            >

            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl text-blue-400 font-bold text-sm border-blue-400/20 border"
            >

            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2 space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 glass-card rounded-full border-accent/20 border text-accent font-semibold text-sm tracking-widest uppercase mb-2">
              Data Scientist | AI/ML Engineer
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-extrabold leading-tight tracking-tighter text-gray-900 dark:text-white">
              Elluri<br />
              <span className="text-accent text-glow">Sri Lakshmi</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Building data-driven systems that combine machine learning, AI, and real-world decision-making. Focused on creating intelligent, scalable solutions with a strong emphasis on explainability and impact.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
            <Button
              size="lg"
              className="group h-14 px-8 bg-accent hover:bg-accent/90 text-white rounded-2xl shadow-lg shadow-accent/20"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a
              href="/resume.pdf"
              download="Sri_Lakshmi_Elluri_Resume.pdf"
              className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all group"
            >
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:bg-accent/10 transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-semibold uppercase tracking-wider text-sm border-b border-transparent hover:border-accent pb-1 transition-all">Resume</span>
            </a>

            <div className="flex items-center space-x-4 border-l border-gray-800 pl-6 h-8">
              <a href="https://github.com/srilakshmi-734" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/elluri-sri-lakshmi-80095a299/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
