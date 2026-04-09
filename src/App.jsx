import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { ResearchDetails } from './pages/ResearchDetails';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import VideoBackground from "./components/ui/VideoBackground";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen text-gray-900 dark:text-gray-300 relative transition-colors duration-500 overflow-x-hidden">
          <VideoBackground />

          <div className="relative z-10">

            {/* Scroll Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
              style={{ scaleX }}
            />

            <Navbar />
            <main>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects/:id" element={<ProjectDetails />} />
                  <Route path="/research/co2-forecasting" element={<ResearchDetails />} />
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
