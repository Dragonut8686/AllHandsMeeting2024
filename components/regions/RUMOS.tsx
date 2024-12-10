import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUMOS: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M84.0013,166.4513l-.68.6587h-.6588l-1.4025.68-1.9209.6947-1.0966,2.6628-2.593,2.7038,1.1986.657.5869-.0246,1.275,2.6988,2.0378.6938.7034,3.3224-.68.68-.5313,1.3388,1.4238,2.0188h.9988l-.0265.68-.01,1.3513v.6708l.6951.6337h-.6588L81.62,189.9512l.067,1.3417h.9391l1.3417-.6708.6708-.6708.6849.6708H85.98l1.3785-.7108,3.9882.04V189.28l1.3416.6708H94.03l1.3823-4.0563-1.3388-1.3388-.68-.68-.68-1.3388-.6588-.6587,1.3388-4.0375,1.9782-3.3191V172.51l-.6708-1.3417H94.03l-2.6833-1.3417-1.3107,1.3211-.7018-.65L85.34,169.1288l-.6588-1.3388Zm4.08,8.9462.4888.9138a.779.779,0,0,0,.8075.2763l-.2125.6587.5313,1.6788L89.42,180.03l-1.7.1488-1.105-.7438-1.105.595-.5313-.8713-.425.9563-1.5725.085-.7225-.9137-.9775.7225-.3188-1.5937,1.1475-.3612.3613-1.4238,1.2113,1.3388.8925-.85,1.87.8287.255-1.36.8075-.425Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUMOS;

