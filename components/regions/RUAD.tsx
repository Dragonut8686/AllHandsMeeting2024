import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUAD: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M32.8506,253.68l-.3354-2.0125-1.8112.6708-2.2808-.6708L27.35,250.3259l-.6708-.6708-.5367.6708.2012.6708.3354.6708,1.2075,1.3417,1.0733,1.3417h.4025l.6037-1.3417h.7379l.47,2.0125-.2012,2.0125H29.4293l-1.5429,1.3416.1342,1.3417.2012.6708-.6708.6708h-.8721l.1342-.6708-.2683-.6708h-.5367l-.6708.6708-.2683.6708.805,2.0125,1.3417,1.3417,1.3417-.6708.8721-2.0125h.6037l.5367-.6708.8721-1.3417,1.4758-.6708-.2012,1.3417-.2683,1.3417h1.0733l.3354-.6708.3354-.6708.4025-.6708.805-.6708-.6708-3.3541Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUAD;

