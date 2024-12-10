import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUORL: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M68.002,185.9263l-2.6833-.6708-2.6833-.6708-.2683.6708h-.47l-1.4758.6708H59.3483l-.2683.6708-.2012,1.3417-1.61.6708-.7379,1.3417.8721.6708,1.14.6708v2.0125l1.7442.6708,1.2746.6708.0671,1.3417.1342,2.0125.6708.6708.6708.6708-.2012.6708v1.3417H63.91l.2012.6708h.47l2.2137-.6708.805.6708.2012-1.3417-.0671-.6708.3354-.6708.4025-1.3417,2.8175-1.3417-.0671-2.0125.1342-1.3417-.6708-.6708-.7379-.6708L68.4716,189.28l-.47-3.3541Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUORL;

