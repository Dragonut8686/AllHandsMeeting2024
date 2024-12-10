import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUYEV: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M552.8777,336.1921h-2.0125l-1.3416-.6711-.6709,0-2.0125-2.0125-.6708-.6708h-1.3417l-1.3417.6708-1.3417-.6708h-1.3417l-.6708,1.3417-.6708.6708H538.79l-2.6833,1.3417-.6708.6708-.6708,2.0125-.6708,1.3417V342.9l.6708.6708,1.3417,1.3417v1.3417l.6708,1.3417.6708.6708.6708.6708h0l1.3417.6708,1.3417-.6708h.6708l4.025-2.0125H546.84l.6708-1.3417V344.242l1.3417-.6708,1.3417-1.3417h1.3417l1.3417-2.6833,2.0125-1.3417h2.6833l2.0125-1.3417-.6708-1.3417h0l-.6708-1.3417-1.3417.6708h-2.6833l-1.3417,1.3417h0Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUYEV;

