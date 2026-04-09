import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Database, BarChart3, Radio, Layers, CheckCircle2, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ResearchDetails() {
  const findings = [
    "Hybrid models outperform traditional and standalone machine learning models",
    "LSTM + XGBoost achieves highest accuracy and lowest RMSE",
    "ARIMA is limited in capturing complex nonlinear relationships",
    "Ensemble learning improves prediction reliability",
    "Model effectively captures both temporal trends and variable interactions"
  ];

  const methodology = [
    "Multivariate time-series analysis",
    "ARIMA for linear trends",
    "LSTM for temporal learning",
    "XGBoost for nonlinear modeling",
    "Hybrid ensemble models (LSTM + XGBoost)",
    "Feature engineering and preprocessing"
  ];

  const metrics = [
    { title: "Hybrid Models", icon: <Layers className="w-6 h-6" />, description: "Advanced Ensemble" },
    { title: "Multivariate Data", icon: <Database className="w-6 h-6" />, description: "Rich Feature Set" },
    { title: "CO₂ Forecasting", icon: <BarChart3 className="w-6 h-6" />, description: "Precision Analytics" },
    { title: "ML + Statistical", icon: <Radio className="w-6 h-6" />, description: "Hybrid Approach" }
  ];

  const tags = ["Time Series Forecasting", "Hybrid Models", "LSTM", "XGBoost", "ARIMA", "Climate Analytics"];

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen transition-colors duration-500 bg-[#F9FAFB] dark:bg-[#0B0F19]">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-accent font-bold uppercase tracking-widest text-xs transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black dark:text-white leading-tight mb-8">
            Multivariate Forecasting of <span className="text-accent">CO₂ Emissions</span> Using Hybrid Machine Learning Models
          </h1>

          <div className="flex flex-wrap gap-8 items-start">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Author</p>
              <p className="text-gray-900 dark:text-gray-300 font-medium">Elluri Sri Lakshmi</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Affiliation</p>
              <p className="text-gray-900 dark:text-gray-300 font-medium">CHRIST (Deemed to be University)</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Dataset</p>
              <p className="text-gray-900 dark:text-gray-300 font-medium">Our World in Data (OWID)</p>
            </div>
          </div>
        </motion.header>

        {/* Abstract Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] mb-12 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent/10 rounded-2xl text-accent">
              <BookOpen size={24} />
            </div>
            <h2 className="text-2xl font-bold dark:text-white uppercase tracking-tight">Abstract</h2>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
            <p>
              This study focuses on forecasting carbon dioxide (CO₂) emissions using multiple environmental and economic factors such as GDP, energy consumption, renewable energy usage, and population data. The challenge lies in accurately modeling the complex and interconnected relationships between these variables. Traditional models often fail to capture these dynamics effectively.
            </p>
            <p>
              To address this, a hybrid machine learning approach is proposed, combining statistical and advanced models. ARIMA is used for capturing linear patterns, while LSTM handles temporal dependencies, and XGBoost models nonlinear relationships. Ensemble techniques, particularly LSTM + XGBoost, are used to improve prediction performance.
            </p>
            <p>
              The results demonstrate that hybrid models significantly outperform individual models, achieving lower prediction errors and near-perfect accuracy (R² close to 1.0). This approach provides a more reliable solution for real-world climate forecasting and sustainability decision-making.
            </p>
          </div>
        </motion.section>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl text-center border border-gray-100 dark:border-white/5"
            >
              <div className="mx-auto w-12 h-12 bg-accent/10 rounded-2xl text-accent flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <h3 className="text-sm font-bold dark:text-white mb-1 uppercase tracking-wider">{metric.title}</h3>
              <p className="text-xs text-gray-500 font-medium">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Key Findings */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold dark:text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full" />
              Key Findings
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              {findings.map((finding, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="font-medium leading-relaxed">{finding}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Methodology */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold dark:text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full" />
              Methodology
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              {methodology.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-white/5"
        >
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 rounded-2xl text-xs font-bold uppercase tracking-widest border border-gray-200 dark:border-white/5 hover:border-accent/40 hover:text-accent transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
