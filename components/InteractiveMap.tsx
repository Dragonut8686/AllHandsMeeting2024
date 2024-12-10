"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./InteractiveMap.module.css";
import { SearchPanel } from "./SearchPanel";
import { regionsData } from "./ClientInteractiveMap";

const ClientInteractiveMap = dynamic(() => import("./ClientInteractiveMap"), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading...</div>,
});

export const InteractiveMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionSelect = (regionCode: string) => {
    setSelectedRegion(regionCode);
  };

  return (
    <div className="relative flex flex-col items-center w-full h-full">
      <div className="w-full h-full">
        <ClientInteractiveMap
          initialTheme={false}
          selectedRegion={selectedRegion}
          onRegionSelect={handleRegionSelect}
        />
      </div>
      <div className="absolute bottom-[5%] w-full max-w-md">
        <SearchPanel
          selectedRegion={selectedRegion}
          onRegionSelect={handleRegionSelect}
          regionsData={regionsData}
        />
      </div>
    </div>
  );
};

export default InteractiveMap;
