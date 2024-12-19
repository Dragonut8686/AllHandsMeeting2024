"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  isHeader?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  isHeader = false,
}: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState(64);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateFontSize = () => {
      let baseFontSize = 64;

      if (window.innerWidth >= 3840) { // 4K
        if (isHeader) {
          baseFontSize = 120; // Фиксированный большой размер для заголовков
        } else {
          baseFontSize = text.length <= 200 ? 64 :
                        text.length > 400 ? 52 :
                        text.length > 300 ? 64 : 64;
        }
      } else if (window.innerWidth >= 2560) { // 1440p
        if (isHeader) {
          baseFontSize = 96; // Фиксированный большой размер для заголовков
        } else {
          baseFontSize = text.length <= 200 ? 56 :
                        text.length > 400 ? 28 :
                        text.length > 300 ? 32 : 40;
        }
      } else if (window.innerWidth >= 1920) { // 1080p
        if (isHeader) {
          baseFontSize = 72; // Фиксированный большой размер для заголовков
        } else {
          baseFontSize = text.length <= 200 ? 48 :
                        text.length > 400 ? 36 :
                        text.length > 300 ? 48 : 48;
        }
      } else if (window.innerWidth <= 640) { // Mobile
        baseFontSize = text.length <= 200 ? 22 :
                      text.length > 400 ? 12 :
                      text.length > 300 ? 16 : 16;
      } else { // Default desktop
        baseFontSize =
          text.length <= 200 ? 32 :
          text.length > 550 ? 14 :
          text.length > 450 ? 16 :
          text.length > 350 ? 20 : 22;
      }

      setFontSize((prevFontSize) =>
        Math.abs(prevFontSize - baseFontSize) > 0.1
          ? baseFontSize
          : prevFontSize
      );
    };

    calculateFontSize();
    window.addEventListener("resize", calculateFontSize);

    return () => {
      window.removeEventListener("resize", calculateFontSize);
    };
  }, [text, isHeader]);

  if (!mounted) {
    return null;
  }

  const lineHeight = fontSize <= 20 ? 1.4 : 1.2;

  return (
    <div className="w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          ref={textRef}
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`${className} whitespace-pre-wrap text-left`}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: lineHeight,
            width: "100%",
            height: "100%",
          }}
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
