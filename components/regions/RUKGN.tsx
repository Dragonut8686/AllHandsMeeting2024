import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKGN: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M202.0338,247.6426H198.68l-2.0125,1.3417-1.3417-1.3417-.6708-.6708h-1.3417l-1.3417-1.3417-1.3417-.6708-2.0125.6708-2.0125,1.3417v3.3541l-.6708,2.6833h-1.3417l-.6708.6708h-.6708v.6708l-.6708,1.3417-.6708.6708-1.3417,1.3417,2.6833,2.0125,2.0125,1.3417v1.3417l-1.3417.6708.6708,1.3417h0v1.3417l3.3541.6708,3.3541.6708,1.3417.6708.6708.6708.6708-.6708.6708-.6708h1.3417l2.0125.6708.6708.6708,5.3666.6708,5.3666.6708.6708-.6708.6708-.6708h.6708l1.3417.6708.6708-.6708h.6708l-1.3417-2.6833-.6708-2.0125h-.6708l-1.3417-.6708-.6708-.6708-.6708-2.0125L207.4,258.3758l-.6708-.6708-.6708.6708-.6708-.6708v-.6708h-2.0125v-2.6833l-1.3417-.6708-1.3417-.6708v-2.6833l.6708-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKGN;

