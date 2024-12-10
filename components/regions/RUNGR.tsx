import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUNGR: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M86.6511,135.614v-.6708H84.6386l-1.3417.6708-.6708-1.3417-.9392-.6708-1.2746.6708H79.3391l-3.3541,1.3417.47,2.6833.6708,2.0125-.6038.6708h-.805l-.0671.6708-.1342.6708-2.0125.6708-.3354,1.3417L71.96,145.6765l.1342,1.3417.8721,1.3417.9392.6708,3.7567,1.3417,3.69.6708,1.2746,1.3417h.6708l2.0125-.6708,2.0125-.6708.6708-.6708.6708-.6708,2.0125,1.3417,1.3417,2.0125h.6708l.6708.6708,1.3417.6708.6708-.6708h.6708l1.3417.6708.6708,1.3417h.6708l1.3417.6708v-4.025l-.6708-.6708H98.726v-.6708h-.6708v-1.3417l.6708-2.0125-1.3417-2.0125-.6708-1.3417v-2.0125l-1.3417-1.3417V140.31l-.6708-.6708H92.0177v-2.6833l-.6708-.6708-.6708-.6708h0v-.6708l-1.3417.6708-1.3417.6708-1.3417-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUNGR;

