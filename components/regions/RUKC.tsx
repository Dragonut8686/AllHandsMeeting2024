import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKC: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M38.2172,267.0967l-1.0733-1.3417H36.0705l.0671.6708-2.415,1.3417-1.0733-1.3417-1.0733-2.0125-2.2808,1.3417-2.2137,1.3417,2.3479,4.6958,3.69,4.025,2.6162-2.0125h1.8783l.805-1.3417.5367-.6708h-.7379l-.2683-.6708,1.14-.6708h1.5429l.2683-.6708-.8721-.6708h-.9392l-.8721-2.0125Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKC;

