import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUULY: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M121.5343,220.8094l-.6708-1.3417-2.6833-.6708v-1.3417l-2.0125-1.3417-1.3417-2.0125-2.6833,4.025-1.3417-.6708h-2.6833l.6708,2.6833-.6708,2.6833.6708,1.3417v1.3417l-2.0125,2.6833-2.0125,1.3417,2.0125,2.6834,4.025.6708.6708.6708v.6708l1.3417-2.0125,1.3417-3.3541h2.0125l1.3417-.6708h.6708l1.3417.6708h1.3417l1.3417,1.3417,2.0125,1.3417.6708-.6708H126.23l1.3417-2.0125.6708-1.3417-1.3417-2.0125v-2.0125l-.6708-1.3417h-3.3541l-1.3417-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUULY;

