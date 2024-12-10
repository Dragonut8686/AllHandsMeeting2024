import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUSMO: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M76.9912,164.46l-2.5492-.6708-3.5554-.6708L68.27,159.7639,65.4529,156.41l-.9392-1.3417H63.105l-.8721.6708-1.4758,1.3417-2.0125,2.0125H57.47l-.0671,1.3417.1342.6708h.2012l.0671.6708h-.6037l-.6708.6708-.6037,1.3417-.2683,2.0125.2683,1.3417-.0671.6708-.6708.6708-.805.6708.4025.6708.7379.6708.2012,2.0125-.6708.6708.1342,1.3417-.2683.6708h1.4758l.6708-.6708h2.3479l2.3479-.6708,1.14-.6708h1.0733l.47-.6708.6037-.6708,1.4087.6708,1.0062,2.0125h1.14l.6038-.6708.6037.6708.6708.6708,5.1654-1.3417,2.593-2.7038,1.0966-2.6628-.8721-.6708-1.0062-1.3417-.2683-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUSMO;

