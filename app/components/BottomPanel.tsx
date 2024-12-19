'use client'

import React from 'react'
import { User } from 'lucide-react'
import Snowman from './Snowman'

interface BottomPanelProps {
  userName: string
}

export default function BottomPanel({ userName }: BottomPanelProps) {
  return (
    <div className="bg-[#2F2F2F] p-4 sm:p-6 rounded-3xl flex items-center justify-between border-2 border-[#F0F0F0]/30">
      <Snowman className="mr-2 sm:mr-3" />
      <div className="flex items-center flex-grow justify-center">
        <User className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
        <span className="text-xl sm:text-2xl md:text-3xl font-bold">{userName}</span>
      </div>
      <Snowman className="ml-2 sm:ml-3" />
    </div>
  )
}

