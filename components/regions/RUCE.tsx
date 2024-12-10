import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUCE: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M50.2921,282.5257l-.2683-.6708-1.0062.6708-1.4758.6708H46.938l.5367.6708,1.4758,1.3417-1.4087,2.6833h-.1342l-.2683.6708h0l-2.1467.6708-1.8783-.6708.7379-.6708H41.2359l.2012.6708-.1342.6708h.9392l1.0733,1.3417.3354,1.3417.1342.6708.7379.6708.7379,1.3417L46.67,293.93h1.4758l.7379.6708.2683-.6708h2.415l.6708-1.3417,1.14-2.0125,1.6771-.6708,1.4758-.6708.2012-1.3417-.3354-1.3417H54.1159l.0671-.6708.2012-.6708h-.8721l-.9392-.6708-.0671-.6708-.1342-.6708H50.8288l-.5367-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUCE;

