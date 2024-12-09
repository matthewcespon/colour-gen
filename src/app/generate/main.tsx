"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import DisplayImage from '../../components/display-image';
import { Skeleton } from "@/components/ui/skeleton"
import { WelcomePopover } from '@/components/ui/welcome-popover';

export default function Main() {

  const [file, setFile] = useState<File | null>(null)
  const [showPopover, setShowPopover] = useState(false)

  useEffect(() => {
    const hasSeenPopover = localStorage.getItem('hasSeenPopover')
    if (!hasSeenPopover) {
      setShowPopover(true)
    }
  }, [])

  const handlePopoverClose = () => {
    setShowPopover(false)
    localStorage.setItem('hasSeenPopover', 'true')
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar 
        setFile={setFile}
      />
      <main className="flex flex-grow justify-center mt-[10vh]">
        {file ? (
          <DisplayImage
            file={file}
          />
        ) : (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[40vh] w-[40vw] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-[2vh] w-[20vw]" />
            <Skeleton className="h-[2vh] w-[15vw]" />
          </div>
        </div>
          )}
      </main>
      <WelcomePopover open={showPopover} onClose={handlePopoverClose} />
    </div>
  )
}

