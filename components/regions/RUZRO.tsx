import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUZRO: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M21.7429 214.628L22.0461 214.796L26.6847 217.557L27.6319 219.885L29.5248 219.962L31.0403 222.589L32.4419 221.932L33.5584 221.407L34.7519 221.34V222.306L34.4118 223.115L34.5093 224.87L35.2503 226.264V226.878L33.6416 227.014L32.9397 227.2L31.8673 227.258L31.3622 227.455L31.0971 228.721V229.871V231.021L28.3147 231.267L27.7464 228.601L25.3983 228.939L24.2811 227.379L21.7443 227.154L18.696 227.192L19.188 226.328L20.0214 225.07L19.6425 223.925L19.0555 222.986L19.0742 222.31L20.3995 221.313L21.4792 220.825L21.5549 218.928L22.3119 217.84L22.4257 216.543L21.3085 216.656L21.7429 214.628Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUZRO;

