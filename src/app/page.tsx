import Link from 'next/link'
import { Button } from '@/components/ui/button'

const paletteColors = [
  { bg: 'bg-[#F0E6E6]', rgb: 'rgb(240, 230, 230)' },
  { bg: 'bg-[#E6F0E6]', rgb: 'rgb(230, 240, 230)' },
  { bg: 'bg-[#E6E6F0]', rgb: 'rgb(230, 230, 240)' },
  { bg: 'bg-[#F0E6F0]', rgb: 'rgb(240, 230, 240)' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#E6F0F5] to-[#F0E6E6]">
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2b2c2a] mb-6">
          Color Palette Generator
        </h1>
        <p className="text-xl md:text-2xl text-[#6B6B6B] mb-12 max-w-2xl">
          Create stunning color combinations for your next project with our easy-to-use palette generator.
        </p>
        <Button className="bg-[#B8D8D8] text-[#000000] hover:bg-[#1d9d9d] hover:text-[#ffffff]">
          <Link href="/generate">
            Get Started
          </Link>
        </Button>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {paletteColors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-20 h-20 ${color.bg}`}></div>
              <span className="mt-2 font-medium">Color {index + 1}</span>
              <span className="mt-1 text-[#6B6B6B] text-sm">{color.rgb}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

