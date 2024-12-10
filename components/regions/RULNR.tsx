import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RULNR: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M53.3298 215.016V216.12L54.1896 216.762L55.0586 216.12L55.8759 218.775L57.4768 221.453L58.2287 225.511L59.4222 226.155L59.9473 226.859L57.7871 228.876L56.8203 228.649L54.9943 228.24L54.505 228.876L54.6124 230.153H55.0779L55.4359 230.869H53.7053H52.6312L52.4164 231.562L52.5715 232.23L52.0703 233.555L51.5571 234.247L50.3874 235.584L48.5853 236.228L46.4609 234.903L44.8497 233.328L45.2995 232.375L45.6804 231.367L45.2995 230.049L44.9692 229.299V228.576L45.5285 227.156L45.8844 226.355L45.9094 225.165L47.1799 223.692L47.9425 222.322L47.9682 221.418L47.9931 220.875L48.8577 219.996L49.4926 218.677L50.3572 217.877L50.9921 217.077L51.4244 216.455L52.1363 215.474L53.3298 215.016Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RULNR;

