import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUSAR: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M99.1042,227.5177H98.726l-1.3417-.6708-2.0125-1.3417v-.6708l-.6708-.6708-.6708-.6708H92.6886l-.6708-.6708-.6708-1.3417-2.0125-.6708-1.3417-2.0125-3.2678,1.3071L81.4186,221.48l.1342,2.0125-.9392,2.6833.4025,2.6833,1.61,1.3417h2.0125v.6708l.6708.6708h1.3417v1.3417h.6708l.6708.6708.6708,2.0125L87.3219,237.58l-1.3417.6708h0l.6708.6708h.6708v.6708l.6708.6708h0l.6708-.6708h.6708l.6708.6708v1.3417l1.3417.6708h1.3417l.6708,2.0125,1.3417,2.6833v.6708l2.0125,3.3541v4.025l3.3541-1.3417.6708-2.0125.6708-2.0125h.6708v.6708l.6708.6708h3.3541l.6708-.6708.6708-1.3417,5.3666,1.3417,1.3417-.6708,1.3417-.6708.6708.6708h.6708v-1.3417l-.6708-2.0125-.6708-2.6833-.6708-.6708h0v-2.0125h-.6708v-2.0125l-1.3417-.6708-.6708-.6708v-1.3417l-.6708-1.3416v-1.3417l-.6708-.6708-4.025-.6708-2.0125-2.6833-.6708-.6708-1.3417-.6708h-1.3417l-2.0125.6708v-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUSAR;

