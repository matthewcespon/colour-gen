import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Clipboard, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface ColorPaletteProps {
  colors: string[]
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const { toast } = useToast()

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopiedColor(color)
      toast({
        variant: "default",
        title: "Copied to clipboard!",
      })
    }).catch(err => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem copying the color: ${err.message}`,
      })
    })
  }

  const rgbToHex = (rgb: string) => {
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number)
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  }

  return (
    <div className="flex gap-4">
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="w-32 h-32 rounded-md shadow-md mb-2 relative group"
            style={{ backgroundColor: color }}
          >
            <Button 
              variant="secondary" 
              size="sm"
              className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(rgbToHex(color))}
            >
              {copiedColor === rgbToHex(color) ? (
                <Check className="h-4 w-4" />
              ) : (
                <Clipboard className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="text-sm font-mono mt-1">{rgbToHex(color)}</div>
        </div>
      ))}
    </div>
  )
}

export default ColorPalette

