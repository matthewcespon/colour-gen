import React from 'react';
import { ArrowRight, Palette } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Sample color palettes (replace with your actual generated palettes)
const samplePalette = ['#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#2A3D45'];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#355C7D] to-[#2A3D45]">
      <header className="p-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-white" />
            <span className="text-2xl text-white">ColorPal</span>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Generate Beautiful Color Palettes
          </h1>
          <p className="text-xl text-white mb-8">
            Inspire your next project with harmonious color combinations
          </p>
            <Link href="/generate">
              <Button variant="outline" >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
        </section>

        <section className="border-2 border-gray-400 p-6 rounded-lg shadow-lg backdrop-blur-md bg-white bg-opacity-20 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">
            Sample Color Palette
          </h3>
          <div className="grid grid-cols-5 gap-4">
            {samplePalette.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-md"
                  style={{ backgroundColor: color }}
                />
                <span className="mt-2 text-sm font-mono text-white">{color}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-purple-900">
        <p>&copy; 2024 ColorPal. All rights reserved.</p>
      </footer>
    </div>
  )
}

