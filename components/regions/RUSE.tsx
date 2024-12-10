import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUSE: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M44.7913,281.8549l-1.0062.6708H42.98l-.5367-.6708h-.6708l-.7379.6708-.4025-.6708-.5367-.6708-1.4758.6708-1.5429.6708-.6037-.6708h-.6037l1.0062,3.3541.0671,1.3417,1.9454.6708,2.3479.6708h2.6162l.5367-2.0125-.6708-.6708.7379-1.3417,1.0733-1.3417h.3354l.2012.6708h1.4758l-.2683-2.0125-1.6771-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUSE;

