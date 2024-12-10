import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKOS: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M126.23,171.168l-.6708-.6708h-.6708v-1.3417l-.6708.6708-.6708.6708-2.0125-.6708-2.0125-.6708-.6708.6708v.6708l-2.6833.6708-.6708,1.3417v.6708l-4.6958,2.0125-4.025,2.6833,4.6958,2.6833,1.3417-.6708.6708-.6708.6708,1.3417.6708,1.3417,1.3417.6708,1.3417.6708-.6708,1.3417-.6708.6708H118.18l1.3417,2.0125,2.6833,1.3417h2.6833l1.3417-1.3417.6708-.6708,2.0125,2.0125v1.3417h1.3417l2.6833.6708,1.3417-.6708,2.0125-1.3417h.6708l1.3417.6708V188.61h2.6833l1.3417-.6708v-2.0125l.6708-2.0125.6708-1.3417-.6708-1.3417-1.3417-.6708-.6708.6708-.6708.6708h-.6708l-1.3417-.6708-.6708.6708h-.6708l-4.6958-3.3541-.6708-1.3417-.6708-1.3417-1.3417-.6708-.6708-.6708h0v-.6708l-2.6833-.6708v-2.0125Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKOS;

