import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, MapPin, Search, ArrowRight, ExternalLink } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white mb-6 tracking-tight">
            Experience <span className="text-accent underline decoration-accent/20 underline-offset-8">&</span> Research
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
            Professional trajectory and academic contributions to the fields of Data Science and AI Systems.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="glass-card glow-border p-10 md:p-14 rounded-[3rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Briefcase size={100} />
          </div>

          <div className="flex items-start space-x-6 mb-10">
            <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent/20 transition-colors">
              <Briefcase size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold dark:text-white tracking-tight uppercase">Product Developer Intern</h3>
              <p className="text-accent font-bold mt-2 tracking-widest uppercase text-sm">CampusAI Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-10 text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center">
              <Calendar size={16} className="mr-3 text-accent/50" />
              Feb-Mar 2026
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-3 text-accent/50" />
              India
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl italic font-medium">
            "Worked on CampusAI Hub with full-stack AI system development and deployment, focusing on intent-driven architecture and production-ready ML services."
          </p>

          <div className="mt-12 flex items-center text-accent text-sm font-bold tracking-widest uppercase">
            Product AI Development
            <div className="ml-4 flex-grow h-[1px] bg-accent/20" />
          </div>
        </motion.div>

        {/* Research Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="glass-card glow-border p-10 md:p-14 rounded-[3rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Search size={100} />
          </div>

          <div className="flex items-start space-x-6 mb-10">
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              <Search size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold dark:text-white tracking-tight uppercase">Research Publication</h3>
              <p className="text-blue-500 font-bold mt-2 tracking-widest uppercase text-sm">IEEE Explorer</p>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-10 text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center">
              <Calendar size={16} className="mr-3 text-blue-500/50" />
              Recent
            </div>
            <div className="flex items-center">
              <Search size={16} className="mr-3 text-blue-500/50" />
              CO₂ Forecasting
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl font-medium">
            Contribution to a research paper on <b>CO₂ forecasting</b> using hybrid machine learning models, exploring environmental data and predictive analytics.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/research/co2-forecasting"
              className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-2xl hover:bg-accent/90 transition-all font-bold group/btn uppercase tracking-widest text-xs shadow-lg shadow-accent/20"
            >
              View Details
              <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://ieeexplore.ieee.org/document/11436999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all font-bold group/btn uppercase tracking-widest text-xs"
            >
              View on IEEE
              <ExternalLink className="ml-3 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
