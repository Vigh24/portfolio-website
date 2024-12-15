import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
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
import './styles/animations.css';

function App() {
  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white">
      <div className="fixed inset-0 bg-[#1a1f2e]" />
      <BackgroundParticles />
      <div className="relative z-10">
        <ScrollProgressBar />
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="relative py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Vighnesh Patil. All rights reserved.
            </p>
          </div>
        </footer>
        <ThemeToggle />
        <BackToTop />
        <CursorFollower />
      </div>
    </div>
  );
}

export default App;