import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKB: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M41.2359,275.1466l-.3354-.6708-1.7442-.6708H35.7351l-2.6162,2.0125,1.8112,2.6833.9392,3.3541h.6037l.6037.6708,1.5429-.6708,1.4758-.6708.5367.6708.4025.6708.7379-.6708h.6708l.5367.6708h.805l1.0062-.6708.805-2.0125h.6708l.5367-.6708h-.3354l-.7379-.6708-1.2746-1.3417H42.98l-1.8783-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKB;

