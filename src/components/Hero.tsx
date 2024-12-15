import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const workspaceImages = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1000&q=80", // Clean code on dark screen
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80", // Developer workspace with code
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1000&q=80", // Modern workspace with multiple monitors
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-400/10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in">
                Vighnesh Patil
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 animate-fade-in delay-200">
                Full Stack Developer specializing in Web Development, IoT, and Mobile Applications
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in delay-300">
              <a
                href="https://drive.google.com/file/d/147oCv5-e8Uf0HJAPJ6uecfRcGoUM9yjW/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
                         shadow-lg hover:shadow-blue-500/25"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Vigh24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg 
                           hover:bg-gray-700 dark:hover:bg-gray-600 transform hover:scale-105 
                           transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/vighneshpatil2410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:vigneshpatil2486@gmail.com"
                  className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg hover:shadow-red-500/25"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 animate-fade-in delay-400">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-lg blur-lg"></div>
              <img
                src={workspaceImages[0]}
                alt="Developer workspace"
                className="relative rounded-lg shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;