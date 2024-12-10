import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUMO: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M113.4843,208.7345l-2.0125.6708-1.3417.6708h-.6708v-.6708l-1.3417.6708-1.3417.6708-1.3417-2.6833-1.3417-4.6958-1.3417-.6708h-1.3417l-.6708-.6708-1.3417-1.3417v2.0125l-1.3417.6708-.6708.6708H96.0428l-1.3229.3,1.3229.37.6708,1.3417H95.3719l-.6708-.6708h0v.6708l-1.3417.6708.6708,2.0125,2.0125,1.3416.6708-.6708.6708-.6708,1.3417,2.6833,2.0125,4.025H102.08l1.3417-1.3417,2.0125,2.0125,2.6833,1.3417h2.6833l1.3417.6708,2.6833-4.025.6708-2.6833h-.6708v-.6708h-.6708l-.6708-.6708.6708-.6708-.6708-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUMO;

