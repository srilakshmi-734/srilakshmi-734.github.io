import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white mb-6 tracking-tight">
            Featured <span className="text-accent underline decoration-accent/20 underline-offset-8">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            A selection of my recent work in Data Science, Machine Learning, and Full-stack AI systems development.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-widest uppercase">
            6 Featured Case Studies
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
