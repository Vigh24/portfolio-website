import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  const toggleTheme = () => {
    setIsDark(!isDark);
    // This will toggle the 'dark' class on the html element
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;