import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUYAR: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M106.776,161.7764l.6708-.6708-2.0125-.6708-.6708.6708.6708.6708Zm4.6958.6708h-.6708l-.6708.6708-2.0125-1.3417V164.46l-.6708,2.0125-1.3417,1.3417v-2.0125l-2.0125.6708-.6708-.6708.6708-.6708h.6708l-.6708-4.025H102.751l-1.3417.6708.6708.6708-.6708.6708-.6708.6708H99.3969v1.3417l-.6708,1.3417v3.3541l.6708.6708-2.0125.6708-2.0125,2.6833v2.6833l2.0125,2.0125,2.6833-.6708,3.3542-1.3417,3.3542,1.3417,4.025-2.6833,4.6958-2.0125V172.51l.6708-1.3417-2.6833-3.3542V164.46l-2.0125-2.0125Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUYAR;

