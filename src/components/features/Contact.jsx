import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe, MessageSquare, MapPin } from 'lucide-react';
import { ContactForm } from '../ui/ContactForm';

export function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'srilakshmielluri734@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:srilakshmielluri734@gmail.com',
      color: 'text-red-400',
      bg: 'bg-red-400/10'
    },
    {
      name: 'LinkedIn',
      value: 'elluri-sri-lakshmi',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/elluri-sri-lakshmi-80095a299/',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      name: 'GitHub',
      value: 'srilakshmi-734',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/srilakshmi-734',
      color: 'text-gray-400',
      bg: 'bg-gray-400/10'
    },
    {
      name: 'Location',
      value: 'India',
      icon: <MapPin className="w-6 h-6" />,
      href: '#',
      color: 'text-accent',
      bg: 'bg-accent/10'
    }
  ];

  return (
    <section id="contact" className="py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold dark:text-white mb-6 tracking-tight">
          Let's <span className="text-accent underline decoration-accent/20 underline-offset-8">Connect</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          I'm currently looking for new opportunities and collaborations in AI, ML, and Data Science. Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== 'Location' ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="glass-card glow-border p-6 rounded-3xl flex items-center space-x-6 group cursor-pointer"
            >
              <div className={`p-4 rounded-2xl ${method.bg} ${method.color} transition-transform group-hover:scale-110 duration-300`}>
                {method.icon}
              </div>
              <div className="flex-grow">
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{method.name}</p>
                <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">{method.value}</p>
              </div>
            </motion.a>
          ))}

          {/* Social Proof/Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 p-8 border-l-4 border-accent bg-accent/5 rounded-r-3xl"
          >
            <MessageSquare className="text-accent mb-4" size={32} />
            <p className="text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed font-medium">
              "Data is the foundation, but AI is the architect of the future. I'm excited to help build that future with you."
            </p>
          </motion.div>
        </div>

        {/* Right: Functional Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Elluri Sri Lakshmi — Built with passion for data & intelligent systems.</p>
        <div className="flex items-center space-x-6">
          <a href="mailto:srilakshmielluri734@gmail.com" className="hover:text-accent transition">Email</a>
          <a href="https://github.com/srilakshmi-734" className="hover:text-accent">GitHub</a>
          <a href="https://www.linkedin.com/in/elluri-sri-lakshmi-80095a299/" className="hover:text-accent">LinkedIn</a>
          <span>India</span>
        </div>
      </div>
    </section>
  );
}
