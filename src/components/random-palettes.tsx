"use client"

import { useState, useEffect } from "react"
import ColorThief from "colorthief"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ColorPalette from "./color-palette"

function rgbToString(r: number, g: number, b: number): string {
  return `rgb(${r}, ${g}, ${b})`
}

export default function RandomPaletteGenerator() {
  const [palettes, setPalettes] = useState<string[][]>([])

  const generatePalette = async () => {
    const colorThief = new ColorThief()
    const newPalettes: string[][] = []

    for (let i = 0; i < 5; i++) {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (ctx) {
        canvas.width = 100
        canvas.height = 100
        // Reduced saturation to 60% and increased lightness to 60% for muted colors
        ctx.fillStyle = `hsl(${Math.random() * 360}, 60%, 60%)`
        ctx.fillRect(0, 0, 100, 100)

        // Create an image from the canvas
        const img = new Image()
        img.src = canvas.toDataURL()
        await new Promise<void>((resolve) => {
          img.onload = () => resolve()
          img.onerror = () => resolve() // Handle errors if needed
        })

        try {
          // Extract palette using ColorThief
          const palette = colorThief.getPalette(img, 5)
          const rgbPalette = palette.map(
            ([r, g, b]: [number, number, number]) => rgbToString(r, g, b)
          )
          newPalettes.push(rgbPalette)
        } catch (error) {
          console.error("Error extracting palette:", error)
        }
      }
    }

    setPalettes(newPalettes)
  }

  useEffect(() => {
    generatePalette()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <Button onClick={generatePalette} className="mb-4">
        Generate New Palettes
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Generated Palette</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-y-6">
          {palettes.map((palette, index) => (
            <div key={index} className="mb-4 mx-4">
              <ColorPalette colors={palette} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}