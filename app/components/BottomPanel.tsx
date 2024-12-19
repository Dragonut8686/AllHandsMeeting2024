'use client'

import React from 'react'
import { User } from 'lucide-react'
import Snowman from './Snowman'

interface BottomPanelProps {
  userName: string
}

export default function BottomPanel({ userName }: BottomPanelProps) {
  return (
    <div className="bg-[#2F2F2F] p-4 sm:p-6 2xl:p-8 3xl:p-10 4xl:p-12 rounded-3xl flex items-center justify-between border-2 border-[#F0F0F0]/30">
      <Snowman className="mr-2 sm:mr-3 2xl:mr-4 3xl:mr-6 4xl:mr-8 w-8 h-8 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20" />
      <div className="flex items-center flex-grow justify-center">
        <User className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 mr-2 sm:mr-3 2xl:mr-4 3xl:mr-6 4xl:mr-8" />
        <span className="text-xl sm:text-2xl md:text-3xl 2xl:text-display-sm 3xl:text-display-base 4xl:text-display-lg font-bold">{userName}</span>
      </div>
      <Snowman className="ml-2 sm:ml-3 2xl:ml-4 3xl:ml-6 4xl:ml-8 w-8 h-8 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20" />
    </div>
  )
}

