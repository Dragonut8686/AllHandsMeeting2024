import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUTUL: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M77.7962,183.9138H76.7228l-.2013.6708-.7379.6708H75.247l-.3354-.6708-1.61-.6708-1.5429-.6708h-.2012l-.2683.6708H69.9474l-1.14.6708-.3354.6708-.47.6708.47,3.3541,1.4758,2.6833.7379.6708.6708.6708-.1342,1.3417.0671,2.0125,1.14,1.3417.8721.6708h1.2746l.2683-.6708.5367-.6708h1.0733l.8721-.6708H78.4l3.2871-5.3666-.067-1.3417,1.0426-1.3787h.6588l-.6951-.6337v-.6708l.01-1.3513.0265-.68h-.9988L80.24,183.2175l-.8338.0254-.9392.6708h-.6709Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUTUL;

