"use client";

import React, { useState, useEffect } from 'react';
import ColorThief from 'colorthief'
import ColorPalette from './color-palette';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface DisplayImageProps {
  file: File | null
}

const DisplayImage: React.FC<DisplayImageProps> = ({
  file,
}) => {
  const [palettes, setPalettes] = useState<string[][]>([])
  const imageUrl = file ? URL.createObjectURL(file) : undefined;

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          const colorThief = new ColorThief();
          const palette = colorThief.getPalette(img, 5)
          const hexPalette = palette.map((color: number[]) => {
            const [r, g, b] = color;
            return `rgb(${r}, ${g}, ${b})`;
          })
          setPalettes([hexPalette])
          console.log(palette);
        };
      };
      reader.readAsDataURL(file);
    } else {
      setPalettes([]);
    }
  }, [file]);

  return (
      <div className="container min-w-64 p-4 space-y-6">
        {file && (
          /* eslint-disable */
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-md">
            <img 
              src={imageUrl} 
              alt="uploaded image" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <Card>
          <CardHeader>
            <CardTitle>Generated Palette</CardTitle>
          </CardHeader>
          <CardContent className="min-w-56">
            {palettes.length === 0 ? (
              <><h1>Loading...</h1><Skeleton className="h-32 w-full mb-4" /></>
            ) : (
              palettes.map((palette, index) => (
              <div key={index} className="mb-4">
                <ColorPalette colors={palette} />
              </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    );
};

export default DisplayImage;
