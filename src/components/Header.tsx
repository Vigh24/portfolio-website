import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Education</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-gray-600 dark:text-gray-300" /> : <Menu size={24} className="text-gray-600 dark:text-gray-300" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "opacity-100 translate-y-0 shadow-lg" 
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {[
              { href: '#about', label: 'About' },
              { href: '#education', label: 'Education' },
              { href: '#experience', label: 'Experience' },
              { href: '#projects', label: 'Projects' },
              { href: '#skills', label: 'Skills' },
              { href: '#contact', label: 'Contact' }
            ].map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                          transition-all duration-300 transform hover:translate-x-2
                          ${isMenuOpen ? 'animate-slide-left' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}

            {/* Additional mobile menu items */}
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg 
                         hover:bg-blue-700 transition-colors animate-fade-in"
                style={{ animationDelay: '300ms' }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;