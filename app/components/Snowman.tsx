import React from 'react';

interface SnowmanProps {
  className?: string;
}

const Snowman: React.FC<SnowmanProps> = ({ className = '' }) => {
  return (
    <svg className={`w-6 h-6 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 ${className}`} viewBox="0 0 100 100">
      <circle cx="50" cy="70" r="30" fill="white" />
      <circle cx="50" cy="30" r="20" fill="white" />
      <circle cx="45" cy="25" r="2" fill="black" />
      <circle cx="55" cy="25" r="2" fill="black" />
      <path d="M 45 35 Q 50 40 55 35" stroke="black" strokeWidth="2" fill="none" />
      <path d="M 50 30 L 50 40" stroke="orange" strokeWidth="4" />
    </svg>
  );
};

export default Snowman;

