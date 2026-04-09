import React from 'react';
import { Hero } from '../components/features/Hero';
import { About } from '../components/features/About';
import { Skills } from '../components/features/Skills';
import { Projects } from '../components/features/Projects';
import { Education } from '../components/features/Education';
import { Experience } from '../components/features/Experience';
import { Contact } from '../components/features/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

export function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      
      <div className="space-y-12">
        <About />
        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent max-w-7xl mx-auto" />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
