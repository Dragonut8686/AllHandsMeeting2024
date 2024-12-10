import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUKLU: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M77.435,174.4838l-.5869.0246-1.1986-.657-5.1654,1.3417-.6708-.6708-.6037-.6708-.6038.6708h-1.14L66.4591,172.51l-1.4087-.6708-.6037.6708-.47.6708H62.9037l-1.14.6708.4025,2.6833.6708,3.3541L61.7633,181.23l-.6708.6708,1.5429,2.6833,2.6833.6708,2.6833.6708.47-.6708.3354-.6708,1.14-.6708h1.3417l.2683-.6708h.2012l1.5429.6708,1.61.6708.3354.6708h.5367l.7379-.6708.2013-.6708H78.467l.9392-.6708.8339-.0254.5313-1.3388.68-.68-.7034-3.3224-2.0378-.6938Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUKLU;

