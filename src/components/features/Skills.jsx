import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '../ui/SkillCard';

const skillCategories = [
  {
    category: 'ML/AI',
    skills: ['Scikit-learn', 'XGBoost', 'NLP', 'LLMs', 'Explainable AI']
  },
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'R', 'JavaScript', 'Bash']
  },
  {
    category: 'Data Tools',
    skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'Matplotlib']
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Flask', 'React', 'Node.js', 'Express']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Visualization',
    skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Excel']
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Docker', 'Nginx', 'Vercel', 'Git']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white mb-6 tracking-tight">
            Skills <span className="text-accent underline decoration-accent/20 underline-offset-8">&</span> Technologies
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
            A comprehensive overview of my technical expertise in Data Science, Machine Learning, and Full-stack Engineering.
          </p>
        </div>
        <div className="hidden md:flex space-x-12 pb-2">
          {/* <div className="text-center">
            <div className="text-4xl font-black text-accent">20+</div>
            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-2 font-bold">Tools</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent">6+</div>
            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-2 font-bold">Domains</div>
          </div> */}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.category}
            category={category.category}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 glass-card rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 border-accent/10 hover:border-accent/20 transition-colors group"
      >
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-bold dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            What I'm Exploring Now
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md leading-relaxed font-medium">Currently researching advanced architectures in Decision Intelligence and LLM optimization.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-lg">
          {['Explainable AI', 'LLM Agents', 'Decision Intelligence', 'MLOps'].map((item) => (
            <span
              key={item}
              className="px-6 py-3 bg-accent/10 border border-accent/20 text-accent rounded-2xl text-sm font-bold tracking-wide hover:bg-accent/20 transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
