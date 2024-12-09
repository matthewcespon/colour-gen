"use client";
import React from 'react';
import Navbar from '@/components/navbar';
import DisplayImage from './display-image';

export default function Main() {

  const [file, setFile] = React.useState<File | null>(null)
  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        setFile={setFile}
      />
      <main className="container mx-auto mt-8 px-4 ">
        <h1 className="text-3xl font-bold">PaletteGen</h1>
        <DisplayImage
          file={file}
        />
      </main>
    </div>
  )
}

