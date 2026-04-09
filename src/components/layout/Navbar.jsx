import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setMobileMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      isScrolled 
        ? "bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-xl border-gray-200 dark:border-white/5 py-4 shadow-lg shadow-black/5" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white hover:text-accent transition-colors flex items-center group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-accent group-hover:rotate-12 transition-transform duration-300 mr-1">/</span>
          Sri Lakshmi
          <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={18} className="group-hover:-rotate-12 transition-transform" />
            )}
          </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

          <div className="hidden lg:block border-l border-gray-200 dark:border-white/10 pl-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 bg-accent text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 flex items-center gap-2 group"
            >
              Let's Talk
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card p-8 border-t border-white/5 flex flex-col space-y-6 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-accent transition-colors flex justify-between items-center group"
              >
                {link.name}
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
            <div className="pt-6 border-t border-gray-200 dark:border-white/5 flex justify-center space-x-8 text-gray-500 dark:text-gray-400">
              <a href="https://github.com/srilakshmi-734" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/elluri-sri-lakshmi-80095a299/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:srilakshmielluri734@gmail.com" className="hover:text-accent transition-colors"><Mail size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
