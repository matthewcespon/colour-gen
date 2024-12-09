"use client";
import React from 'react';
import Navbar from '@/components/navbar';
import DisplayImage from './display-image';
import { Skeleton } from "@/components/ui/skeleton"

export default function Main() {

  const [file, setFile] = React.useState<File | null>(null)
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
    </div>
  )
}

