import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUVLA: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M102.2813,182.5721h-2.2135l.6708-2.6833-.6708-2.0125h0l-2.6833.6708-2.0125-2.0125v-2.0125l-1.9782,3.319-1.3388,4.0375.6588.6587.68,1.3388,2.0188,2.0188L94.03,189.9513l2.0125,2.6833,2.6833,3.3541,2.6833-.6708,2.0125-1.3417,2.0125-.6708h3.3541v-.6708l.6708-.6708v-1.3417l-1.3417-.6708-1.3417-.6708V187.268h-.6708l-2.0125-2.0125-.6708-1.3417-.6709-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUVLA;

