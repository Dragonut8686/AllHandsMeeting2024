import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUIVA: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M117.5093,183.243l-1.3417-.6708-1.3417-.6708-.6708-1.3417-.6708-1.3417-.6708.6708-1.3417.6708-4.6958-2.6833-3.3542-1.3417-3.3541,1.3417h0l.6708,2.0125-.6708,2.6833h2.6833l.6708,1.3417.6708,1.3417,2.0125,2.0125h.6708V189.28l1.3417.6708,1.3417.6708h.6708l.6708.6708.6708-.6708,1.3417-1.3417,1.3417.6708,1.3417.6708,1.3417-.6708.6708-1.3417,1.3417-.6708h.6708v-.6708l-1.3417-2.0125h-2.0125l.6708-.6708.6708-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUIVA;

