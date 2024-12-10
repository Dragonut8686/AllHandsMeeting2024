import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKRS: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M58.5433,191.9637v-.6708l-1.14-.6708-.8721-.6708H53.8475l-.47.6708L52.17,189.28l-1.2746,1.3417-.6708.6708-1.2075-.6708-.2012.6708-.1342.6708-1.6771,1.3417,1.14,2.0125,1.5429,2.0125-.2012.6708-.3354.6708h.3354l.2012.6708H49.353l-.3354.6708,1.2746,1.3417h2.415l.6037,1.3417.7379.6708,3.1529,1.3417,4.025,2.0125.6037.6708.6037,1.3417.9392-1.3417.7379-1.3417.8721.6708H65.99v-.6708l.4025-.6708-.1342-.6708h0l-1.2746-1.3417-.4025-1.3417h-.47l-.2012-.6708H62.9037v-1.3417l.2012-.6708-.6708-.6708-.6708-.6708-.1342-2.0125-.0671-1.3417-1.2746-.6708-1.7442-.6708v-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKRS;

