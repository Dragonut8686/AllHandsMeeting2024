import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUAL: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M301.9874,322.1047h-.6708l-.6708-.6708-.6708-.6708-.6708.6708h-.6708l-.6708-.6708-1.3417-1.3417-2.0125.6708-.6708,1.3417.6708,1.3417-1.3417,1.3417-.6708-.6708h-2.0125l-.6708-.6708-.6708-.6708-.6708,1.3417L287.9,324.788h-1.3417l-.6708.6708-.6708.6708h-4.6958l-1.3417.6708-.6708.6708h0l-1.3417-.6708-1.3417.6708,1.3417,1.3417,1.3417,1.3417v2.6833H276.496l1.3417,3.3541,2.0125,2.6833.6708,2.0125.6708,2.0125.6708.6708h.6708l1.3417.6708.6708.6708,2.6833-.6708,2.0125-.6708v.6708l-.6708.6708,3.3541,4.6958h2.6833l1.3417-.6708.6708-1.3417,3.3541.6708h2.0125l.6708-.6708h.6708l.6708.6708,1.3417-2.0125.6708-1.3417-.6708-1.3417V342.9h-.6708L304,342.23l2.0125-1.3417h1.3417v-1.3417l-1.3417-.6708v-2.6833h-.6708l-.6708-.6708v-4.6958l-1.3417.6708-1.3417.6708-2.0125-.6708-.6707-2.0125v-.6708l.6708-.6708V326.13l1.3417-.6708,1.3417-1.3417v-2.0125h-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUAL;

