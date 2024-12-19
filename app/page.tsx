'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import dynamic from 'next/dynamic'
import TopPanel from './components/TopPanel'
import BottomPanel from './components/BottomPanel'
import AnimatedText from './components/AnimatedText'
import { fetchSheetData } from './utils/fetchSheetData'
import Preloader from './components/Preloader'
import ModernGarland from './components/ModernGarland'

const Snowflake = dynamic(() => import('./components/Snowflake'), { ssr: false })

export default function Home() {
  const [users, setUsers] = useState([])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([])
  const [mounted, setMounted] = useState(false)
  const lastUpdateTimestamp = useRef(0)

  const fetchData = useCallback(async () => {
    const { data: newData, timestamp } = await fetchSheetData()
    if (newData.length > 0 && timestamp > lastUpdateTimestamp.current) {
      setUsers(prevUsers => {
        const newUsers = newData.filter(newUser => 
          !prevUsers.some(prevUser => 
            prevUser.name === newUser.name && 
            prevUser.leftPanelText === newUser.leftPanelText && 
            prevUser.rightPanelText === newUser.rightPanelText
          )
        )

        if (newUsers.length > 0) {
          const updatedUsers = [
            ...prevUsers.slice(0, currentUserIndex),
            ...newUsers,
            ...prevUsers.slice(currentUserIndex)
          ]
          setCurrentUserIndex(currentUserIndex)
          return updatedUsers
        }

        return newData
      })
      lastUpdateTimestamp.current = timestamp
    }
  }, [currentUserIndex])

  useEffect(() => {
    setMounted(true)
    fetchData()
    const fetchIntervalId = setInterval(fetchData, 6000)
    return () => clearInterval(fetchIntervalId)
  }, [fetchData])

  useEffect(() => {
    if (mounted) {
      const newSnowflakes = Array.from({ length: 50 }, (_, i) => (
        <Snowflake key={i} />
      ))
      setSnowflakes(newSnowflakes)
    }
  }, [mounted])

  useEffect(() => {
    if (mounted && users.length > 0) {
      const displayTimer = setInterval(() => {
        setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length)
      }, 10000)

      return () => clearInterval(displayTimer)
    }
  }, [mounted, users.length])

  if (!mounted || users.length === 0) {
    return <Preloader />
  }

  const currentUser = users[currentUserIndex] || { name: '', leftPanelText: '', rightPanelText: '' }

  return (
    <div className="h-screen w-screen bg-[#0F0F0F] text-[#F0F0F0] flex flex-col overflow-hidden">
      {snowflakes}
      <div className="flex flex-col h-full">
        <ModernGarland position="top" />
        <div className="p-4 w-full flex-shrink-0">
          <BottomPanel userName={currentUser.name} />
        </div>
        <main className="flex flex-col sm:flex-row flex-grow p-4 space-y-4 sm:space-y-0 sm:space-x-4 overflow-hidden">
          <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative">
            <div className="bg-[#1F1F1F] rounded-3xl p-6 h-full flex flex-col">
              <div className="border-b border-[#F0F0F0]/20 pb-4 mb-4 flex-shrink-0">
                <h2 className="text-xl font-semibold text-[#F0F0F0]/70">Чем горжусь в этом году</h2>
              </div>
              <div className="flex-grow overflow-hidden">
                <AnimatedText key={`left-${currentUserIndex}`} text={currentUser.leftPanelText} className="text-2xl font-bold" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative">
            <div className="bg-[#1F1F1F] rounded-3xl p-6 h-full flex flex-col">
              <div className="border-b border-[#F0F0F0]/20 pb-4 mb-4 flex-shrink-0">
                <h2 className="text-xl font-semibold text-[#F0F0F0]/70">Моя благодарность</h2>
              </div>
              <div className="flex-grow overflow-hidden">
                <AnimatedText key={`right-${currentUserIndex}`} text={currentUser.rightPanelText} className="text-2xl font-bold" />
              </div>
            </div>
          </div>
        </main>
        <div className="p-4 w-full flex-shrink-0">
          <TopPanel />
        </div>
      </div>
    </div>
  )
}

