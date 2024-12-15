import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const types = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  return (
    <div
      className={`
        fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white
        flex items-center space-x-3 shadow-lg
        transform transition-all duration-300
        ${types[type]}
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
      `}
    >
      <span>{message}</span>
      <button
        onClick={() => setIsVisible(false)}
        className="hover:opacity-75 transition-opacity"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;