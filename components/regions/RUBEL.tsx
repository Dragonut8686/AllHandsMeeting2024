import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUBEL: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M61.2266,210.747l1.0733-.6708.1342-1.3417-.6037-1.3417-.6037-.6708-4.025-2.0125-3.1529-1.3417-.7379-.6709-.6037-1.3416h-2.415l-1.2746-1.3417-2.415,4.025.8721.6708,1.3417,1.3417.3354,1.3417.47,1.3417.0671.6708,2.2137.6708,2.1467,1.3417H53.78l-.47,2.6833v2.0125l.8721.6708.8721-.6708.805,2.6833,1.61,2.6833.47-.6708.6037-.6708.6708-1.3417,1.0062-2.0125h.6708l.6708-.6708-.1342-1.3417v-2.0125h.9392l.6708-1.3417h-.9392l-.8721-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUBEL;

