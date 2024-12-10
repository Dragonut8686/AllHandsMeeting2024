import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUUD: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M163.1257,208.7345l-1.3417-.6708-.6708-.6708v-.6708l-.6708-.6708h-1.3417l-1.3417-.6708-1.3417-1.3417-2.6833,1.3415-1.3416,4.0251-1.3417.6708h-1.3417l-.6708-.671h-1.3416l-1.3417,2.0125-.6708,2.6833-.6708.6708h-1.3417l-.6708,2.6833-.6708,2.0125.6708.6708H142.33l-1.3417.6708h.6708l.6709.6708,1.3417,1.3417h2.0125v.6708h.6708l.6708.6708,1.3417-.6708v-.6708l-.6708-.6708,1.3417-.6708,1.3417.6708h-.6708v2.6833l.6708-.6708,1.3417.6708-2.0125,1.3417h-2.0125l.6708,1.3417h.6708l1.3417,1.3417.6708,1.3417,1.3417.6708,1.3417-.6708,2.0125-.6708,2.0125-.6708-.6708-1.3417-.6708-2.0125h-.6708l-.6708.6708v-3.3541l.6708-.6708h.6708l.6708-.6708v-.6708l.6708.6708.6708-.6708,2.6833-6.0375,2.0125-6.0375Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUUD;

