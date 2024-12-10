import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUDA: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M63.3733,283.8674l-1.4087-2.0125-2.0125-3.3541-1.0733-.6708-.47-.6708-1.2075.6708-1.8783,1.3417-.9392-.6708-1.0062.6708H53.78l-.1342,1.3417H51.3655l1.0062.6708-.3354,2.0125h.3354l.1342.6708.0671.6708.9392.6708h.8721l-.2012.6708-.0671.6708h2.2808l.3354,1.3417-.2012,1.3417-1.4758.6708-1.6771.6708-1.14,2.0125-.6708,1.3417h-2.415l-.2683.6708-.7379-.6708H46.67l-1.4087.6708-.805.6708L43.45,296.6132l1.3417,3.3541,1.7442,2.6833.47,4.6958,1.4758,4.025h1.61l1.7442-.6708h2.2808l1.9454-1.3417v-6.0375l.6708-6.0375,3.8237-3.3542,1.6771-.6708-.2683-.6708h-.9392l.2683-2.0125.2683-2.0125-1.0062-3.3541,2.8175-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUDA;

