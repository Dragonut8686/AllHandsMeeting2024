"use client";

import React from "react";
import { User } from "lucide-react";

interface BottomPanelProps {
  userName: string;
}

export default function BottomPanel({ userName }: BottomPanelProps) {
  return (
    <div className="bg-[#2F2F2F] p-6 rounded-3xl flex items-center justify-center border-2 border-[#F0F0F0]/30">
      <div className="flex items-center">
        <User className="w-8 h-8 mr-3" />
        <span className="text-3xl font-bold">{userName}</span>
      </div>
    </div>
  );
}
