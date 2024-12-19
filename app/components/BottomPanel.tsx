'use client'

import React from 'react'
import { User } from 'lucide-react'
import Snowman from './Snowman'

interface BottomPanelProps {
  userName: string
}

export default function BottomPanel({ userName }: BottomPanelProps) {
  return (
    <div className="bg-[#2F2F2F] p-4 sm:p-6 2xl:p-12 3xl:p-16 4xl:p-20 rounded-3xl flex items-center justify-between border-2 border-[#F0F0F0]/30">
      <Snowman className="mr-2 sm:mr-3 2xl:mr-8 3xl:mr-10 4xl:mr-12 w-8 h-8 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 4xl:w-32 4xl:h-32" />
      <div className="flex items-center flex-grow justify-center">
        <User className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 4xl:w-32 4xl:h-32 mr-2 sm:mr-3 2xl:mr-8 3xl:mr-10 4xl:mr-12" />
        <span className="text-xl sm:text-2xl md:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold">{userName}</span>
      </div>
      <Snowman className="ml-2 sm:ml-3 2xl:ml-8 3xl:ml-10 4xl:ml-12 w-8 h-8 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 4xl:w-32 4xl:h-32" />
    </div>
  )
}

