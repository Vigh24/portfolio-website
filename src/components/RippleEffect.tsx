import React, { useState, useEffect } from 'react';

interface RippleProps {
  color?: string;
}

const RippleEffect: React.FC<RippleProps> = ({ color = 'rgba(255, 255, 255, 0.35)' }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number; }[]>([]);

  useEffect(() => {
    const cleanup = ripples.filter((ripple) => Date.now() - ripple.id < 1000);
    if (cleanup.length !== ripples.length) {
      setRipples(cleanup);
    }
  }, [ripples]);

  const addRipple = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples([...ripples, { x, y, id: Date.now() }]);
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute animate-ripple rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            backgroundColor: color,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;