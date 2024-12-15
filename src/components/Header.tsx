import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Education</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#education" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Education</a>
            <a href="#experience" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
            <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
            <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;