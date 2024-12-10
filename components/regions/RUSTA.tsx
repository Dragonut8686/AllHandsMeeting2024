import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUSTA: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M138.9758,212.0886h0l-1.3417.6708-2.0125-1.3417h-2.6833v.6708h-2.0125l-1.3417.6708H126.23v.6708h0l-3.3541.6708v.6708l.6708.6708-.6708,2.0125h-2.6833l-.6708-.6708h-.6708l-.6708.6708v1.3417l2.6833.6708.6708,1.3417,1.3417,1.3417H126.23l.6708,1.3417v2.0125l1.3417,2.0125,1.3417,2.0125,1.3417,1.3417,1.3417-.6708h1.3417l1.3417,1.3417.6708.6709v2.0124h.6708l1.3417,1.3417,1.3417,2.0125h.6708v.6708h0l-.6708.6708v1.3417l1.3417,1.3417,1.3417-2.6833.6708-1.3417v-.6708h1.3417l.6708-.6708.6708-1.3417v-1.3417l-.6708-.6708.6708-.6708v-.6708l.6708.6708,2.6833-.6708,2.6833-1.3417-.6708-1.3417-1.3417-1.3417h-.6708l-.6708-1.3417h2.0125l2.0125-1.3417-1.3417-.6708-.6708.6708v-2.6833h.6708l-1.3417-.6708-1.3417.6708.6708.6708v.6708l-1.3417.6708-.6708-.6708h-.6708v-.6708h-2.0125L142.33,221.48l-.6708-.6708h-.6708l1.3417-.6708h.6709l-.6709-.6708-1.3417-.6708-.6708-2.0125h.6708v-.6708h-.6708V214.772l.6708-2.0125-2.0125-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUSTA;

