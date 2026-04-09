import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  BarChart3, 
  Globe, 
  Cloud, 
  Code2,
  Layers,
  Terminal,
  Zap
} from 'lucide-react';

const icons = {
  'ML/AI': <Cpu className="w-5 h-5 text-indigo-400" />,
  'Programming': <Code2 className="w-5 h-5 text-orange-400" />,
  'Data Tools': <BarChart3 className="w-5 h-5 text-pink-400" />,
  'Backend': <Terminal className="w-5 h-5 text-yellow-400" />,
  'Databases': <Database className="w-5 h-5 text-green-400" />,
  'Cloud': <Cloud className="w-5 h-5 text-sky-400" />,
};

export function SkillCard({ category, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="glass-card glow-border p-6 rounded-[2rem] group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors">
            {icons[category] || <Zap size={20} className="text-accent" />}
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg tracking-tight uppercase">{category}</h3>
        </div>
        <div className="w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent animate-pulse" />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div 
            key={skill}
            className="px-4 py-2 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group/item cursor-default"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
