"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useCallback } from "react";

interface SearchPanelProps {
  onRegionSelect: (regionCode: string) => void;
  selectedRegion: string | null;
  regionsData: { [key: string]: { name: string } };
}

export const SearchPanel: React.FC<SearchPanelProps> = ({
  onRegionSelect,
  selectedRegion,
  regionsData,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRegions, setFilteredRegions] = useState<
    [string, { name: string }][]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleRegionSelect = useCallback(
    (regionCode: string) => {
      onRegionSelect(regionCode);
      setSearchTerm("");
    },
    [onRegionSelect]
  );

  const handleRegionClick = (regionId: string) => {
    onRegionSelect(regionId); // Уведомляем родительский компонент
  };

  useEffect(() => {
    if (regionsData) {
      const filtered = Object.entries(regionsData).filter(([code, region]) =>
        region.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRegions(filtered);
    } else {
      setFilteredRegions([]);
    }
  }, [searchTerm, regionsData]);

  return (
    <div className="w-full max-w-md mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg shadow-lg">
      {searchTerm && (
        <ScrollArea className="h-[200px] mb-4">
          <ul className="space-y-2 p-4">
            {filteredRegions.length === 0 ? (
              <li className="p-2 text-muted-foreground">Регион не найден</li>
            ) : (
              filteredRegions.map(([code, region]) => (
                <li
                  key={code}
                  className={`cursor-pointer hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-colors ${
                    selectedRegion === code
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                  onClick={() => handleRegionSelect(code)}
                >
                  {region.name}
                </li>
              ))
            )}
          </ul>
        </ScrollArea>
      )}
      <div className="p-4">
        <Input
          type="text"
          placeholder="Поиск региона..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
