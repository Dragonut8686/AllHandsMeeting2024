import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUME: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M136.9633,205.38V204.71l-1.3417-.6708-.6708-.6708H134.28l-.6708.6708-.626-.6261-.7157-.7156H130.255l-.6708-1.3417-.6708-.6708-.6708-.6708-2.0125-1.3417-2.0125-.6709-.6708.6709-.6708.6708-.6708-.6708h-.6708l-.6708,1.3417.6708,1.3417h-.6708l-.6708,1.3417.6708.6708-.6708,1.3417h2.0125l.6708.6708,3.3541.6708.6708,2.0125v.6708l.6708.6708v1.3417l.6708,2.0125h1.3417l1.3417-.6708h2.0125v-.6708h2.6833l2.0125,1.3417,1.3417-.6708h0l.6708-.6708.6708-.6708-.6708-.6708v-2.6833h-.6708l-.6708-.6708.6708-1.3417V204.71h-1.3417l-.6708.6708h0Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUME;

