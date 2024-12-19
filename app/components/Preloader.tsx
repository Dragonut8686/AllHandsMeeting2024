import React from "react";

export default function Preloader() {
  return (
    <div className="h-screen w-screen bg-[#0F0F0F] text-[#F0F0F0] flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-4">Гружусь...</div>
      <div className="w-16 h-16 border-t-4 border-[#F0F0F0] rounded-full animate-spin"></div>
    </div>
  );
}
