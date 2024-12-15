import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
        ${hover ? 'hover:-translate-y-1 hover:shadow-lg transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;