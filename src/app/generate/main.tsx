"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import DisplayImage from '../../components/display-image';
import { Skeleton } from "@/components/ui/skeleton"
import { WelcomePopover } from '@/components/welcome-popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RandomPaletteGenerator from '@/components/random-palettes';

export default function Main() {

  const [file, setFile] = useState<File | null>(null)
  const [showPopover, setShowPopover] = useState(false)
  const [activeTab, setActiveTab] = useState("tab-1")

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
        activeTab={activeTab}
      />
        <Tabs defaultValue="tab-1" onValueChange={(value) => setActiveTab(value)}>
          <div className="flex justify-center mt-[2vh]">
          <TabsList>
            <TabsTrigger value="tab-1">Generate from image</TabsTrigger>
            <TabsTrigger value="tab-2">Random</TabsTrigger>
          </TabsList>
          </div>
          <div className="flex flex-grow justify-center mt-[10vh]">
          <TabsContent value="tab-1">
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
          </TabsContent>
          <TabsContent value="tab-2">
            <div className="col-span">
              <RandomPaletteGenerator />
            </div>
          </TabsContent>
          </div>
        </Tabs>
      <WelcomePopover open={showPopover} onClose={handlePopoverClose} />
    </div>
  )
}

