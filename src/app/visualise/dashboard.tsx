"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { generateRandomPalette } from "@/utils/color-utils"


interface DashboardProps {
  file?: File | null
}
export const Dashboard: React.FC<DashboardProps> = ({
  file
}) => {
  const [palette, setPalette] = useState<string[]>(generateRandomPalette())

  const handleGeneratePalette = () => {
    setPalette(generateRandomPalette())
  }

  const handleColorChange = (index: number, color: string) => {
    const newPalette = [...palette]
    newPalette[index] = color
    setPalette(newPalette)
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Color Palette Tester</CardTitle>
          <CardDescription>Generate and test color palettes for your design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {palette.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-md shadow-md mb-2"
                  style={{ backgroundColor: color }}
                />
                <Input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                  className="w-20 h-8"
                />
              </div>
            ))}
          </div>
          <Button onClick={handleGeneratePalette} className="w-full">
            Generate New Palette
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sample UI Elements</CardTitle>
          <CardDescription>See how your palette looks on various UI components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card style={{ backgroundColor: palette[0], color: palette[4] }}>
              <CardHeader>
                <CardTitle>Primary Card</CardTitle>
                <CardDescription style={{ color: palette[3] }}>This card uses the first and last colors</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Content using the fourth color for text</p>
              </CardContent>
              <CardFooter>
                <Button style={{ backgroundColor: palette[2], color: palette[4] }}>
                  Action Button
                </Button>
              </CardFooter>
            </Card>

            <Card style={{ backgroundColor: palette[1], color: palette[3] }}>
              <CardHeader>
                <CardTitle>Secondary Card</CardTitle>
                <CardDescription style={{ color: palette[4] }}>This card uses the second and fourth colors</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Content using the fifth color for text</p>
              </CardContent>
              <CardFooter>
                <Button style={{ backgroundColor: palette[0], color: palette[1] }}>
                  Action Button
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sample-input">Sample Input</Label>
            <Input id="sample-input" placeholder="Type something..." style={{ borderColor: palette[2] }} />
          </div>

          <div className="flex space-x-2">
            {palette.map((color, index) => (
              <Button key={index} style={{ backgroundColor: color, color: palette[(index + 2) % 5] }}>
                Button {index + 1}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

