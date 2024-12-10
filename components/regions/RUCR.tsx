import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUCR: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M3.2211,228.5559,4.9835,226l-1.367-3.4143-1.3286-.745-.1492-.894,3.0739.1544L8.43,221.75l2.1617,1.8118L10.204,220.93l1.7109,1.9765.2154.9041,2.0078,1.818.966,2.4822-.7809,2.0209-.3541,3.8155,1.26.3436.9293-.1327.2784,1.1469,1.2335.2693,1.6382,2.1686-1.9882.0265-.7228,1.2071L13.7955,236.65l-.6446-1.5971-1.5388-.1442-3.1693-1.234L6.2968,233l-2.7975.0827Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUCR;

