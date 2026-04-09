import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Database, Binary, MessageCircle } from 'lucide-react';

const FlowStep = ({ icon: Icon, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center flex-1 min-w-[120px]"
  >
    <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 relative z-10 shadow-lg group hover:border-${color}-500 transition-colors`}>
      <Icon className={`w-8 h-8 ${color === 'blue' ? 'text-blue-500' : color === 'indigo' ? 'text-indigo-500' : color === 'green' ? 'text-green-500' : color === 'purple' ? 'text-purple-500' : 'text-accent'} mb-2 group-hover:scale-110 transition-transform`} />
      <span className="text-sm font-bold dark:text-gray-300 uppercase tracking-tighter">{label}</span>
    </div>
  </motion.div>
);

const Connector = ({ delay }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="h-[2px] bg-gradient-to-r from-gray-200 dark:from-gray-800 via-accent/30 to-gray-200 dark:to-gray-800 flex-1 min-w-[20px] mx-2 origin-left"
  />
);

export function AIArchitecture() {
  return (
    <div className="bg-gray-50/50 dark:bg-gray-900/50 rounded-[2.5rem] p-8 border border-gray-200 dark:border-white/5 overflow-x-auto">
      <div className="min-w-[800px] flex items-center justify-between py-12 px-4 relative">
        {/* Background Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
        
        <FlowStep icon={MessageSquare} label="User Query" color="blue" delay={0.1} />
        <Connector delay={0.3} />
        <FlowStep icon={Cpu} label="Intent Detection" color="indigo" delay={0.5} />
        <Connector delay={0.7} />
        <FlowStep icon={Database} label="Knowledge DB" color="green" delay={0.9} />
        <Connector delay={1.1} />
        <FlowStep icon={Binary} label="LLM Processing" color="purple" delay={1.3} />
        <Connector delay={1.5} />
        <FlowStep icon={MessageCircle} label="AI Response" color="accent" delay={1.7} />
      </div>
      
      <div className="mt-8 text-center">
        <span className="inline-flex items-center px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-semibold tracking-wide uppercase">
          Hybrid AI System Logic (RAG + Intent)
        </span>
      </div>
    </div>
  );
}
