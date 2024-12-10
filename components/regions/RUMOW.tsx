import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUMOW: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M88.5682,176.3l-.4848-.906-.571.7745-.8181.4191-.2483,1.3487-1.8745-.8183-.8806.8539-1.2232-1.3391-.3518,1.4206-1.1567.3492.3288,1.605.9643-.7234.7334.9125,1.5709-.0788.4292-.967.5279.8764,1.109-.59,1.0887.7351,1.7138-.1454.2642-1.1129-.52-1.6725.2108-.6569c-.51.0668-.57-.0925-.8116-.2851Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUMOW;

