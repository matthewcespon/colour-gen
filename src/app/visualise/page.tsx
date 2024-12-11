"use client"
import Navbar from "@/components/navbar"
import { Dashboard } from "./dashboard"
import { useState } from "react"

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  return (
    <main className="min-h-screen bg-background">
      <Navbar
        setFile={setFile}
        activeTab="tab-1"
      />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">Color Palette Dashboard</h1>
        <Dashboard 
          file={file}
        />
      </div>
    </main>
  )
}

