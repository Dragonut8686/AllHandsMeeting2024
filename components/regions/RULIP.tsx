import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RULIP: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M78.4,196.66H77.3266l-.8721.6708H75.3812l-.5367.6708-.2683.6708H73.3016l-.8721-.6708-1.14-1.3417-2.8175,1.3417-.4025,1.3417-.3354.6708.0671.6708L67.6,202.0262l-.805-.6708-2.2137.6708.4025,1.3417,1.2746,1.3417,1.8783.6708,1.61.6708v.6708h-.0671l.6037.6708h.805l.6037,1.3417-.2012.6708,1.6771,1.3417,1.8112,2.0125,1.2746-.6708,1.0733-.6708-.6708-4.025,2.3479-2.6833,2.9516-2.0125-.2683-1.3417.2013-1.3417-1.5429-.6708H78.8694v-1.3417L78.4,196.66Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RULIP;

