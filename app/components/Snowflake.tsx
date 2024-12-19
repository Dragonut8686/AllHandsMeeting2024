"use client";

import React, { useEffect, useState } from "react";

export default function Snowflake() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(Math.random() * 0.3);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const size = Math.random() * 5 + 2;

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const x = Math.random() * dimensions.width;
    const y = Math.random() * dimensions.height;
    setPosition({ x, y });

    const interval = setInterval(() => {
      setPosition((prev) => ({
        x:
          (prev.x + (Math.random() - 0.5) * 2 + dimensions.width) %
          dimensions.width,
        y: (prev.y + 1 + dimensions.height) % dimensions.height,
      }));
      setOpacity(Math.random() * 0.3);
    }, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div
      className="fixed rounded-full bg-white pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        transition: "all 0.05s linear",
      }}
    />
  );
}
