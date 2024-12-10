import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUSAM: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M129.5842,229.53l-1.3417-2.0125-.6708,1.3416-1.3417,2.0125h-1.3417l-.6708.6708h0l-2.0125-1.3417-1.3417-1.3417h-1.3417l-1.3417-.6708h-.6708l-1.3417.6708h-2.0125l-1.3417,3.3541-1.3417,2.0125v.6708l.6708,1.3417V237.58l.6708.6708,1.3417.6708v2.0125h.6708v2.0125h0l.6708.6708.6708,2.6833.6708,2.0125,5.3666-.6708,2.0125-2.0125,2.6833-1.3417.6708-.6708h1.3417l1.3417-1.3417,1.3417-2.0125,1.3417-.6708,1.3417-.6708,1.3417-2.6833,2.0125-.6708-1.3417-1.3417h-.6708v-2.0125l-.6708-.6708-1.3417-1.3417h-1.3417l-1.3417.6708-.6708-.6709Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUSAM;

