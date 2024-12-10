import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUPNZ: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M103.4218,214.1011l-1.3417,1.3417h-1.3417l-2.0125-4.025-1.3417-2.6833-.6708.6708-.6708.6708L94.03,208.7345l-.6708-2.0125H92.0177l-.6708.6708-.6708,1.3417-.6708.6708.6708.6708h0v1.3417l-1.3417.6708.6708,2.0125v3.3541l-.6708.6708-1.3417.6708,1.3416,2.0125,2.0125.6708.6708,1.3417.6708.6708H94.03l.6708.6708.6708.6708v.6708l2.0125,1.3417,1.3416.6709h.6708v1.3417l2.0125-.6708h1.3417l1.3417.6708.6708.6708,2.0125-1.3417,2.0125-2.6833v-1.3417l-.6708-1.3417.6708-2.6833-.6708-2.6833-2.6833-1.3417-2.0125-2.0125Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUPNZ;

