import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ArrowLeft, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';
import { AIArchitecture } from '../components/features/AIArchitecture';

export function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4 transition-colors duration-500 bg-[#F9FAFB] dark:bg-[#0B0F19]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-500 hover:text-accent font-bold uppercase tracking-widest text-xs transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-black dark:text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" onClick={() => window.open(project.github, '_blank')}>
                <Github size={18} className="mr-2" />
                View on GitHub
              </Button>
              {project.isAI && (
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 text-accent rounded-xl text-sm font-bold tracking-widest uppercase">
                  Featured AI Project
                </span>
              )}
            </div>
          </motion.div>
        </header>

        {/* Case Study Sections */}
        <div className="space-y-24">
          {/* Overview */}
          <section className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold dark:text-white tracking-wide uppercase text-sm">Problem</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>
          </section>

          {/* Approach */}
          <section className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold dark:text-white tracking-wide uppercase text-sm">Approach</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                {project.approach}
              </p>
            </div>
          </section>

          {/* Special AI Architecture Section */}
          {project.id === 'campus-ai' && (
            <section className="space-y-12 border-t border-gray-800 pt-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold dark:text-white mb-4 tracking-wide uppercase text-sm">AI Architecture Flow</h2>
                <p className="text-gray-500 dark:text-gray-400">Visualization of the hybrid AI system processing pipeline.</p>
              </div>
              <AIArchitecture />
            </section>
          )}

          {/* Features */}
          <section className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold dark:text-white tracking-wide uppercase text-sm">Key Features</h2>
            </div>
            <div className="md:col-span-2">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3 text-gray-500 dark:text-gray-400 group">
                    <CheckCircle2 size={18} className="text-accent mt-1 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors uppercase text-xs font-bold tracking-widest">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="grid md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold dark:text-white tracking-wide uppercase text-sm">Stack</h2>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-5 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:border-accent/40 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Impact/Results */}
          <section className="grid md:grid-cols-3 gap-12 border-t border-gray-800 py-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold dark:text-white tracking-wide uppercase text-sm">Impact</h2>
            </div>
            <div className="md:col-span-2">
              <div className="bg-accent/5 border border-accent/20 rounded-3xl p-8">
                <p className="text-accent text-xl font-bold leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-24 pt-12 border-t border-gray-800 flex justify-between items-center">
          <Link to="/" className="text-gray-500 hover:text-white transition-colors flex items-center font-bold uppercase tracking-widest text-sm">
            <ArrowLeft size={16} className="mr-2" />
            Home
          </Link>
          <div className="flex space-x-4">
             <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">
               <Github size={24} />
             </a>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
