import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RURYA: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M92.6886,189.9513l-1.3417-.6708v.6708l-3.9882-.04-1.3785.7108h-.6567l-.6849-.6708-.6708.6708-1.3417.6708H81.687L78.4,196.66l.47,1.3417v1.3417h1.4758l1.5429.6708-.2013,1.3417.2683,1.3417,1.3417.6708h2.0125l.6708,1.3417.6708.6708h1.3417l.6708-.6708,3.3541,2.0125h1.3417l.5378-.2688.8039-.402h0V205.38l.6708.6708h1.3417l-.6708-1.3417-1.3229-.37,1.3229-.3h1.3417l.6708-.6708,1.3417-.6708v-2.0125l.6708-.6709V198.672l-1.3417-.6708h-.6708l.6708-.6708v-1.3417l-2.6833-3.3541L94.03,189.9513H92.6886Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RURYA;

