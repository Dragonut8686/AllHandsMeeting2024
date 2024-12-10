import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUTAM: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M88.6636,204.71l-.6708.6708H86.6511L85.98,204.71l-.6708-1.3417H83.297l-1.3417-.6708L79.0036,204.71l-2.3479,2.6833.6708,4.025-1.0733.6708-1.2746.6708.5367.6708.6708.6708-.3354,1.3417-.2013.6708,1.2075.6708,1.4087.6708.7379,1.3417.6708,1.3417h1.0062l-.1342.6708.8721.6708,3.22-1.3417,3.3542-1.3417,1.3417-.6708.6708-.6708v-3.3541l-.6708-2.0125,1.3417-.6708v-1.3417h0l-.6708-.6708.6708-.6708.6708-1.3417.6708-.6708h0Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUTAM;

