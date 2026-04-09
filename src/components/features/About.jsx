import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-[3rem]"
      >
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Left Side */}
          <div className="md:col-span-1 border-r border-gray-200 dark:border-gray-800 pr-8 hidden md:block">
            <h2 className="text-3xl font-bold dark:text-white mb-4 uppercase tracking-tight">
              About Me
            </h2>
            <div className="w-12 h-1.5 bg-accent rounded-full mb-6"></div>
            <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">
              Data Science Postgraduate | India
            </p>
          </div>

          {/* Right Side */}
          <div className="md:col-span-2 space-y-6 leading-relaxed">

            <h2 className="text-3xl font-bold dark:text-white md:hidden mb-6 uppercase tracking-tight">
              About Me
            </h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              I am a Data Science postgraduate at CHRIST (Deemed to be University) focused on building practical, data-driven systems that combine analytics, machine learning, and application development. I enjoy working across the pipeline — from data preprocessing and modeling to deploying solutions that are usable in real-world scenarios.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              My experience includes developing CampusAI Hub, an AI-powered platform integrating LLM-based responses with database queries, and LEGALOGIC, a compliance assistant designed to automate regulatory workflows. I have also built predictive models for air quality forecasting and fraud detection using techniques such as regression, XGBoost, and statistical analysis.
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              With hands-on experience in Python, SQL, FastAPI, Flask, and Power BI, I am comfortable working across both data and product layers. I am particularly interested in building systems where insights are not only generated but effectively delivered to users.
            </motion.p>

            {/* Paragraph 4 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 dark:text-gray-300 text-lg"
            >
              I am actively seeking opportunities to contribute to data-driven projects, collaborate with strong teams, and grow as a data scientist and developer.
            </motion.p>

          </div>
        </div>
      </motion.div>
    </section>
  );
}