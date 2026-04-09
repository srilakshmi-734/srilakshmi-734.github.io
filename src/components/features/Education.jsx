import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    period: 'Jun 2024 – Apr 2026',
    degree: 'MSc Data Science',
    institution: 'CHRIST (Deemed to be University), Bengaluru',
    details: [
      'Specialization in Machine Learning and AI-driven systems',
      'Hands-on work with LLM integration, data pipelines, and backend systems',
      'Built projects including AI-powered platforms and predictive models',
      'Focus on combining analytics, automation, and real-world applications'
    ],
    side: 'right'
  },
  {
    id: 2,
    period: 'Jun 2021 – May 2024',
    degree: 'BSc Data Science',
    institution: 'Siva Sivani Degree College, Hyderabad',
    details: [
      'Strong foundation in statistics, data analysis, and programming',
      'Applied machine learning techniques to real-world datasets',
      'Worked on data-driven projects involving prediction and analysis',
      'Developed analytical and problem-solving skills through projects'
    ],
    side: 'left'
  }
];

export function Education() {
  return (
    <section id="education" className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white mb-6 tracking-tight">
          Education <span className="text-accent underline decoration-accent/20 underline-offset-8">Timeline</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          My academic journey and specialized training in the world of data and intelligence.
        </p>
      </motion.div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/5 via-accent/20 to-accent/5 hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {educationData.map((item, index) => (
            <div key={item.id} className="relative md:mb-24 last:mb-0">
              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="w-5 h-5 rounded-full bg-accent shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                />
              </div>

              {/* Content Card */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`${item.side === 'right' ? 'md:col-start-2' : 'md:text-right'}`}
                >
                  <div className={`glass-card p-8 md:p-10 rounded-[2.5rem] border-accent/10 hover:border-accent/20 transition-all group relative overflow-hidden active:scale-[0.98]`}>
                    {/* Icon Background Decoration */}
                    <div className="absolute -top-6 -right-6 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                      <GraduationCap size={120} />
                    </div>

                    <div className={`flex flex-col ${item.side === 'left' ? 'md:items-end' : 'items-start'} space-y-4 mb-6`}>
                      <div className="p-3 bg-accent/10 rounded-xl text-accent">
                        <GraduationCap size={24} />
                      </div>
                      <div className={`flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-500`}>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2 text-accent/50" />
                          {item.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-2 text-accent/50" />
                          {item.institution.split(',')[1]?.trim() || 'Remote'}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold dark:text-white tracking-tight leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-accent font-bold tracking-wider uppercase text-sm">
                        {item.institution.split(',')[0]}
                      </p>
                    </div>

                    <ul className={`space-y-3 ${item.side === 'left' ? 'md:text-right' : 'text-left'}`}>
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          {item.side === 'right' && <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />}
                          <span className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
                            {detail}
                          </span>
                          {item.side === 'left' && <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className={`${item.side === 'left' ? 'md:order-last' : 'md:order-first'} hidden md:block`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
