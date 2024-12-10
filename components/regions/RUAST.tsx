import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUAST: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M77.3937,253.0092h-.8721l-.7379-.6708-.1342.6708h-.1342l-.5367-.6708h-.8721l-1.14.6708.6708,1.3417.4025,2.0125.805.6708.5367.6708-.8721.6708-.6037,1.3417.2012,2.0125.6708,1.3417h1.7441l1.4087,1.3417H76.79l-1.4758.6708-.3354,3.3541-.2683,2.6833-2.415.6708H69.8133l.1342.6708.6708.6708-.2683.6708-.2012.6708.6708.6708.47.6708-2.2808.6708-.6037,2.0125.2683.6708h1.3417l.47.6708.47.6708v.6708h.6708l-.1342.6708h.6037l.4025-.6708,1.9454,1.3417.0671.6708h.0671l.7379-.6708H75.65l-.1342.6708.47-.6708.6708-.6708.4025.6708-.067.6708-.5367.6708-.2683.6708.805-.6708.805-.6708,1.8783-1.3417,1.9454-.6708.3354.6708-1.2075-5.3666H81.15l.805,1.3417h1.3417l.6708-4.6958v-5.3666l-1.3417-1.3417-1.0733-1.3417-.6708.6708-.6708-.6708.6037-2.0125,1.14-1.3417-.2683-2.0125-.6708-2.0125,1.61-1.3417-.6708-1.3417-.4025-1.3417-2.0125-.6708H77.3937Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUAST;

