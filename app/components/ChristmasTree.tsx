import React from 'react';

interface ChristmasTreeProps {
  className?: string;
}

const ChristmasTree: React.FC<ChristmasTreeProps> = ({ className = '' }) => {
  return (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 100 100">
      <polygon points="50,10 20,90 80,90" fill="green" />
      <rect x="45" y="90" width="10" height="10" fill="brown" />
      <circle cx="35" cy="50" r="3" fill="red" />
      <circle cx="65" cy="60" r="3" fill="yellow" />
      <circle cx="50" cy="40" r="3" fill="blue" />
      <polygon points="48,10 52,10 50,0" fill="yellow" />
    </svg>
  );
};

export default ChristmasTree;

