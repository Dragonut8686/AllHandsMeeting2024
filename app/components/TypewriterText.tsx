"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export default function TypewriterText({
  text,
  className = "",
}: TypewriterTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <p
      className={`${className} transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {text}
    </p>
  );
}
