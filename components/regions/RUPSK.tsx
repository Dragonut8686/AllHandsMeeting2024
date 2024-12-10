import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUPSK: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M77.5278,126.8933l-.5367-1.3417-.6708-2.0125-1.4758,2.0125-1.5429,1.3417h-2.08l-1.0733,1.3417.47.6708.3354.6708-1.0063,2.0125-.9392-.6708.2683-.6708.2012-.6708h-.4025l-.1342.6708H68.27l-.5367-.6708-1.2075.6708H65.2516v.6708H65.52l-.0671.6708-.6708,2.0125-1.5429,1.3417-1.6771.6708.1342.6708.0671.6708-1.6771,2.0125-2.2137,2.6833h-.0671l.0671.6708.5367.6708.6708.6708-.2683.6708-.0671.6708h.6037l.8721,1.3417-.805,2.0125-.5367.6708H59.885l.5367.6708h1.14l1.2075,3.3541v1.3417l.3354.6708h1.4087l.9392,1.3417,3.4212-2.6833.4025-2.0125v-1.3417l.6037-.6708.6037-.6708-.3354-.6708h-.0671l.9392-.6708,1.0733-.6708-.1342-1.3417,1.2075-1.3417.3354-1.3417,2.0125-.6708.1342-.6708.0671-.6708h.805l.6038-.6708-.6708-2.0125-.47-2.6833,3.3541-1.3417L78.3328,132.26l.47-2.6833-.6037-1.3417-.6708-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUPSK;

