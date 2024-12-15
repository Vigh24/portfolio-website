import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import BackToTop from './components/BackToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import CursorFollower from './components/CursorFollower';
import ParticlesBackground from './components/ParticlesBackground';
import './styles/animations.css';

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ParticlesBackground />
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Vighnesh Patil. All rights reserved.
          </p>
        </div>
      </footer>
      <ThemeToggle />
      <BackToTop />
      <CursorFollower />
    </div>
  );
}

export default App;