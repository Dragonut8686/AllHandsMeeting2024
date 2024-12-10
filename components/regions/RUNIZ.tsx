import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUNIZ: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M126.23,187.2679l-1.3417,1.3417h-2.6833l-2.6833-1.3417v.6708h-.6708l-1.3417.6708-.6708,1.3417-1.3417.6708-1.3417-.6708-1.3417-.6708-1.3417,1.3417-.6708.6708-.6708-.6708h-.6708v1.3417l-.6708.6708v.6708h-3.3541l-2.0125.6708-2.0125,1.3417-2.6833.6708V197.33l-.6708.6708h.6708l1.3417.6708v1.3417l-.6708.6708,1.3417,1.3417.6708.6708h1.3417l1.3417.6708,1.3417,4.6958,1.3417,2.6833,1.3417-.6708,1.3417-.6708v.6708h.6708l1.3417-.6708,2.0125-.6708.6708.6708-.6708.6708.6708.6708h1.3417v-.6708l1.3417-.6708h2.0125l-.6708-1.3417v-2.0125h0l1.3417-.6708.6708-.6708.6708-1.3417-.6708-.6708.6708-1.3417h.6708l-.6708-1.3417.6708-1.3417h.6708l.6708.6708.6708-.6708.6708-.6708,2.0125.6708,2.0125,1.3417.6708-.6708.6708-.6708.6708-1.3417.6708-.6708,2.6833,1.3417,1.3417-.6708,1.3417-.6708h0l.6708-.6708-2.0125-2.6833-2.0125-2.6833-2.6833-.6708h-1.3417V188.61l-2.0125-2.0125Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUNIZ;

