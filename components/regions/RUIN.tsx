import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUIN: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M47.4746,283.8674l-.5367-.6708h-.8721l-.2012-.6708h-.3354l-1.0733,1.3417-.7379,1.3417.6708.6708-.5367,2.0125-.7379.6708,1.8783.6708,2.1467-.6708h0l.2683-.6708h.1342l1.4087-2.6833-1.4758-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUIN;

