import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUVOR: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M69.7462,206.722v-.6708l-1.61-.6708-1.8783-.6708h0l.1342.6708-.4025.6708v.6708H64.9833l-.8721-.6708-.7379,1.3417-.9392,1.3417L62.3,210.0761l-1.0733.6708.8721.6708h.9392l-.6708,1.3417h-.9392v2.0125l.1342,1.3417-.6708.6708H60.22l-1.0062,2.0125-.6708,1.3417-.6037.6708-.47.6708.7379,4.025,1.2075.6708.5367.6708,1.5429,1.3417,2.75.6708,2.8846-.6708.47-.6708h.5367l1.4758-.6708,1.4088-1.3417-.2013-1.3417.0671-1.3417h1.6771l1.61.6708,1.0063-.6708h.8721l.6038,1.3417.7379.6708,1.7442.6708,1.4758.6708.9392-2.6833-.1342-2.0125-.8721-.6708.1342-.6708H79.6745l-.6708-1.3417-.7379-1.3417-1.4087-.6708-1.2075-.6708.2013-.6708.3354-1.3417-.6708-.6708-.5367-.6708-1.8112-2.0125L71.49,209.4053l.2012-.6708-.6037-1.3417h-.805l-.6037-.6708h.067Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUVOR;

