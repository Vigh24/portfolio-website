import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;