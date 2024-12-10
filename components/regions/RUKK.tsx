import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKK: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M317.4165,301.98l-1.3417-1.3417-1.3417.6708h-2.0125l-2.0125-2.0125-2.0125-2.0125-.6708.6708v3.3541l-.6708,2.0125-.6708,2.6833h2.0125l1.3417,1.3417-.6708.6708-.6708.6708.6708,1.3417-.6708,1.3417h-.6708l-1.3417,1.3417v1.3417l.6708,2.0125-.6708,1.3417.6708,1.3417.6708,2.0125-2.6833,2.0125-2.6833,1.3417-1.3417,1.3417-1.3417.6708v2.0125l-.6708.6708v.6708l.6708,2.0125,2.0125.6708,1.3417-.6708,1.3417-.6708,2.6833.6708h2.6833v-3.3541l2.0125-.6708,2.0125-.6708.6708-2.0125,1.3417-1.3417.6708-.6708h1.3417l1.3417-2.6833v-.6708l1.3417-.6708,1.3417-1.3417v-.6708l-.6708-.6708-.6708-.6708v-.6708h0l-.6708-.6708,1.3417-3.3541-1.3417-4.025-.6708-4.025-2.0125-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKK;

