'use client'

import React, { useEffect, useState } from 'react'

interface ModernGarlandProps {
  position: 'top' | 'bottom';
}

const ModernGarland: React.FC<ModernGarlandProps> = ({ position }) => {
  const [lights, setLights] = useState<number[]>([])

  useEffect(() => {
    const updateLights = () => {
      const isMobile = window.innerWidth <= 640; // Breakpoint для мобильных устройств
      const spacing = isMobile ? 45 : 30; // Уменьшаем расстояние между шарами на мобильных устройствах
      const numberOfLights = Math.floor(window.innerWidth / spacing);
      setLights(Array.from({ length: numberOfLights }, () => Math.random()));
    };

    updateLights();
    window.addEventListener('resize', updateLights);

    const interval = setInterval(() => {
      setLights(prev => prev.map(() => Math.random()));
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateLights);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center h-4 overflow-hidden ${position === 'bottom' ? 'transform rotate-180' : ''}`}>
      {lights.map((light, index) => (
        <div
          key={index}
          className="rounded-full"
          style={{
            backgroundColor: `hsl(${Math.floor(light * 360)}, 100%, 50%)`,
            opacity: 0.3 + light * 0.7,
            transition: 'all 0.5s ease',
            transform: `scale(${0.8 + light * 0.4})`,
            width: window.innerWidth <= 640 ? '0.75rem' : '0.75rem',
            height: window.innerWidth <= 640 ? '0.75rem' : '0.75rem',
          }}
        />
      ))}
    </div>
  )
}

export default ModernGarland

