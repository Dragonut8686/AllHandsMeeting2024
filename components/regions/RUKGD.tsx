import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKGD: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M20.5073,116.16Zm3.0187-.6708.805-.6708-.805.6708-.7379.6708h.0671Zm6.6412,2.0125h0l-3.8237-.6708-.9392-1.3417-1.0733-.6708-.805.6708-.6708.6708h.2683l.7379,2.0125-1.5429-.6708-2.0125-.6708,2.8175,5.3666,3.22,4.6958,1.8783,2.6833h.6037l.7379-.6708,2.3479-.6708-.6037-4.6958-.2012-2.0125-.0671-2.0125-.3354-.6708h-.8721l-.7379.6708-.7379.6708-1.2075-1.3417-.47-1.3417h3.4883Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKGD;

