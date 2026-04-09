import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Cpu, Database, Layout } from 'lucide-react';

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Dynamic Glow Effect */}
      <div className="absolute inset-0 bg-accent/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-105" />
      
      <div className="glass-card glow-border rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden transition-all duration-500">
        {/* Card Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              {project.isAI ? <Cpu size={18} /> : <Layout size={18} />}
            </div>
            {project.isAI && (
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">AI / ML Mode</span>
            )}
          </div>
          <motion.a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2, rotate: 12 }}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors p-1" 
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
          </motion.a>
        </div>

        {/* Content */}
        <Link to={`/projects/${project.id}`} className="block group/content flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover/content:text-accent transition-colors flex items-center tracking-tight">
            {project.title}
            <ArrowUpRight size={20} className="ml-2 opacity-0 -translate-y-1 group-hover/content:opacity-100 group-hover/content:translate-y-0 transition-all" />
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-3 leading-relaxed mb-8">
            {project.shortDescription}
          </p>
        </Link>

        {/* Footer: Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-white/5 mt-auto">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] text-gray-500 font-bold self-center ml-1">+{project.techStack.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
