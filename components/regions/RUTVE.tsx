import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUTVE: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M90.6761,151.0431l-2.0125-1.3417-.6708.6708-.6708.6708-2.0125.6708-2.0125.6708h-.6708l-.6708-.6708-.6037-.6708-3.69-.6708-3.7567-1.3417-.9392-.6708-.8721-1.3417-1.0733.6708-.9392.6708h.0671l.3354.6708-.6037.6708-.6037.6708v1.3417l-.4025,2.0125L65.4529,156.41l2.8175,3.3541,2.6162,3.3541,3.5554.6708,2.5492.6708.2013,1.3417.2683.6708,1.0062,1.3417.8721.6708,1.8783-.6708,1.4451-.7039h.6588l.68-.6587,1.3388,2.6775,3.9944,1.3684.7018.65,1.3107-1.3211,1.3417.6708,1.3417.6708h.6708l.6708,1.3417v1.3417l2.0125-2.6833,2.0125-.6708-.6708-.6708v-3.3541l.6708-1.3417v-1.3417h1.3417l.8108-.8108.5309-.5309-.6708-.6708,1.3417-.6708h1.3417l.6708-4.025h0L102.08,156.41h-2.0125l-1.3416-.6708h-.6709l-.6708-1.3417-1.3417-.6708h-.6708l-.6708.6708-1.3417-.6708-.6708-.6708h-.6708l-1.3417-2.0125Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUTVE;

