import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUBRY: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M57.0675,174.5222l-.6708.6708h-2.75l-1.2746-.6708H50.963l-1.14-2.0125-2.0125-.6708-.6037.6708-.2012,1.3417-.4025.6708h-.47l-1.0062,1.3417-1.0733,1.3417-.6037,1.3417h-.47l.5367.6708-.1342.6708h.4025l1.6771.6708,1.2746-.6708.6037.6708.4025,1.3417,1.2746.6708,1.0733.6708,1.61,2.0125.2012,2.0125L51.03,188.61l-.1342,2.0125L52.17,189.28l1.2075,1.3417.47-.6708h2.6833l.7379-1.3417,1.61-.6708.2012-1.3417.2683-.6708h1.0733l1.4758-.6708h.47l.2683-.6708-1.5429-2.6833.6708-.6708,1.0733-1.3417-.6708-3.3541-.4025-2.6833-2.3479.6708H57.0675Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUBRY;

